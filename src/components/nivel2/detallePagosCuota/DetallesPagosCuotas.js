import * as React from 'react';
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import {  useState, useEffect } from "react";
import servicioPagos from '../../../services/pagos'
import Dialog from '@mui/material/Dialog';

export default function DetallesPagos(props) {
   
  const [open, setOpen] = React.useState(false);

  const [pagos, setPagos] = useState([]);

        


  const handleDeterminar = async (event) => {
    
    const  pagos = await servicioPagos.detallespagoscuota(props.id_cuota)
     setPagos(pagos)

    setOpen(false);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    {
        name: "zona",
        label: "Zona",
    },
    {
        name: "fraccion",
        label: "Fraccion",
        
        
    },
    {
        name: "manzana",
        label: "Manzana",
        
    },
    {
        name: "lote",
        label: "Lote",
    },
    {
        name: "parcela",
        label: "Parcela",
    },
     {
        name: "nombre_razon",
        label: "Nombre/Razon",
    },
    {
        name: "cuil_cuit",
        label: "Cuil/Cuit",
    },
   
   
];
return (
    <Dialog open={open} onClose={handleClose}>
    <MUIDataTable
        title={"Lista de Clientes"}
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
        </Dialog>
)
}
