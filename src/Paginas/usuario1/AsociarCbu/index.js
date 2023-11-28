


import Navbar from '../../../components/usuario1/Navbar1'
import Tabla from '../../../components/usuario1/cbus/CbusDec'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {nivel} from '../../../herlpers/herlperlogin'


export default function AsociarCbu() {
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
        <div>  { logueado ? <div>
            <div className="App">


                <Navbar />
                <br />  <br />  <br />  <br />
          
                <  Tabla/>
                

            </div>
            </div>   :<div></div> } </div>

        </>
    );

}