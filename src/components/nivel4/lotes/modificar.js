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
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function ClienteNuevo(props) {
  let params = useParams()

  const [activo, setActivo] = useState(false)
    const [escuelas, setEscuelas] = useState()
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = useState({})


  const handleChange = (e) =>{
    console.log(e.target.value)
    setForm({  ...form, [e.target.name]: e.target.value }) 
    console.log(form)
 }


 const traer = async () => {

   setForm({id:props.id, 
    manzana:props.manzana,
    adrema:props.adrema,
    fraccion:props.fraccion,
    parcela:props.parcela,
 

})
   setActivo(true)

  }
  
  
  const handleClickOpen = () => {
    setOpen(true);
     traer()
  };



  const handleDeterminar = async (event) => {
    event.preventDefault();
    try {

    const rta = await servicioLotes.modificarlote(form)

     
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
        Modificar
      <BorderColorIcon/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
     
        <DialogTitle>Modificar mesas </DialogTitle>
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
        Definir cantidad de votantes
          </DialogContentText>
          <form  onSubmit={handleDeterminar}> 
      
         
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Escuela
                 </InputLabel>

             {/*     <Autocomplete
                options={escuelas}
                getOptionLabel={(option) => option.nombre}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Elegir en que escuela vota"
                   name="id_donde_vota"
                    variant="outlined"
                   
                  />
                )}
                autoHighlight
                autoSelect
            

                onChange ={handleChangedondevota}
              
                native // Habilita la selección nativa
              />
 */}


               
                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                 
                    label="manzana"
                    name="manzana"
                    onChange={handleChange}
                    fullWidth
                    variant="standard"
                    defaultValue={props.manzana}
                />
                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                 
                    label="parcela"
                    name="parcela"
                    onChange={handleChange}
                    fullWidth
                    variant="standard"
                    defaultValue={props.parcela}
                />
                 <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                 
                    label="adrema"
                    name="adrema"
                    onChange={handleChange}
                    fullWidth
                    variant="standard"
                    defaultValue={props.adrema}
                />
                  
          <DialogActions>
          <><Button variant="contained" color="primary"  type="submit">Enviar</Button></>
          <Button  variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
         
        </DialogActions>
           </form>
         

        </DialogContent>
      
        </Paper>
        
      </Dialog>
      
    </div>
  );
}