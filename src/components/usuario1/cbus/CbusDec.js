import servicioUsuario1 from '../../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";

import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import Nuevo from '../AsociarCbu/ModalAsociar'
import ModalVer from "./ModalVer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
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

const TablaNotificaciones = (props) => {
    const [cbus, setCbus] = useState([])
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

                setUsuario(usuario)
                const cant = await servicioUsuario1.cbuscliente(usuario.cuil_cuit)

                setCbus(cant)
            }

        } catch (error) {

        }





    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
            <>
                <div>
                    < ModalVer
                    // id = {cbus[dataIndex].id}
                    />

                </div>
            </>
        );
    }
    // definimos las columnas
    const columns = [
        {
            name: "cuil_cuit_lazo",
            label: "Cuil/cuit titular",

        },
        {
            name: "alias",
            label: "Alias",

        },
        {
            name: "numero",
            label: "numero",
        },

        {
            name: "estado",
            label: "estado",

        },
        {
            name: "lazo",
            label: "lazo",

        },
        {
            name: "Desasociar",
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
                <Nuevo
                    traer={async () => {
                        try {
                            const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
                            if (loggedUserJSON) {
                                const usuario = JSON.parse(loggedUserJSON)

                                setUsuario(usuario)
                                const cant = await servicioUsuario1.cbuscliente(usuario.cuil_cuit)

                                setCbus(cant)
                            }

                        } catch (error) {

                        }
                    }




                    }


                />

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
                            {!cbus ? <Skeleton /> : <>
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>CUIL/CUIT</b> <b /></TableCell>
                                            <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>ALIAS</b></TableCell>
                                            <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>NUMERO</b></TableCell>
                                            <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>ESTADO</b></TableCell>
                                            <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>LAZO</b></TableCell>
                                            <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>DESASOCIAR</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>



                                        {cbus.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th" scope="row">{row.estado === 'A' ? <><b>{row.cuil_cuit_lazo}</b></> : <>{row.cuil_cuit_lazo}</>}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{row.estado === 'A' ? <><b>{row.alias}</b></> : <>{row.alias}</>}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{row.estado === 'A' ? <><b>{row.numero}</b></> : <>{row.numero}</>}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{row.estado === 'A' ? <><b> Aprobado</b></> : <>Pendiente/No aprobado</>}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{row.estado === 'A' ? <><b>{row.lazo}</b></> : <>{row.lazo}</>}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row"> <ModalVer  id= { row.id} numero = {row.numero}
                                                traer = {async () => {
                                                    try {
                                                        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
                                                        if (loggedUserJSON) {
                                                            const usuario = JSON.parse(loggedUserJSON)
                                            
                                                            setUsuario(usuario)
                                                            const cant = await servicioUsuario1.cbuscliente(usuario.cuil_cuit)
                                            
                                                            setCbus(cant)
                                                        }
                                            
                                                    } catch (error) {
                                            
                                                    }
                                            
                                            
                                            
                                            
                                            
                                                }}
                                                
                                                
                                                /></StyledTableCell>

                                         
                                            </StyledTableRow>
                                        ))}




                                    </TableBody>
                                </Table>
                            </>}

                        </TableContainer>
                    </Paper>

                </>


            </>
          
        </div>
    )
}
export default TablaNotificaciones