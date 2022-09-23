
import React from 'react';
import Navbar from '../../../components/usuario1/Navbar1'
import  useUser from '../../../hooks/useUser'
import Respuesta from '../../../components/usuario1/respuesta/Respuestanoti'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





export default function Transferencias() {


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
                <Respuesta
                />

            </div>

            </div>   :<div></div> } </div>
        </>
    );

}