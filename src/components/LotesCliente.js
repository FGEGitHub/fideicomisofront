import { useParams } from "react-router-dom"
import servicioLotes from '../services/lotes'
import servicioCuotas from '../services/cuotas'

import BorrarCuotas from './nivel2/borrarcuotas/BorrarCuotas'

import React, { useEffect, useState, Fragment } from "react";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    const [estadoCuotas, setestadoCuotas] = useState({
        anticipo: "",
        monto: "",
        cantidad_cuotas: "",


    })



    const vercuotas = async (index) => {
        console.log('ver cuotas')
        const cuotas = await servicioCuotas.vercuotas(index)
        if (cuotas !== '') { setCuotas(cuotas) }

    };
    //////////servicioCuotas

    const borarTodas = async (index) => {
  
        const cuotas = await servicioCuotas.borrarcuotas(index)
     

    };

    const verief = async (index) => {
        console.log('ver ief')
        console.log(index)
        const dde = await servicioCuotas.verief(index)
        setDeudaExigible(dde[0])
        setDetallePendiente(dde[1])
        
     

    };

    const traer = async () => {

        const lotes = await servicioLotes.lotesCliente(props.cuil_cuit)
        console.log(lotes)
        setLotes(lotes)




    }
    const borrar = async (id) => {

        const rta = await servicioCuotas.borrarcuota(id)
     
        alert(rta)

    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
            <CurrencyExchangeIcon 
             onClick={() =>  navigate('/usuario2/pagarcuota/'+cuotas[dataIndex].id)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <SearchIcon style={{ cursor: "pointer" }} 
            onClick={() =>  navigate('')  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
            <DeleteIcon style={{ cursor: "pointer" }} 
            onClick={() =>  borrar(cuotas[dataIndex].id) }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
          </>
        );
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
            name: "Ajuste_ICC",
            label: "Ajuste ICC",

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


    return (

        <Fragment>
            <Button  onClick={() => { navigate('/usuario2/asignarloteausuario/' +cuil_cuit)}} variant="contained" color="success">
              Vender un lote 
            </Button>
            {
                lotes.map((item, index) =>
                    <div>
                        <Button key={index} variant="contained" onClick={() => {  vercuotas(item['id']) }}> Ver cuotas del lote {item['zona']}F{item['fraccion']}-M{item['manzana']}-L{item['lote']}</Button>
                        {/*  <Button  key= {index} variant="contained"onClick={()=>{agregar(item['id'])}}> Agregar Cuotas</Button> */}

                        <Button /* variant="outlined"  */ key={index} variant="contained" onClick={() => { navigate('/usuario2/agregarcuotas/' + item['id']) }} >
                            Agregar cuotas al lote
                        </Button>
                   
                        <BorrarCuotas  
                        id ={  item['id']}  />
                        
                        <br/><br/>
                        <Button /* variant="outlined"  */ key={index} variant="contained" onClick={() => { verief( item['id']) }} >
                            Informe estado financiero
                        </Button>

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
export default LotesCliente