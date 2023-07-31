import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import servicioPagos from '../../services/pagos'

import React, { useEffect, useState, Fragment } from "react";


export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [seleccion, seSeleccion] = useState([''])
  const [pago, setPago] = useState([''])



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
 
    seSeleccion({ ...seleccion, [e.target.name]: e.target.value })
 
  }
  ////
  const traer = async (event) => {
    event.preventDefault();
    try {

      await servicioPagos.traerpagodecuota(
        props.id_cuota
      )


    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')

    }

    setOpen(false);
  };/////
  const [currency, setCurrency] = React.useState('EUR');

  /*   const handleChange = (event) => {
      setCurrency(event.target.value);
    }; */


  return (

    <Box
  
    >
        <SearchIcon onClick={handleClickOpen} />
     
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
        
          <div class="factura">
    <div class="empresa">
      <p>Pago de factura</p>
      
    </div>
    <div class="datos-cliente">
      <p>Cliente: Nombre del Cliente</p>
      <p>Dirección del Cliente</p>
      <p>Fecha: 31 de Julio de 2023</p>
    </div>
    <table class="items">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Producto 1</td>
          <td>2</td>
          <td>$10.00</td>
          <td>$20.00</td>
        </tr>
        <tr>
          <td>Producto 2</td>
          <td>1</td>
          <td>$15.00</td>
          <td>$15.00</td>
        </tr>
        <tr>
          <td>Producto 3</td>
          <td>3</td>
          <td>$5.00</td>
          <td>$15.00</td>
        </tr>
      </tbody>
    </table>
    <div class="total">
      <p>Total a pagar: $50.00</p>
    </div>
  </div>

       
            <Button onClick={traer} variant='contained' >
               Ver comprobante
            </Button>
    
        </div>
      </DialogContent>
    </Dialog>
    </Box >




  );
}