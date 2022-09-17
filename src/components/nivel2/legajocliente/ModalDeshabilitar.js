
import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import servicioCliente from '../../../services/clientes'


export default function Ingresos(props) {
  let params = useParams()
  let cuil_cuit = params.cuil_cuit

  const [open, setOpen] = React.useState(false);
  const [ingreso, setIngreso] = useState({
    cuil_cuit: cuil_cuit,
    cuil_cuit_admin: props.cuil_cuit_user

  })


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDeterminar = async (event) => {
    event.preventDefault();
    try {

      await servicioCliente.deshabilitar(ingreso)


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
        Deshabilitar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>HAbilitar legajo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Atencion: se deshabilitará y por lo tanto de determinará como completo los legajos del cliente
          </DialogContentText>

          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleDeterminar} >Deshabilitar </Button>
          </DialogActions>

        </DialogContent>



      </Dialog>
    </div>
  );
}
