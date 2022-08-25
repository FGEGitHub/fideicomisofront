import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useState, Fragment } from "react";
import servicioRelev from '../../../services/relevamiento'


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [zona, setDatos] = useState({
   
    /////////asignar lote 0 caso que no se seleccione
})
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setDatos({ ...zona, [e.target.name]: e.target.value })
    console.log(zona)
}
const designar = async (event) => {
    
    const rta = await servicioRelev.nuevazona(zona)
       alert(rta)
       window.location.reload(true);

    }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Agregar una zona 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Zona </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Escribe nombre de la zona 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="zona"
            name="zona"
            label="Zona"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={designar}>Añadir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
