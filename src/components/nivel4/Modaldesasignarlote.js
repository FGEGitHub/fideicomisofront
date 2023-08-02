import Box from '@mui/material/Box';

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import NativeSelect from '@mui/material/NativeSelect';

import servicioLotes from '../../services/lotes'

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

      await servicioLotes.desasignarlote(
        props.id
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
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
       Desasignar lote {props.id}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
        

        
           





      
         
            <label>Seguro que deseas desasignar lote?</label>   <br />
           <p>El lote quedarà libre,sin embargo las cuotas seguiran existiendo, procura borrarlas antes si deseas hacerlo</p>
       
            <Button onClick={borrar} variant='contained' >
               Si
            </Button>
            <Button onClick={handleClose} variant='contained' >
               No
            </Button>
        </div>
      </DialogContent>
    </Dialog>
    </Box >




  );
}