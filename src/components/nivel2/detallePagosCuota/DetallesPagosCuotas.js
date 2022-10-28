import * as React from 'react';
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import {  useState, useEffect } from "react";
import servicioPagos from '../../../services/pagos'
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";


export default function DetallesPagos(props) {
    let params = useParams()
    let id = params.id
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log(id)
        traer()

    }, [])


  const [pagos, setPagos] = useState([]);

  const traer = async () => {
    const aux={
        id:id
    }
    const pag = await servicioPagos.detallesPago(aux)
    
    setPagos(pag)




} 

  const columns = [
    {
        name: "id",
        label: "id",
    },
    {
        name: "mes",
        label: "mes",
        
        
    },
    {
        name: "anio",
        label: "año",
        
    },
    {
        name: "monto",
        label: "monto",
    },
    {
        name: "tipo",
        label: "tipo",
    },
     {
        name: "cuil_cuit_administrador",
        label: "Cuil administrador",
    },
    {
        name: "cuil_cuit",
        label: "Cuil/Cuit",
    },
   
   
];
return (

    <MUIDataTable
        title={"Lista de Pagos"}
        data={pagos}
        columns={columns}
        actions={[
            {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
        ]}
        />
      
)
}
