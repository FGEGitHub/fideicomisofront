import { useState, useEffect } from "react";
import * as React from "react";
import servicioCuotas from "../../../services/cuotas";
import CancelarLote from "./cancelarLote";
import Pagorapido from "./pagaric3";

import { useNavigate } from "react-router-dom";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Paper, Button, Box, Typography, Divider } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import { styled, alpha } from "@mui/material/styles";

import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@mui/icons-material/Search";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#064B63",
    color: "#fff",
    fontWeight: 900,
    fontSize: 12.5,
    letterSpacing: 0.35,
    borderBottom: "0px",
    whiteSpace: "nowrap",
    paddingTop: 14,
    paddingBottom: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13.5,
    fontWeight: 650,
    color: "#0b2b3a",
    borderBottom: `1px solid ${alpha("#01567c", 0.10)}`,
    paddingTop: 14,
    paddingBottom: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: alpha("#148D8D", 0.04),
  },
  "&:hover td": {
    backgroundColor: `${alpha("#148D8D", 0.08)} !important`,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Lotes = (props) => {
  const [clients, setClients] = useState();
  const [loading, setLoading] = useState(true);
  const [cuotas, setCuotas] = useState();
  const [filteredCuotas, setFilteredCuotas] = useState([]);
  const [uniqueClients, setUniqueClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showCuotas, setShowCuotas] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const response = await servicioCuotas.traercuotasic3(props.cuil_cuit);
    console.log(response);
    setCuotas(response);
    setFilteredCuotas(response);
    const clients = [...new Set(response.map((cuota) => cuota.id_cliente))];
    setUniqueClients(clients);
    setLoading(false);
  };

  const handleClientFilter = (id_cliente) => {
    console.log("Filtrando por id_cliente:", id_cliente);
    setShowCuotas(true);
    setSelectedClient(id_cliente);

    if (id_cliente === null) {
      setFilteredCuotas(cuotas);
    } else {
      console.log("Cuotas antes del filtro:", cuotas);
      const nuevasCuotas = cuotas.filter((cuota) => cuota.id_cliente === id_cliente);
      console.log("Cuotas después del filtro:", nuevasCuotas);
      setFilteredCuotas(nuevasCuotas);
    }
  };

  function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
    return (
      <>
        <Tooltip title="Editar">
          <EditIcon
            onClick={() => navigate("/usuario2/modificarcliente/" + clients[dataIndex].cuil_cuit)}
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip title="Ver">
          <SearchIcon
            onClick={() => navigate("/usuario2/detallecliente/" + clients[dataIndex].cuil_cuit)}
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
        </Tooltip>
      </>
    );
  }

  const calcularResumenFinanciero = () => {
    const totalPagado = filteredCuotas.reduce(
      (acc, cuota) => acc + (parseFloat(cuota.pago) || 0),
      0
    );
    const totalCuotas = filteredCuotas.reduce(
      (acc, cuota) => acc + (parseFloat(cuota.cuota_con_ajuste) || 0),
      0
    );
    const diferencia = totalCuotas - totalPagado;
    const cuotasCalculadas = filteredCuotas.filter((fila) => !isNaN(fila.ajuste)).length;
    const cuotasNoCalculadas = filteredCuotas.filter((fila) => isNaN(fila.ajuste)).length;

    return {
      totalPagado: totalPagado.toFixed(2),
      totalCuotas: totalCuotas,
      diferencia: diferencia.toFixed(2),
      cuotasCalculadas: cuotasCalculadas,
      cuotasNoCalculadas: cuotasNoCalculadas,
    };
  };

  return (
    <Box
      sx={{
        p: { xs: 1.5, md: 3 },
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
      }}
    >
      {/* ===== HEADER CARD (como imagen) ===== */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          border: `1px solid ${alpha("#0b4f6c", 0.14)}`,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 22px 55px rgba(15, 127, 134, 0.10)",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, md: 3 },
            py: { xs: 2, md: 2.5 },
            background: "linear-gradient(90deg, #0a3b4f 0%, #0b4f6c 55%, #0f7f86 100%)",
            color: "#fff",
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: 18, md: 22 },
                lineHeight: 1.1,
                textShadow: "0 2px 10px rgba(0,0,0,0.35)",
              }}
            >
              CUADRO DE CUOTAS
            </Typography>

            <Typography
              sx={{
                mt: 0.35,
                fontWeight: 650,
                opacity: 0.9,
                fontSize: 14,
                textShadow: "0 1px 6px rgba(0,0,0,0.25)",
              }}
            >
              {/* No invento datos: solo texto UI */}
              Seleccioná un cliente para ver sus cuotas.
            </Typography>
          </Box>

        </Box>

        {/* BOTONES FILTRO (como imagen) */}
        <Box sx={{ px: { xs: 2, md: 3 }, py: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexWrap: "wrap",
            }}
          >
            <FormControl
              size="small"
              sx={{
                minWidth: 260,
                "& .MuiInputLabel-root": {
                  color: alpha("#0b4f6c", 0.85),
                  fontWeight: 800,
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.92)",
                  boxShadow: "0 12px 22px rgba(11,79,108,0.10)",
                  "& fieldset": {
                    borderColor: alpha("#0b4f6c", 0.18),
                  },
                  "&:hover fieldset": {
                    borderColor: alpha("#0b4f6c", 0.35),
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#148D8D",
                    borderWidth: 2,
                  },
                },
              }}
            >
              <InputLabel id="cliente-select-label">Cliente</InputLabel>

              <Select
                labelId="cliente-select-label"
                label="Cliente"
                value={selectedClient === null ? "ALL" : selectedClient}
                onChange={(e) => {
                  const v = e.target.value;
                  handleClientFilter(v === "ALL" ? null : v);
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      borderRadius: 2,
                      mt: 1,
                      border: `1px solid ${alpha("#0b4f6c", 0.12)}`,
                      boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                    },
                  },
                }}
              >
                <MenuItem value="ALL" sx={{ fontWeight: 800 }}>
                  Todos
                </MenuItem>

                {uniqueClients.map((id_cliente) => (
                  <MenuItem key={id_cliente} value={id_cliente} sx={{ fontWeight: 750 }}>
                    Cliente {id_cliente}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Chip informativo opcional (ya existía algo similar) */}
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Box
                sx={{
                  px: 1.25,
                  py: 0.75,
                  borderRadius: 999,
                  fontWeight: 900,
                  fontSize: 12.5,
                  color: "#0b4f6c",
                  background: alpha("#0f7f86", 0.10),
                  border: `1px solid ${alpha("#0f7f86", 0.16)}`,
                }}
              >
                Registros: {filteredCuotas?.length || 0}
              </Box>
            </Box>
          </Box>


          <Divider sx={{ mt: 2, borderColor: alpha("#0b4f6c", 0.12) }} />
        </Box>
      </Paper>

      {/* ===== CONTENIDO ===== */}
      <Paper
        elevation={0}
        sx={{
          mt: { xs: 2, md: 3 },
          borderRadius: 4,
          overflow: "hidden",
          border: `1px solid ${alpha("#01567c", 0.12)}`,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 22px 55px rgba(20, 141, 141, 0.10)",
        }}
      >
        {!cuotas ? (
          <Box sx={{ p: 2 }}>
            <Skeleton height={42} />
            <Skeleton height={42} />
            <Skeleton height={42} />
          </Box>
        ) : (
          <>
            {showCuotas ? (
              <>
                {/* Mantengo tu componente tal cual */}


                {/* Tu recuadro de estado financiero (mismos cálculos, solo diseño) */}
                <Box sx={{ px: { xs: 2, md: 3 }, pt: 2 }}>
                  {(() => {
                    const resumen = calcularResumenFinanciero();
                    return (
                      <Paper
                        elevation={0}
                        sx={{
                          borderRadius: 3,
                          overflow: "hidden",
                          border: `1px solid ${alpha("#0b4f6c", 0.12)}`,
                          background: "#fff",
                          boxShadow: "0 18px 45px rgba(0,0,0,0.06)",
                        }}
                      >
                        <Box
                          sx={{
                            px: 2.2,
                            py: 1.4,
                            backgroundColor: "#064B63",
                            color: "#fff",
                          }}
                        >
                          <Typography sx={{ fontWeight: 900 }}>
                            Estado Financiero del Cliente {selectedClient}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            p: 2,
                            display: "grid",
                            gap: 1.2,
                          }}
                        >
                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: 700, color: "#0b2b3a" }}>
                              Cuotas calculadas
                            </Typography>
                            <Typography sx={{ fontWeight: 900, color: "#0b4f6c" }}>
                              {resumen.cuotasCalculadas}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: 700, color: "#0b2b3a" }}>
                              Cuotas no calculadas
                            </Typography>
                            <Typography sx={{ fontWeight: 900, color: "#0b4f6c" }}>
                              {resumen.cuotasNoCalculadas}
                            </Typography>
                          </Box>

                          <Divider sx={{ borderColor: alpha("#01567c", 0.12) }} />

                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: 700, color: "#0b2b3a" }}>
                              Total Pagado
                            </Typography>
                            <Typography sx={{ fontWeight: 900, color: "#148D8D" }}>
                              ${resumen.totalPagado}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: 700, color: "#0b2b3a" }}>
                              Total Cuotas con Ajuste
                            </Typography>
                            <Typography sx={{ fontWeight: 900, color: "#148D8D" }}>
                              ${new Intl.NumberFormat("de-DE").format(resumen.totalCuotas)}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={{ fontWeight: 800, color: "#0b2b3a" }}>
                              Diferencia
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 900,
                                color:
                                  parseFloat(resumen.diferencia) < 0
                                    ? "crimson"
                                    : "#148D8D",
                              }}
                            >
                              ${resumen.diferencia}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    );
                  })()}<Box
                    sx={{
                      px: { xs: 2, md: 3 },
                      pt: 2,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <CancelarLote id_cliente={selectedClient} cuotas={filteredCuotas} />
                  </Box>

                </Box>

                {/* TABLA (como imagen) */}
                <Box sx={{ px: { xs: 1.5, md: 2 }, pt: 2, pb: 2 }}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      border: `1px solid ${alpha("#01567c", 0.10)}`,
                      overflow: "hidden",
                      background: "#fff",
                    }}
                  >
                    <Box
                      sx={{
                        maxHeight: "56vh",
                        overflowY: "auto",
                        "&::-webkit-scrollbar": { width: 10 },
                        "&::-webkit-scrollbar-thumb": {
                          background: alpha("#0b4f6c", 0.28),
                          borderRadius: 999,
                        },
                      }}
                    >
                      <Table stickyHeader>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell sx={{ width: "7%" }}><b>ID</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "7%" }}><b>CUOTA</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "7%" }}><b>FECHA</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "10%" }}><b>SALDO INICIAL</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "8%" }}><b>ICC</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "8%" }}><b>AJUSTE</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "10%" }}><b>CUOTA CON AJUSTE</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "10%" }}><b>PAGO</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "10%" }}><b>SALDO FINAL</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "10%" }}><b>SALDO REAL</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "10%" }}><b>DIFERENCIA</b></StyledTableCell>
                            <StyledTableCell sx={{ width: "10%" }}><b>PAGAR / VER PAGO</b></StyledTableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {filteredCuotas.map((row) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell>{row.id_cliente}</StyledTableCell>
                              <StyledTableCell>{row.cuota}</StyledTableCell>
                              <StyledTableCell>
                                {row.mes < 10 ? <>0{row.mes}</> : <>{row.mes}</>}/{row.anio}
                              </StyledTableCell>

                              <StyledTableCell>
                                <span style={{ whiteSpace: "nowrap" }}>
                                  $ <b>{new Intl.NumberFormat("de-DE").format(row.saldo_inicial)}</b>
                                </span>
                              </StyledTableCell>

                              <StyledTableCell>{parseFloat(row.ajuste_icc).toFixed(3)}</StyledTableCell>
                              <StyledTableCell>{row.ajuste}</StyledTableCell>

                              <StyledTableCell>
                                <span style={{ whiteSpace: "nowrap" }}>
                                  $ <b>{new Intl.NumberFormat("de-DE").format(row.cuota_con_ajuste)}</b>
                                </span>
                              </StyledTableCell>

                              <StyledTableCell>
                                <span style={{ whiteSpace: "nowrap" }}>
                                  $ <b>{new Intl.NumberFormat("de-DE").format(row.pago)}</b>
                                </span>
                              </StyledTableCell>

                              <StyledTableCell>
                                <span style={{ whiteSpace: "nowrap" }}>
                                  $ <b>{new Intl.NumberFormat("de-DE").format(row.saldo_final)}</b>
                                </span>
                              </StyledTableCell>

                              <StyledTableCell>
                                <span style={{ whiteSpace: "nowrap" }}>
                                  $ <b>{new Intl.NumberFormat("de-DE").format(row.saldo_real)}</b>
                                </span>
                              </StyledTableCell>

                              <StyledTableCell>
                                {row.excedente < 0 ? (
                                  <Typography sx={{ m: 0, fontWeight: 900, color: "crimson", whiteSpace: "nowrap" }}>
                                    {new Intl.NumberFormat("de-DE").format(row.excedente)}
                                  </Typography>
                                ) : (
                                  <Typography sx={{ m: 0, fontWeight: 900, color: "#148D8D", whiteSpace: "nowrap" }}>
                                    {new Intl.NumberFormat("de-DE").format(row.excedente)}
                                  </Typography>
                                )}
                              </StyledTableCell>

                              <StyledTableCell align="center">
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  {/* NO toco lógica del componente Pagorapido */}
                                  <Box
                                    sx={{
                                      "& .MuiButtonBase-root": {
                                        borderRadius: 2,
                                        px: 2,
                                        py: 0.9,
                                        fontWeight: 900,
                                        textTransform: "none",
                                        boxShadow: "0 10px 18px rgba(0,0,0,0.08)",
                                      },
                                    }}
                                  >
                                    <Pagorapido
                                      id_cuota={row.id}
                                      cuota_con_ajuste={row.cuota_con_ajuste}
                                      traer={async () => {
                                        const clients = await servicioCuotas.traercuotasic3(props.cuil_cuit);
                                        setCuotas(clients);
                                        setLoading(false);
                                        if (selectedClient === null) {
                                          setFilteredCuotas(clients);
                                        } else {
                                          console.log("Cuotas antes del filtro:", clients);
                                          const nuevasCuotas = clients.filter(
                                            (cuota) => cuota.id_cliente === selectedClient
                                          );
                                          console.log("Cuotas después del filtro:", nuevasCuotas);
                                          setFilteredCuotas(nuevasCuotas);
                                        }
                                      }}
                                    />
                                  </Box>

                                  <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() => navigate("/usuario2/pagoscuotasic3/" + row.id)}
                                    sx={{
                                      borderRadius: 2,
                                      
                                      textTransform: "none",
                                      fontWeight: 900,
                                      background: "#0b4f6c",
                                      "&:hover": { background: "#0a3b4f" },
                                    }}
                                  >
                                    Ver pagos
                                  </Button>
                                </Box>
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Box>
                </Box>
              </>
            ) : (
              <Box sx={{ p: 3 }}>
                Debes seleccionar el cliente, para poder acceder a su cuadro de cuotas correspondiente.
              </Box>
            )}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Lotes;
