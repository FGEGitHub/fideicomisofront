import servicioUsuario1 from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";
import { Paper } from '@mui/material';
import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import ModalVer from "./ModalVer";
import ModalResponder from "./Respuesta";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';


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




const TablaNotificaciones = (props) => {
    const [noti, setNoti] = useState([''])
    const [usuario, setUsuario] = useState([''])
    const navigate = useNavigate();
    useEffect(() => {
        traer()



    }, [])


    const traer = async () => {
        try {
            const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
            if (loggedUserJSON) {
                const usuario = JSON.parse(loggedUserJSON)
                console.log(usuario.cuil_cuit)
                setUsuario(usuario)
                const lotes = await servicioUsuario1.noticliente(usuario.cuil_cuit)
                setNoti(lotes)
            }

        } catch (error) {

        }






    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                <div>
                    < ModalVer
                        id={noti[dataIndex].id} />
                    {noti[dataIndex].asunto == 'Solicitud de documentacion' ? <  ModalResponder id={noti[dataIndex].id} cuil_cuit={noti[dataIndex].cuil_cuit} /> : <div> </div>}


                </div>
            </>
        );
    }




    // definimos las columnas
    const columns = [
        {
            name: "id",
            label: "ID",

        },
        {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },

        {
            name: "descripcion",
            label: "descripcion",

        },
        {
            name: "leida",
            label: "leida",

        },
        {
            name: "asunto",
            label: "asunto",

        },
        {
            name: "Ver/Contestar",
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


    ];

    const options = {

        /*    rowsPerPage: 10,
           download: false, // hide csv download option
           onTableInit: this.handleTableInit,
           onTableChange: this.handleTableChange, */
    };
    // renderiza la data table
    return (
        <div>


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
                    <h2>Notificaciones</h2>
                    <TableContainer>
                        {!noti ? <Skeleton /> : <>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>CUIL/CUIT</b> <b /></TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>ASUNTO</b></TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>LEIDA/NO LEIDA</b></TableCell>
                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>VER/CONTESTAR</b></TableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>



                                    {noti.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">{row.leida === 'No' ? <><b>{row.asunto}</b></> : <>{row.asunto}</>}</StyledTableCell>
                                            <StyledTableCell component="th" scope="row">{row.leida === 'No' ? <><b>{row.descripcion}</b></> : <>{row.descripcion}</>}</StyledTableCell>
                                            <StyledTableCell component="th" scope="row">{row.leida === 'No' ? <><b>{row.leida}</b></> : <>{row.leida}</>}</StyledTableCell>
                                            <StyledTableCell component="th" scope="row">   {row.asunto == 'Solicitud de documentacion' ? <><  ModalResponder id={row.id} cuil_cuit={row.cuil_cuit} />   < ModalVer id={row.id} traer={async () => {
                                                try {
                                                    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
                                                    if (loggedUserJSON) {
                                                        const usuario = JSON.parse(loggedUserJSON)
                                                        console.log(usuario.cuil_cuit)
                                                        setUsuario(usuario)
                                                        const lotes = await servicioUsuario1.noticliente(usuario.cuil_cuit)
                                                        setNoti(lotes)
                                                    }

                                                } catch (error) {

                                                }






                                            }} /></> : <div>  < ModalVer id={row.id} traer={async () => {
                                                try {
                                                    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
                                                    if (loggedUserJSON) {
                                                        const usuario = JSON.parse(loggedUserJSON)
                                                        console.log(usuario.cuil_cuit)
                                                        setUsuario(usuario)
                                                        const lotes = await servicioUsuario1.noticliente(usuario.cuil_cuit)
                                                        setNoti(lotes)
                                                    }

                                                } catch (error) {

                                                }

                                            }} /></div>} </StyledTableCell>

                                        </StyledTableRow>
                                    ))}




                                </TableBody>
                            </Table>
                        </>}

                    </TableContainer>
                </Paper>
            </>
            <div>
                
            </div>

        </div>
    )
}
export default TablaNotificaciones