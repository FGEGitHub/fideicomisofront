import { useParams } from "react-router-dom"
import servicioLotes from '../services/lotes'
import servicioCuotas from '../services/cuotas'
import servicioAdmin from '../services/Administracion'
import servicio360 from '../services/pagos360'
import AgregarIcc from './nivel2/Icc_cuota/AgregarICCCuota'
import AgregaraCuotas from './nivel2/Asignarcuotasalote'
import BorrarCuotas from './nivel2/borrarcuotas/BorrarCuotas'
import CancelarLote from './pagarloteparque'
import { Tooltip } from "@mui/material"; import Switch from '@mui/material/Switch';
import Pagointeres from './nivel2/pagarcuota/modalpagointeres'
import React, { useEffect, useState, Fragment } from "react";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Skeleton from '@mui/material/Skeleton';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { MenuItem, InputLabel } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Pagorapido from './nivel2/pagarcuota/modalpagorapido'
import Adelantar from './nivel2/pagarcuota/adelantarcuotaparque'

//////
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const LotesCliente = (props) => {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const navigate = useNavigate();

    useEffect(() => {

        traer()

    }, [])

    const [lotes, setLotes] = useState([''])
    const [cuotas, setCuotas] = useState([''])
    const [open, setOpen] = React.useState(false);
    const [deudaExigible, setDeudaExigible] = useState([''])
    const [detallePendiente, setDetallePendiente] = useState([''])
    const [idlote, setIdlote] = useState(null)
    const [selectedValue, setSelectedValue] = useState();
    const [act, setAct] = useState(false)
    const [act2, setAct2] = useState(false)
    const [vista1, setVista1] = useState(false)
    const [cargalink, setCargalink] = useState(false);
    const [verDetalles, setVerDetalles] = useState(false);

    const toggleDetalles = () => setVerDetalles(!verDetalles);

    const vercuotas = async (index) => {

        const cuotas = await servicioCuotas.vercuotas(index)
        setCuotas(cuotas)
        setIdlote(index)
        setAct(true)
        verief(index)
        setOpen(false)

    };
    //////////servicioCuotas


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    ///
    const handleChange = () => {
        setAct(!act);
    };
    const handleChange2 = () => {
        setAct2(!act2);
    };
    const Vista1 = () => {
        setVista1(!vista1);
    };
    const handleChangeratio = (event) => {
        setSelectedValue(event.target.value);
    };
    const verief = async (index) => {

        const dde = await servicioCuotas.verief(index)
        setDeudaExigible(dde[0])
        setDetallePendiente(dde[1])
        setAct2(true)
        setOpen(false)



    };

    const traer = async () => {

        const lotes = await servicioLotes.lotesCliente(props.cuil_cuit)

        setLotes(lotes)




    }
    const borrar = async (id) => {

        const rta = await servicioCuotas.borrarcuota(id)

        alert(rta)

    }


    const traerlink = async (index) => {

        const dde = await servicioAdmin.traerlinkcuota(index)

        window.open(dde)


    };


    const traerlink360 = async (index) => {
        setCargalink(true)
        const dde = await servicio360.traerlink360(index)

        window.open(dde)
        setCargalink(false)

    };

    const crearsolicituddebito = async (index) => {

        const dde = await servicio360.crearsolicituddebito({ id_cuota: index })

        alert(dde)


    };

    function saldoReal(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                {cuotas[dataIndex].parcialidad === 'Final' ? '$ ' + new Intl.NumberFormat('de-DE').format(cuotas[dataIndex].Saldo_real) : <div> No Calculado </div>}

            </>
        );
    }
    function pago(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                {cuotas[dataIndex].parcialidad === 'Final' ? '$ ' + new Intl.NumberFormat('de-DE').format(cuotas[dataIndex].pago) : <div> No Calculado </div>}

            </>
        );
    }
    function saldoInicial(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                {cuotas[dataIndex].parcialidad === 'Final' ? '$ ' + new Intl.NumberFormat('de-DE').format(cuotas[dataIndex].saldo_inicial) : <div> No Calculado </div>}

            </>
        );
    }
    function cuotaConAjuste(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                {cuotas[dataIndex].parcialidad === 'Final' ? '$ ' + new Intl.NumberFormat('de-DE').format(cuotas[dataIndex].cuota_con_ajuste) : <div> No Calculado </div>}

            </>
        );
    }
    function fecha(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                {cuotas[dataIndex].mes + '/' + cuotas[dataIndex].anio}

            </>
        );
    }
    function diferencia(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                {(cuotas[dataIndex].diferencia >= 0) ? <> <p style={{ color: 'green' }} > {new Intl.NumberFormat('de-DE').format(cuotas[dataIndex].diferencia)} </p> </> : <><p style={{ color: 'red' }} > {new Intl.NumberFormat('de-DE').format(cuotas[dataIndex].diferencia)}</p></>}


            </>
        );
    }



    function PagomercadoP(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                <Button onClick={() => traerlink(cuotas[dataIndex].id)} >

                    Pagar mercado Pago
                </Button>




            </>
        );
    }
    function Pago360(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                <Button onClick={() => traerlink360(cuotas[dataIndex].id)} >

                    Pagar 360
                </Button>




            </>
        );
    }
    function Pagodebito360(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                <Button onClick={() => crearsolicituddebito(cuotas[dataIndex].id)} >

                    debito en  360
                </Button>




            </>
        );
    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
            <>

                <CurrencyExchangeIcon
                    onClick={() => navigate('/usuario2/pagarcuota/' + cuotas[dataIndex].id)}
                    style={{ marginRight: "10px", cursor: "pointer" }}
                />
                <SearchIcon style={{ cursor: "pointer" }}
                    onClick={() => navigate('/usuario2/pagoscuotas/' + cuotas[dataIndex].id)}//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
                />


                <DeleteIcon style={{ cursor: "pointer" }}
                    onClick={() => borrar(cuotas[dataIndex].id)}//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
                />
                <AgregarIcc
                    id={cuotas[dataIndex].id}
                    traer={async () => {

                        const lotes = await servicioLotes.lotesCliente(props.cuil_cuit)

                        setLotes(lotes)
                    }}

                />



            </>
        );
    }

    const columns = [

        {
            name: "Fecha",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    fecha(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },

        {
            name: "Saldo Inicial",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    saldoInicial(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },
        {
            name: "Amortizacion",
            label: "Amortizacion",

        },
        {
            name: "ICC",
            label: "ICC",

        },
        {
            name: "Ajuste_ICC",
            label: "Ajuste ICC",

        },
        {
            name: "Cuota con ajuste",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    cuotaConAjuste(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },
        {
            name: "saldo_cierre",
            label: "Saldo Cierre",

        },
        {
            name: "Pago",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    pago(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },

        {
            name: "Saldo Real",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    saldoReal(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },
        {
            name: "Diferencia",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    diferencia(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },



        {
            name: "Acciones",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderer(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },
        {
            name: "Beta pago Mercadop",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    PagomercadoP(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },
        {
            name: "Beta pago 360",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    Pago360(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },
        {
            name: "Pagodebito360",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    Pagodebito360(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },


    ];


    return (

        <Fragment>
        
            <br />
            {lotes ? <>

                {lotes.length > 0 ? <>

                    <FormControl sx={{ m: 1, minWidth: 140 }}>











                        <div>{selectedValue ? <> <FormLabel id="demo-row-radio-buttons-group-label">Lote</FormLabel> </> : <> <FormLabel id="demo-row-radio-buttons-group-label"> <h3>Seleccionar un lote</h3></FormLabel></>}

                            <FormControl fullWidth>


                                <InputLabel id="lotes-select-label">Seleccionar Lote</InputLabel>
                                <Select
                                    labelId="lotes-select-label"
                                    value={selectedValue}
                                    onChange={handleChangeratio}
                                >
                                    {lotes.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            value={`Fraccion: ${item.fraccion} - Manzana: ${item.manzana} - Parcela: ${item.parcela}${item.tiene_cuotas === "Si" ? " - Cuotas" : ""}`}
                                            onClick={() => vercuotas(item.id)}
                                        >
                                            Fraccion: {item.fraccion} - Manzana: {item.manzana} - Parcela: {item.parcela}{item.tiene_cuotas === "Si" ? " - Cuotas" : ""}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {/*  {selectedValue && <b style={{ color: 'black' }}>Valor seleccionado: {selectedValue}</b>} */}


                        </div>



                    </FormControl>


                </> : <></>}

            </> : <></>}





            <div>

                {act ? <div>
                    <div style={{ marginBottom: '1rem' }}>
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                            <Button
                                variant="outlined"
                                sx={{ color: "black", borderColor: "black", fontSize: "0.70rem", }}
                                onClick={() => navigate('/usuario2/agregarcuotas/' + idlote)}
                            >
                                Agregar cuotas al lote
                            </Button>

                            <AgregaraCuotas
                                id_origen={idlote}
                                lotes={lotes}
                            />

                            <BorrarCuotas id={idlote} />

                            <CancelarLote
                                id_lote={idlote}
                                cuotas={cuotas}
                            />
                            {cuotas &&
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
                                />}
                        </Stack>
                    </div>







                    {cuotas !== '' ? <>




                        {vista1 ? <>
                            <MUIDataTable
                                title={"Lista de cuotas"}
                                data={cuotas}
                                columns={columns}
                                actions={[
                                    {
                                        icon: 'save',
                                        tooltip: 'Save User',
                                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                                    }
                                ]}
                            />


                        </> : <>

                            <>


                                <Paper
                                    sx={{
                                        cursor: 'pointer',
                                        background: '#eeeeee',
                                        color: '#bdbdbd',
                                        border: '1px dashed #ccc',
                                        width: "98%",
                                        '&:hover': { border: '1px solid #ccc' },
                                        border: "1px solid black",
                                        marginLeft: '1%',
                                    }}
                                > <Button variant="outlined" style={{ marginLeft: '0%', color: "black", borderColor: "black" }} onClick={toggleDetalles}>
                                        {verDetalles ? 'Restaurar' : 'Ver mas detalles'}
                                    </Button>
                                    <TableContainer style={{ height: '80vh' }}>
                                        {!cuotas ? <Skeleton /> : <>
                                            <h1>CUOTAS</h1>

                                            <Table stickyHeader>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>FECHA</b></TableCell>
                                                        {verDetalles && <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>SALDO INICIAL</b></TableCell>}
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>AMORTIZACION</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>ICC</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>AJUSTE ICC</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>CUOTA CON AJUSTE</b></TableCell>
                                                        {verDetalles && <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>SALDO AL CIERRE</b></TableCell>}
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>PAGO</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>DIFERENCIA</b></TableCell>

                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>SALDO REAL</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>PAGAR/VER PAGO</b></TableCell>
                                                        {verDetalles && <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>INTERES</b></TableCell>}
                                                    </TableRow>
                                                </TableHead>

                                                <TableBody>
                                                    {cuotas.map((row) => (
                                                        <StyledTableRow key={row.id}>
                                                            <StyledTableCell>{row.mes < 10 ? `0${row.mes}` : row.mes}/{row.anio}</StyledTableCell>
                                                            {verDetalles && (
                                                                <StyledTableCell>
                                                                    <span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format(row.saldo_inicial)}</b></span>
                                                                </StyledTableCell>
                                                            )}
                                                            <StyledTableCell> {row.id >= parseInt(row.cuota_cancelada) ? <>Cancelado</> : <>
                                                                <span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format((row.Amortizacion))}</b></span></>}
                                                            </StyledTableCell>
                                                            <StyledTableCell> {row.id >= parseInt(row.cuota_cancelada) ? <>Cancelado</> : <>{row.ICC}</>}</StyledTableCell>
                                                            <StyledTableCell>      {row.id >= parseInt(row.cuota_cancelada) ? <>Cancelado</> : <>{row.Ajuste_ICC} </>}</StyledTableCell>
                                                            <StyledTableCell>
                                                                {row.id >= parseInt(row.cuota_cancelada) ? <>Cancelado</> : <>
                                                                    <span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format((row.cuota_con_ajuste))}</b></span></>}
                                                            </StyledTableCell>
                                                            {verDetalles && (

                                                                <StyledTableCell>
                                                                    {row.id >= parseInt(row.cuota_cancelada) ? <>Cancelado</> : <>      <span style={{ whiteSpace: 'nowrap' }}>$ {new Intl.NumberFormat('de-DE').format(row.saldo_cierre)}</span></>}
                                                                </StyledTableCell>
                                                            )}
                                                            <StyledTableCell>  {row.id >= parseInt(row.cuota_cancelada) ? <>Cancelado</> : <>
                                                                <span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format(row.pago)}</b></span> </>}
                                                            </StyledTableCell>
                                                            <StyledTableCell>
                                                                {row.id >= parseInt(row.cuota_cancelada) ? (
                                                                    <>Cancelado</>
                                                                ) : (
                                                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
                                                                        <Tooltip
                                                                            title={
                                                                                row.diferencia < 0
                                                                                    ? row.diferencia === -row.cuota_con_ajuste
                                                                                        ? "La diferencia es exactamente el negativo de la cuota con ajuste"
                                                                                        : "La diferencia es negativa pero no coincide con la cuota ajustada"
                                                                                    : "La diferencia es positiva"
                                                                            }
                                                                        >
                                                                            <span
                                                                                style={{
                                                                                    color:
                                                                                        row.diferencia < 0
                                                                                            ? row.diferencia === -row.cuota_con_ajuste
                                                                                                ? "red"
                                                                                                : "blue"
                                                                                            : "green",
                                                                                }}
                                                                            >
                                                                                {new Intl.NumberFormat("de-DE").format(row.diferencia)}
                                                                            </span>
                                                                        </Tooltip>

                                                                        {row.comprobante === 'Sin comprobante' && (
                                                                            <Tooltip title="Pago sin comprobante">
                                                                                <ErrorOutlineIcon color="warning" fontSize="small" />
                                                                            </Tooltip>
                                                                        )}
                                                                    </span>
                                                                )}
                                                            </StyledTableCell>


                                                            <StyledTableCell> {row.id >= parseInt(row.cuota_cancelada) ? <>Cancelado</> : <>
                                                                <span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format(row.Saldo_real)}</b></span> </>}
                                                            </StyledTableCell>

                                                            <StyledTableCell>
                                                                {row.id >= parseInt(row.cuota_cancelada) ? <>Cancelado</> : <>
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
                                                                    {verDetalles && (
                                                                        <Pagointeres id_interes={row.id}
                                                                            cuil_cuit={cuil_cuit}
                                                                            traer={async () => {
                                                                                const cuotas = await servicioCuotas.vercuotas(idlote);
                                                                                setCuotas(cuotas);
                                                                                setAct(true);
                                                                                verief(idlote);
                                                                                setOpen(false);
                                                                            }}
                                                                        />)}
                                                                </>}
                                                                <button onClick={() => navigate('/usuario2/pagoscuotas/' + row.id)} >Ver pagos</button>
                                                            </StyledTableCell>

                                                            {verDetalles && (
                                                                <StyledTableCell>
                                                                    <span style={{ whiteSpace: 'nowrap' }}> <b>{row.pago_interes == undefined ? "$" + new Intl.NumberFormat('de-DE').format(row.interes) : row.pago_interes == "diferencia minima" ? row.pago_interes : "pagado"}</b></span>
                                                                </StyledTableCell>
                                                            )}
                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </>}
                                    </TableContainer>
                                </Paper>


                            </>

                        </>}
                    </> : <> Lote sin cuotas</>}


                </div> : <div> </div>}



            </div>

            <br />   {act2 ?

                <div>





                    {cuotas !== '' ? <>

                        <div>
                            <Box
                                sx={{ display: 'flex' }}
                            >
                                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexDirection="row">

                                    <Paper
                                        sx={{
                                            cursor: 'pointer',
                                            background: '#eeeeee',
                                            color: '#bdbdbd',
                                            border: '1px dashed #ccc',
                                            width: "38%",
                                            '&:hover': { border: '1px solid #ccc' },
                                            border: "1px solid black",
                                            margin: '3%',
                                            display: 'flex'
                                        }}
                                    >

                                        <TableContainer >
                                            <Table sx={{ minWidth: 520 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell padding="normal" >Detalles de Deuda Exigible </TableCell>


                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {deudaExigible.map((row, index) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >

                                                            <TableCell align="left" padding="normal">{row.datoa}</TableCell>
                                                            <TableCell align="left" padding="normal">
                                                                {index > 0 ? `$ ${new Intl.NumberFormat('de-DE').format(row.datob)}` : new Intl.NumberFormat('de-DE').format(row.datob)}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Paper>


                                    <Paper
                                        sx={{
                                            cursor: 'pointer',
                                            background: '#eeeeee',
                                            color: '#bdbdbd',
                                            border: '1px dashed #ccc',
                                            width: "38%",
                                            '&:hover': { border: '1px solid #ccc' },
                                            border: "1px solid black",
                                            margin: '3%',
                                            marginLeft: '-1%',
                                            display: 'flex'
                                        }}
                                    >

                                        <TableContainer >
                                            <Table sx={{ minWidth: 520 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell padding="normal" >Detalle de Cuotas Pendientes </TableCell>


                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {detallePendiente.map((row, index) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >

                                                            <TableCell align="left" padding="normal">{row.datoa}</TableCell>
                                                            <TableCell align="left" padding="normal">
                                                                {index > 0 ? `$ ${new Intl.NumberFormat('de-DE').format(row.datob)}` : new Intl.NumberFormat('de-DE').format(row.datob)}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Paper>

                                    <Fab sx={{ margin: '75px', }} variant="extended" onClick={() => { handleChange2() }}  ><VisibilityOffIcon sx={{ mr: 1 }} /> Ocultar IEF</Fab>
                                </Grid>  <Fab sx={{ margin: '75px', }} variant="extended" onClick={() => { window.open('/usuario2/comprobanteief/' + idlote) }}  > Imprimir comprobante</Fab>
                            </Box>
                        </div>


                    </> : <></>}
                </div>
                : <div></div>}






        </Fragment>

    )


}
export default LotesCliente

/* 
ANTE POSIBLE PROBLEMA AGREGAR EN LA LINEA 233
{
    lotes.map((item, index) =>

        <div>


            <Button key={index} variant="contained" onClick={() => { vercuotas(item['id']) }}> Ver cuotas del lote {item['zona']} Fraccion {item['fraccion']} - Manzana {item['manzana']} -Parcela {item['parcela']}</Button>
          
            <Button key={index} variant="contained" onClick={() => { navigate('/usuario2/agregarcuotas/' + item['id']) }} >
                Agregar cuotas al lote
            </Button>

            <BorrarCuotas
                id={item['id']} />

            <br /><br />
            <Button  key={index} variant="contained" onClick={() => { verief(item['id']) }} >
                Informe estado financiero
            </Button>

        </div>
    )
} */