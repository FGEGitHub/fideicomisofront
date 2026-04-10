import * as React from "react";
import { useEffect, useState } from "react";
import servicionivel3 from "../../services/nivel3";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  TextField,
  Chip,
  MenuItem,
} from "@mui/material";
import { Autocomplete } from "@mui/material";

const CONCEPTOS = [
  "Cobranzas SC - Fracción IC3",
  "Cobranzas SC - Fracción IB5",
  "Cobranzas SC - Fracción IE",
  "Cobranzas SC - Parque Industrial",
  "Cobranzas SC - Otras fracciones",
  "Cobranzas Cheques",
  "Cobranzas Remate Electronico",
  "Cobranzas Lotes Municipales",
  "Cobranzas CMP - Linea Barrio Esperanza",
  "Cobranzas CMP - Linea Barrio San Antonio Oeste",
  "Acreditación Capital Plazo Fijo",
  "Intereses Plazo Fijo",
  "Percepciones impositivas",
  "Transferencia de Fondos DEM- Res.",
  "Otros Ingresos",
  "Alquileres pagados Oficinas",
  "Alquileres pagados Baños Quimicos",
  "Combustibles",
  "Comisiones Pagadas CMP",
  "Impuestos - AFIP",
  "Impuestos- DGR",
  "Insumos Informáticos",
  "Gastos Administrativos",
  "Gastos y Comisiones Bancarias",
  "Honorarios Profesionales",
  "Servicios personales",
  "Gastos varios (Impresión de Planos y mensuras)",
  "Pagos-Mensuras",
  "Pagos- Compra de muebles y útiles",
  "Pagos- Obras Fracción IC3",
  "Pagos- Obras Fracción IC4",
  "Pagos- Obras Fracción PIT",
  "Pagos- Obras Otras Fracciones",
  "Pagos Obras y Trabajos varios",
  "Otros Egresos",
  "Proyectos Ejecutivos",
  "Reintegro de sueldos y movilidad",
  "Pagos por Compra de Rodados",
  "Reparación y mantenimiento Rodados",
  "Reparación y mantenimiento Otros bienes",
  "Reparación y mantenimiento Edificios",
  "Servicio de Seguridad - Adicional de Policias",
  "Servicios de Seguridad",
  "Tasas y Gastos Judiciales",
  "Gastos de Expensas Consorcio PIT",
  "Seguridad - Empresa de Seguridad",
];

