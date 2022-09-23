


import Navbar from '../../../components/usuario1/Navbar1'
import  useUser from '../../../hooks/useUser'
import Tablanoti from '../../../components/usuario1/Tablanotificaciones/TablaNotificaciones'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";






export default function Notificaciones() {
  

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
        <>
        <div>  { logueado ? <div> 
            <div className="App">

      
                <Navbar />

                <br /> <br />
                <Tablanoti
              />
                

            </div>

            </div>   :<div></div> } </div>
        </>
    );

}