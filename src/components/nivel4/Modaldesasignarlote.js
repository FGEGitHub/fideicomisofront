import Box from '@mui/material/Box';

import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import NativeSelect from '@mui/material/NativeSelect';

import servicioRelevamiento from '../../services/relevamiento'

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

      await servicioRelevamiento.borrar(
        seleccion
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
       Desasignar lote
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
        

        
           





      
         
            <label>Zona</label>   <br />
            <NativeSelect
              defaultValue={30}
              onChange={handleChange}
              inputProps={{
                name: 'Zona',
                id: 'uncontrolled-native',

              }}

            > <option value={''}>Elegir</option>
              <option value={'La Tosquera'}>La Tosquera</option>
              <option value={'Otra'}>Otra</option>
      


            </NativeSelect>
       
            <Button onClick={borrar} variant='contained' >
               Borrar
            </Button>
    
        </div>
      </DialogContent>
    </Dialog>
    </Box >




  );
}