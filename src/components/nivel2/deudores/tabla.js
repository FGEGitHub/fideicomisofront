import { useState, useEffect } from "react";
import servicioClientes from "../../../services/clientes";
import CargaDeTabla from "../../CargaDeTabla";
import { useNavigate } from "react-router-dom";
import servicioLotes from "../../../services/lotes";

import { IconButton, Tooltip } from "@mui/material";
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
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import { alpha } from "@mui/material/styles";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";

// ✅ tu modal aparte
import ModalDetalleDeudor from "./ModalDetalleDeudor";

const Deudores = () => {
  const [clientes, setClientes] = useState([]);
  const [resumen, setResumen] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Modal detalle (solo control desde acá)
  const [openDetalle, setOpenDetalle] = useState(false);
  const [detalleCliente, setDetalleCliente] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const esVacio = (v) =>
    v === null || v === undefined || v === "" || v === "-" || v === "Sin determinar";

  const normDigits = (v) => String(v ?? "").replace(/[^\d]/g, "");

  const normNombre = (s) =>
    String(s ?? "")
      .toUpperCase()
      .replace(/\(\s*\d+\s*\)/g, "") // saca (3), (4), etc
      .replace(/\s+/g, " ")
      .trim();


  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await servicioClientes.deudores();
    const detalleClientes = data[0] || [];
    const resumenGeneral = data[1] || null;

    // ✅ Traigo lotes para completar datos sin tocar backend
    const lotesResp = await servicioLotes.lista({});
    const lotes = Array.isArray(lotesResp) ? (lotesResp[0] || []) : [];

    // Index por zona + (CUIT / DNI / NOMBRE)
    const idxByZonaCuit = new Map();   // key: ZONA|CUIT
    const idxByZonaDni = new Map();    // key: ZONA|DNI
    const idxByZonaNombre = new Map(); // key: ZONA|NOMBRE

    lotes.forEach((l) => {
      const zona = String(l.zona ?? "").trim().toUpperCase(); // "PIT" / "IC3"
      if (!zona) return;

      const c = normDigits(l.cuil_cuit);
      const nombreLote = normNombre(l.nombre);

      if (nombreLote) {
        const kNom = `${zona}|${nombreLote}`;
        if (!idxByZonaNombre.has(kNom)) idxByZonaNombre.set(kNom, l);
      }

      // Si no hay cuil o es "0", no indexamos por cuit/dni
      if (!c || c === "0") return;

      const kCuit = `${zona}|${c}`;
      if (!idxByZonaCuit.has(kCuit)) idxByZonaCuit.set(kCuit, l);

      // Si parece CUIT (11), DNI son los 8 del medio
      if (c.length === 11) {
        const dni = c.slice(2, 10);
        const kDni = `${zona}|${dni}`;
        if (!idxByZonaDni.has(kDni)) idxByZonaDni.set(kDni, l);
      }

      // Si guardaron DNI directo
      if (c.length <= 8) {
        const kDni = `${zona}|${c}`;
        if (!idxByZonaDni.has(kDni)) idxByZonaDni.set(kDni, l);
      }
    });

    // ✅ Completo cada cliente
    const clientesFix = detalleClientes.map((c) => {
      // en tu pantalla dice "Zona PIT", pero igual lo dejo robusto:
      const zona = String(c.zona ?? "PIT").trim().toUpperCase(); // si no viene, asumimos PIT

      const yaTieneDatos =
        !esVacio(c.fraccion) ||
        !esVacio(c.manzana) ||
        !esVacio(c.lote) ||
        !esVacio(c.parcela);

      if (yaTieneDatos) return c;

      const cuil = normDigits(c.cuil_cuit);
      const keyCuit = `${zona}|${cuil}`;

      // 1) Por CUIT
      let loteReal = idxByZonaCuit.get(keyCuit);

      // 2) Por DNI
      if (!loteReal) {
        const dni = cuil.length === 11 ? cuil.slice(2, 10) : cuil;
        loteReal = idxByZonaDni.get(`${zona}|${dni}`);
      }

      // 3) Por NOMBRE (fallback)
      if (!loteReal) {
        const nombre = normNombre(`${c.nombre ?? ""} ${c.apellido ?? ""}`);
        loteReal = idxByZonaNombre.get(`${zona}|${nombre}`);
      }

      if (!loteReal) return c;

      return {
        ...c,
        fraccion: esVacio(c.fraccion) ? loteReal.fraccion : c.fraccion,
        manzana: esVacio(c.manzana) ? loteReal.manzana : c.manzana,
        // PIT suele usar parcela (y si no, a veces usan lote). IC3 suele usar lote.
        parcela: esVacio(c.parcela) ? loteReal.parcela : c.parcela,
        lote: esVacio(c.lote) ? loteReal.lote : c.lote,
      };
    });

    setClientes(clientesFix);
    setFiltered(clientesFix);
    setResumen(resumenGeneral);
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

  const handleOpenDetalle = (cliente) => {
    setDetalleCliente(cliente); // base
    setOpenDetalle(true);
  };

  const handleCloseDetalle = () => {
    setOpenDetalle(false);
    setDetalleCliente(null);
  };

  // ✅ Conectá acá tu endpoint real que trae fraccion/manzana/lote/parcela
  // (cambiá SOLO el nombre del método si en tu service se llama distinto)
  const getDetalleCliente = async (cuil) => {
    // ejemplo:
    return await servicioClientes.detalle(cuil);
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
          gap: 2,
        }}
      >
        <PeopleRoundedIcon />
        <Box>
          <Typography fontWeight={900}>Estado de cuotas - Zona PIT</Typography>
          <Typography fontSize={13} sx={{ opacity: 0.9 }}>
            Deudores y cuotas pagadas por cliente
          </Typography>
        </Box>
      </Paper>

      {/* ===== RESUMEN ===== */}
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
            border: `1px solid ${alpha("#0b4f6c", 0.12)}`,
          }}
        >
          <Chip label={`Debe: ${resumen.debe}`} color="error" />
          <Chip label={`Pagadas: ${resumen.pagadas}`} color="success" />
          <Chip label={`Total: ${resumen.total}`} />
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
          border: `1px solid ${alpha("#0b4f6c", 0.12)}`,
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
                  "LIQUIDADAS",
                  "DEBE",
                  "PAGADAS",
                  "TOTAL DEVENGADO",
                  "TOTAL PAGADO",
                  "DEUDA",
                  "DETALLE",
                ].map((h) => (
                  <TableCell
                    key={h}
                    sx={{
                      backgroundColor: "#0799b6",
                      color: "#fff",
                      fontWeight: 900,
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
                        backgroundColor: alpha("#0f7f86", 0.03),
                      },
                    }}
                  >
                    <TableCell
                      sx={{ fontWeight: 700, color: "#063a52", cursor: "pointer" }}
                      onClick={() => navigate(`/usuario2/detalleclic3/${c.cuil_cuit}`)}
                    >
                      {c.cuil_cuit}
                    </TableCell>

                    <TableCell>
                      {c.nombre} {c.apellido}
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

                    <TableCell sx={{ fontWeight: 700 }}>
                      {Number(c.total_devengado).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </TableCell>

                    <TableCell sx={{ fontWeight: 700 }}>
                      {Number(c.pagado).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </TableCell>

                    <TableCell sx={{ fontWeight: 700 }}>
                      {(Number(c.total_devengado) - Number(c.pagado)).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </TableCell>

                    {/* ✅ DETALLE AL FINAL */}
                    <TableCell>
                      {c.cuotasquedebe?.length > 0 ? (
                        <Tooltip title="Ver cuotas adeudadas">
                          <IconButton size="small" onClick={() => handleOpenDetalle(c)}>
                            <ReceiptLongRoundedIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Chip label="Sin deuda" size="small" color="success" />
                      )}
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

      {/* ✅ MODAL APARTE */}
      <ModalDetalleDeudor
        open={openDetalle}
        onClose={handleCloseDetalle}
        clienteBase={detalleCliente}
        getDetalleCliente={getDetalleCliente}
      />
    </Box>
  );
};

export default Deudores;
