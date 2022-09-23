import MenuUsuario1 from '../../../components/usuario1/Legajo1/MenuUsuario1'
import StepperDJ from '../../../components/usuario1/declaracionesJuradas/StepperDJ';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





export default function DeclaracionesJuradas() {

  
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
      <ThemeProvider>

        <MenuUsuario1>
      <StepperDJ />
    </MenuUsuario1>  
    </ThemeProvider>
    </div>   :<div></div> } </div>
    );

}