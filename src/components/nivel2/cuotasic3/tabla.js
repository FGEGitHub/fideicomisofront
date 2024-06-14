import { useState, useEffect } from "react";
import servicioCuotas from '../../../services/cuotas'
import MUIDataTable from "mui-datatables";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MuiAlert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import Pagorapido from '../pagarcuota/modalpagorapido'
//import overbookingData from "./overbooking";
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
const Lotes = (props) => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cuotas, setCuotas] = useState([''])
    const navigate = useNavigate();


        useEffect(() => {
        getClients()
    }, [])

    const getClients = async () => {
        
        const clients = await servicioCuotas.traercuotasic3(props.cuil_cuit) //////  api/links/infocantidad
        setCuotas(clients)
        setLoading(false);
    }



    ///
//opcionde click en el nombre
    function CutomButtonsRenderere(dataIndex, rowIndex, data, onClick) {
        return (
          <>
          
       
           <p  onClick={() =>  navigate('/usuario2/detallecliente/'+clients[dataIndex].cuil_cuit)} style={{ marginRight: "10px", cursor: "pointer" }}>{clients[dataIndex].Nombre}</p>
          
          </>
        );
      }
      //

      function CutomButtonsRendercuil(dataIndex, rowIndex, data, onClick) {
        return (
          <>
          
       
           <p  onClick={() =>  navigate('/usuario2/detallecliente/'+clients[dataIndex].cuil_cuit)} style={{ marginRight: "10px", cursor: "pointer" }}>{clients[dataIndex].cuil_cuit}</p>
          
          </>
        );
      }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
              <Tooltip title="Editar">
            <EditIcon
             onClick={() =>  navigate('/usuario2/modificarcliente/'+clients[dataIndex].cuil_cuit)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            /></Tooltip>
             <Tooltip title="Ver">
             <SearchIcon
             onClick={() =>  navigate('/usuario2/detallecliente/'+clients[dataIndex].cuil_cuit)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
           </Tooltip>
          </>
        );
      }


    // definimos las columnas de la tabla mui de clientes
    const columns = [
        {
            name: "id",
            label: "ID",

        },
       
           {
            name: "cuil_cuit",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                  CutomButtonsRendercuil(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
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
            name: "observaciones",
            label:"Observaciones",
           
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
 

    ];

    const options = {
    
        setTableProps: () => {
            return {
              style: {
                backgroundColor: "#e3f2fd", // Cambia el color de fondo de la tabla
              },
            };
          },
          customHeadRender: (columnMeta, handleToggleColumn) => ({
            TableCell: {
              style: {
                backgroundColor: '#1565c0', // Cambia el color de fondo del encabezado
                color: 'white', // Cambia el color del texto del encabezado
              },
            },
          }),
        selectableRows: false, // Desactivar la selección de filas
        stickyHeader: true,
        selectableRowsHeader: false,
        selectableRowsOnClick: true,
        responsive: 'scroll',
        rowsPerPage: 10,
        rowsPerPageOptions: [5, 10, 15],
        downloadOptions: { filename: 'tableDownload.csv', separator: ',' },
        print: true,
        filter: true,
        viewColumns: true,
        pagination: true,

        textLabels: {
          body: {
            noMatch: "No se encontraron registros de debito automatico",
            toolTip: "Ordenar",
          },
          pagination: {
            next: "Siguiente",
            previous: "Anterior",
            rowsPerPage: "Filas por página:",
            displayRows: "de",
          },
          toolbar: {
            search: "Buscar",
            downloadCsv: "Descargar CSV",
            print: "Imprimir",
            viewColumns: "Ver columnas",
            filterTable: "Filtrar tabla",
          },
          filter: {
            all: "Todos",
            title: "FILTROS",
            reset: "RESETEAR",
          },
          viewColumns: {
            title: "Mostrar columnas",
            titleAria: "Mostrar/ocultar columnas de la tabla",
          },
          selectedRows: {
            text: "fila(s) seleccionada(s)",
            delete: "Eliminar",
            deleteAria: "Eliminar filas seleccionadas",
          },
        },
    
  };
// renderiza la data table
return (
    <>
    <TableContainer>
                                        {!cuotas ? <Skeleton /> : <>
                                            <h1>CUOTAS</h1>
                                            <Table >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>FECHA</b> <b /></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>SALDO INICIAL</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>AMORTIZACION</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }}><b>ICC</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>AJUSTE ICC</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>CUOTA CON AJUSTE</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>PAGO</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>SALDO REAL</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>DIFERENCIA</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>PAGAR/VER PAGO</b></TableCell>
                                                        <TableCell style={{ backgroundColor: "black", color: 'white' }} ><b>PAGO 360</b></TableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>



                                                    {cuotas.map((row) => (
                                                        <StyledTableRow key={row.name}>
                                                            <StyledTableCell component="th" scope="row">{row.mes < 10 ? <>0{row.mes}</> : <>{row.mes}</>}/{row.anio} </StyledTableCell>
                                                            <StyledTableCell component="th" scope="row"><span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format(row.saldo_inicial)}</b></span></StyledTableCell>
                                                            <StyledTableCell component="th" scope="row"><span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format(row.amortizacion)}</b></span></StyledTableCell>
                                                            <StyledTableCell component="th" scope="row">{row.ajuste_icc}</StyledTableCell>
                                                            <StyledTableCell component="th" scope="row">{row.ajuste}</StyledTableCell>
                                                            <StyledTableCell component="th" scope="row"><span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format(row.cuota_con_ajuste)}</b></span></StyledTableCell>
                                                            <StyledTableCell component="th" scope="row"><span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format(row.pago)}</b></span></StyledTableCell>
                                                            <StyledTableCell component="th" scope="row"><span style={{ whiteSpace: 'nowrap' }}>$ <b>{new Intl.NumberFormat('de-DE').format(row.Saldo_real)}</b></span></StyledTableCell>
                                                            <StyledTableCell component="th" scope="row">
                                                                {row.diferencia < 0 ?
                                                                    <p style={{ color: 'crimson', whiteSpace: 'nowrap' }}>{new Intl.NumberFormat('de-DE').format(row.diferencia)}</p> :
                                                                    <p style={{ color: 'green', whiteSpace: 'nowrap' }}>{new Intl.NumberFormat('de-DE').format(row.diferencia)}</p>}
                                                            </StyledTableCell>
                                                            <StyledTableCell component="th" scope="row" align="center">

                                                                <Pagorapido
                                                                    id_cuota={row.id}
                                                                    traer={async (index) => {

                                                                        const cuotas = await servicioCuotas.vercuotas(index)

                                                                      

                                                                    }}
                                                                />
                                                                {/*   <CurrencyExchangeIcon
                                                                    onClick={() => navigate('/usuario2/pagarcuota/' + row.id)}
                                                                    style={{ marginRight: "10px", cursor: "pointer" }}
                                                                /> */}

                                                                <SearchIcon style={{ cursor: "pointer" }}
                                                                    onClick={() => navigate('/usuario2/pagoscuotas/' + row.id)}//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
                                                                />


                                                                {/*     <DeleteIcon style={{ cursor: "pointer" }}
                                                                    onClick={() => borrar(row.id)}//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
                                                                /> */}


                                                            </StyledTableCell>

                                                      
                                                        </StyledTableRow>
                                                    ))}




                                                </TableBody>
                                            </Table>
                                        </>}

                                    </TableContainer>
    </>


)
}

export default Lotes;