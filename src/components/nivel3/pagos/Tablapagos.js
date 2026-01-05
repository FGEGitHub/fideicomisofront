import { useState, useEffect, useMemo } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider, alpha } from "@mui/material/styles";
import {
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
  Typography,
  Chip,
  Divider,
  Tooltip
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import servicioPagos from "../../../services/pagos";

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
  const meses = [...new Set(pagos.map((p) => p.mes))].filter(Boolean);
  const anios = [...new Set(pagos.map((p) => p.anio))].filter(Boolean);

  // =======================
  // FILTRADO (ZONA POR ORIGEN)
  // =======================
  const pagosFiltrados = pagos.filter((p) => {
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
  // EXPORTAR A EXCEL (misma lógica que tabla)
  // =======================
  const exportarExcel = () => {
    const data = pagosFiltrados.map((p) => {
      const parcelaValida =
        p.parcela !== 0 &&
        p.parcela !== "0" &&
        p.parcela !== "Sin determinar" &&
        p.parcela !== "" &&
        p.parcela !== null &&
        p.parcela !== undefined;

      return {
        Mes: p.mes,
        Año: p.anio,
        Zona: p.origen === "ic3" ? "IC3" : "PIT",
        Fraccion: p.fraccion ?? "-",
        Manzana: p.manzana ?? "-",
        Lote: p.lote ?? "-",
        Parcela: parcelaValida ? p.parcela : p.lote ?? "-",
        "CUIL / CUIT": p.cuil_cuit,
        Nombre: p.nombre,
        Estado: p.estado === "A" ? "Aprobado" : "Pendiente",
        Monto: p.monto
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Pagos");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });

    saveAs(blob, "pagos_filtrados.xlsx");
  };

  // =======================
  // COLUMNAS (DINÁMICAS SEGÚN FILTRO ZONA)
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
        sort: true,
        customBodyRender: (value) => {
          const isIC3 = value === "ic3";
          return (
            <Chip
              size="small"
              label={isIC3 ? "IC3" : "PIT"}
              sx={{
                fontWeight: 700,
                borderRadius: 999,
                px: 0.5,
                backgroundColor: isIC3
                  ? alpha("#7c3aed", 0.14)
                  : alpha("#0ea5e9", 0.14),
                color: isIC3 ? "#5b21b6" : "#075985",
                border: `1px solid ${
                  isIC3 ? alpha("#7c3aed", 0.25) : alpha("#0ea5e9", 0.25)
                }`
              }}
            />
          );
        }
      }
    });

    base.push({ name: "cuil_cuit", label: "CUIL / CUIT" });
    base.push({ name: "nombre", label: "Nombre" });
    base.push({
      name: "monto",
      label: "Monto",
      options: {
        customBodyRender: (value) => (
          <Typography sx={{ fontWeight: 800 }}>
            {value ?? "-"}
          </Typography>
        )
      }
    });

    return base;
  }, [filtroZona]);

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
      pagination: { rowsPerPage: "Filas por página:", displayRows: "de" },
      toolbar: { search: "Buscar", viewColumns: "Ver columnas" }
    }
  };

  // =======================
  // THEME (MODERNO)
  // =======================
  const theme = createTheme({
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 18
          }
        }
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            background: "linear-gradient(90deg, #0b4f6c 0%, #148D8D 100%)"
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            color: "#fff",
            fontWeight: 800,
            borderBottom: `1px solid ${alpha("#ffffff", 0.18)}`
          },
          body: {
            borderBottom: `1px solid ${alpha("#0b4f6c", 0.08)}`
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            paddingLeft: 16,
            paddingRight: 16
          }
        }
      }
    }
  });

  const total = pagosFiltrados.length;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: { xs: 2, md: 3 } }}>
        {/* HEADER */}
        <Box
          sx={{
            mb: 2,
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 1.5
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                letterSpacing: -0.4,
                color: "#0b4f6c"
              }}
            >
              Reporte de pagos realizados
            </Typography>
            <Typography sx={{ color: alpha("#0b4f6c", 0.75), mt: 0.25 }}>
              Visualizá y exportá los pagos filtrados por mes, año y zona.
            </Typography>
          </Box>

          <Chip
            label={`${total} registro${total === 1 ? "" : "s"}`}
            sx={{
              borderRadius: 999,
              fontWeight: 800,
              backgroundColor: alpha("#148D8D", 0.14),
              color: "#0f766e",
              border: `1px solid ${alpha("#148D8D", 0.25)}`
            }}
          />
        </Box>

        {/* FILTROS CARD */}
        <Paper
          elevation={0}
          sx={{
            mb: 2,
            p: { xs: 2, md: 2.2 },
            border: `1px solid ${alpha("#0b4f6c", 0.14)}`,
            background:
              "linear-gradient(180deg, rgba(11,79,108,0.06) 0%, rgba(20,141,141,0.05) 40%, rgba(255,255,255,0.92) 100%)",
            boxShadow: "0 14px 40px rgba(11,79,108,0.10)"
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
            <FilterAltIcon sx={{ color: "#0b4f6c" }} />
            <Typography sx={{ fontWeight: 900, color: "#0b4f6c" }}>
              Filtros
            </Typography>
          </Box>

          <Divider sx={{ mb: 2, borderColor: alpha("#0b4f6c", 0.12) }} />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
              gap: 2,
              alignItems: "end"
            }}
          >
            <FormControl size="small" fullWidth>
              <InputLabel>Mes</InputLabel>
              <Select
                value={filtroMes}
                label="Mes"
                onChange={(e) => setFiltroMes(e.target.value)}
                sx={{
                  borderRadius: 3,
                  backgroundColor: "#fff"
                }}
              >
                <MenuItem value="">Todos</MenuItem>
                {meses.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small" fullWidth>
              <InputLabel>Año</InputLabel>
              <Select
                value={filtroAnio}
                label="Año"
                onChange={(e) => setFiltroAnio(e.target.value)}
                sx={{
                  borderRadius: 3,
                  backgroundColor: "#fff"
                }}
              >
                <MenuItem value="">Todos</MenuItem>
                {anios.map((a) => (
                  <MenuItem key={a} value={a}>
                    {a}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small" fullWidth>
              <InputLabel>Zona</InputLabel>
              <Select
                value={filtroZona}
                label="Zona"
                onChange={(e) => setFiltroZona(e.target.value)}
                sx={{
                  borderRadius: 3,
                  backgroundColor: "#fff"
                }}
              >
                <MenuItem value="">Todas</MenuItem>
                <MenuItem value="IC3">IC3</MenuItem>
                <MenuItem value="PIT">PIT</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              mt: 2.2,
              display: "flex",
              gap: 1.25,
              flexWrap: "wrap",
              justifyContent: { xs: "stretch", md: "flex-end" }
            }}
          >
            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              onClick={exportarExcel}
              sx={{
                borderRadius: 999,
                px: 2.2,
                fontWeight: 900,
                textTransform: "none",
                background: "linear-gradient(90deg, #0b4f6c 0%, #148D8D 100%)",
                boxShadow: "0 12px 28px rgba(11,79,108,0.22)"
              }}
            >
              Exportar Excel
            </Button>

            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              onClick={() => window.print()}
              sx={{
                borderRadius: 999,
                px: 2.2,
                fontWeight: 900,
                textTransform: "none",
                borderColor: alpha("#0b4f6c", 0.28),
                color: "#0b4f6c",
                backgroundColor: "#fff",
                "&:hover": {
                  borderColor: alpha("#0b4f6c", 0.45),
                  backgroundColor: alpha("#0b4f6c", 0.04)
                }
              }}
            >
              Imprimir
            </Button>

            <Tooltip title="Restablecer filtros">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<RestartAltIcon />}
                onClick={() => {
                  setFiltroMes("");
                  setFiltroAnio("");
                  setFiltroZona("");
                }}
                sx={{
                  borderRadius: 999,
                  px: 2.2,
                  fontWeight: 900,
                  textTransform: "none",
                  backgroundColor: "#fff"
                }}
              >
                Limpiar
              </Button>
            </Tooltip>
          </Box>
        </Paper>

        {/* TABLA */}
        <Paper
          elevation={0}
          sx={{
            boxShadow: "0 12px 34px rgba(20,141,141,0.10)"
          }}
        >
          <MUIDataTable
           
            data={pagosFiltrados}
            columns={columns}
            options={options}
          />
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default PagosInusuales;
