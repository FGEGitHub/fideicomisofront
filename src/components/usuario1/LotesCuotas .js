import { useParams } from "react-router-dom"
import servicioLotes from '../../services/lotes'
import servicioCuotas from '../../services/cuotas'
import React, { useEffect, useState, Fragment } from "react";

import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


const LotesCuotas = (props) => {
  
    let cuil_cuit = props.cuil_cuit
    const navigate = useNavigate();
    useEffect(() => {

        traer()

    }, [])
    const [lotes, setLotes] = useState([''])
    const [cuotas, setCuotas] = useState([''])
    const [open, setOpen] = React.useState(false);
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





    const traer = async () => {
    console.log(props.cuil_cuit)
        const lotes = await servicioLotes.lotesClienteUsuario1(props.cuil_cuit)
       
        setLotes(lotes)




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
             <br/>   <br/>   <br/>   <br/>   
             
         
         
            {
                lotes.map((item, index) =>
                    <div>
                        <Button key={index} variant="contained" onClick={() => { vercuotas(item['id']) }}>{item['zona']}F{item['fraccion']}M{item['manzana']}L{item['lote']}</Button>
                        {/*  <Button  key= {index} variant="contained"onClick={()=>{agregar(item['id'])}}> Agregar Cuotas</Button> */}

                      
                      


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
export default LotesCuotas