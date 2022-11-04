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
import Box from '@mui/material/Box';

export default function ClaseNueva (props) {
  let params = useParams()
   
   
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = useState({})
  const handleChange = (e) =>{
    setForm({  ...form, [e.target.name]: e.target.value }) 
  console.log(form)}

  const handleClickOpen = () => {
    setForm({'id':props.clase.id})
    setOpen(true);
  };
  const handleDeterminar = async (event) => {
    event.preventDefault();
    try {

      await servicioEsme.nuevaClase(form)
 
     
     } catch (error) {
       console.error(error);
       console.log('Error algo sucedio')
   
     
     }
     props.traer()
   
    setOpen(false);
  };
  
  const handleClose = () => {
    setOpen(false);
   
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Nueva clase {props.clase.nombre}<PersonAddAlt1Icon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nuevo clase </DialogTitle>
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
            label="Tema"
            name="tema"
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
              <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <TextField

                onChange={handleChange}
                name="fecha"
                id="date"
                label="Fecha del pago"
                type="date"
                defaultValue="2020-01-01"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
      
          <DialogActions>
          {form.otro && form.tema  && form.fecha ? <><Button  type="submit">Enviar</Button></> : <><h6  style={{color: "red"}} >Completar todos los campos</h6><Button  type="submit" disabled>Enviar</Button></> } 
          <Button onClick={handleClose}>Cancelar</Button>
         
         
        </DialogActions>
           </form>
        </DialogContent>
      
        
        
      </Dialog>
    </div>
  );
}
