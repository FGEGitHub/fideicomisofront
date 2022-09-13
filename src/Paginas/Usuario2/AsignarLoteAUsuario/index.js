import * as React from 'react';
import { useEffect, useState } from "react";

import AsignarLoteACliente from '../../../components/nivel2/asignarlotecliente/AsignarLoteACliente';
import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel2/MenuIzq2'


const drawerWidth = 240;

export default function DetalleCliente() {
  const navigate = useNavigate();
  const [logueado, setLogueado] = useState(false) 
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      if (user.nivel != 2){
        window.localStorage.removeItem('loggedNoteAppUser')
     navigate('/login')

      }else{

        setLogueado(true)
      }
    
      //servicioUsuario.setToken(user.token)  
     
      
    }
   
  }, [])


  
  


 

  ////////

  return (

<div> 
  { logueado ? <div> 

    <BarraLAteral>
<AsignarLoteACliente/>
     
 </BarraLAteral>

 </div>   :<div></div> } </div>
  );
}