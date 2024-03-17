

import React, { useEffect, useState, Fragment } from "react";
import Navbar from '../../../components/usuario1/Navbar1'
import {nivel} from '../../../herlpers/herlperlogin'
import useUser from '../../../hooks/useUser'
import Cuotas from '../../../components/usuario1/cuotas/CuotasNiv1'

import { useNavigate } from "react-router-dom";




export default function Transferencias() {
  const [usuarioo, setUsuarioo] = useState([''])
  const usuario = useUser().userContext
  //setUsuarioo(usuario)


  const navigate = useNavigate();
  const [logueado, setLogueado] = useState(false)
  useEffect(() => {
   
    traer()
      
        //servicioUsuario.setToken(user.token)  
       
     
    }, [])
  /////////////////////////////////////Deslogueo si no es nivel 1
  const traer = async () => {
    const esniv2 =  await nivel(1) //helper de verificacion
    console.log(esniv2)
    if (esniv2){
     setLogueado(true)
    }else{
     navigate('/login')
    }

   }
  return (
    <>
      <div>  {logueado ? <div>

        <Navbar />


        <Cuotas
      
        />
      </div> : <div></div>} </div>

    </>
  );

}