export default function MovimientosTabla() {
  const [movimientos, setMovimientos] = useState([]);
  const [search, setSearch] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [mesFiltro, setMesFiltro] = useState("");
  const [anioFiltro, setAnioFiltro] = useState("");
  const [cuitFiltro, setCuitFiltro] = useState("");
  const [conceptoFiltro, setConceptoFiltro] = useState("");
  const [ordenCampo, setOrdenCampo] = useState("fecha");
  const [ordenDireccion, setOrdenDireccion] = useState("desc");
  const [fechaCargaFiltro, setFechaCargaFiltro] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [movSeleccionado, setMovSeleccionado] = useState(null);
  const [nuevoConcepto, setNuevoConcepto] = useState("");

  useEffect(() => {
    traerMovimientos();
  }, []);

  const traerMovimientos = async () => {
    try {
      const data = await servicionivel3.traermovimientos();
      setMovimientos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const abrirDialog = (row) => {
    setMovSeleccionado(row);
    setNuevoConcepto(row.concepto || "");
    setOpenDialog(true);
  };

  const cerrarDialog = () => {
    setOpenDialog(false);
    setMovSeleccionado(null);
  };

  const parseFecha = (fecha) => {
    if (!fecha) return { dia: "-", mes: "-", anio: "-" };

    if (fecha.includes("-")) {
      const [anio, mes, dia] = fecha.split(" ")[0].split("-");
      return { dia, mes, anio };
    }

    if (fecha.includes("/")) {
      const [dia, mes, anio] = fecha.split(" ")[0].split("/");
      return { dia, mes, anio };
    }

    return { dia: "-", mes: "-", anio: "-" };
  };

  const formatearFecha = (fecha) => {
    const { dia, mes, anio } = parseFecha(fecha);
    return `${dia}/${mes}/${anio}`;
  };

  const parseFechaHora = (fecha) => {
    if (!fecha) return { dia: "-", mes: "-", anio: "-", hora: "" };

    const limpia = fecha.replace("T", " ").split(".")[0];
    const [fechaParte, horaParte] = limpia.split(" ");

    if (fechaParte?.includes("-")) {
      const [anio, mes, dia] = fechaParte.split("-");
      return { dia, mes, anio, hora: horaParte || "" };
    }

    if (fechaParte?.includes("/")) {
      const [dia, mes, anio] = fechaParte.split("/");
      return { dia, mes, anio, hora: horaParte || "" };
    }

    return { dia: "-", mes: "-", anio: "-", hora: "" };
  };

  const formatearFechaHora = (fecha) => {
    const { dia, mes, anio, hora } = parseFechaHora(fecha);
    const horaCorta = hora ? hora.substring(0, 5) : "";
    return `${dia}/${mes}/${anio} ${horaCorta}`;
  };

  const valorFecha = (fecha) => {
    if (!fecha) return 0;

    const limpia = fecha.replace("T", " ").split(".")[0];

    if (limpia.includes("-")) {
      return new Date(limpia).getTime();
    }

    if (limpia.includes("/")) {
      const [dia, mes, anio] = limpia.split(" ")[0].split("/");
      return new Date(`${anio}-${mes}-${dia}`).getTime();
    }

    return 0;
  };

  const getMes = (fecha) => parseFecha(fecha).mes;
  const getAnio = (fecha) => parseFecha(fecha).anio;

  const nombreMes = (mes) => {
    const meses = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    return meses[Number(mes) - 1] || "-";
  };

  const ordenarPor = (campo) => {
    if (ordenCampo === campo) {
      setOrdenDireccion((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setOrdenCampo(campo);
      setOrdenDireccion("asc");
    }
  };

  const guardarConcepto = async () => {
    try {
      await servicionivel3.mofificarmconcepto({
        id: movSeleccionado.id,
        concepto: nuevoConcepto,
      });

      setMovimientos((prev) =>
        prev.map((m) =>
          m.id === movSeleccionado.id ? { ...m, concepto: nuevoConcepto } : m
        )
      );

      cerrarDialog();
    } catch (error) {
      console.error(error);
    }
  };

  const formatearMoneda = (valor) => {
    if (!valor || valor === 0) return "-";
    return `$ ${Number(valor).toLocaleString("es-AR", {
      minimumFractionDigits: 2,
    })}`;
  };

  const filtered = movimientos
    .filter((row) => {
      const texto = `
        ${row.descripcion || ""}
        ${row.concepto || ""}
        ${row.nombre_razon || ""}
        ${row.fechacarga || ""}
      `.toLowerCase();

      if (search && !texto.includes(search.toLowerCase())) return false;
      if (tipoFiltro && row.tipo_operacion !== tipoFiltro) return false;

      if (
        mesFiltro &&
        String(Number(getMes(row.fecha))) !== String(Number(mesFiltro))
      ) {
        return false;
      }

      if (
        anioFiltro &&
        String(getAnio(row.fecha)).trim() !== String(anioFiltro).trim()
      ) {
        return false;
      }

      if (cuitFiltro && !(row.cuil_cuit || "").includes(cuitFiltro)) {
        return false;
      }

      if (conceptoFiltro && row.concepto !== conceptoFiltro) {
        return false;
      }

      if (fechaCargaFiltro) {
        const textoFecha = formatearFechaHora(row.fechacarga)
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace(/-/g, "/");

        const filtro = fechaCargaFiltro
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace(/-/g, "/");

        if (!textoFecha.includes(filtro)) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      let valorA;
      let valorB;

      if (ordenCampo === "fecha") {
        valorA = valorFecha(a.fecha);
        valorB = valorFecha(b.fecha);
      } else if (ordenCampo === "mes") {
        valorA = Number(getMes(a.fecha));
        valorB = Number(getMes(b.fecha));
      } else if (ordenCampo === "anio") {
        valorA = Number(getAnio(a.fecha));
        valorB = Number(getAnio(b.fecha));
      } else {
        valorA = "";
        valorB = "";
      }

      if (valorA < valorB) return ordenDireccion === "asc" ? -1 : 1;
      if (valorA > valorB) return ordenDireccion === "asc" ? 1 : -1;
      return 0;
    });

  return (
    <Box sx={{ width: "100%", minWidth: 0 }}>
      {/* HEADER CON BUSCADOR AL LADO */}
      <Box
        sx={{
          mb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{ color: "#0F172A", m: 0 }}
        >
          Movimientos
        </Typography>

        <TextField
          label="Buscar"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            minWidth: { xs: "100%", sm: 280, md: 320 },
            background: "#fff",
          }}
        />
      </Box>

      {/* FILTROS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(180px, 1fr))",
            lg: "repeat(6, minmax(150px, 1fr))",
          },
          gap: 1.5,
          mb: 2,
        }}
      >
        <TextField
          select
          label="Tipo"
          size="small"
          value={tipoFiltro}
          onChange={(e) => setTipoFiltro(e.target.value)}
        >
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="INGRESO">Ingreso</MenuItem>
          <MenuItem value="EGRESO">Egreso</MenuItem>
        </TextField>

        <TextField
          label="Mes"
          size="small"
          value={mesFiltro}
          onChange={(e) => setMesFiltro(e.target.value)}
        />

        <TextField
          label="Año"
          size="small"
          value={anioFiltro}
          onChange={(e) => setAnioFiltro(e.target.value)}
        />

        <TextField
          label="CUIT/CUIL"
          size="small"
          value={cuitFiltro}
          onChange={(e) => setCuitFiltro(e.target.value)}
        />

        <TextField
          label="Fecha Carga"
          size="small"
          value={fechaCargaFiltro}
          onChange={(e) => setFechaCargaFiltro(e.target.value)}
          placeholder="dd/mm/aaaa"
        />

        <Autocomplete
          size="small"
          options={CONCEPTOS}
          value={conceptoFiltro || null}
          onChange={(e, newValue) => setConceptoFiltro(newValue || "")}
          renderInput={(params) => <TextField {...params} label="Concepto" />}
        />
      </Box>

      {/* TABLA CON SCROLL HORIZONTAL Y VERTICAL */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          borderRadius: 2,
          border: "1px solid rgba(148,163,184,0.18)",
          background: "#fff",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: 420,
            overflowX: "auto",
            overflowY: "auto",
            boxShadow: "none",
            borderRadius: 0,
            minWidth: 0,
          }}
        >
          <Table
            size="small"
            stickyHeader
            sx={{
              minWidth: 1500,
              tableLayout: "auto",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  onClick={() => ordenarPor("fecha")}
                  sx={{
                    cursor: "pointer",
                    userSelect: "none",
                    background: "#F8FAFC",
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}
                >
                  Fecha {ordenCampo === "fecha" ? (ordenDireccion === "asc" ? "▲" : "▼") : ""}
                </TableCell>

                <TableCell sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}>
                  Fecha Carga
                </TableCell>

                <TableCell
                  onClick={() => ordenarPor("mes")}
                  sx={{
                    cursor: "pointer",
                    userSelect: "none",
                    background: "#F8FAFC",
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}
                >
                  Mes {ordenCampo === "mes" ? (ordenDireccion === "asc" ? "▲" : "▼") : ""}
                </TableCell>

                <TableCell
                  onClick={() => ordenarPor("anio")}
                  sx={{
                    cursor: "pointer",
                    userSelect: "none",
                    background: "#F8FAFC",
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}
                >
                  Año {ordenCampo === "anio" ? (ordenDireccion === "asc" ? "▲" : "▼") : ""}
                </TableCell>

                <TableCell sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}>
                  Tipo
                </TableCell>
                <TableCell sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}>
                  Descripción
                </TableCell>
                <TableCell sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}>
                  Razón Social
                </TableCell>
                <TableCell sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}>
                  CUIT/CUIL
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}
                >
                  Débito
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}
                >
                  Crédito
                </TableCell>
                <TableCell sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}>
                  Concepto
                </TableCell>
                <TableCell sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}>
                  Categoría
                </TableCell>
                <TableCell sx={{ background: "#F8FAFC", fontWeight: 800, whiteSpace: "nowrap" }}>
                  Saldo
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {formatearFecha(row.fecha)}
                  </TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {formatearFechaHora(row.fechacarga)}
                  </TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {nombreMes(getMes(row.fecha))}
                  </TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {getAnio(row.fecha)}
                  </TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    <Chip
                      label={row.tipo_operacion || "N/A"}
                      size="small"
                      color={row.tipo_operacion === "INGRESO" ? "success" : "warning"}
                    />
                  </TableCell>

                  <TableCell sx={{ minWidth: 220 }}>
                    {row.descripcion || "-"}
                  </TableCell>

                  <TableCell sx={{ minWidth: 170 }}>
                    {row.nombre_razon || "-"}
                  </TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {row.cuil_cuit || "-"}
                  </TableCell>

                  <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                    {row.debito > 0 ? (
                      <Typography color="error">{formatearMoneda(row.debito)}</Typography>
                    ) : "-"}
                  </TableCell>

                  <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                    {row.credito > 0 ? (
                      <Typography color="success.main">{formatearMoneda(row.credito)}</Typography>
                    ) : "-"}
                  </TableCell>

                  <TableCell sx={{ minWidth: 220 }}>
                    <Box display="flex" gap={1} alignItems="center" flexWrap="wrap">
                      <span>{row.concepto || "SIN CLASIFICAR"}</span>
                      <Chip label="Editar" size="small" onClick={() => abrirDialog(row)} />
                    </Box>
                  </TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    <Chip label={row.categoria_general || "SIN CLASIFICAR"} size="small" />
                  </TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {row.saldo > 0 ? (
                      <Typography sx={{ whiteSpace: "nowrap" }}>
                        {formatearMoneda(row.saldo)}
                      </Typography>
                    ) : "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Dialog open={openDialog} onClose={cerrarDialog}>
        <DialogTitle>Editar Concepto</DialogTitle>

        <DialogContent>
          <Autocomplete
            fullWidth
            options={CONCEPTOS}
            value={nuevoConcepto || null}
            onChange={(e, newValue) => setNuevoConcepto(newValue || "")}
            renderInput={(params) => (
              <TextField {...params} label="Seleccionar concepto" />
            )}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={cerrarDialog}>Cancelar</Button>
          <Button onClick={guardarConcepto} variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}