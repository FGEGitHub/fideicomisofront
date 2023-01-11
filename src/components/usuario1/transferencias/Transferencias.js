import React from 'react';
import styled from 'styled-components';
import ComponenteTransferencia from './ComponenteTransferencia';
import { useState, useEffect } from "react";
import servicioUsuario1 from '../../../services/usuario1'
import imagen from '../../../Assets/IMG_7194.JPG'
import { Toolbar } from '@mui/material';
const Transferencias = () => {
    const [lotes, setLotes] = useState([''])
    const [habilitado, setHabilitado] = useState(false)

    useEffect(() => {

        traer()

    }, [])


    const traer = async () => {
      
        const preba = JSON.parse( window.localStorage.getItem('loggedNoteAppUser'))
     
        const lotes = await servicioUsuario1.lotesCliente(preba.cuil_cuit)
        setLotes(lotes[0])
      
        if (lotes[3][0].habilitado =='Si'){
          setHabilitado(true)
          
        }




    }
    const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available; /* mobile viewport bug fix */
    overflow-x: auto;
    scroll-behavior: smooth;
  `;
  
  const Grid = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding-left: calc(20vw - 160px);
  
    /* Fake padding-right */
    &::after {
      content: '';
      position: relative;
      display: block;
      flex-shrink: 0;
      width: calc(50vw - 160px);
      height: 1px;
    }
  
    > button {
      margin-right: 40px;
    }
  
    /* Hide the others cards */
    > button:not(:first-child) {
      visibility: visible; /* switch to 'visible' */
    }
  `;
  
return (
    <Page>
      <br/><br/><br/>

    <Grid>
      {lotes.map((lote, index) => (

        habilitado ? <>
        <ComponenteTransferencia
          zona={lote.zona}
          manzana={lote.manzana}
          parcela={lote.parcela}
          fraccion={lote.fraccion}
          id={lote.id}
          image={imagen}
         // image={'/Assets/IMG_7194.JPG'}
        /></> :<>Aun no estas habilitado para avisar el pago</>
      ))}
    </Grid>
    <Toolbar />
  </Page>
/* key={lote.zona}
hexa={lote.manzana}
title={lote.parcela}
description={lote.zona} */


)  

}
    export default Transferencias