


import Navbar from '../../../components/usuario1/Navbar1'
import Modalasociar from '../../../components/usuario1/AsociarCbu/ModalAsociar'
import Tabla from '../../../components/usuario1/cbus/CbusDec'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function AsociarCbu() {
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
                <br />  <br />  <br />  <br />
                < Modalasociar/>
                <  Tabla/>
                

            </div>
            </div>   :<div></div> } </div>

        </>
    );

}