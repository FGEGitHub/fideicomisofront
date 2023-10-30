import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import servicioPagos from '../../../services/pagos'
import { useNavigate } from "react-router-dom";
//import overbookingData from "./overbooking";
import BotonRechazo from './RechazoPagoInusual'
import BotonAprobado from './AprobacionPagoInusual'
import CheckIcon from '@mui/icons-material/Check';
import serviciousuario1 from '../../../services/usuario1'
import Button from "@mui/material/Button";
import VerConstancias from "../../nivel2/nivel2Aprobaciondepagos/VerConstancias";
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Table from '@mui/material/Table';
import { Paper } from '@mui/material';


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



const PagosInusuales = () => {
    //configuracion de Hooks
    const [pagos, setpagos] = useState([]);
    const [vista, setVista] = useState(true);
    const navigate = useNavigate();






    useEffect(() => {
        getPagosi()
    }, [])

    ///



    const getPagosi = async () => {

        const pagos = await servicioPagos.pagosinusuales({

        })
        console.log(pagos)
        setpagos(pagos)
    }


    const aprobar = async (id) => {
        const auxiliarr = { id }
        await servicioPagos.aprobarpago(auxiliarr)
        //  setOpen(false)
        window.location.reload(true);

        // window.location.reload(true)
    }


    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {

        return (
            <>

                <BotonRechazo
                    id={pagos[dataIndex].id}
                />
                <BotonAprobado id={pagos[dataIndex].id}
                    monto={pagos[dataIndex].monto}

                />
            </>
        );
    }

    function CutomButtonsRenderere(dataIndex, rowIndex, data, onClick) {
        return (
            <>


                <p onClick={() => navigate('/usuario2/detallecliente/' + pagos[dataIndex].cuil_cuit)} style={{ marginRight: "10px", cursor: "pointer" }}>{pagos[dataIndex].Nombre}</p>

            </>
        );
    }
    //Styles de la tabla
    const StyledTable = () =>
        createTheme({
            overrides: {
                MUIDataTableBodyRow: {
                    root: {
                        backgroundColor: "#f5f5f5",
                    }
                }
            }
        });
    // definimos las columnas
    const columns = [

        {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },
        {
            name: "Nombre",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderere(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },
        {
            name: "monto",
            label: "Monto",

        },
        {
            name: "ingresos",
            label: "Ingresos declarados",
            actions: { onClick: (event, rowData) => alert(rowData) }
        },
        {
            name: "Actions",
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
            name: "Descarga",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    downloadFile(
                        dataIndex,
                        rowIndex,
                        // overbookingData,
                        // handleEditOpen
                    )
            }

        },


    ];
    async function download(index, rowIndex, data) {
        const filename = (pagos[index].ubicacion)


        const link = await serviciousuario1.obtenerurl(filename)

        console.log(link.data)
        window.open(link.data)


    }
    function downloadFile(index, rowIndex, data) {

        /* const filename = (products[index].key)
        console.log(filename)
        const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
        console.log(link.data)
        setAct(true) */
        return (
            <>

                <Button
                    onClick={() => download(index)}
                >Descargar</Button>


            </>
        );
    }
    const options = {

        /*    rowsPerPage: 10,
           download: false, // hide csv download option
           onTableInit: this.handleTableInit,
           onTableChange: this.handleTableChange, */
    };
    // renderiza la data table
    return (


        <div>
{vista ? <>

            <>
                <Paper
                    sx={{
                        cursor: 'pointer',
                        background: '#eeeeee',
                        color: '#bdbdbd',
                        border: '1px dashed #ccc',
                        width: "90%",
                        '&:hover': { border: '1px solid #ccc' },
                        border: "1px solid black",
                        margin: '75px',

                    }}
                >

                    <TableContainer>
                        {!pagos ? <Skeleton /> : <>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>CUIL/CUIT</b> <b /></TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>CUOTA</b></TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>MONTO</b></TableCell>
                                       
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>ACCIONES</b></TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>DESCARGA</b></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>



                                    {pagos.map((row, index) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row"><b   onClick={() => navigate('/usuario2/detallecliente/'+row.cuil_cuit)} >{row.cuil_cuit}</b></StyledTableCell>
                                            <StyledTableCell component="th" scope="row"><b>{row.id_cuota}</b></StyledTableCell>
                                            <StyledTableCell component="th" scope="row">$<b>{row.monto}</b></StyledTableCell>
                                          
                                            <StyledTableCell component="th" scope="row">    <BotonRechazo
                                                id={row.id}
                                                getPagosi = {async () => {

                                                    const pagos = await servicioPagos.pagosinusuales({
                                            
                                                    })
                                                    console.log(pagos)
                                                    setpagos(pagos)
                                                }}
                                            />
                                              {/*   <BotonAprobado id={row.id}
                                                    monto={row.monto}
                                                    getPagosi = {async () => {

                                                        const pagos = await servicioPagos.pagosinusuales({
                                                
                                                        })
                                                        console.log(pagos)
                                                        setpagos(pagos)
                                                    }}
                                                /> */} </StyledTableCell>


                                            <StyledTableCell component="th" scope="row"> <Button
                                                onClick={() => download(index)}
                                            >Descargar</Button> </StyledTableCell>
                                        </StyledTableRow>

                                    ))}




                                </TableBody>
                            </Table>
                        </>}

                    </TableContainer>
                </Paper>

            </>
            </>:<>
            <ThemeProvider theme={StyledTable()}>
                <MUIDataTable
                    title={"Lista de pagos inusuales"}
                    data={pagos}
                    columns={columns}
                    actions={[
                        {
                            icon: 'save',
                            tooltip: 'Save User',
                            onClick: (event, rowData) => alert("You saved " + rowData.name)
                        }
                    ]}
                    options={options}

                />
            </ThemeProvider></>}
        </div>
    )
}

export default PagosInusuales;