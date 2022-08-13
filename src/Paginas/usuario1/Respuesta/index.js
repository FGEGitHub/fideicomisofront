
import React from 'react';
import Navbar from '../../../components/usuario1/Navbar1'
import  useUser from '../../../hooks/useUser'
import Respuesta from '../../../components/usuario1/respuesta/Respuestanoti'
import { Divider, Toolbar } from '@mui/material'
import Footer from '../../../components/usuario1/Footer'
import { Container, Box, CssBaseline } from '@mui/material'




export default function Transferencias() {



    return (
        <>
            <div className="App">


                <Navbar />
                <Respuesta
                />

            </div>


        </>
    );

}