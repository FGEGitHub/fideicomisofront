import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/nivel2/listadeclientes/Table';
import {nivel} from '../../../herlpers/herlperlogin'
import { useNavigate } from "react-router-dom";

import BarraLAteral from '../../../components/nivel2/MenuIzq2'

const drawerWidth = 240;

export default function MenuUsuario2() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [] = useState('')

  const [logueado, setLogueado] = useState(true) 

  
  useEffect(() => {
   
    traer()
      
        //servicioUsuario.setToken(user.token)  
       
        
     
    }, [])

/////////////////////////////////////Deslogueo si no es nivel 2
    const traer = async () => {
     const esniv2 =  await nivel(2) //helper de verificacion
     console.log(esniv2)
     if (esniv2){
      setLogueado(true)
     }else{
      navigate('/login')
     }

    }

    

  return (
    <div> 
    { logueado ? <div> 
      
    <BarraLAteral>
    <TableAxios/> {/* Children */}
 </BarraLAteral>
 </div>   :<div></div> } </div>
  );
}
