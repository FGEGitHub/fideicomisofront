import * as React from 'react';
import { useEffect, useState } from "react";


import Subir from '../../../components/nivel2/legajocliente/SubirLegajo';
import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel2/MenuIzq2'

import { useParams } from "react-router-dom"

//import {makeStyles} from "@material-ui/core/styles"


const drawerWidth = 240;

export default function DetalleCliente() {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
  const navigate = useNavigate();

 
  
  
  
  


 

  ////////

  return (
    <BarraLAteral>

      {<Subir
      cuil_cuit={cuil_cuit} />}
 </BarraLAteral>
  );
}