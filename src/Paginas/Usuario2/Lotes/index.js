import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/nivel2/lotes/Lotes';
import { useNavigate } from "react-router-dom";
import servicioUsuario from '../../../services/usuarios'
import BarraLAteral from '../../../components/nivel2/MenuIzq2'
const drawerWidth = 240;

export default function Lotes() {
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

 
  return (
    <div>
    { logueado ? <div>


      <BarraLAteral>
    <TableAxios />
 </BarraLAteral>
    </div> 
    
    :<div></div> }


 </div>
  );
}