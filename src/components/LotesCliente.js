import { useParams } from "react-router-dom";
import servicioLotes from "../services/lotes";
import servicioCuotas from "../services/cuotas";
import servicioAdmin from "../services/Administracion";
import servicio360 from "../services/pagos360";
import AgregarIcc from "./nivel2/Icc_cuota/AgregarICCCuota";
import AgregaraCuotas from "./nivel2/Asignarcuotasalote";
import BorrarCuotas from "./nivel2/borrarcuotas/BorrarCuotas";
import CancelarLote from "./pagarloteparque";
import { Tooltip } from "@mui/material";
import Switch from "@mui/material/Switch";
import Pagointeres from "./nivel2/pagarcuota/modalpagointeres";
import React, { useEffect, useState, Fragment } from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import MUIDataTable from "mui-datatables";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Skeleton from "@mui/material/Skeleton";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { MenuItem, InputLabel } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Pagorapido from "./nivel2/pagarcuota/modalpagorapido";
import Adelantar from "./nivel2/pagarcuota/adelantarcuotaparque";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

////// TABLA CUOTAS (azul fijo)
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#014A6B",
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    borderBottom: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "0.78rem",
    color: "#1f2a33",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f7fbfd",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#ffffff",
  },
  "&:hover": {
    backgroundColor: "#e6f4f8",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const LotesCliente = (props) => {
  let params = useParams();
  let cuil_cuit = params.cuil_cuit;
  const navigate = useNavigate();

  useEffect(() => {
    traer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [lotes, setLotes] = useState([""]);
  const [cuotas, setCuotas] = useState([""]);
  const [open, setOpen] = React.useState(false);
  const [deudaExigible, setDeudaExigible] = useState([""]);
  const [detallePendiente, setDetallePendiente] = useState([""]);
  const [idlote, setIdlote] = useState(null);
  const [selectedValue, setSelectedValue] = useState();
  const [act, setAct] = useState(false);
  const [act2, setAct2] = useState(false);
  const [vista1, setVista1] = useState(false);
  const [cargalink, setCargalink] = useState(false);
  const [verDetalles, setVerDetalles] = useState(false);

  const toggleDetalles = () => setVerDetalles(!verDetalles);

  const vercuotas = async (index) => {
    const cuotas = await servicioCuotas.vercuotas(index);
    setCuotas(cuotas);
    setIdlote(index);
    setAct(true);
    verief(index);
    setOpen(false);
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChange = () => setAct(!act);
  const handleChange2 = () => setAct2(!act2);
  const Vista1 = () => setVista1(!vista1);

  const handleChangeratio = (event) => setSelectedValue(event.target.value);

  const verief = async (index) => {
    const dde = await servicioCuotas.verief(index);
    setDeudaExigible(dde[0]);
    setDetallePendiente(dde[1]);
    setAct2(true);
    setOpen(false);
  };

  const traer = async () => {
    const lotes = await servicioLotes.lotesCliente(props.cuil_cuit);
    setLotes(lotes);
  };

  const borrar = async (id) => {
    const rta = await servicioCuotas.borrarcuota(id);
    alert(rta);
  };

  const traerlink = async (index) => {
    const dde = await servicioAdmin.traerlinkcuota(index);
    window.open(dde);
  };

  const traerlink360 = async (index) => {
    setCargalink(true);
    const dde = await servicio360.traerlink360(index);
    window.open(dde);
    setCargalink(false);
  };

  const crearsolicituddebito = async (index) => {
    const dde = await servicio360.crearsolicituddebito({ id_cuota: index });
    alert(dde);
  };

  function saldoReal(dataIndex) {
    return (
      <>
        {cuotas[dataIndex].parcialidad === "Final" ? (
          "$ " +
          new Intl.NumberFormat("de-DE").format(cuotas[dataIndex].Saldo_real)
        ) : (
          <div>No Calculado</div>
        )}
      </>
    );
  }

  function pago(dataIndex) {
    return (
      <>
        {cuotas[dataIndex].parcialidad === "Final" ? (
          "$ " + new Intl.NumberFormat("de-DE").format(cuotas[dataIndex].pago)
        ) : (
          <div>No Calculado</div>
        )}
      </>
    );
  }

  function saldoInicial(dataIndex) {
    return (
      <>
        {cuotas[dataIndex].parcialidad === "Final" ? (
          "$ " +
          new Intl.NumberFormat("de-DE").format(cuotas[dataIndex].saldo_inicial)
        ) : (
          <div>No Calculado</div>
        )}
      </>
    );
  }

  function cuotaConAjuste(dataIndex) {
    return (
      <>
        {cuotas[dataIndex].parcialidad === "Final" ? (
          "$ " +
          new Intl.NumberFormat("de-DE").format(
            cuotas[dataIndex].cuota_con_ajuste
          )
        ) : (
          <div>No Calculado</div>
        )}
      </>
    );
  }

  function fecha(dataIndex) {
    return <>{cuotas[dataIndex].mes + "/" + cuotas[dataIndex].anio}</>;
  }

  function diferencia(dataIndex) {
    return (
      <>
        {cuotas[dataIndex].diferencia >= 0 ? (
          <p style={{ color: "#148D8D", fontWeight: 900, margin: 0 }}>
            {new Intl.NumberFormat("de-DE").format(cuotas[dataIndex].diferencia)}
          </p>
        ) : (
          <p style={{ color: "#d32f2f", fontWeight: 900, margin: 0 }}>
            {new Intl.NumberFormat("de-DE").format(cuotas[dataIndex].diferencia)}
          </p>
        )}
      </>
    );
  }

  function PagomercadoP(dataIndex) {
    return (
      <>
        <Button onClick={() => traerlink(cuotas[dataIndex].id)}>
          Pagar mercado Pago
        </Button>
      </>
    );
  }

  function Pago360(dataIndex) {
    return (
      <>
        <Button onClick={() => traerlink360(cuotas[dataIndex].id)}>
          Pagar 360
        </Button>
      </>
    );
  }

  function Pagodebito360(dataIndex) {
    return (
      <>
        <Button onClick={() => crearsolicituddebito(cuotas[dataIndex].id)}>
          debito en 360
        </Button>
      </>
    );
  }

  function CutomButtonsRenderer(dataIndex) {
    return (
      <>
        <CurrencyExchangeIcon
          onClick={() => navigate("/usuario2/pagarcuota/" + cuotas[dataIndex].id)}
          style={{ marginRight: "10px", cursor: "pointer" }}
        />
        <SearchIcon
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/usuario2/pagoscuotas/" + cuotas[dataIndex].id)}
        />
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={() => borrar(cuotas[dataIndex].id)}
        />
        <AgregarIcc
          id={cuotas[dataIndex].id}
          traer={async () => {
            const lotes = await servicioLotes.lotesCliente(props.cuil_cuit);
            setLotes(lotes);
          }}
        />
      </>
    );
  }

  const columns = [
    {
      name: "Fecha",
      options: {
        customBodyRenderLite: (dataIndex) => fecha(dataIndex),
      },
    },
    {
      name: "Saldo Inicial",
      options: {
        customBodyRenderLite: (dataIndex) => saldoInicial(dataIndex),
      },
    },
    { name: "Amortizacion", label: "Amortizacion" },
    { name: "ICC", label: "ICC" },
    { name: "Ajuste_ICC", label: "Ajuste ICC" },
    {
      name: "Cuota con ajuste",
      options: {
        customBodyRenderLite: (dataIndex) => cuotaConAjuste(dataIndex),
      },
    },
    { name: "saldo_cierre", label: "Saldo Cierre" },
    {
      name: "Pago",
      options: {
        customBodyRenderLite: (dataIndex) => pago(dataIndex),
      },
    },
    {
      name: "Saldo Real",
      options: {
        customBodyRenderLite: (dataIndex) => saldoReal(dataIndex),
      },
    },
    {
      name: "Diferencia",
      options: {
        customBodyRenderLite: (dataIndex) => diferencia(dataIndex),
      },
    },
    {
      name: "Acciones",
      options: {
        customBodyRenderLite: (dataIndex) => CutomButtonsRenderer(dataIndex),
      },
    },
    {
      name: "Beta pago Mercadop",
      options: {
        customBodyRenderLite: (dataIndex) => PagomercadoP(dataIndex),
      },
    },
    {
      name: "Beta pago 360",
      options: {
        customBodyRenderLite: (dataIndex) => Pago360(dataIndex),
      },
    },
    {
      name: "Pagodebito360",
      options: {
        customBodyRenderLite: (dataIndex) => Pagodebito360(dataIndex),
      },
    },
  ];

  return (
    <Fragment>
      <br />

      {lotes ? (
        <>
          {lotes.length > 0 ? (
            <>
              {/* dejo sx acá porque es @mui/material y no rompe; si querés lo paso a style también */}
              <FormControl sx={{ m: 1, minWidth: 140 }}>
                <div>
                  {selectedValue ? (
                    <>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Lote
                      </FormLabel>
                    </>
                  ) : (
                    <>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        <h3>Seleccionar un lote</h3>
                      </FormLabel>
                    </>
                  )}

                  <FormControl fullWidth>
                    <InputLabel id="lotes-select-label">
                      Seleccionar Lote
                    </InputLabel>
                    <Select
                      labelId="lotes-select-label"
                      value={selectedValue}
                      onChange={handleChangeratio}
                    >
                      {lotes.map((item, index) => (
                        <MenuItem
                          key={index}
                          value={`Fraccion: ${item.fraccion} - Manzana: ${item.manzana} - Parcela: ${item.parcela}${
                            item.tiene_cuotas === "Si" ? " - Cuotas" : ""
                          }`}
                          onClick={() => vercuotas(item.id)}
                        >
                          Fraccion: {item.fraccion} - Manzana: {item.manzana} -
                          Parcela: {item.parcela}
                          {item.tiene_cuotas === "Si" ? " - Cuotas" : ""}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      <div>
        {act ? (
          <div>
            {/* BOTONES ARRIBA */}
            <div style={{ marginBottom: "1rem" }}>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button
                  variant="contained"
                 sx={{
          mb: 2,
          px: 2.2,
          py: 1.1,
          borderRadius: 2,
          textTransform: 'none',
          fontWeight: 700,
          backgroundColor: '#01567c',
          boxShadow: '0 10px 25px rgba(1,86,124,0.25)',
          '&:hover': { backgroundColor: '#014a6b' }
        }}
                  onClick={() => navigate("/usuario2/agregarcuotas/" + idlote)}
                >
                  Agregar cuotas al lote
                </Button>

                <AgregaraCuotas id_origen={idlote} lotes={lotes} />
                <BorrarCuotas id={idlote} />
                <CancelarLote id_lote={idlote} cuotas={cuotas} />

                {cuotas && (
                  <Adelantar
                    id_lote={idlote}
                    cuotas={cuotas}
                    traerr={async () => {
                      const cuotas = await servicioCuotas.vercuotas(idlote);
                      setCuotas(cuotas);
                      setAct(true);
                      verief(idlote);
                      setOpen(false);
                    }}
                  />
                )}
              </Stack>
            </div>

            {cuotas !== "" ? (
              <>
                {vista1 ? (
                  <>
                    <MUIDataTable
                      title={"Lista de cuotas"}
                      data={cuotas}
                      columns={columns}
                      actions={[
                        {
                          icon: "save",
                          tooltip: "Save User",
                          onClick: (event, rowData) =>
                            alert("You saved " + rowData.name),
                        },
                      ]}
                    />
                  </>
                ) : (
                  <>
                    {/* HEADER CUADRO CUOTAS + BOTÓN DERECHA */}
                    <Box
                      style={{
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                        borderBottom: "1px solid #e8eef5",
                        backgroundColor: "#ffffff",
                        width: "100%",
                        flexWrap: "wrap",
                      }}
                    >
                      {/* Izquierda */}
                      <Box style={{ minWidth: 260, flex: "1 1 520px" }}>
                        <Typography
                          style={{
                            fontWeight: 900,
                            fontSize: 25,
                            lineHeight: 1.15,
                            color: "#0a3b4f",
                            marginBottom: 4,
                            whiteSpace: "nowrap",
                          }}
                        >
                          CUADRO DE CUOTAS
                        </Typography>

                        <Typography
                          style={{
                            fontSize: 18,
                            fontWeight: 700,
                            color: "#0a3b4f",
                            lineHeight: 1.3,
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                          }}
                        >
                          {selectedValue
                            ? selectedValue
                            : "Seleccione un lote para ver las cuotas"}
                        </Typography>
                      </Box>

                      {/* Derecha (SIEMPRE a la derecha) */}
                      <Box
                        style={{
                          marginLeft: "auto",
                          display: "flex",
                          justifyContent: "flex-end",
                          flex: "0 0 auto",
                          width: "auto",
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={toggleDetalles}
                          style={{
                            padding: "10px 18px",
                            borderRadius: 10,
                            textTransform: "none",
                            fontWeight: 800,
                            backgroundColor: "#01567c",
                            boxShadow: "0 10px 25px rgba(1,86,124,0.25)",
                            color: "#ffffff",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {verDetalles ? "Restaurar" : "Ver más detalles"}
                        </Button>
                      </Box>
                    </Box>

                    {/* TABLA */}
                    <Paper
                      elevation={0}
                      sx={{
                        width: "100%",
                        borderRadius: 3,
                        border: "1px solid #e8eef5",
                        overflow: "hidden",
                        background: "#ffffff",
                        boxShadow: "0 18px 45px rgba(10,59,79,0.10)",
                      }}
                    >
                      <TableContainer
                        sx={{
                          height: "80vh",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        {!cuotas ? (
                          <Skeleton />
                        ) : (
                          <Table stickyHeader sx={{ minWidth: 1200 }}>
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>Fecha</StyledTableCell>
                                {verDetalles && (
                                  <StyledTableCell>Saldo inicial</StyledTableCell>
                                )}
                                <StyledTableCell>Amortización</StyledTableCell>
                                <StyledTableCell>ICC</StyledTableCell>
                                <StyledTableCell>Ajuste ICC</StyledTableCell>
                                <StyledTableCell>Cuota con ajuste</StyledTableCell>
                                {verDetalles && (
                                  <StyledTableCell>Saldo al cierre</StyledTableCell>
                                )}
                                <StyledTableCell>Pago</StyledTableCell>
                                <StyledTableCell>Diferencia</StyledTableCell>
                                <StyledTableCell>Saldo real</StyledTableCell>
                                <StyledTableCell>Pagar / Ver pago</StyledTableCell>
                                {verDetalles && <StyledTableCell>Interés</StyledTableCell>}
                              </TableRow>
                            </TableHead>

                            <TableBody>
                              {cuotas.map((row) => (
                                <StyledTableRow key={row.id}>
                                  <StyledTableCell>
                                    {row.mes < 10 ? `0${row.mes}` : row.mes}/{row.anio}
                                  </StyledTableCell>

                                  {verDetalles && (
                                    <StyledTableCell>
                                      <span style={{ whiteSpace: "nowrap" }}>
                                        $ <b>{new Intl.NumberFormat("de-DE").format(row.saldo_inicial)}</b>
                                      </span>
                                    </StyledTableCell>
                                  )}

                                  <StyledTableCell>
                                    {row.id >= parseInt(row.cuota_cancelada) ? (
                                      <Chip
                                        label="Cancelado"
                                        size="small"
                                        sx={{
                                          fontWeight: 800,
                                          bgcolor: "rgba(20,141,141,0.12)",
                                          color: "#0f7a7a",
                                          border: "1px solid rgba(20,141,141,0.25)",
                                        }}
                                      />
                                    ) : (
                                      <span style={{ whiteSpace: "nowrap" }}>
                                        $ <b>{new Intl.NumberFormat("de-DE").format(row.Amortizacion)}</b>
                                      </span>
                                    )}
                                  </StyledTableCell>

                                  <StyledTableCell>
                                    {row.id >= parseInt(row.cuota_cancelada) ? "—" : row.ICC}
                                  </StyledTableCell>

                                  <StyledTableCell>
                                    {row.id >= parseInt(row.cuota_cancelada) ? "—" : row.Ajuste_ICC}
                                  </StyledTableCell>

                                  <StyledTableCell>
                                    {row.id >= parseInt(row.cuota_cancelada) ? (
                                      "—"
                                    ) : (
                                      <span style={{ whiteSpace: "nowrap" }}>
                                        $ <b>{new Intl.NumberFormat("de-DE").format(row.cuota_con_ajuste)}</b>
                                      </span>
                                    )}
                                  </StyledTableCell>

                                  {verDetalles && (
                                    <StyledTableCell>
                                      {row.id >= parseInt(row.cuota_cancelada)
                                        ? "—"
                                        : `$ ${new Intl.NumberFormat("de-DE").format(row.saldo_cierre)}`}
                                    </StyledTableCell>
                                  )}

                                  <StyledTableCell>
                                    {row.id >= parseInt(row.cuota_cancelada)
                                      ? "—"
                                      : `$ ${new Intl.NumberFormat("de-DE").format(row.pago)}`}
                                  </StyledTableCell>

                                  <StyledTableCell>
                                    {row.id >= parseInt(row.cuota_cancelada) ? (
                                      "—"
                                    ) : (
                                      <span
                                        style={{
                                          fontWeight: 900,
                                          color:
                                            row.diferencia < 0
                                              ? row.diferencia === -row.cuota_con_ajuste
                                                ? "#d32f2f"
                                                : "#0a3b4f"
                                              : "#148D8D",
                                        }}
                                      >
                                        {new Intl.NumberFormat("de-DE").format(row.diferencia)}
                                        {row.comprobante === "Sin comprobante" && (
                                          <Tooltip title="Pago sin comprobante">
                                            <ErrorOutlineIcon
                                              style={{ marginLeft: 8 }}
                                              color="warning"
                                              fontSize="small"
                                            />
                                          </Tooltip>
                                        )}
                                      </span>
                                    )}
                                  </StyledTableCell>

                                  <StyledTableCell>
                                    {row.id >= parseInt(row.cuota_cancelada)
                                      ? "—"
                                      : `$ ${new Intl.NumberFormat("de-DE").format(row.Saldo_real)}`}
                                  </StyledTableCell>

                                  <StyledTableCell>
                                    {row.id >= parseInt(row.cuota_cancelada) ? (
                                      "—"
                                    ) : (
                                      <Box style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                                        <Pagorapido
                                          id_cuota={row.id}
                                          cuota_con_ajuste={row.cuota_con_ajuste}
                                          id_lote={row.id_lote}
                                          traer={async () => {
                                            const cuotas = await servicioCuotas.vercuotas(idlote);
                                            setCuotas(cuotas);
                                            setAct(true);
                                            verief(idlote);
                                            setOpen(false);
                                          }}
                                        />

                                        <Button
                                          variant="contained"
                                          size="small"
                                          style={{
                                            borderRadius: 8,
                                            textTransform: "none",
                                            fontWeight: 900,
                                            backgroundColor: "#01567c",
                                            boxShadow: "0 10px 25px rgba(1,86,124,0.25)", 
                                            color: "#fff",
                                          }}
                                          onClick={() => navigate("/usuario2/pagoscuotas/" + row.id)}
                                        >
                                          Ver pagos
                                        </Button>

                                        {verDetalles && (
                                          <Pagointeres
                                            id_interes={row.id}
                                            cuil_cuit={cuil_cuit}
                                            traer={async () => {
                                              const cuotas = await servicioCuotas.vercuotas(idlote);
                                              setCuotas(cuotas);
                                              setAct(true);
                                              verief(idlote);
                                              setOpen(false);
                                            }}
                                          />
                                        )}
                                      </Box>
                                    )}
                                  </StyledTableCell>

                                  {verDetalles && (
                                    <StyledTableCell>
                                      <b>
                                        {row.pago_interes == undefined
                                          ? "$" + new Intl.NumberFormat("de-DE").format(row.interes)
                                          : row.pago_interes == "diferencia minima"
                                          ? row.pago_interes
                                          : "pagado"}
                                      </b>
                                    </StyledTableCell>
                                  )}
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        )}
                      </TableContainer>
                    </Paper>
                  </>
                )}
              </>
            ) : (
              <>Lote sin cuotas</>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* IEF (deudaExigible / detallePendiente) - MODERNO */}
      <br />
      {act2 ? (
        <div>
          {cuotas !== "" ? (
            <>
              <div>
                <Box style={{ width: "100%" }}>
                  <Grid
                    container
                    spacing={3}
                    style={{ padding: "18px 18px 8px", alignItems: "stretch" }}
                  >
                    <Grid item xs={12} md={6}>
                      <Paper
                        elevation={0}
                        style={{
                          width: "100%",
                          borderRadius: 14,
                          border: "1px solid #e8eef5",
                          background: "#ffffff",
                          boxShadow: "0 18px 45px rgba(10,59,79,0.10)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            padding: "14px 18px",
                            backgroundColor: "#014A6B",
                            color: "#fff",
                            fontWeight: 900,
                            fontSize: 15,
                            letterSpacing: "0.02em",
                          }}
                        >
                          Detalles de Deuda Exigible
                        </div>

                        <TableContainer style={{ width: "100%" }}>
                          <Table aria-label="simple table">
                            <TableBody>
                              {deudaExigible.map((row, index) => (
                                <TableRow key={row.name || index}>
                                  <TableCell
                                    align="left"
                                    style={{
                                      fontWeight: 800,
                                      color: "#0a3b4f",
                                      borderBottom: "1px solid #eef3f7",
                                      padding: "14px 16px",
                                      fontSize: 13.5,
                                    }}
                                  >
                                    {row.datoa}
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    style={{
                                      borderBottom: "1px solid #eef3f7",
                                      padding: "14px 16px",
                                      fontSize: 13.5,
                                      fontWeight: 900,
                                      color: "#01567c",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {index > 0
                                      ? `$ ${new Intl.NumberFormat("de-DE").format(row.datob)}`
                                      : new Intl.NumberFormat("de-DE").format(row.datob)}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Paper
                        elevation={0}
                        style={{
                          width: "100%",
                          borderRadius: 14,
                          border: "1px solid #e8eef5",
                          background: "#ffffff",
                          boxShadow: "0 18px 45px rgba(10,59,79,0.10)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            padding: "14px 18px",
                            backgroundColor: "#014A6B",
                            color: "#fff",
                            fontWeight: 900,
                            fontSize: 15,
                            letterSpacing: "0.02em",
                          }}
                        >
                          Detalle de Cuotas Pendientes
                        </div>

                        <TableContainer style={{ width: "100%" }}>
                          <Table aria-label="simple table">
                            <TableBody>
                              {detallePendiente.map((row, index) => (
                                <TableRow key={row.name || index}>
                                  <TableCell
                                    align="left"
                                    style={{
                                      fontWeight: 800,
                                      color: "#0a3b4f",
                                      borderBottom: "1px solid #eef3f7",
                                      padding: "14px 16px",
                                      fontSize: 13.5,
                                    }}
                                  >
                                    {row.datoa}
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    style={{
                                      borderBottom: "1px solid #eef3f7",
                                      padding: "14px 16px",
                                      fontSize: 13.5,
                                      fontWeight: 900,
                                      color: "#148D8D",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {index > 0
                                      ? `$ ${new Intl.NumberFormat("de-DE").format(row.datob)}`
                                      : new Intl.NumberFormat("de-DE").format(row.datob)}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Paper>
                    </Grid>

                    {/* BOTONES ABAJO A LA DERECHA */}
                    <Grid item xs={12}>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: 12,
                          padding: "10px 4px 6px",
                          flexWrap: "wrap",
                        }}
                      >
                        <Fab
                          variant="extended"
                          onClick={() => {
                            handleChange2();
                          }}
                          style={{
                            borderRadius: 12,
                            padding: "10px 18px",
                            textTransform: "none",
                            fontWeight: 900,
                            backgroundColor: "#01567c",
                            color: "#fff",
                            boxShadow: "0 10px 25px rgba(1,86,124,0.25)",
                          }}
                        >
                          <VisibilityOffIcon style={{ marginRight: 10 }} /> Ocultar
                          IEF
                        </Fab>

                        <Fab
                          variant="extended"
                          onClick={() => {
                            window.open("/usuario2/comprobanteief/" + idlote);
                          }}
                          style={{
                            borderRadius: 12,
                            padding: "10px 18px",
                            textTransform: "none",
                            fontWeight: 900,
                            backgroundColor: "#148D8D",
                            color: "#fff",
                            boxShadow: "0 10px 25px rgba(20,141,141,0.22)",
                          }}
                        >
                          Imprimir comprobante
                        </Fab>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default LotesCliente;
