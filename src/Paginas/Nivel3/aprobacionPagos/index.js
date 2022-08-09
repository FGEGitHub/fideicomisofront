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



  useEffect(() => {


  }, [])

  

  let path =''


  
  
  return (
    <ThemeProvider theme={darkTheme}>
 <BarraLAteral>
<TablaAprobacionesPagos/>
 </BarraLAteral>
    </ThemeProvider>

  );
}