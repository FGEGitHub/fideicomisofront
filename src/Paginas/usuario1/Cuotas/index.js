

import React, { useEffect, useState, Fragment } from "react";
import Navbar from '../../../components/usuario1/Navbar1'
import useUser from '../../../hooks/useUser'
import Cuotas from '../../../components/usuario1/cuotas/CuotasNiv1'





export default function Transferencias() {
  const [usuarioo, setUsuarioo] = useState([''])
    const usuario = useUser().userContext
   //setUsuarioo(usuario)

   

    return (
        <>
              <Navbar /> 

              <Cuotas 
              user = {1}
              user2 = {usuarioo}
         
              
              /> 

               
            </>
            );

}