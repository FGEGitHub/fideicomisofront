import * as React from 'react';
import { useEffect, useState } from "react";


import DetalleL from '../../../components/nivel2/legajocliente/LegajoCliente';
import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/nivel2/MenuIzq2'
import servicioUsuario from '../../../services/usuarios'
import Ingresos from '../../../components/nivel2/detalleclienteIngresos/Ingresos'
import { useParams } from "react-router-dom"

//import {makeStyles} from "@material-ui/core/styles"


const drawerWidth = 240;

export default function DetalleCliente() {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
  const navigate = useNavigate();

 
  

  useEffect(() => {

    

    //
  }, [])


  
  


 

  ////////

  return (
    <BarraLAteral>

      {<DetalleL
      cuil_cuit={cuil_cuit} />}
 </BarraLAteral>
  );
}