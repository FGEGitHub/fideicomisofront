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

const Alert = (props) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

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

  const handleChangePage = (_, newPage) => setPage(newPage);

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
      <Nuevo
        getClients={async () => {
          const data = await servicioClientes.listaic3({});
          setClients(data);
          setFilteredClients(data);
        }}
      />

      {/* BUSCADOR */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <TextField
          label="Buscar por CUIL o nombre"
          size="small"
          value={search}
          onChange={handleSearch}
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
                ÚLTIMA CUOTA
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                ACCIONES
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredClients
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((client, index) => (
                <TableRow key={index} hover>
                  {/* CUIL */}
                  <TableCell
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(
                        `/usuario2/detalleclic3/${client.cuil_cuit}`
                      )
                    }
                  >
                    {client.cuil_cuit}
                  </TableCell>

                  {/* NOMBRE */}
                  <TableCell
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(
                        `/usuario2/detalleclic3/${client.cuil_cuit}`
                      )
                    }
                  >
                    {client.Nombre}
                  </TableCell>

                  {/* ULTIMA CUOTA */}
                  <TableCell>
                    {client.mes}/{client.anio}
                  </TableCell>

                  {/* ACCIONES */}
                  <TableCell>
                    <Tooltip title="Editar">
                      <EditIcon
                        onClick={() =>
                          navigate(
                            `/usuario2/modificarcliente/${client.cuil_cuit}`
                          )
                        }
                        sx={{
                          mr: 1,
                          cursor: "pointer",
                          color: "#1e88e5",
                        }}
                      />
                    </Tooltip>

                    <Tooltip title="Ver">
                      <SearchIcon
                        onClick={() =>
                          navigate(
                            `/usuario2/detalleclic3/${client.cuil_cuit}`
                          )
                        }
                        sx={{ cursor: "pointer", color: "#009688" }}
                      />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* PAGINACIÓN */}
        <TablePagination
          component="div"
          count={filteredClients.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15]}
          labelRowsPerPage="Filas por página:"
        />
      </TableContainer>
    </div>
  );
};

export default Lotes;
 


