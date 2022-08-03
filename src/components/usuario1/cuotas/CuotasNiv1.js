import { useParams } from "react-router-dom"
import servicioUsuario1 from '../../../services/usuario1'
import servicioCuotas from '../../../services/cuotas'
import React, { useEffect, useState, Fragment } from "react";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import UseUser from '../../../hooks/useUser'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





const CuotasNiv1 = (props) => {
    const [lotes, setLotes] = useState([''])
    const [deudaExigible, setDeudaExigible] = useState([''])
    const [detallePendiente, setDetallePendiente] = useState([''])
    const [user, setUser] = useState([''])
 
    const [cuotas, setCuotas] = useState([''])
   
   
  
    const navigate = useNavigate();
    useEffect(() => {
        
        const preba = JSON.parse( window.localStorage.getItem('loggedNoteAppUser'))
        
        setUser(preba)
      //console.log(loggedUserJSON)

           // s
       
        traer(preba)

    }, [])
    /* useEffect(() => {
  
       
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
    
     
        }
     
     
      }, []) */
 
    

    const verief = async (index) => {
        console.log('ver ief')
        console.log(index)
        const dde = await servicioUsuario1.verief(index)
        setDeudaExigible(dde[0])
        setDetallePendiente(dde[1])
        
     

    };

    const vercuotas = async (index) => {
        console.log('ver cuotas')
        const cuotas = await servicioUsuario1.vercuotas(index)
        if (cuotas !== '') { setCuotas(cuotas) }

    };
    //////////servicioCuotas

    const borarTodas = async (index) => {
  
        const cuotas = await servicioCuotas.borrarcuotas(index)
     

    };



    const traer = async (preba) => {

        console.log(preba.cuil_cuit)
        console.log('user')
        const lotes = await servicioUsuario1.lotesCliente(preba.cuil_cuit)
       
        setLotes(lotes)




    }
    const borrar = async (id) => {

        const rta = await servicioCuotas.borrarcuota(id)
     
        alert(rta)

    }



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


    return (

        <Fragment>

<br/><br/><br/><br/><br/><br/><br/><br/>
     
            {
                lotes.map((item, index) =>
                    <div>
                        <Button key={index} variant="contained" onClick={() => { vercuotas(item['id']) }}>{item['zona']} Manzana {item['manzana']} Parcela {item['lote']}</Button>
                        {/*  <Button  key= {index} variant="contained"onClick={()=>{agregar(item['id'])}}> Agregar Cuotas</Button> */}

                        <Button key={index} variant="contained" onClick={() => { verief(item['id']) }}> Estado financiero </Button>
                   
                     


                    </div>
                )
            }


            <div>
                <div>

                    <MUIDataTable
                        title={"Lista de Clientes"}
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
                </div>
            </div>

            <br/><br/><br/><br/>

            <TableContainer  style ={{width: '70%'}}  component={Paper}>
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
              <TableCell align="left">{row.datob}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br/><br/>


    <TableContainer  style ={{width: '70%'}}  component={Paper}>
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
              <TableCell align="left">{row.datob}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Fragment>

    )


}
export default CuotasNiv1