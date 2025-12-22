import { useState, useEffect } from "react";
import servicioClientes from "../../../../services/clientes";
import Nuevo from "./ClienteNuevo";
import CargaDeTabla from "../../../CargaDeTabla";
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

const Alert = (props) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const Lotes = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderCuota, setOrderCuota] = useState("asc"); // asc | desc
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const data = await servicioClientes.listaic3({});
    setClients(data);
    setFilteredClients(data);
    setLoading(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = clients.filter(
      (c) =>
        c.cuil_cuit?.toLowerCase().includes(value) ||
        c.Nombre?.toLowerCase().includes(value)
    );

    setFilteredClients(filtered);
    setPage(0);
  };
const parseCuota = (cuota) => {
  if (!cuota) return 0;
  const [mes, anio] = cuota.split("/").map(Number);
  return anio * 100 + mes; // ej: 202707
};
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) return <CargaDeTabla />;

  return (
    <div>
      {/* ALERT */}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Alert severity="info" sx={{ backgroundColor: "#148d8d" }}>
          Cantidad de clientes: {clients.length}
        </Alert>
      </Stack>

      <br />

      {/* NUEVO CLIENTE */}
     
      <Box
  sx={{
    display: "flex",
    justifyContent: "flex-end",
    mb: 2,
  }}>
 
<Button variant="contained" justify-content="flex-end"
        sx={{
          px: 2.2,
          py: 1.1,
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 700,
          backgroundColor: '#01567c',
          boxShadow: '0 10px 25px rgba(1,86,124,0.25)',
          '&:hover': { backgroundColor: '#014a6b' }
        }}startIcon={<PersonAddAlt1Icon />} onClick={() => navigate("/usuario2/nuevocliente/")}>
        AGREGAR CLIENTE
      </Button>  </Box>


    <Box
  sx={{
    display: "flex",
    mb: 3,
  }}
>
  <TextField
    label="Buscar por CUIL, nombre o razón"
    variant="outlined"
    size="small"
    value={search}
    onChange={handleSearch}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon sx={{ color: "#148D8D" }} />
        </InputAdornment>
      ),
    }}
    sx={{
      width: "320px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",

      "& .MuiOutlinedInput-root": {
        borderRadius: "12px",

        "& fieldset": {
          borderColor: "#e0e0e0",
        },

        "&:hover fieldset": {
          borderColor: "#148D8D",
        },

        "&.Mui-focused fieldset": {
          borderColor: "#01567c",
          borderWidth: "2px",
        },
      },

      "& .MuiInputLabel-root": {
        color: "#666",
      },

      "& .MuiInputLabel-root.Mui-focused": {
        color: "#01567c",
      },
    }}
  />
</Box>

      {/* TABLA */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#0799b6" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                CUIL / CUIT
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                NOMBRE
                </TableCell>
             <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                RIESGO
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                RAZÓN SOCIAL
              </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
  <Button
    onClick={() => {
      const sorted = [...filteredClients].sort((a, b) => {
        const aVal = parseCuota(a.ultimaCuota);
        const bVal = parseCuota(b.ultimaCuota);

        return orderCuota === "asc" ? aVal - bVal : bVal - aVal;
      });

      setFilteredClients(sorted);
      setOrderCuota(orderCuota === "asc" ? "desc" : "asc");
    }}
    sx={{
      color: "white",
      fontWeight: "bold",
      textTransform: "none",
    }}
  >
    ULTIMA CUOTA {orderCuota === "asc" ? "⬆" : "⬇"}
  </Button>
</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              OPCIONES
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredClients
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((client, index) => {
                const value = client.porcentaje || 0;
                let emoji = "⚪";
                if (value > 0 && value <= 58) emoji = "🟢";
                else if (value > 59 && value <= 70) emoji = "🟡";
                else if (value > 70) emoji = "🔴";

                return (
                  <TableRow key={index} hover>
                    <TableCell
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate(
                          client.zona === "IC3"
                            ? `/usuario2/detalleclic3/${client.cuil_cuit}`
                            : `/usuario2/detallecliente/${client.cuil_cuit}`
                        )
                      }
                    >
                      {client.cuil_cuit}
                    </TableCell>

                    <TableCell
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate(
                          client.zona === "IC3"
                            ? `/usuario2/detalleclic3/${client.cuil_cuit}`
                            : `/usuario2/detallecliente/${client.cuil_cuit}`
                        )
                      }
                    >
                      {client.Nombre}
                    </TableCell>

                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <span>{emoji}</span>
                        <LinearProgress
                          variant="determinate"
                          value={value}
                          sx={{ flex: 1 }}
                        />
                        <span>{value}%</span>
                      </Box>
                    </TableCell>

                   <TableCell>{client.razon}</TableCell>
<TableCell>{client.ultimaCuota}</TableCell>

<TableCell>
  <Tooltip title="Editar cliente">
    <Button
      variant="contained"
      size="small"
      onClick={() =>
        navigate(`/usuario2/modificarcliente/${client.cuil_cuit}`)
      }
      sx={{
        backgroundColor: "#01567c",
        marginRight: "8px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#01445f",
        },
      }}
    >
      Editar
    </Button>
  </Tooltip>

  <Tooltip title="Ver detalle">
    <Button
      variant="contained"
      size="small"
      onClick={() =>
        navigate(`/usuario2/detallecliente/${client.cuil_cuit}`)
      }
      sx={{
        backgroundColor: "#148D8D",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#0f6f6f",
        },
      }}
    >
      Ver
    </Button>
  </Tooltip>
</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={filteredClients.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página:"
        />
      </TableContainer>
    </div>
  );
};

export default Lotes;
 


