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
} from "@mui/material";
import { Autocomplete } from "@mui/material";

const CONCEPTOS = [];

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
    return `${dia}/${mes}/${anio} ${hora?.substring(0, 5)}`;
  };

  const valorFecha = (fecha) => {
    if (!fecha) return 0;
    const limpia = fecha.replace("T", " ").split(".")[0];
    if (limpia.includes("-")) return new Date(limpia).getTime();
    if (limpia.includes("/")) {
      const [dia, mes, anio] = limpia.split(" ")[0].split("/");
      return new Date(`${anio}-${mes}-${dia}`).getTime();
    }
    return 0;
  };

  const getMes = (fecha) => parseFecha(fecha).mes;
  const getAnio = (fecha) => parseFecha(fecha).anio;

  const nombreMes = (mes) =>
    ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"][Number(mes)-1] || "-";

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

  const formatearMoneda = (valor) =>
    !valor ? "-" : `$ ${Number(valor).toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;

  const filtered = movimientos.filter(() => true).sort((a, b) => {
    let valorA = valorFecha(a.fecha);
    let valorB = valorFecha(b.fecha);
    return ordenDireccion === "asc" ? valorA - valorB : valorB - valorA;
  });

return (

  <Box
    sx={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      overflow: "auto",
      width: "100%",
    }}
  >
  

<TableContainer
  component={Paper}
  sx={{
    flex: 1,
    minHeight: 0,
    width: "100%",
    overflowX: "auto", // 🔥 scroll horizontal SOLO tabla
    overflowY: "auto",
    boxShadow: "none",
    borderRadius: 2,
  }}
>
       <Table
    stickyHeader
    size="small"
    
  >
    {/* 🔥 VA ACÁ (ANTES DEL HEAD) */}
    <colgroup>
      <col style={{ width: "70px" }} />
      <col style={{ width: "70px" }} />
      <col style={{ width: "50px" }} />
      <col style={{ width: "50px" }} />
      <col style={{ width: "75px" }} />
      <col style={{ width: "250px" }} />
      <col style={{ width: "230px" }} />
      <col style={{ width: "70px" }} />
      <col style={{ width: "80px" }} />
      <col style={{ width: "100px" }} />
      <col style={{ width: "170px" }} />
      <col style={{ width: "90px" }} />
      <col style={{ width: "130px" }} />
    </colgroup>

        <TableHead>
          <TableRow>
            {[
              "Fecha",
              "F. Carga",
              "Mes",
              "Año",
              "Tipo",
              "Descripción",
              "Razón",
              "CUIT",
              "Débito",
              "Crédito",
              "Concepto",
              "Categoría",
              "Saldo",
            ].map((h) => (
              <TableCell
                key={h}
                sx={{
                  fontWeight: 800,
                  color: "#fff",
                  backgroundColor: "#0799b6",
                  py: 0.8,
                  px: 0.8,
                  fontSize: 11,
                }}
              >
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {filtered.map((row, i) => (
            <TableRow key={i}>
              
              {/* FECHA */}
              <TableCell sx={{ fontSize: 11, width: 80 }}>
                {formatearFecha(row.fecha)}
              </TableCell>

              {/* FECHA CARGA */}
              <TableCell sx={{ fontSize: 11, width: 110 }}>
                {formatearFechaHora(row.fechacarga)}
              </TableCell>

              {/* MES */}
              <TableCell sx={{ fontSize: 11, width: 45 }}>
                {nombreMes(getMes(row.fecha))}
              </TableCell>

              {/* AÑO */}
              <TableCell sx={{ fontSize: 11, width: 50 }}>
                {getAnio(row.fecha)}
              </TableCell>

              {/* TIPO */}
              <TableCell sx={{ width: 70 }}>
                <Chip
                  label={row.tipo_operacion}
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: 10,
                    borderRadius: 999,
                  }}
                />
              </TableCell>

              {/* DESCRIPCIÓN (MULTILINEA) */}
              <TableCell
                sx={{
  fontSize: 11,
  whiteSpace: "normal",
  wordBreak: "break-word",
  lineHeight: 1.2,
}}
              >
                {row.descripcion}
              </TableCell>

              {/* RAZON SOCIAL */}
              <TableCell
               sx={{
  fontSize: 11,
  whiteSpace: "normal",
  wordBreak: "break-word",
  lineHeight: 1.2,
}}
              >
                {row.nombre_razon}
              </TableCell>

              {/* CUIT */}
              <TableCell sx={{ fontSize: 11, width: 110 }}>
                {row.cuil_cuit}
              </TableCell>

              {/* DEBITO */}
              <TableCell align="right" sx={{ width: 110 }}>
                <Typography sx={{ color: "#dc2626", fontSize: 11 }}>
                  {formatearMoneda(row.debito)}
                </Typography>
              </TableCell>

              {/* CREDITO */}
              <TableCell align="right" sx={{ width: 110 }}>
                <Typography sx={{ color: "#059669", fontSize: 11 }}>
                  {formatearMoneda(row.credito)}
                </Typography>
              </TableCell>

              {/* CONCEPTO */}
              <TableCell
              sx={{
  fontSize: 11,
  whiteSpace: "normal",
  wordBreak: "break-word",
  lineHeight: 1.2,
}}
              >
                {row.concepto}
              </TableCell>

              {/* CATEGORIA */}
              <TableCell sx={{ width: 90 }}>
                <Chip
                  label={row.categoria_general}
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: 10,
                  }}
                />
              </TableCell>

              {/* SALDO */}
             <TableCell
  sx={{
    width: 120,
    fontWeight: 700,
    fontSize: 12, // 🔥 tamaño
    color: "#034401", // 🔥 color número
  }}
>
  {formatearMoneda(row.saldo)}
</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
}