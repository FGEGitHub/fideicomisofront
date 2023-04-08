import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/nivel2/listadeclientes/Table';

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


    const traer = async () => {

      const loggedUserJSON = await window.localStorage.getItem('loggedNoteAppUser')
    
      if (loggedUserJSON) {
  
        try {
         
        
        const user = JSON.parse(loggedUserJSON)
        console.log(2)
        if (user.nivel === 2){
          setLogueado(true)
          
     
        }else{
          alert('Debe volver a iniciar sesion ')
          window.localStorage.removeItem('loggedNoteAppUser')
          
        }
      } catch (error) {
        console.log(1)
        window.localStorage.removeItem('loggedNoteAppUser')
        navigate('/login')
      }
        //servicioUsuario.setToken(user.token)  
       
        
      }else{
        navigate('/login')
       
      }
      
    }


  return (
    <div> 
    { logueado ? <div> 
      
    <BarraLAteral>

    
    <TableAxios/>
 </BarraLAteral>
 </div>   :<div></div> } </div>
  );
}
