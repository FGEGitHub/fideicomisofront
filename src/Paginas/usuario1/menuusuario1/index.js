

import Footer from '../../../components/usuario1/Footer';
/* import Navbar from './componentes/usuario1/Navbar'; */
import Banner from '../../../components/usuario1/Banner'
import Cards from '../../../components/usuario1/Cards'
import Faq from '../../../components/usuario1/Faq'
import Navbar from '../../../components/usuario1/Navbar1'

import  useUser from '../../../hooks/useUser'
import { Divider, Toolbar } from '@mui/material';
import NotificacionesFlotantes from '../../..//components/usuario1/NotificacionesFlotantes'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export default function MenuUsuario1() {

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
            <div disableSticky={false} className="App">


                <Navbar /> 
                <br/><br/><br/><br/><br/>
           
                   
                <Banner />
                <Divider variant="middle" />

                <Cards />
                <Divider variant="middle" />

                <Faq />
                <Toolbar />
                <Divider variant="middle" />

                <Footer />

            </div>

            </div>   :<div></div> } </div>
        </>
    );

}