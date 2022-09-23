


import MenuUsuario1 from '../../../components/usuario1/Legajo1/MenuUsuario1'
import Constancias from '../../../components/usuario1/ListaConstancias/Constancias';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export default function Legajos() {

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
        <div>  { logueado ? <div>
        <MenuUsuario1>
     <Constancias/>
    </MenuUsuario1> 
    </div>   :<div></div> } </div>
    );

}