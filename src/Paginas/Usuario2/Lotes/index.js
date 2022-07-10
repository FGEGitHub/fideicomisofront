import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/nivel2/lotes/Lotes';
import { useNavigate } from "react-router-dom";
import servicioUsuario from '../../../services/usuarios'
import BarraLAteral from '../../../components/nivel2/MenuIzq2'
const drawerWidth = 240;

export default function Lotes() {
  const navigate = useNavigate();
  const [nivel, setNivel] = useState(null)
  const [user, setUser] = useState(null)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      servicioUsuario.setToken(user.token)  
      const nivel= user.nivel
      setNivel(nivel)
   
      
    }
    if (user){
      navigate('/login')
    }
  }, [])

 
  return (
    <BarraLAteral>
    <TableAxios />
 </BarraLAteral>
  );
}