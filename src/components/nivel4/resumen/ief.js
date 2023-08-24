import { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import servicioCuotas from '../../../services/cuotas'
import MuiAlert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Skeleton from '@mui/material/Skeleton';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Lotes = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deudaExigible, setDeudaExigible] = useState([''])
    const [detallePendiente, setDetallePendiente] = useState([''])
    const [act2, setAct2] = useState(false)
    const navigate = useNavigate();
    const verief = async () => {

        const dde = await servicioCuotas.iefgralleg()
        console.log(dde)
        setDeudaExigible(dde[0])
        setDetallePendiente(dde[1])
        setAct2(true)




    };
    useEffect(() => {
        verief()
    }, [])

    // definimos las columnas

    // renderiza la data table
    return (
        <>
        { deudaExigible && detallePendiente ? <>
            <h1>Todavia en revision</h1>
       <Box
                                        sx={{
                                            display: 'flex'
                                        }}
                                    >
                                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                      
                                            <Paper
                                                sx={{
                                                    cursor: 'pointer',
                                                    background: '#eeeeee',
                                                    color: '#bdbdbd',
                                                    border: '1px dashed #ccc',
                                                    width: "40%",
                                                    '&:hover': { border: '1px solid #ccc' },
                                                    border: "1px solid black",
                                                    margin: '75px',
                                                    display: 'flex'

                                                }}
                                            >

                                                <TableContainer >
                                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Detalles de Deuda Exigible </TableCell>


                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {deudaExigible.map((row) => (
                                                                <TableRow
                                                                    key={row.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >

                                                                    <TableCell align="left">{row.datoa}</TableCell>
                                                                    <TableCell align="left">{new Intl.NumberFormat('de-DE').format(row.datob)}</TableCell>

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
                                                    width: "40%",
                                                    '&:hover': { border: '1px solid #ccc' },
                                                    border: "1px solid black",
                                                    margin: '75px',
                                                    display: 'flex'

                                                }}
                                            >

                                                <TableContainer >
                                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Detalle de Cuotas Pendientes </TableCell>


                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {detallePendiente.map((row) => (
                                                                <TableRow
                                                                    key={row.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >

                                                                    <TableCell align="left">{row.datoa}</TableCell>
                                                                    <TableCell align="left">{new Intl.NumberFormat('de-DE').format(row.datob)}</TableCell>

                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Paper>

                                           {/*  <Fab sx={{ margin: '75px', }} variant="extended" onClick={() => { handleChange2() }}  ><VisibilityOffIcon sx={{ mr: 1 }} /> Ocultar IEF</Fab> */}
                                        </Grid>
                                    </Box>

                                    </> : <></>}
        </>


    )
}

export default Lotes;