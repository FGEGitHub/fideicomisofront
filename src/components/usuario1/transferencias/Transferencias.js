import React from 'react';
import styled from 'styled-components';
import ComponenteTransferencia from './ComponenteTransferencia';
import { useState, useEffect } from "react";
import servicioUsuario1 from '../../../services/usuario1'
const Transferencias = () => {
    const [lotes, setLotes] = useState([''])

    useEffect(() => {

        traer()

    }, [])


    const traer = async () => {
      
        const preba = JSON.parse( window.localStorage.getItem('loggedNoteAppUser'))
     
        const lotes = await servicioUsuario1.lotesCliente(preba.cuil_cuit)
        setLotes(lotes[0])




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
    padding-left: calc(50vw - 160px);
  
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

    <Grid>
      {lotes.map((lote, index) => (
        <ComponenteTransferencia
          zona={lote.zona}
          manzana={lote.manzana}
          parcela={lote.parcela}
          fraccion={lote.fraccion}
          id={lote.id}
          image={'https://www.diarioellibertador.com.ar/wp-content/uploads/2021/12/santa-catalina.jpg'}
        />
      ))}
    </Grid>
  </Page>
/* key={lote.zona}
hexa={lote.manzana}
title={lote.parcela}
description={lote.zona} */


)  

}
    export default Transferencias