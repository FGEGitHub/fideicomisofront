import Grid from '@mui/material/Grid';
import servicioUsuario1 from '../../../services/usuario1'
import servicioCuotas from '../../../services/cuotas'
import React, { useEffect, useState, Fragment } from "react";
import Skeleton from '@mui/material/Skeleton';
import Fab from '@mui/material/Fab';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Button from '@mui/material/Button';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';

import { useNavigate } from "react-router-dom";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@material-ui/core";
import InformarPago from './PagodeCuota'
import ButtonGroup from '@mui/material/ButtonGroup';
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



const CuotasNiv1 = (props) => {
  const [lotes, setLotes] = useState([])
  const [deudaExigible, setDeudaExigible] = useState([''])
  const [detallePendiente, setDetallePendiente] = useState([''])
  const [user, setUser] = useState([''])

  const [act, setAct] = useState(false)
  const [act2, setAct2] = useState(false)


  const [cuotas, setCuotas] = useState([''])
  const [pagos, setPagos] = useState([''])


  const navigate = useNavigate();
  useEffect(() => {

    const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))

    setUser(preba)
    //console.log(loggedUserJSON)

    // s

    traer(preba)

  }, [])
  


  const verief = async (index) => {
    console.log('ver ief')
    console.log(index)
    const dde = await servicioUsuario1.verief(index)
    setDeudaExigible(dde[0])
    setDetallePendiente(dde[1])
    setAct2(true)



  };

  const vercuotas = async (index) => {
    
    const cuotas = await servicioUsuario1.vercuotas(index)
    console.log(cuotas)
    if (cuotas[0] !== '') {
      setCuotas(cuotas[0])
      setPagos(cuotas[1])
    }
    setAct(true)

  };
  //////////servicioCuotas

  const borarTodas = async (index) => {

    const cuotas = await servicioCuotas.borrarcuotas(index)


  };



  const traer = async (preba) => {

    console.log(preba.cuil_cuit)

    const lotes = await servicioUsuario1.lotesCliente(preba.cuil_cuit)

    setLotes(lotes[0])




  }
  

  const ocultarIEF = () => {
    console.log('etc')
    setAct2(false)
  };
 



  const columns = [
    {
      name: "mes",
      label: "Mes",

    },
    {
      name: "anio",
      label: "Año",

    },

    {
      name: "saldo_inicial",
      label: "Saldo Inicial",
    },
    {
      name: "ICC",
      label: "ICC",

    },
    {
      name: "cuota_con_ajuste",
      label: "Cuota con ajuste",

    },
    {
      name: "Saldo_real",
      label: "Saldo Real",

    },
    {
      name: "Ajuste_ICC",
      label: "Ajuste ICC",

    },





  ];

  function fecha(dataIndex, rowIndex, data, onClick) {
    return (
      <>
        {pagos[dataIndex].mes + "/" + pagos[dataIndex].anio}

      </>
    );
  }

  function monnto(dataIndex, rowIndex, data, onClick) {
    return (
      <>
        {"$ " + pagos[dataIndex].monto}

      </>
    );
  }

  function estadoo(dataIndex, rowIndex, data, onClick) {
    return (
      <>
        {pagos[dataIndex].estado === "A" ? <>Aprobado</> : <> Pendiente/No Aprobado</>}

      </>
    );
  }
  const columnaspagos = [
    {
      name: "fecha",
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
      name: "Estado",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) =>
          estadoo(
            dataIndex,
            rowIndex,
            // overbookingData,
            // handleEditOpen
          )
      }

    },
    {
      name: "Monto",
      options: {
        customBodyRenderLite: (dataIndex, rowIndex) =>
          monnto(
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

      <br /><br /><br /><br /><br /><br />
      <div style={{ textAlign: 'center' }}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {
        lotes.map((item, index) =>
          <Stack spacing={2} direction="row">
            <Fab key={index} variant="extended" onClick={() => { vercuotas(item['id']) }}> {item['zona']} Manzana {item['manzana']} Parcela {item['parcela']}

            </Fab>
            {/*  <Button  key= {index} variant="contained"onClick={()=>{agregar(item['id'])}}> Agregar Cuotas</Button> */}
          


            {/* <Button key={index} variant="contained" onClick={() => { verief(item['id']) }}> Estado financiero </Button> */}
         
        
          </Stack>
          
        )
      }
</ButtonGroup>
<br/>
<Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
<ButtonGroup variant="contained" aria-label="outlined primary button group">
      {
        lotes.map((item, index) =>
        <Stack spacing={2} direction="row">
            {/*  <Button  key= {index} variant="contained"onClick={()=>{agregar(item['id'])}}> Agregar Cuotas</Button> */}
            <Fab key={index} variant="extended" onClick={() => { verief(item['id']) }}>
              <LocalAtmIcon sx={{ mr: 1 }} />
              Estado financiero
            </Fab>
      

            {/* <Button key={index} variant="contained" onClick={() => { verief(item['id']) }}> Estado financiero </Button> */}

        
          </Stack>
        )
      }
</ButtonGroup>
</Box>
</div>









      {act2 ?
        <div>
            <Box
                                        sx={{display: 'flex'}}
                                    >
                                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexDirection="row">

                                            <Paper
                                               sx={{
                                                cursor: 'pointer',
                                                background: '#eeeeee',
                                                color: '#bdbdbd',
                                                border: '1px dashed #ccc',
                                                width: "45%",
                                                '&:hover': { border: '1px solid #ccc' },
                                                border: "1px solid black",
                                                margin: '10px',
                                                display: 'flex'
                                            }}
                                            >

                                                <TableContainer >
                                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell  padding="normal" >Detalles de Deuda Exigible </TableCell>


                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {deudaExigible.map((row) => (
                                                                <TableRow
                                                                    key={row.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >

                                                                    <TableCell align="left" padding="normal">{row.datoa}</TableCell>
                                                                    <TableCell align="left" padding="normal">{new Intl.NumberFormat('de-DE').format(row.datob)}</TableCell>

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
                                                    width: "45%",
                                                    '&:hover': { border: '1px solid #ccc' },
                                                    border: "1px solid black",
                                                    margin: '10px',
                                                    display: 'flex'
                                                }}
                                            >

                                                <TableContainer >
                                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell  padding="normal" >Detalle de Cuotas Pendientes </TableCell>


                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {detallePendiente.map((row) => (
                                                                <TableRow
                                                                    key={row.name}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >

                                                                    <TableCell align="left" padding="normal">{row.datoa}</TableCell>
                                                                    <TableCell align="left" padding="normal">{new Intl.NumberFormat('de-DE').format(row.datob)}</TableCell>

                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Paper>

                                            <Fab  sx={{ margin: '75px',}} variant="extended" onClick={() => { ocultarIEF() }}  ><VisibilityOffIcon sx={{ mr: 1 }}  /> Ocultar IEF</Fab>
                                        </Grid>
                                    </Box>
        </div>
        : <div></div>}

      {act ?
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

              <TableContainer>
                {!cuotas ? <Skeleton /> : <>
                  <h1>CUOTAS</h1>
                  <Table >
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>FECHA</b> <b /></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>SALDO INICIAL</b></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>ICC</b></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>CUOTA CON AJUSTE</b></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>AJUSTE ICC</b></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>SALDO REAL</b></TableCell>
                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>INFORMAR PAGO</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>



                      {cuotas.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">{ row.mes <10 ? <>0{row.mes}</>:<>{props.mes}</> }/{row.anio} </StyledTableCell>
                          <StyledTableCell component="th" scope="row">$ {new Intl.NumberFormat('de-DE').format(row.saldo_inicial)} </StyledTableCell>
                          <StyledTableCell component="th" scope="row">{row.ICC} </StyledTableCell>
                          <StyledTableCell component="th" scope="row">$ {new Intl.NumberFormat('de-DE').format(row.cuota_con_ajuste)}</StyledTableCell>
                          <StyledTableCell component="th" scope="row">{new Intl.NumberFormat('de-DE').format(row.Ajuste_ICC)} </StyledTableCell>
                          <StyledTableCell component="th" scope="row">$ {new Intl.NumberFormat('de-DE').format(row.Saldo_real)}</StyledTableCell>
                          <StyledTableCell component="th" scope="row"  align="center"> <InformarPago 
                          mes = {row.mes}
                          anio = {row.anio}
                          id = {row.id}
                          /> </StyledTableCell>
                        </StyledTableRow>
                      ))}




                    </TableBody>
                  </Table>
                </>}

              </TableContainer>
            </Paper>


          </>





          <div>

            <>

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
                    <h1>PAGOS</h1>
                    {!pagos ? <Skeleton /> : <>
                      <Table >
                        <TableHead>
                          <TableRow>
                            <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>FECHA</b> <b /></TableCell>
                            <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>ESTADO</b></TableCell>
                            <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>MONTO</b></TableCell>

                          </TableRow>
                        </TableHead>
                        <TableBody>



                          {pagos.map((row) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">{row.mes}/{row.anio} </StyledTableCell>
                              <StyledTableCell component="th" scope="row"> {row.estado === "A" ? <>Aprobado</> : <> Pendiente/No Aprobado</>} </StyledTableCell>
                              <StyledTableCell component="th" scope="row">{new Intl.NumberFormat('de-DE').format(row.monto)} </StyledTableCell>

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
        </div>
        : <div></div>}

      <br /><br /><br /><br />


    </Fragment>

  )


}
export default CuotasNiv1