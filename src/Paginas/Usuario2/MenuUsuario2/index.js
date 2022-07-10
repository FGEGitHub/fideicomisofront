import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/nivel2/listadeclientes/Table';
import Nuevo from '../../../components/nivel2/listadeclientes/ClienteNuevo';
import { useNavigate } from "react-router-dom";
import servicioUsuario from '../../../services/usuarios'
import NotificacionLegajo from '../../../components/NotificacionesU2'
import  useNoti from '../../../hooks/useNoti'
import  useUser from '../../../hooks/useUser'
import BarraLAteral from '../../../components/nivel2/MenuIzq2'
import AlertaAprobaciones from '../../../components/AlertaAprobaciones'

const drawerWidth = 240;

export default function MenuUsuario2() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [] = useState('')

  const nombre  = useUser()

  useEffect(() => {


//console.log(cantidad)



    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      servicioUsuario.setToken(user.token) 

      
    } 


  }, [])

  


  return (
   
    <BarraLAteral>
       <Nuevo/>
    <TableAxios/>
 </BarraLAteral>
  );
}
