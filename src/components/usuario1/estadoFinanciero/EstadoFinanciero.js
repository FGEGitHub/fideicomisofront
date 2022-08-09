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

const CuotasNiv1 = (props) => {
    const [lotes, setLotes] = useState([''])
    //const usuario = useUser().userContext
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
 
    

    const vertodascuotas = async (index) => {
        console.log('ver cuotas')
        const cuotas = await servicioCuotas.vercuotas(index)
        if (cuotas !== '') { setCuotas(cuotas) }

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
        console.log('user')
        console.log(preba.cuil_cuit)
        console.log('user')
        const lotes = await servicioUsuario1.lotesCliente(preba.cuil_cuit)
       
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



    ];


    return (

        <Fragment>

<br/><br/><br/><br/><br/><br/><br/><br/>
     
            {
                lotes.map((item, index) =>
                    <div>
                        <Button key={index} variant="contained" onClick={() => { vercuotas(item['id']) }}>{item['zona']} Manzana {item['manzana']} Parcela {item['lote']}</Button>
                        {/*  <Button  key= {index} variant="contained"onClick={()=>{agregar(item['id'])}}> Agregar Cuotas</Button> */}

                        <Button /* variant="outlined"  */ key={index} variant="contained" onClick={() => { navigate('/usuario2/agregarcuotas/' + item['id']) }} >
                            informe Estado Financiero
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
        </Fragment>

    )


}
export default CuotasNiv1