import React, { useState } from 'react';
import servicioLotes from '../../services/lotes'
import DialogActions from '@mui/material/DialogActions';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

/////////////actualmente para usuario legales
const Formulario = (props) => {
  // Estados para almacenar los valores de los campos
  const [lotes, setLotes] = React.useState();
  const [form, setForm] = useState({ mapa: props.info })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const determinar = async () => {

    const rta = await servicioLotes.determinarmapatodos(form)
    
    props.cerrar();
  
    props.getClients()


  }
  const determinarposecion = async () => {

    const rta = await servicioLotes.determinarposecion(form)
    props.cerrar();
  
    props.getClients()


  }
  const cerrar = () => {

    props.cerrar();


  };
  return (
   <>
 

   <InputLabel variant="standard" htmlFor="uncontrolled-native">
     Categoria 1
   </InputLabel>
   <NativeSelect
     defaultValue={'sin determnar'}
     onChange={handleChange}
     inputProps={{
       name: 'categoria1',
       id: 'uncontrolled-native',

     }}
   ><option value={1}>Seleccionar</option>  
    <option value={"Usurpado"}>Usurpado</option>
     <option value={2}>2</option>
     <option value={3}>3</option>

 
   </NativeSelect>

   <InputLabel variant="standard" htmlFor="uncontrolled-native">
    <b>Categoria 2</b>
   </InputLabel>
   <NativeSelect
     defaultValue={'sin determnar'}
     onChange={handleChange}
     inputProps={{
       name: 'categoria12',
       id: 'uncontrolled-native',

     }}
   ><option value={1}>Seleccionar</option>  
    <option value={"Fideicomiso estado"}>Fideicomiso estado</option>
     <option value={"Un acta"}>Un acta</option>
     <option value={"Ningun acta"}>Ningun acta</option>
   

   </NativeSelect>
   <br/>
   <TextField 
           
            margin="dense"
            id="name"
            label="Perimetro"
            name="perimetro"
            onChange={handleChange}
            size="small"
            variant="standard"
          /> <br/>
             <TextField 
           
           margin="dense"
           id="name"
           label="Superficie"
           name="superficie"
           onChange={handleChange}
           size="small"
           variant="standard"
         />
   <DialogActions>
     <Button onClick={determinar}>Determinar </Button>
 

     
     <Button onClick={cerrar}>Cerrar</Button>
     
   </DialogActions></>
  );
};

export default Formulario;
