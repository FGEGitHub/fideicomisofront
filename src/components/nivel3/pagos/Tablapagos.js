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
  Stack,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ViewColumnRoundedIcon from "@mui/icons-material/ViewColumnRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

import servicioPagos from "../../../services/pagos";
import serviciousuario1 from "../../../services/usuario1"; // (no lo uso, pero lo dejo como lo tenés)

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

  // helper
  const esVacio = (v) =>
    v === null || v === undefined || v === "" || v === "-" || v === "Sin determinar";

  // =======================
  // COLUMNAS (BASE)
  // - OJO: agrego "lote" como columna real
  // - FIX: el índice de lote es fijo por el ORDEN de columns
  // =======================
  const columnsBase = useMemo(() => {
    // Índices por el orden DE ESTE ARRAY:
    // 0 mes
    // 1 anio
    // 2 fraccion
    // 3 manzana
    // 4 lote
    // 5 parcela
    // 6 origen
    // 7 cuil_cuit
    // 8 nombre
    // 9 monto
    const LOTE_INDEX = 4;
    const ORIGEN_INDEX = 6;

    return [
      { name: "mes", label: "Mes" },
      { name: "anio", label: "Año" },
      { name: "fraccion", label: "fraccion" },
      { name: "manzana", label: "manzana" },

      // ✅ LOTE (PIT => "No corresponde")
      {
        name: "lote",
        label: "Lote",
        options: {
          customBodyRender: (value, tableMeta) => {
            const origen = tableMeta.rowData[ORIGEN_INDEX]; // "normal" o "ic3"

            // PIT => no corresponde
            if (origen === "normal") return "No corresponde";

            // IC3 => lote real
            return esVacio(value) ? "-" : value;
          },
        },
      },

      // ✅ PARCELA (IC3 => "No corresponde")
      // FIX: si parcela viene 0/"0"/Sin determinar, NO usamos monto, usamos LOTE (index correcto)
      {
        name: "parcela",
        label: "Parcela",
        options: {
          customBodyRender: (value, tableMeta) => {
            const origen = tableMeta.rowData[ORIGEN_INDEX];
            const lote = tableMeta.rowData[LOTE_INDEX];

            // IC3 => no corresponde (y NO debe mostrar número ni nada)
            if (origen === "ic3") return "No corresponde";

            // PIT => parcela válida
            const invalida =
              value === 0 ||
              value === "0" ||
              value === "Sin determinar" ||
              value === "" ||
              value === null ||
              value === undefined;

            // Si no hay parcela, caemos al lote (como querías originalmente)
            return invalida ? (esVacio(lote) ? "-" : lote) : value;
          },
        },
      },

      {
        name: "origen",
        label: "Zona",
        options: {
          customBodyRender: (value) => (value === "ic3" ? "IC3" : "PIT"),
        },
      },

      { name: "cuil_cuit", label: "CUIL / CUIT" },
      { name: "nombre", label: "Nombre" },
      { name: "monto", label: "Monto" },
    ];
  }, []); // 👈 no toco tu lógica: queda fijo

  // =======================
  // COLUMNAS VISIBLES SEGÚN FILTRO ZONA
  // PIT => ocultar Lote
  // IC3 => ocultar Parcela
  // Todas => mostrar ambas
  // =======================
  const columns = useMemo(() => {
    if (filtroZona === "PIT") {
      return columnsBase.filter((c) => c.name !== "lote");
    }
    if (filtroZona === "IC3") {
      return columnsBase.filter((c) => c.name !== "parcela");
    }
    return columnsBase;
  }, [columnsBase, filtroZona]);

  // =======================
  // EXPORTAR A EXCEL
  // (mantiene lógica de "no corresponde" + respeta columnas visibles)
  // =======================
  const exportarExcel = () => {
    const visibles = columns.map((c) => c.name);

    const data = pagosFiltrados.map((p) => {
      const esIC3 = p.origen === "ic3";
      const esPIT = p.origen === "normal";

      const row = {
        Mes: p.mes,
        Año: p.anio,
        Zona: esIC3 ? "IC3" : "PIT",
        "CUIL / CUIT": p.cuil_cuit,
        Nombre: p.nombre,
        Estado: p.estado === "A" ? "Aprobado" : "Pendiente",
        Monto: p.monto,
      };

      // agrego solo si están visibles
      if (visibles.includes("fraccion")) row.fraccion = p.fraccion ?? "-";
      if (visibles.includes("manzana")) row.manzana = p.manzana ?? "-";

      if (visibles.includes("lote")) {
        row.Lote = esPIT ? "No corresponde" : p.lote ?? "-";
      }

      if (visibles.includes("parcela")) {
        row.Parcela = esIC3 ? "No corresponde" : p.parcela ?? "-";
      }

      return row;
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Pagos");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "pagos_filtrados.xlsx");
  };

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
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        viewColumns: "Ver columnas",
      },
    },
  };

  // =======================
  // THEME (solo estética, misma funcionalidad)
  // =======================
  const theme = createTheme({
    typography: {
      fontFamily:
        'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    },
    shape: { borderRadius: 14 },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: "none" },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: { fontWeight: 800 },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: alpha("#ffffff", 0.9),
            boxShadow: "0 10px 22px rgba(15,127,134,0.07)",
            transition: "all .18s ease",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: alpha("#148D8D", 0.55),
            },
            "&.Mui-focused": {
              boxShadow: "0 14px 28px rgba(20,141,141,0.14)",
            },
          },
          notchedOutline: {
            borderColor: alpha("#0b4f6c", 0.18),
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: "none",
            fontWeight: 900,
            paddingInline: 14,
            paddingBlock: 10,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            fontWeight: 900,
            color: "#0b4f6c",
            borderBottom: `1px solid ${alpha("#0b4f6c", 0.12)}`,
            backgroundColor: "transparent",
            paddingTop: 14,
            paddingBottom: 14,
          },
          body: {
            borderBottom: `1px solid ${alpha("#0b4f6c", 0.08)}`,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:hover td": {
              backgroundColor: alpha("#148D8D", 0.06),
            },
          },
        },
      },
    },
  });

  const registros = pagosFiltrados?.length || 0;

  return (
   
      <Box 
                    sx={{
                        width: "100%",
                        maxWidth: "100%",
                        flex: 1,
                        minWidth: 0,
                    }}>
        {/* =======================
            HEADER (igual a la vista)
           ======================= */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 2.25 },
            border: `1px solid ${alpha("#0b4f6c", 0.18)}`,
            background:
              "linear-gradient(90deg, #0a3b4f 0%, #0b4f6c 55%, #0f7f86 100%)",
            boxShadow: "0 16px 40px rgba(8,58,82,0.22)",
            color: "#fff",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(700px 220px at 10% 0%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)",
              pointerEvents: "none",
            }}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ position: "relative" }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 3,
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: alpha("#ffffff", 0.14),
                  border: `1px solid ${alpha("#ffffff", 0.22)}`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <AssessmentIcon sx={{ fontSize: 22, color: "#fff" }} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: 18, md: 20 },
                    lineHeight: 1.15,
                  }}
                >
                  Reporte de los pagos registrados
                </Typography>
                <Typography
                  sx={{
                    opacity: 0.9,
                    fontSize: { xs: 12.5, md: 13.5 },
                    mt: 0.4,
                  }}
                >
                  Revisá, filtrá y gestioná pagos inusuales / sospechosos.
                </Typography>
              </Box>
            </Stack>

            <Chip
              label={`Registros: ${registros}`}
              sx={{
                height: 34,
                fontWeight: 900,
                color: "#fff",
                backgroundColor: alpha("#ffffff", 0.14),
                border: `1px solid ${alpha("#ffffff", 0.22)}`,
                backdropFilter: "blur(8px)",
                "& .MuiChip-label": { px: 1.4 },
              }}
            />
          </Stack>
        </Paper>

        {/* =======================
            PANEL DE FILTROS (moderno, como tu captura)
           ======================= */}
        <Paper
          elevation={0}
          sx={{
            mt: 2,
            borderRadius: 4,
            p: { xs: 1.5, md: 2 },
            border: `1px solid ${alpha("#0b4f6c", 0.14)}`,
            background:
              "linear-gradient(180deg, rgba(10,59,79,0.045) 0%, rgba(20,141,141,0.035) 45%, rgba(255,255,255,0.98) 100%)",
            boxShadow: "0 14px 35px rgba(15,127,134,0.10)",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="space-between"
            spacing={1.25}
          >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ flexWrap: "wrap" }}>
              <FormControl size="small" sx={{ minWidth: 140 }}>
                <InputLabel>Mes</InputLabel>
                <Select
                  value={filtroMes}
                  label="Mes"
                  onChange={(e) => setFiltroMes(e.target.value)}
                >
                  <MenuItem value="">Todos</MenuItem>
                  {meses.map((m) => (
                    <MenuItem key={m} value={m}>
                      {m}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 140 }}>
                <InputLabel>Año</InputLabel>
                <Select
                  value={filtroAnio}
                  label="Año"
                  onChange={(e) => setFiltroAnio(e.target.value)}
                >
                  <MenuItem value="">Todos</MenuItem>
                  {anios.map((a) => (
                    <MenuItem key={a} value={a}>
                      {a}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 140 }}>
                <InputLabel>Zona</InputLabel>
                <Select
                  value={filtroZona}
                  label="Zona"
                  onChange={(e) => setFiltroZona(e.target.value)}
                >
                  <MenuItem value="">Todas</MenuItem>
                  <MenuItem value="IC3">IC3</MenuItem>
                  <MenuItem value="PIT">PIT</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <Button
                variant="contained"
                startIcon={<FileDownloadIcon />}
                onClick={exportarExcel}
                sx={{
                  background: "linear-gradient(90deg, #0b4f6c 0%, #148D8D 100%)",
                  boxShadow: "0 16px 28px rgba(11,79,108,0.18)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #0a415a 0%, #117777 100%)",
                  },
                }}
              >
                Excel
              </Button>

              <Button
                variant="outlined"
                startIcon={<PrintIcon />}
                onClick={() => window.print()}
                sx={{
                  borderColor: alpha("#0b4f6c", 0.35),
                  color: "#0b4f6c",
                  "&:hover": {
                    borderColor: alpha("#148D8D", 0.6),
                    backgroundColor: alpha("#148D8D", 0.08),
                  },
                }}
              >
                Imprimir
              </Button>

              <Button
                variant="outlined"
                
                onClick={() => {
                  setFiltroMes("");
                  setFiltroAnio("");
                  setFiltroZona("");
                }}
                sx={{
                   borderColor: alpha("#0b4f6c", 0.35),
                  color: "#0b4f6c",
                  "&:hover": {
                    borderColor: alpha("#148D8D", 0.6),
                    backgroundColor: alpha("#148D8D", 0.08),
                  },
                }}
              >
                Limpiar
              </Button>
            </Stack>
          </Stack>
        </Paper>

        {/* =======================
            CONTENEDOR TABLA + TOOLBAR ICONOS (como tu captura)
           ======================= */}
        <Paper
          elevation={0}
          sx={{
            mt: 2,
            borderRadius: 2,
            border: `1px solid ${alpha("#0b4f6c", 0.14)}`,
            background:
              "linear-gradient(180deg, rgba(10,59,79,0.035) 0%, rgba(20,141,141,0.03) 35%, rgba(255,255,255,0.98) 100%)",
            boxShadow: "0 14px 35px rgba(15,127,134,0.10)",
            overflow: "hidden",
          }}
        >
          
         
            <MUIDataTable
             
              data={pagosFiltrados}
              columns={columns}
              options={options}
            />
          
        </Paper>
      </Box>
   
  );
};

export default PagosInusuales;
