import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useState } from "react";
import servicioCliente from '../../../services/clientes'


export default function Ingresos() {
  let params = useParams()
    let cuil_cuit = params.cuil_cuit
   
  const [open, setOpen] = React.useState(false);
  const [ingreso, setIngreso] = useState({
    ingreso: "",
   
  })
  const handleChange = (e) =>
  setIngreso({  ...ingreso, [e.target.name]: e.target.value })

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDeterminar = async (event) => {
    event.preventDefault();
    try {

      await servicioCliente.determinarIngreso({
        ingresos:ingreso.ingreso,
        cuil_cuit:cuil_cuit
        
     })
 
     
     } catch (error) {
       console.error(error);
       console.log('Error algo sucedio')
   
     
     }

    setOpen(false);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Determinar ingresos declarados
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Determinar Ingreso declarado</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese el valor en pesos 
          </DialogContentText>
          <form  onSubmit={handleDeterminar}> 
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            name="ingreso"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  type="submit">Enviar</Button>
        </DialogActions>
           </form>
        </DialogContent>
      
        
        
      </Dialog>
    </div>
  );
}
