import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import NativeSelect from '@mui/material/NativeSelect';
import servicioCliente from '../../../services/clientes'
import servicioLotes from '../../../services/lotes'

import React, { useEffect, useState, Fragment } from "react";
const currencies = [
  {
    value: 'CBU',
    label: 'CBU N°1',
  },
  {
    value: 'CBU',
    label: 'CBU N°2',
  },

];

export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [rta, setRta] = useState()




  const traer = async () => {
   
    const valor = await servicioLotes.calcular(props.datos)
    console.log(valor)
    setRta(valor)
   




  }

  const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
  const cuil_cuit = preba.cuil_cuit



  const handleClickOpen = () => {
    traer()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  ////
  const pagar = async (event) => {
   // event.preventDefault();
    try {

      await servicioCliente.pagar()


    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')

    }

    setOpen(false);
  };/////
  const [currency, setCurrency] = React.useState('EUR');

  /*   const handleChange = (event) => {
      setCurrency(event.target.value);
    }; */


  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button variant="outlined" onClick={handleClickOpen}>
      Comprobar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
      {rta? <div> 
        <h2>  Lote: {rta.nombre} </h2>  
        Superficie: {rta.superficie} <br/>
        Precio: ${rta.precio}<br/>
        Valor de cuotas en 60(20% anticipo): ${rta.cuotas60}<br/>

      </div>  : <div> 
        
      </div> }

          <div>

          <Button onClick={handleClose} size="small" variant="contained">
              Cerrar
            </Button>
        </div>
      </DialogContent>
    </Dialog>
    </Box >




  );
}