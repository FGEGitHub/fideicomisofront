import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/nivel2/listadeclientes/Table';
import Nuevo from '../../../components/nivel2/listadeclientes/ClienteNuevo';
import Cantidad from '../../../components/nivel2/listadeclientes/CantidadClientes';
import { useNavigate } from "react-router-dom";

import BarraLAteral from '../../../components/nivel2/MenuIzq2'

const drawerWidth = 240;

export default function MenuUsuario2() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [] = useState('')

  const [logueado, setLogueado] = useState(true) 
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

  


  return (
    <div> 
    { logueado ? <div> 
      
    <BarraLAteral>

       <Nuevo/>
    <TableAxios/>
 </BarraLAteral>
 </div>   :<div></div> } </div>
  );
}
