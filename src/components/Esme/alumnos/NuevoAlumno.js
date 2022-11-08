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
import servicioEsme from '../../../services/esme'
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function ClienteNuevo(props) {
  let params = useParams()
    let cuil_cuit = params.cuil_cuit
   
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = useState({})
  const handleChange = (e) =>{
    setForm({  ...form, [e.target.name]: e.target.value }) 
  console.log(form)}

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDeterminar = async (event) => {
    event.preventDefault();
    try {

      await servicioEsme.nuevoCurso(form)
 
     
     } catch (error) {
       console.error(error);
       console.log('Error algo sucedio')
   
     
     }
     props.getClients()
   
    setOpen(false);
  };
  
  const handleClose = () => {
    setOpen(false);
   
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Nuevo Curso<PersonAddAlt1Icon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nuevo Curso </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese Datos del Nuevo Cliente
          </DialogContentText>
          <form  onSubmit={handleDeterminar}> 
          <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                         Nombre
                        </InputLabel>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            name="nombre"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          
                                   
              <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Domicilio"
            name="profesor"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
              <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Otro dato"
            name="otro"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
             
      
          <DialogActions>
          {form.nombre && form.profesor  ? <><Button  type="submit">Enviar</Button></> : <><h6  style={{color: "red"}} >Completar todos los campos</h6><Button  type="submit" disabled>Enviar</Button></> } 
          <Button onClick={handleClose}>Cancelar</Button>
         
         
        </DialogActions>
           </form>
        </DialogContent>
      
        
        
      </Dialog>
    </div>
  );
}
