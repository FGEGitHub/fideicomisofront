
import React from 'react';
import Navbar from '../../../components/usuario1/Navbar1'
import  useUser from '../../../hooks/useUser'
import LotesCliente from '../../../components/usuario1/LotesTransferencia'
import { Divider, Toolbar } from '@mui/material'
import Footer from '../../../components/usuario1/Footer'
import { Container, Box, CssBaseline } from '@mui/material'
import Transferencias2 from '../../../components/usuario1/transferencias/Transferencias'




export default function Transferencias() {
    const usuario  = useUser().userContext
    console.log('usuario')

    return (
        <>
            <div className="App">


                <Navbar />
                <LotesCliente
                />
                <Transferencias2
                />

            </div>


        </>
    );

}