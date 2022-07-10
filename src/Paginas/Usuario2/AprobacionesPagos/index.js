import * as React from 'react';
import  { useEffect, useState } from "react";

import BarraLAteral from '../../../components/nivel2/MenuIzq2'
import { useNavigate } from "react-router-dom";
import TablaAprobacionesPagos from '../../../components/nivel2/nivel2Aprobaciondepagos/TablaAprobacionesPagos';

const drawerWidth = 240;

export default function MenuUsuario2() {
  const navigate = useNavigate();



  useEffect(() => {


  }, [])

  

  let path =''


  
  
  return (
 <BarraLAteral>
<TablaAprobacionesPagos/>
 </BarraLAteral>

  );
}