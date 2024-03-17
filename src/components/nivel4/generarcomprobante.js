import { useState, useEffect } from "react";
import ComprobantePDF from "./comprobante";
import servicioLotes from '../../../services/lotes'
import { useNavigate } from "react-router-dom";
import CargaDeTabla from "../../CargaDeTabla"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Lotes = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

/* 
    const getClients = async () => {

        const clients = await servicioLotes.lista2({

        })

        setClients(clients)
        setLoading(false);
    } */

    useEffect(() => {
        getClients()
    }, [])

    // definimos las columnas
   
        const comprobanteData = {
          nombre: 'Juan Pérez',
          direccion: 'Calle 123, Ciudad ABC',
          fecha: '23-07',
          // Agrega aquí los datos necesarios para tu comprobante
        };
    // renderiza la data table
    return (
        <>
              <ComprobantePDF data={comprobanteData} />
        </>


    )
}

export default Lotes;