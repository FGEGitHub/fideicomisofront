import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import servicioPagos from "../../../services/pagos";
import serviciousuario1 from "../../../services/usuario1";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const PagosInusuales = () => {
  const [pagos, setPagos] = useState([]);
  const [filtroMes, setFiltroMes] = useState("");
  const [filtroAnio, setFiltroAnio] = useState("");
  const [filtroZona, setFiltroZona] = useState("PIT");

  useEffect(() => {
    getPagos();
  }, []);

  const getPagos = async () => {
    const resp = await servicioPagos.todoslospagos({});
    setPagos(resp);
  };

  // =======================
  // OPCIONES DE FILTROS
  // =======================
  const meses = [...new Set(pagos.map(p => p.mes))].filter(Boolean);
  const anios = [...new Set(pagos.map(p => p.anio))].filter(Boolean);

  // =======================
  // FILTRADO (ZONA POR ORIGEN)
  // =======================
  const pagosFiltrados = pagos.filter(p => {
    const zonaOk =
      filtroZona === "" ||
      (filtroZona === "IC3" && p.origen === "ic3") ||
      (filtroZona === "PIT" && p.origen === "normal");

    return (
      (filtroMes === "" || p.mes === filtroMes) &&
      (filtroAnio === "" || p.anio === filtroAnio) &&
      zonaOk
    );
  });

  // =======================
  // EXPORTAR A EXCEL
  // =======================
  const exportarExcel = () => {
    const data = pagosFiltrados.map(p => ({
      Mes: p.mes,
      Año: p.anio,
      Fecha: p.fecha,
      Zona: p.origen === "ic3" ? "IC3" : "PIT",
      "CUIL / CUIT": p.cuil_cuit,
      Nombre: p.nombre,
      Estado: p.estado === "A" ? "Aprobado" : "Pendiente",
      Monto: p.monto
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Pagos");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const blob = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });

    saveAs(blob, "pagos_filtrados.xlsx");
  };

  // =======================
  // COLUMNAS
  // =======================
  const columns = [
    { name: "mes", label: "Mes" },
    { name: "anio", label: "Año" },
        { name: "fraccion", label: "fraccion" },
                { name: "manzana", label: "manzana" },
/*     { name: "fecha", label: "Fecha de pago" }, */

  {
    name: "parcela",
    label: "Parcela",
    options: {
      customBodyRender: (value, tableMeta) => {
        const LOTE_INDEX =  tableMeta.rowData.length - 1; 
        // ⚠️ ajustamos abajo

        const lote = tableMeta.rowData[LOTE_INDEX];

        return value === 0 || value === "0" || value === "Sin determinar"
          ? lote
          : value;
      }
    }
  },

    {
      name: "origen",
      label: "Zona",
      options: {
        customBodyRender: value => (value === "ic3" ? "IC3" : "PIT")
      }
    },
    { name: "cuil_cuit", label: "CUIL / CUIT" },
    { name: "nombre", label: "Nombre" },
    { name: "monto", label: "Monto" }
  ];

  // =======================
  // OPCIONES TABLA
  // =======================
  const options = {
    selectableRows: false,
    responsive: "standard",
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20],
    print: false,
    download: false,
    filter: false,
    viewColumns: true,
    textLabels: {
      body: { noMatch: "No se encontraron registros" },
      pagination: {
        rowsPerPage: "Filas por página:",
        displayRows: "de"
      },
      toolbar: {
        search: "Buscar",
        viewColumns: "Ver columnas"
      }
    }
  };

  // =======================
  // THEME
  // =======================
  const theme = createTheme({
    components: {
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: "#1565c0",
            color: "#fff"
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      {/* BARRA DE FILTROS */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 2,
          p: 2,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          flexWrap: "wrap"
        }}
      >
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Mes</InputLabel>
          <Select value={filtroMes} label="Mes" onChange={e => setFiltroMes(e.target.value)}>
            <MenuItem value="">Todos</MenuItem>
            {meses.map(m => (
              <MenuItem key={m} value={m}>{m}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Año</InputLabel>
          <Select value={filtroAnio} label="Año" onChange={e => setFiltroAnio(e.target.value)}>
            <MenuItem value="">Todos</MenuItem>
            {anios.map(a => (
              <MenuItem key={a} value={a}>{a}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Zona</InputLabel>
          <Select value={filtroZona} label="Zona" onChange={e => setFiltroZona(e.target.value)}>
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="IC3">IC3</MenuItem>
            <MenuItem value="PIT">PIT</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          onClick={exportarExcel}
        >
          Excel
        </Button>

        <Button
          variant="outlined"
          startIcon={<PrintIcon />}
          onClick={() => window.print()}
        >
          Imprimir
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setFiltroMes("");
            setFiltroAnio("");
            setFiltroZona("");
          }}
        >
          Limpiar
        </Button>
      </Box>

      {/* TABLA */}
      <MUIDataTable
        title="Lista de pagos"
        data={pagosFiltrados}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
};

export default PagosInusuales;