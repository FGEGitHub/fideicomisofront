import * as React from "react";
import { useEffect, useState } from "react";
import servicionivel3 from "../../services/nivel3";
import {
  Dialog, DialogTitle, DialogContent,
  DialogActions, Button
} from "@mui/material";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
  Box, Typography, TextField, Chip, MenuItem
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
  "Seguridad - Empresa de Seguridad"
];

export default function MovimientosTabla() {

  const [movimientos, setMovimientos] = useState([]);
  const [search, setSearch] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [mesFiltro, setMesFiltro] = useState("");
  const [anioFiltro, setAnioFiltro] = useState("");
  const [cuitFiltro, setCuitFiltro] = useState("");
  const [conceptoFiltro, setConceptoFiltro] = useState("");

  // 🔥 NUEVO
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

  // 🔥 PARSER FECHA
  const parseFecha = (fecha) => {
    if (!fecha) return { dia: "-", mes: "-", anio: "-" };

    if (fecha.includes("-")) {
      const [anio, mes, dia] = fecha.split("-");
      return { dia, mes, anio };
    }

    if (fecha.includes("/")) {
      const [dia, mes, anio] = fecha.split("/");
      return { dia, mes, anio };
    }

    return { dia: "-", mes: "-", anio: "-" };
  };

  const formatearFecha = (fecha) => {
    const { dia, mes, anio } = parseFecha(fecha);
    return `${dia}/${mes}/${anio}`;
  };

  const getMes = (fecha) => parseFecha(fecha).mes;
  const getAnio = (fecha) => parseFecha(fecha).anio;

  const nombreMes = (mes) => {
    const meses = [
      "Ene","Feb","Mar","Abr","May","Jun",
      "Jul","Ago","Sep","Oct","Nov","Dic"
    ];
    return meses[Number(mes) - 1] || "-";
  };

  const guardarConcepto = async () => {
    try {
      await servicionivel3.mofificarmconcepto({
        id: movSeleccionado.id,
        concepto: nuevoConcepto
      });

      setMovimientos(prev =>
        prev.map(m =>
          m.id === movSeleccionado.id
            ? { ...m, concepto: nuevoConcepto }
            : m
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
      minimumFractionDigits: 2
    })}`;
  };


const parseFechaHora = (fecha) => {
  if (!fecha) return { dia: "-", mes: "-", anio: "-", hora: "" };

  // soporta "2026-03-18 12:17:47" y "2026-03-18T12:17:47"
  const limpia = fecha.replace("T", " ").split(".")[0];

  const [fechaParte, horaParte] = limpia.split(" ");

  if (fechaParte?.includes("-")) {
    const [anio, mes, dia] = fechaParte.split("-");
    return { dia, mes, anio, hora: horaParte || "" };
  }

  return { dia: "-", mes: "-", anio: "-", hora: "" };
};
  // 🔍 FILTROS
  const filtered = movimientos.filter((row) => {

    const texto = `
      ${row.descripcion || ""}
      ${row.concepto || ""}
      ${row.nombre_razon || ""}
      ${row.fechacarga || ""}
    `.toLowerCase();

    if (search && !texto.includes(search.toLowerCase())) return false;
    if (tipoFiltro && row.tipo_operacion !== tipoFiltro) return false;
    if (mesFiltro && getMes(row.fecha) !== mesFiltro) return false;
    if (anioFiltro && getAnio(row.fecha) !== anioFiltro) return false;
    if (cuitFiltro && !(row.cuil_cuit || "").includes(cuitFiltro)) return false;
    if (conceptoFiltro && row.concepto !== conceptoFiltro) return false;

    // 🔥 FILTRO NUEVO
if (fechaCargaFiltro) {
  const textoFecha = (
    (row.fechacarga || "") +
    " " +
    (formatearFechaHora(row.fechacarga) || "")
  ).toLowerCase().replace(/\s+/g, "");

  const filtro = fechaCargaFiltro
    .toLowerCase()
    .replace(/\s+/g, "");

  if (!textoFecha.includes(filtro)) {
    return false;
  }
}

    return true;
  });
const formatearFechaHora = (fecha) => {
  const { dia, mes, anio, hora } = parseFechaHora(fecha);

  const horaCorta = hora ? hora.substring(0, 5) : "";

  return `${dia}/${mes}/${anio} ${horaCorta}`;
};
  return (
    <Box>

      <Typography variant="h6" fontWeight={700} mb={2}>
        Movimientos
      </Typography>

      {/* FILTROS */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>

        <TextField
          label="Buscar"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

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
  sx={{ minWidth: 250 }}
  renderInput={(params) => (
    <TextField {...params} label="Concepto" />
  )}
/>
      </Box>

      {/* TABLA */}
      <TableContainer component={Paper}>
        <Table size="small">

          <TableHead>
            <TableRow>
              <TableCell><b>Fecha</b></TableCell>
              <TableCell><b>Fecha Carga</b></TableCell> {/* 🔥 NUEVO */}
              <TableCell><b>Mes</b></TableCell>
              <TableCell><b>Año</b></TableCell>
              <TableCell><b>Tipo</b></TableCell>
              <TableCell><b>Descripción</b></TableCell>
              <TableCell><b>Razón Social</b></TableCell>
              <TableCell><b>CUIT/CUIL</b></TableCell>
              <TableCell align="right"><b>Débito</b></TableCell>
              <TableCell align="right"><b>Crédito</b></TableCell>
              <TableCell><b>Concepto</b></TableCell>
              <TableCell><b>Categoría</b></TableCell>
      {/*        <TableCell><b>Subcategoría</b></TableCell>
 <TableCell><b>Proyecto</b></TableCell> 
<TableCell><b>Tipo Gasto</b></TableCell>*/}
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.map((row, index) => (
              <TableRow key={index} hover>

                <TableCell>{formatearFecha(row.fecha)}</TableCell>

                {/* 🔥 NUEVA COLUMNA */}
                <TableCell>{formatearFechaHora(row.fechacarga)}</TableCell>

                <TableCell>{nombreMes(getMes(row.fecha))}</TableCell>
                <TableCell>{getAnio(row.fecha)}</TableCell>

                <TableCell>
                  <Chip
                    label={row.tipo_operacion || "N/A"}
                    size="small"
                    color={row.tipo_operacion === "INGRESO" ? "success" : "warning"}
                  />
                </TableCell>

                <TableCell>{row.descripcion || "-"}</TableCell>
                <TableCell>{row.nombre_razon || "-"}</TableCell>
                <TableCell>{row.cuil_cuit || "-"}</TableCell>

                <TableCell align="right">
                  {row.debito > 0 ? (
                    <Typography color="error">{formatearMoneda(row.debito)}</Typography>
                  ) : "-"}
                </TableCell>

                <TableCell align="right">
                  {row.credito > 0 ? (
                    <Typography color="success.main">{formatearMoneda(row.credito)}</Typography>
                  ) : "-"}
                </TableCell>

                <TableCell>
                  <Box display="flex" gap={1}>
                    {row.concepto || "SIN CLASIFICAR"}
                    <Chip label="Editar" size="small" onClick={() => abrirDialog(row)} />
                  </Box>
                </TableCell>

                <TableCell>
                  <Chip label={row.categoria_general || "SIN CLASIFICAR"} size="small" />
                </TableCell>
{/* <TableCell>
  <Chip label={row.subcategoria || "SIN CLASIFICAR"} size="small" />
</TableCell> */}
{/* 
<TableCell>
  <Chip label={row.proyecto || "SIN CLASIFICAR"} size="small" />
</TableCell> */}
{/* 
<TableCell>
  <Chip label={row.tipo_gasto || "SIN CLASIFICAR"} size="small" />
</TableCell> */}
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      {/* DIALOG */}
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
          <Button onClick={guardarConcepto} variant="contained">Guardar</Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}