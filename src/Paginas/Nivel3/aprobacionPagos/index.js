import * as React from 'react';
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TablaAprobacionesPagos from '../../../components/nivel2/nivel2Aprobaciondepagos/TablaAprobacionesPagos';
import BarraLAteral from '../../../components/nivel3/Menuizq3'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const drawerWidth = 240;

export default function Aprobacion() {

  const navigate = useNavigate();
  const [logueado, setLogueado] = useState(false) 


useEffect(() => {
  const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
  
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    if (user.nivel != 3){
      window.localStorage.removeItem('loggedNoteAppUser')
   navigate('/login')

    }else{

      setLogueado(true)
    }
  
    //servicioUsuario.setToken(user.token)  
   
    
  }
 
}, [])

  

  let path =''


  
  
  return (
    <div> 
  { logueado ? <div>
    <ThemeProvider theme={darkTheme}>
 <BarraLAteral>
<TablaAprobacionesPagos/>
 </BarraLAteral>
    </ThemeProvider>
 </div>   :<div></div> } </div>
  );
}