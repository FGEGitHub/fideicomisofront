import { useState, useEffect, useMemo } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, alpha } from "@mui/material/styles";
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
} from "@mui/material";

import logo from "../../../Assets/marcas.png";
import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AssessmentIcon from "@mui/icons-material/Assessment";

import servicioPagos from "../../../services/pagos";
import serviciousuario1 from "../../../services/usuario1"; // (no lo uso, pero lo dejo como lo tenés)
import servicioLotes from "../../../services/lotes"; // ✅ NUEVO: para completar datos IC3 desde tabla lotes

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

  // helper
  const esVacio = (v) =>
    v === null ||
    v === undefined ||
    v === "" ||
    v === "-" ||
    v === "Sin determinar";

  // arma una key consistente para matchear IC3 (zona + manzana + lote)
  const keyIC3 = (zona, manzana, lote) =>
    `${String(zona || "").toUpperCase()}|${String(manzana || "").trim()}|${String(lote || "").trim()}`;

  // ✅ FIX: Traer pagos y completar fraccion/manzana/lote para IC3 sin tocar backend
 const getPagos = async () => {
  const resp = await servicioPagos.todoslospagos({});

  const lotesResp = await servicioLotes.lista({});
  const lotes = Array.isArray(lotesResp) ? lotesResp[0] || [] : [];

  const normDigits = (v) => String(v ?? "").replace(/[^\d]/g, "");

  const normNombre = (s) =>
    String(s ?? "")
      .toUpperCase()
      .replace(/\(\s*\d+\s*\)/g, "") // saca (3), (4), etc
      .replace(/\s+/g, " ")
      .trim();

  // Index IC3 por CUIT, por DNI y por NOMBRE
  const idxIC3ByCuit = new Map();
  const idxIC3ByDni = new Map();
  const idxIC3ByNombre = new Map();

  lotes
    .filter((l) => String(l.zona ?? "").trim().toUpperCase() === "IC3")
    .forEach((l) => {
      const c = normDigits(l.cuil_cuit);
      const nombreLote = normNombre(l.nombre); // viene del join en listadeTodos

      // Index por nombre (si existe)
      if (nombreLote && !idxIC3ByNombre.has(nombreLote)) {
        idxIC3ByNombre.set(nombreLote, l);
      }

      // Si no hay cuil o es "0", no indexamos por cuil/dni
      if (!c || c === "0") return;

      if (!idxIC3ByCuit.has(c)) idxIC3ByCuit.set(c, l);

      // Si parece CUIT (11), DNI son los 8 del medio
      if (c.length === 11) {
        const dni = c.slice(2, 10);
        if (!idxIC3ByDni.has(dni)) idxIC3ByDni.set(dni, l);
      }

      // Si el cuil guardado fuera DNI directo
      if (c.length <= 8) {
        if (!idxIC3ByDni.has(c)) idxIC3ByDni.set(c, l);
      }
    });

  const pagosFix = resp.map((p) => {
    if (p.origen !== "ic3") return p;

    // Si ya viene bien, no tocamos
    const yaTieneDatos =
      !esVacio(p.fraccion) || !esVacio(p.manzana) || !esVacio(p.lote);
    if (yaTieneDatos) return p;

    const c = normDigits(p.cuil_cuit);

    // 1) por CUIT
    let loteReal = idxIC3ByCuit.get(c);

    // 2) por DNI
    if (!loteReal) {
      const dni = c.length === 11 ? c.slice(2, 10) : c; // si vino CUIT saco dni, si vino dni lo uso
      loteReal = idxIC3ByDni.get(dni);
    }

    // 3) por NOMBRE (fallback)
    if (!loteReal) {
      const nombrePago = normNombre(p.nombre);
      loteReal = idxIC3ByNombre.get(nombrePago);
    }

    if (!loteReal) return p;

    return {
      ...p,
      fraccion: esVacio(p.fraccion) ? loteReal.fraccion : p.fraccion,
      manzana: esVacio(p.manzana) ? loteReal.manzana : p.manzana,
      lote: esVacio(p.lote) ? loteReal.lote : p.lote,
    };
  });

  setPagos(pagosFix);
};



  // =======================
  // OPCIONES DE FILTROS
  // =======================
  const meses = [...new Set(pagos.map((p) => Number(p.mes)))]
    .filter((m) => !isNaN(m))
    .sort((a, b) => a - b);

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
      (filtroMes === "" || Number(p.mes) === Number(filtroMes)) &&
      (filtroAnio === "" || p.anio === filtroAnio) &&
      zonaOk
    );
  });

  // =======================
  // COLUMNAS (BASE)
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
      { name: "fraccion", label: "Fracción" },
      { name: "manzana", label: "Manzana" },

      // ✅ LOTE (PIT => "No corresponde")
      {
        name: "lote",
        label: "Lote",
        options: {
          customBodyRender: (value, tableMeta) => {
            const origen = tableMeta.rowData[ORIGEN_INDEX]; // "normal" o "ic3"
            if (origen === "normal") return "No corresponde";
            return esVacio(value) ? "-" : value;
          },
        },
      },

      // ✅ PARCELA (IC3 => "No corresponde")
      {
        name: "parcela",
        label: "Parcela",
        options: {
          customBodyRender: (value, tableMeta) => {
            const origen = tableMeta.rowData[ORIGEN_INDEX];
            const lote = tableMeta.rowData[LOTE_INDEX];

            if (origen === "ic3") return "No corresponde";

            const invalida =
              value === 0 ||
              value === "0" ||
              value === "Sin determinar" ||
              value === "" ||
              value === null ||
              value === undefined;

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
  }, []); // 👈 queda fijo

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
  // THEME (solo estética)
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
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* HEADER */}
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

        {/* PANEL DE FILTROS */}
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
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.25}
              sx={{ flexWrap: "wrap" }}
            >
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
                  background:
                    "linear-gradient(90deg, #0b4f6c 0%, #148D8D 100%)",
                  boxShadow: "0 16px 28px rgba(11,79,108,0.18)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #0a415a 0%, #117777 100%)",
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

        {/* TABLA */}
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
          <MUIDataTable data={pagosFiltrados} columns={columns} options={options} />
        </Paper>
      </Box>

      {/* ===== VISTA SOLO IMPRESIÓN ===== */}
      <div id="print-area" style={{ display: "none" }}>
        <Box sx={{ padding: "30px", fontFamily: "Arial" }}>
          {/* HEADER */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <img src={logo} alt="logo" style={{ height: 70, marginRight: 20 }} />
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Informe de Pagos Inusuales
              </Typography>
              <Typography variant="body2">
                Municipalidad de Corrientes
              </Typography>
              <Typography variant="body2">
                Fecha de emisión: {new Date().toLocaleDateString()}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* FILTROS */}
          <Typography variant="subtitle2" fontWeight="bold">
            Filtros aplicados:
          </Typography>
          <Typography variant="body2" mb={2}>
            Mes: {filtroMes || "Todos"} | Año: {filtroAnio || "Todos"} | Zona:{" "}
            {filtroZona || "Todas"}
          </Typography>

          {/* TABLA */}
          <table
            width="100%"
            border="1"
            cellSpacing="0"
            style={{ borderCollapse: "collapse", fontSize: "12px" }}
          >
            <thead style={{ background: "#0b4f6c", color: "white" }}>
              <tr>
                <th>Mes</th>
                <th>Año</th>
                <th>Zona</th>
                <th>CUIL/CUIT</th>
                <th>Nombre</th>
                <th>Monto</th>
              </tr>
            </thead>
            <tbody>
              {pagosFiltrados.map((p, i) => (
                <tr key={i}>
                  <td>{p.mes}</td>
                  <td>{p.anio}</td>
                  <td>{p.origen === "ic3" ? "IC3" : "PIT"}</td>
                  <td>{p.cuil_cuit}</td>
                  <td>{p.nombre}</td>
                  <td>${p.monto}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Typography variant="body2" mt={2}>
            Total de registros: {pagosFiltrados.length}
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default PagosInusuales;
