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



const CONCEPTOS = [
  // INGRESOS
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

  // EGRESOS
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
  "Reintegro de Sueldos pagados x CMP",
  "Pagos por Compra de Rodados",
  "Reparación y mantenimiento Rodados",
  "Reparación y mantenimiento Otros bienes",
  "Reparación y mantenimiento Edificios",
  "Servicio de Seguridad - Adicional de Policias",
  "Servicios de Seguridad",
  "Tasas y Gastos Judiciales",
  "Gastos de Expensas Consorcio PIT"
];




export default function MovimientosTabla() {

  const [movimientos, setMovimientos] = useState([]);

  const [search, setSearch] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [mesFiltro, setMesFiltro] = useState("");
  const [anioFiltro, setAnioFiltro] = useState("");
  const [cuitFiltro, setCuitFiltro] = useState("");
const [editando, setEditando] = useState({});
const [conceptoFiltro, setConceptoFiltro] = useState("");
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
  // 🔥 PARSER ROBUSTO DE FECHA
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
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];
    return meses[Number(mes) - 1] || "-";
  };
  const guardarConcepto = async () => {
  try {
    await servicionivel3.mofificarmconcepto({
     id:  movSeleccionado.id,
      concepto:nuevoConcepto}
    );

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
const actualizarConcepto = async (id, nuevoConcepto) => {
  try {
    await servicionivel3.actualizarConcepto(id, nuevoConcepto);

    setMovimientos(prev =>
      prev.map(m =>
        m.id === id ? { ...m, concepto: nuevoConcepto } : m
      )
    );

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

  // 🔍 FILTROS
  const filtered = movimientos.filter((row) => {

  const texto = `
    ${row.descripcion || ""}
    ${row.concepto || ""}
    ${row.razon_social || ""}
  `.toLowerCase();

  if (search && !texto.includes(search.toLowerCase())) return false;

  if (tipoFiltro && row.tipo_operacion !== tipoFiltro) return false;

  if (mesFiltro && getMes(row.fecha) !== mesFiltro) return false;

  if (anioFiltro && getAnio(row.fecha) !== anioFiltro) return false;

  if (cuitFiltro && !(row.cuil_cuit || "").includes(cuitFiltro)) return false;

  // 🔥 ESTE ES EL QUE FALTA
  if (conceptoFiltro && row.concepto !== conceptoFiltro) return false;

  return true;

});

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
          sx={{ width: 150 }}
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
          sx={{ width: 80 }}
        />

        <TextField
          label="Año"
          size="small"
          value={anioFiltro}
          onChange={(e) => setAnioFiltro(e.target.value)}
          sx={{ width: 100 }}
        />

        <TextField
          label="CUIT/CUIL"
          size="small"
          value={cuitFiltro}
          onChange={(e) => setCuitFiltro(e.target.value)}
        />
<TextField
  select
  label="Concepto"
  size="small"
  value={conceptoFiltro}
  onChange={(e) => setConceptoFiltro(e.target.value)}
  sx={{ minWidth: 250 }}
>
  <MenuItem value="">Todos</MenuItem>
  {CONCEPTOS.map(c => (
    <MenuItem key={c} value={c}>{c}</MenuItem>
  ))}
</TextField>
      </Box>

      {/* TABLA */}

      <TableContainer component={Paper}>

        <Table size="small">

          <TableHead>

            <TableRow>

              <TableCell><b>Fecha</b></TableCell>
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

            </TableRow>

          </TableHead>

          <TableBody>

            {filtered.map((row, index) => (

              <TableRow key={index} hover>

                <TableCell>
                  {formatearFecha(row.fecha)}
                </TableCell>

                <TableCell>
                  {nombreMes(getMes(row.fecha))}
                </TableCell>

                <TableCell>
                  {getAnio(row.fecha)}
                </TableCell>

                <TableCell>
                  <Chip
                    label={row.tipo_operacion || "N/A"}
                    size="small"
                    color={
                      row.tipo_operacion === "INGRESO"
                        ? "success"
                        : "warning"
                    }
                  />
                </TableCell>

                <TableCell sx={{ maxWidth: 250 }}>
                  {row.descripcion || "-"}
                </TableCell>

                <TableCell>
                  {row.nombre_razon || "-"}
                </TableCell>

                <TableCell>
                  {row.cuil_cuit || "-"}
                </TableCell>

                <TableCell align="right">
                  {row.debito > 0 ? (
                    <Typography color="error" fontWeight={600}>
                      {formatearMoneda(row.debito)}
                    </Typography>
                  ) : "-"}
                </TableCell>

                <TableCell align="right">
                  {row.credito > 0 ? (
                    <Typography color="success.main" fontWeight={600}>
                      {formatearMoneda(row.credito)}
                    </Typography>
                  ) : "-"}
                </TableCell>

              <TableCell sx={{ minWidth: 220 }}>

  <Box display="flex" alignItems="center" gap={1}>

    <Typography variant="body2">
      {row.concepto || "SIN CLASIFICAR"}
    </Typography>

    <Chip
      label="Editar"
      size="small"
      clickable
      onClick={() => abrirDialog(row)}
      color="primary"
      variant="outlined"
    />

  </Box>

</TableCell>
                <TableCell>
                 <Chip
  label={row.categoria_general || "SIN CLASIFICAR"}
  size="small"
  variant="outlined"
/>
                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>
<Dialog open={openDialog} onClose={cerrarDialog} maxWidth="sm" fullWidth>

  <DialogTitle>
    Editar Concepto
  </DialogTitle>

  <DialogContent>

    <Typography mb={2}>
      {movSeleccionado?.descripcion}
    </Typography>

    <TextField
      select
      label="Concepto"
      fullWidth
      value={nuevoConcepto}
      onChange={(e) => setNuevoConcepto(e.target.value)}
    >
      {CONCEPTOS.map(c => (
        <MenuItem key={c} value={c}>
          {c}
        </MenuItem>
      ))}
    </TextField>

  </DialogContent>

  <DialogActions>

    <Button onClick={cerrarDialog}>
      Cancelar
    </Button>

    <Button
      variant="contained"
      onClick={guardarConcepto}
    >
      Guardar
    </Button>

  </DialogActions>

</Dialog>
    </Box>
  );
}