import Contacto from "../../../components/Contacto";
import Navbar from '../../../components/usuario1/Navbar1'
import Footer from '../../../components/usuario1/Footer'
import { Container, Box, Toolbar, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react';


export default function Contact() {
    
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
        <React.Fragment>
           <Navbar  />
            <CssBaseline />
            <Toolbar />
            
            <Container maxWidth="lg">
                <Contacto />
                <Divider variant="middle" />
                
        
            </Container>
            <Toolbar />
            <Toolbar />
            <Divider variant="middle" />

            <Footer />
        </React.Fragment>
        </div>   :<div></div> } </div>
    );
}