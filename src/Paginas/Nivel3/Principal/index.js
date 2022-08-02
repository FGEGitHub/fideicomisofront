import * as React from 'react';
import { useEffect, useState } from "react";

import AsignarLoteACliente from '../../../components/nivel2/asignarlotecliente/AsignarLoteACliente';
import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel3/Menuizq3'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const drawerWidth = 240;

export default function DetalleCliente() {
  const navigate = useNavigate();


  useEffect(() => {


 
    
  }, [])


  
  


 

  ////////

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <BarraLAteral>

     
 </BarraLAteral>
 </ThemeProvider>
  );
}