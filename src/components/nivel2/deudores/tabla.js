import { useState, useEffect } from "react";
import servicioClientes from "../../../services/clientes";
import CargaDeTabla from "../../CargaDeTabla";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  Divider,
  TextField,
  InputAdornment
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import { alpha } from "@mui/material/styles";

const Deudores = () => {
  const [clientes, setClientes] = useState([]);
  const [resumen, setResumen] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await servicioClientes.deudores();

    // data = [ detalleClientes, resumenGeneral ]
    setClientes(data[0]);
    setFiltered(data[0]);
    setResumen(data[1]);

    setLoading(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filteredData = clientes.filter(
      (c) =>
        c.cuil_cuit.toLowerCase().includes(value) ||
        `${c.nombre} ${c.apellido}`.toLowerCase().includes(value)
    );

    setFiltered(filteredData);
    setPage(0);
  };

  if (loading) return <CargaDeTabla />;

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>

      {/* ===== HEADER ===== */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          p: 2,
          background:
            "linear-gradient(90deg, #0a3b4f 0%, #0b4f6c 55%, #0f7f86 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 2
        }}
      >
        <PeopleRoundedIcon />
        <Box>
          <Typography fontWeight={900}>
            Estado de cuotas - Zona PIT
          </Typography>
          <Typography fontSize={13} sx={{ opacity: 0.9 }}>
            Deudores y cuotas pagadas por cliente
          </Typography>
        </Box>
      </Paper>

      {/* ===== RESUMEN GENERAL ===== */}
      {resumen && (
        <Paper
          elevation={0}
          sx={{
            mt: 2,
            borderRadius: 3,
            p: 2,
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            border: `1px solid ${alpha("#0b4f6c", 0.12)}`
          }}
        >
          <Chip label={`Debe: ${resumen.debe}`} color="error" />
          <Chip label={`Pagadas: ${resumen.pagadas}`} color="success" />
          <Chip label={`Total: ${resumen.total}`} />
          <Chip label={`% Debe: ${resumen.porcentajeDebe}%`} color="error" />
          <Chip label={`% Pagadas: ${resumen.porcentajePagadas}%`} color="success" />
        </Paper>
      )}

      {/* ===== BUSCADOR ===== */}
      <Paper sx={{ mt: 2, p: 2, borderRadius: 3 }}>
        <TextField
          fullWidth
          size="small"
          label="Buscar por CUIL o Nombre"
          value={search}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      {/* ===== TABLA ===== */}
      <Paper
        elevation={0}
        sx={{
          mt: 2,
          borderRadius: 3,
          overflow: "hidden",
          border: `1px solid ${alpha("#0b4f6c", 0.12)}`
        }}
      >
        <Divider />

        <TableContainer sx={{ maxHeight: "65vh" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {[
                  "CUIL/CUIT",
                  "NOMBRE",
                     "TOTAL CUOTAS",
                      "LIQUIDADAS",
                  "DEBE",
                  "PAGADAS",
                  "TOTAL FINAL",
               
                 
                  "% DEBE",
                  "% PAGADAS",
                  "% AVANCE"
                ].map((h) => (
                  <TableCell
                    key={h}
                    sx={{
                      backgroundColor: "#0799b6",
                      color: "#fff",
                      fontWeight: 900
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((c) => (
                  <TableRow
                    key={c.id}
                    hover
                    sx={{
                      "&:nth-of-type(odd)": {
                        backgroundColor: alpha("#0f7f86", 0.03)
                      }
                    }}
                  >
                    <TableCell
                      sx={{ fontWeight: 700, color: "#063a52", cursor: "pointer" }}
                      onClick={() =>
                        navigate(`/usuario2/detalleclic3/${c.cuil_cuit}`)
                      }
                    >
                      {c.cuil_cuit}
                    </TableCell>

                    <TableCell>
                      {c.nombre} {c.apellido}
                    </TableCell>
  <TableCell fontWeight={700}>
                      {c.total_cuotas}
                    </TableCell>
                        <TableCell sx={{ color: "#1565c0", fontWeight: 700 }}>
                      {c.liquidadas}
                    </TableCell>
                    <TableCell sx={{ color: "#c62828", fontWeight: 700 }}>
                      {c.debe}
                    </TableCell>

                    <TableCell sx={{ color: "#2e7d32", fontWeight: 700 }}>
                      {c.pagadas}
                    </TableCell>

                    <TableCell fontWeight={700}>
                      {c.total}
                    </TableCell>
                  

                
                    <TableCell sx={{ color: "#c62828" }}>
                      {c.porcentajeDebe}%
                    </TableCell>

                    <TableCell sx={{ color: "#2e7d32" }}>
                      {c.porcentajePagadas}%
                    </TableCell>
                    <TableCell sx={{ color: "#1565c0", fontWeight: 700 }}>
                      {c.total_cuotas > 0
                        ? ((c.liquidadas / c.total_cuotas) * 100).toFixed(1)
                        : 0}%
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={filtered.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, n) => setPage(n)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
          labelRowsPerPage="Filas por página:"
        />
      </Paper>
    </Box>
  );
};

export default Deudores;
