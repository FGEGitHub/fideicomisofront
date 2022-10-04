
import React from 'react';
import Navbar from '../../../components/usuario1/Navbar1'
import  useUser from '../../../hooks/useUser'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cuotas from '../../../components/usuario1/cuotas/CuotasNiv1'
import Transferencias2 from '../../../components/usuario1/transferencias/Transferencias'




export default function Transferencias() {
    const usuario  = useUser().userContext
   
 const navigate = useNavigate();
 const [logueado, setLogueado] = useState(false) 
 useEffect(() => {
   const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
   
   if (loggedUserJSON) {
     const user = JSON.parse(loggedUserJSON)
     if (!user){
       window.localStorage.removeItem('loggedNoteAppUser')
    navigate('/login')

     }else{

       setLogueado(true)
     }
   
     //servicioUsuario.setToken(user.token)  
    
     
   }
  
 }, [])

    return (
        <><div>  { logueado ? <div> 
            <div className="App">


                <Navbar />
              {/*   <LotesCliente
                /> */}
                < Transferencias2 
                />
         
            </div>
            </div>   :<div></div> } </div>

        </>
    );

}