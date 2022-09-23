import Navbar from '../../../components/usuario1/Navbar1'
import Footer from '../../../components/usuario1/Footer'
import { Container, Box, Toolbar, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import React from 'react';


export default function Nosotros() {
    

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
                <Box component="span" sx={{ p: 4}}>
                    <Grid container spacing={2} justifyContent="center">
                    <Typography alingContent="center" variant="h4" component="h1" gutterBottom>
                        Fideicomiso de Administración Santa Catalina
                    </Typography>
                    </Grid>
                </Box>
                <Divider variant="middle" />

                <Box my={12}>
                <Typography variant="h6" gutterBottom component="div">
                Descripción General del Proyecto:
                </Typography>
                <Typography variant="body1" gutterBottom>
                Se trata de un predio de 2.387 hectáreas, localizado en el sector sur de la ciudad de Corrientes. Tiene como límite norte la línea de torres del electroducto, la costa del río Paraná al oeste, la costa del Riachuelo al sur y al este las líneas del ferrocarril Urquiza. Hasta 2012, el predio perteneció al Ejército Argentino, y allí funcionó el Cuartel de Santa Catalina, que alojó desde 1912 al regimiento de Infantería 9 Coronel Pagola. El Fideicomiso Santa Catalina, a través de su Fiduciario: La Caja Municipal de Préstamos, es el encargado de explotar el predio. El fiduciante es la Municipalidad de Corrientes.
                <Toolbar />
                <Typography variant="body1" gutterBottom>
                Actualmente la pastilla bajo comercialización es la denominada "IC3" que consta de: +500 lotes de 300m2 promedio para uso residencial +Lotes para desarrollo comercial +Plazas y reservas para equipamiento (educativo, salud) +Contará con los servicios (Energía, Agua, Red Cloacal)

                </Typography>
      </Typography>
        <Toolbar />
        <Grid container spacing={3}>
                <iframe
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/2T55kMhOWps?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="video"
                ></iframe>
                <Toolbar />
                <iframe
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/IXi6WOhYAVM?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="video"
                ></iframe>
                </Grid>
                </Box>
            </Container>
            <Toolbar />
            <Toolbar />
            <Divider variant="middle" />

            <Footer />
            </React.Fragment>
            </div>   :<div></div> } </div>
            
            
        );

        
    }