

import React from 'react';
import Navbar from '../../../components/usuario1/Navbar1'
import  useUser from '../../../hooks/useUser'
import LotesTransferencia from '../../../components/usuario1/LotesTransferencia'
import { Divider, Toolbar } from '@mui/material'
import Footer from '../../../components/usuario1/Footer'
import { Container, Box, CssBaseline } from '@mui/material'




export default function Transferencias() {
    const usuario  = useUser().userContext
    console.log('usuario')

    return (
        <React.Fragment>
           <Navbar  />
           
            
         

<<<<<<< HEAD
                <LotesTransferencia
                cuil_cuit ={usuario.cuil_cuit} />
=======

                <Navbar />
                <LotesCliente
                />
>>>>>>> origin

        
           
        </React.Fragment>
        
    );
}