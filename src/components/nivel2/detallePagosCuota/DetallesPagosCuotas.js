import * as React from 'react';
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import {  useState, useEffect } from "react";
import servicioPagos from '../../../services/pagos'
import serviciousuario1 from '../../../services/usuario1'
import Borrar from './modalborrar';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

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
    {
        name: "Descarga",
        options: {
            customBodyRenderLite: (dataIndex, rowIndex) =>
            downloadFile(
                    dataIndex,
                    rowIndex,
                   // overbookingData,
                   // handleEditOpen
                )
        }
    
    },   
   
];

async function download(index, rowIndex, data) {
    const filename = (pagos[index].ubicacion)
  
   
   const link = await serviciousuario1.obtenerurl(filename)

    console.log(link.data)            
    window.open(link.data)

 
}

function downloadFile(index, rowIndex, data) {

    /* const filename = (products[index].key)
    console.log(filename)
    const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
    console.log(link.data)
    setAct(true) */
    return (
        <>
            
              <Button
                    onClick={() => download(index)}
                >Descargar</Button> 
<Borrar
id={pagos[index].id}/>

        </>
    );
}
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
