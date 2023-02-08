import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import servicioPagos from '../../../services/pagos'
import servicioCuotas from '../../../services/cuotas'
import {  useState } from "react";
import Tooltip from '@material-ui/core/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import IconButton from '@mui/material/IconButton';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
   const [form, setForm] = useState ({
    id:props.id
   })
 
  const handleClickOpen = () => 
  {
 
    setOpen(true);
    traer()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const traer =async ()  => {
    console.log(props.id)
    const cuo = await servicioCuotas.traercuota(props.id)
   /*  setForm({
        cuo.saldo_inicial,
        cuo.cuota_con_ajuste
    })
 */

 // window.location.reload(true)
 }
  const rechazar =async (id)  => {
     await servicioPagos.rechazararpago(form)
     setOpen(false)
     window.location.reload(true);

  // window.location.reload(true)
  }
  const handleChange = (e) =>{
  console.log(form)
  setForm({  ...form, [e.target.name]: e.target.value })
}
  return (
    <div><Tooltip title="Pedir documentacion/Rechazar"arrow>
      <IconButton>
      <Button  onClick={handleClickOpen}>
       Rechazar
      </Button>
      </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rechazar</DialogTitle>
        <DialogContent>
    
          <form  onSubmit={rechazar}>
       
          <TextField
            autoFocus
            margin="dense"
            value="8"
            id="name"
            label="saldo_inicial"
            name= "saldo_inicial"
            multiline
             rows={4}
            onChange={handleChange}
            
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="cuota_con_ajuste"
            name= "cuota_con_ajuste"
            multiline
             rows={4}
            onChange={handleChange}
            
            fullWidth
            variant="standard"
          />
          
         
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ajuste_ICC"
            name= "Ajuste_ICC"
            multiline
             rows={4}
            onChange={handleChange}
            
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Saldo_real"
            name= "Saldo_real"
            multiline
             rows={4}
            onChange={handleChange}
            
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="diferencia"
            name= "diferencia"
            multiline
             rows={4}
            onChange={handleChange}
            
            fullWidth
            variant="standard"
          />
           <Button onClick={() => {rechazar(props.id)}}>Enviar </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
