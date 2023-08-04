import * as React from 'react';
import { useEffect, useState } from "react";


import Comprobante from '../../../components/nivel4/comprobante';

import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel4/Menuizq4'




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


  
  

  const islogo = {
    width: "70%",   
    margin: 0,
    padding: 0,
    display: "flex",
            
    };
 

  ////////

  return (
    <div> 
  { logueado ? <div> 

    
    <Comprobante/>

 </div>   :<div></div> } </div>
  );
}