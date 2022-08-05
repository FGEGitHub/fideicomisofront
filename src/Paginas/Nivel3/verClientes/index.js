import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/nivel2/listadeclientes/Table';
import Nuevo from '../../../components/nivel2/listadeclientes/ClienteNuevo';
import { useNavigate } from "react-router-dom";
import servicioUsuario from '../../../services/usuarios'
import  useUser from '../../../hooks/useUser'
import BarraLAteral from '../../../components/nivel3/Menuizq3'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const drawerWidth = 240;

export default function VerCliente() {
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
    <ThemeProvider theme={darkTheme}>
   
    <BarraLAteral>
       <Nuevo/>
    <TableAxios/>
 </BarraLAteral>
    </ThemeProvider>
  );
}
