import * as React from 'react';
import { useEffect, useState } from "react";


import DetalleC from '../../../components/nivel2/legajocliente/LegajoCliente';

import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel4/Menuizq4'
import servicioUsuario from '../../../services/usuarios'



//import {makeStyles} from "@material-ui/core/styles"





export default function DetalleCliente() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [modal, setModal] = useState(false)
 
 
  const [logueado, setLogueado] = useState(false) 
  useEffect(() => {
    
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      
    if (loggedUserJSON) {
      
      const user = JSON.parse(loggedUserJSON)
      if (user.nivel != 4 ){
        window.localStorage.removeItem('loggedNoteAppUser')
   

      }else{

        setLogueado(true)
      }
    
      //servicioUsuario.setToken(user.token)  
     
      
    }else{
      navigate('/login')
     
    }
   
  }, []) 


  
  


 

  ////////

  return (
    <div> 
  { logueado ? <div> 
    <BarraLAteral>
    
      {<DetalleC />}
 </BarraLAteral>
 </div>   :<div></div> } </div>
  );
}