import Box from '@mui/material/Box';

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import NativeSelect from '@mui/material/NativeSelect';

import servicioCuotas from '../../services/cuotas'

import React, { useEffect, useState, Fragment } from "react";


export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [seleccion, seSeleccion] = useState([''])
  const [cuotas, setCuotas] = useState([''])



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
 
    seSeleccion({ ...seleccion, [e.target.name]: e.target.value })
    console.log(seleccion)
  }
  ////
  const borrar = async (event) => {
    event.preventDefault();
    try {

      await servicioCuotas.borrarpago(
       { id_cuota:props.id_cuota}
      )


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
      <Button color="error"  variant="outlined" onClick={handleClickOpen}>
        Borrar pago
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
            <h2>Borrar el pago de esta cuota?</h2>

        
           





      
         
     
          
       
            <Button onClick={borrar} color='success' variant='contained' >
               Si man
            </Button>
            
       
            <Button sx={{ align:"right"}} color='error' onClick={borrar} variant='contained' >
              Cancelar
            </Button>
    
    
        </div>
      </DialogContent>
    </Dialog>
    </Box >




  );
}