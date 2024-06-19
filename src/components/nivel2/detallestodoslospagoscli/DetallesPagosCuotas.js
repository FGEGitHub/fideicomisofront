import * as React from 'react';
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import {  useState, useEffect } from "react";
import servicioPagos from '../../../services/pagos'
import serviciousuario1 from '../../../services/usuario1'
import Borrar from './modalborrar';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Modif from './modalactcomp';
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
  
    const pag = await servicioPagos.detallesPagocli(aux)
    
    setPagos(pag)




} 

  const columns = [
    {
        name: "id",
        label: "id",
    },
    {
        name: "cuo",
        label: "cuota",
    },
    {
        name: "mes_anyo",
        label: "mes",
        
        
    },

 
     {
        name: "cuil_cuit_administrador",
        label: "Cuil administrador",
    },
    {
        name: "Modificar",
        options: {
            customBodyRenderLite: (dataIndex, rowIndex) =>
                modifa(
                    dataIndex,
                    rowIndex,
                   // overbookingData,
                   // handleEditOpen
                )
        }
    
 
    },
    {
        name: "Ver/borrar",
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
    try {
        const pdfBlob = await servicioPagos.traerPdfConstanciadepago(pagos[index].id);
        const url = URL.createObjectURL(pdfBlob);
        window.open(url, '_blank');
      } catch (error) {
        console.error('Error al obtener el PDF:', error);
        alert('Error al cargar el PDF');
      }

 
}


function modifa(index, rowIndex, data) {

    /* const filename = (products[index].key)
    console.log(filename)
    const link = await axios.get(`http://localhost:4000/usuario1/get-object-url/` + filename)
    console.log(link.data)
    setAct(true) */
    return (
        <>
            
   
   
<Modif
id={pagos[index].id}/>

        </>
    );
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
                >Ver Online</Button> 
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
