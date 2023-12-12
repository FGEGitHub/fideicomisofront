import React, { useState, useEffect } from "react";
import servicioLotes from '../../services/lotes'
import DialogActions from '@mui/material/DialogActions';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
/////////////actualmente para usuario legales
const Formulario = (props) => {
  // Estados para almacenar los valores de los campos
  const [lotes, setLotes] = React.useState();
  const [clients, setClients] = useState()



  const getClients = async () => {
    let clients
 if (props.mapa ==="PIT" ){
     clients = await servicioLotes.traersegunmapa2(props.info)
 }else{
    clients = await servicioLotes.traersegunmapa1(props.info)
 }
    

    setClients(clients[0])
   
}

useEffect(() => {
    getClients()
}, [])
  const cerrar = () => {

    props.closeDialog();


  };
  return (
   <>
  {clients ? <>
  Cuil
 { clients.cuil_cuit}<br/>
 Adrema
 { clients.adrema}<br/>
  </>:<></>}
  
   <DialogActions>
   
     <Button onClick={cerrar}>Cerrar</Button>
     
   </DialogActions></>
  );
};

export default Formulario;
