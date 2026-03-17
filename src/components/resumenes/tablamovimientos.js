import * as React from "react";
import { useEffect, useState } from "react";
import servicionivel3 from "../../services/nivel3";

import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
  Box, Typography, TextField, Chip, MenuItem
} from "@mui/material";

export default function MovimientosTabla() {

  const [movimientos, setMovimientos] = useState([]);

  const [search, setSearch] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");
  const [mesFiltro, setMesFiltro] = useState("");
  const [anioFiltro, setAnioFiltro] = useState("");
  const [cuitFiltro, setCuitFiltro] = useState("");

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

  // 🔍 FILTROS
  const filtered = movimientos.filter((row) => {

    const texto = `
      ${row.descripcion || ""}
      ${row.concepto || ""}
    `.toLowerCase();

    if (search && !texto.includes(search.toLowerCase())) return false;

    if (tipoFiltro && row.tipo_operacion !== tipoFiltro) return false;

    if (mesFiltro && getMes(row.fecha) !== mesFiltro) return false;

    if (anioFiltro && getAnio(row.fecha) !== anioFiltro) return false;

    if (cuitFiltro && !row.cuit_cuil?.includes(cuitFiltro)) return false;

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
          label="Buscar descripción/concepto"
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
          label="Mes (1-12)"
          size="small"
          value={mesFiltro}
          onChange={(e) => setMesFiltro(e.target.value)}
          sx={{ width: 100 }}
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

      </Box>

      {/* TABLA */}

      <TableContainer component={Paper}>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell><b>Fecha</b></TableCell>
              <TableCell><b>Mes</b></TableCell>
              <TableCell><b>Año</b></TableCell>
              <TableCell><b>Tipo</b></TableCell>
              <TableCell><b>Descripción</b></TableCell>
              <TableCell><b>CUIT/CUIL</b></TableCell>
              <TableCell align="right"><b>Débito</b></TableCell>
              <TableCell align="right"><b>Crédito</b></TableCell>
              <TableCell><b>Concepto</b></TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {filtered.map((row, index) => (

              <TableRow key={index}>

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
                    label={row.tipo_operacion}
                    size="small"
                    color={
                      row.tipo_operacion === "INGRESO"
                        ? "success"
                        : "warning"
                    }
                  />
                </TableCell>

                <TableCell>
                  {row.descripcion || "-"}
                </TableCell>

                <TableCell>
                  {row.cuit_cuil || "-"}
                </TableCell>

                <TableCell align="right">
                  {row.debito ? (
                    <Typography color="error">
                      ${row.debito}
                    </Typography>
                  ) : "-"}
                </TableCell>

                <TableCell align="right">
                  {row.credito ? (
                    <Typography color="success.main">
                      ${row.credito}
                    </Typography>
                  ) : "-"}
                </TableCell>

                <TableCell>
                  {row.concepto || "-"}
                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </Box>
  );
}