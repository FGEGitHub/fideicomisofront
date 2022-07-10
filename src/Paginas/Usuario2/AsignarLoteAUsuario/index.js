import * as React from 'react';
import { useEffect, useState } from "react";

import AsignarLoteACliente from '../../../components/nivel2/asignarlotecliente/AsignarLoteACliente';
import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel2/MenuIzq2'


const drawerWidth = 240;

export default function DetalleCliente() {
  const navigate = useNavigate();


  useEffect(() => {


 
    
  }, [])


  
  


 

  ////////

  return (
    <BarraLAteral>
<AsignarLoteACliente/>
     
 </BarraLAteral>
  );
}