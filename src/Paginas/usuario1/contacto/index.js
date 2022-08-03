import Contacto from "../../../components/Contacto";
import Navbar from '../../../components/usuario1/Navbar1'
import Footer from '../../../components/usuario1/Footer'
import { Container, Box, Toolbar, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


import React from 'react';


export default function Contact() {
    return (
        <React.Fragment>
           <Navbar  />
            <CssBaseline />
            <Toolbar />
            
            <Container maxWidth="lg">
                <Box component="span" sx={{ p: 4}}>

                <Contacto />

                </Box>
        
            </Container>
            <Toolbar />
            <Toolbar />
            <Divider variant="middle" />

            <Footer />
        </React.Fragment>
    );
}