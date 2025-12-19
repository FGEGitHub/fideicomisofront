import { useState, useEffect } from "react";
import servicioClientes from "../../../services/clientes";
import Nuevo from "./ClienteNuevo";
import CargaDeTabla from "../../CargaDeTabla";
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
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

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const Lotes = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const data = await servicioClientes.lista({});
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
        c.Nombre?.toLowerCase().includes(value) ||
        c.razon?.toLowerCase().includes(value)
    );
    setFilteredClients(filtered);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) return <CargaDeTabla />;

  return (
    <div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Alert
          severity="info"
          sx={{ backgroundColor: "#148d8d", color: "#ffffff" }}
        >
          Cantidad de clientes: {clients.length}
        </Alert>
      </Stack>

      <br />

      <Nuevo
        getClients={async () => {
          const data = await servicioClientes.lista({});
          setClients(data);
          setFilteredClients(data);
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 2,
        }}
      >
        <TextField
          label="Buscar por CUIL, nombre o razón"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearch}
        />
      </Box>

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
              ULTIMA CUOTA
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                VER / EDITAR
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
                      <Tooltip title="Editar">
                        <EditIcon
                          onClick={() =>
                            navigate(
                              `/usuario2/modificarcliente/${client.cuil_cuit}`
                            )
                          }
                          sx={{
                            marginRight: "10px",
                            cursor: "pointer",
                            color: "#1e88e5",
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Ver">
                        <SearchIcon
                          onClick={() =>
                            navigate(
                              `/usuario2/detallecliente/${client.cuil_cuit}`
                            )
                          }
                          sx={{ cursor: "pointer", color: "#009688" }}
                        />
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
