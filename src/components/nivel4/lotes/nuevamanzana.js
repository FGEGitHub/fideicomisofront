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
import servicioLotes from '../../../services/lotes'
import AppleIcon from '@mui/icons-material/Apple';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Paper } from '@mui/material';


export default function ClienteNuevo(props) {
  let params = useParams()
    let cuil_cuit = params.cuil_cuit
   
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = useState({zona:"Legales",tipo_dni:"DNI"})
  const handleChange = (e) =>{
    setForm({  ...form, [e.target.name]: e.target.value }) 
 }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDeterminar = async (event) => {
    event.preventDefault();
    try {

      const respuestas =await servicioLotes.nuevamanzana(form)
    alert(respuestas)
     
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


      <Button variant="outlined" color='success' onClick={handleClickOpen}>
       Cargar nueva manzana  <AppleIcon/>
     
      </Button>
      <Dialog open={open} onClose={handleClose}>
     
        <DialogTitle>New Lote </DialogTitle>
        <Paper
        sx={{
          cursor: 'pointer',
          background: '#fafafa',
          color: '#bdbdbd',
          border: '1px dashed #ccc',
          '&:hover': { border: '1px solid #ccc' },
        }}
      >
        <DialogContent>
          <DialogContentText>
        Datos del Nuevo Lote
          </DialogContentText>
          <form  onSubmit={handleDeterminar}> 

      {/*     <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                          Fraccion
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'fraccion',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'IC3'}>Elegir</option>
                           <option   value={'ID/4'}>ID/4</option>
                            <option   value={'ID/5'}>ID/5</option>
                            <option  value={'ID/6'}>ID/6</option>
                         
                        </NativeSelect>  */}
      
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="manzana"
            name="manzana"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          
            

          <DialogActions>
          {form.manzana ? <><Button variant="contained" color="primary"  type="submit">Crear</Button></> : <><h6  style={{color: "red"}} >Completar todos los campos</h6></> } 
          <Button  variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
         
        </DialogActions>
           </form>
         

        </DialogContent>
      
        </Paper>
        
      </Dialog>
      
    </div>
  );
}
