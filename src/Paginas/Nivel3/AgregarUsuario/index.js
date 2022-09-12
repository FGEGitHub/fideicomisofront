import * as React from 'react';
import  { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import servicioUsuario from '../../../services/usuarios'

import  Agregar from '../../../components/nivel3/agregarUsuario/AgregarUsuario'
import  useUser from '../../../hooks/useUser'
import BarraLAteral from '../../../components/nivel3/Menuizq3'


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



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
    < Agregar />

 </BarraLAteral>
 
  );
}