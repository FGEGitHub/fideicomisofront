

import Footer from '../../../components/usuario1/Footer';
/* import Navbar from './componentes/usuario1/Navbar'; */
import Banner from '../../../components/usuario1/Banner'
import Cards from '../../../components/usuario1/Cards'
import Faq from '../../../components/usuario1/Faq'
import Navbar from '../../../components/usuario1/Navbar1'
import {nivel} from '../../../herlpers/herlperlogin'

import { Divider, Toolbar } from '@mui/material';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export default function MenuUsuario1() {




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
        <><div>  { logueado ? <div> 
            <div disableSticky={false} className="App">


                <Navbar /> 
                <br/><br/><br/>
                   
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