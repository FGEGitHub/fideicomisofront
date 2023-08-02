import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import servicioPagos from '../../services/pagos'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, Fragment } from "react";


export default function SelectTextFields(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [seleccion, seSeleccion] = useState([''])
  const [pago, setPago] = useState()



  const handleClickOpen = () => {
    setOpen(true);
    traer()
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
 
    seSeleccion({ ...seleccion, [e.target.name]: e.target.value })
 
  }
  ////
  const traer = async (event) => {
 
    try {

     const pag = await servicioPagos.traerpagodecuota(
        props.id_cuota
      )
console.log(pag)
      setPago(pag)
    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')

    }

  };/////
  const [currency, setCurrency] = React.useState('EUR');

  /*   const handleChange = (event) => {
      setCurrency(event.target.value);
    }; */


  return (
<>
        <SearchIcon onClick={handleClickOpen} />
     
      <Dialog open={open} onClose={handleClose}  s  style={{width: '100%'}}>
        <DialogContent>
          <div>
        {pago? <>
        
        {pago.length>0 ? <>
          <div class="factura">
    <div class="empresa">
      <p>Pago de factura pago {pago ? <> numero: {pago[0].id} </>:<></> }</p>
      
    </div>
    <div class="datos-cliente">
      <p>Cliente: {pago[0].cuil_cuit}</p>
      <p>Dirección del Cliente</p>
   
    </div>
    <table class="items">
      <thead>
        <tr>
          <th>fecha</th>
    
          <th>Monto</th>
          <th>admin</th>
          <th>comprobante</th>
        </tr>
      </thead>
      <tbody>
          {pago.map((ob)=>
        <tr>
      
            <td>{ob.fecha}</td>
            <td>{ob.monto}</td>
       
            <td>{ob.cuil_cuit_administrador}</td>
            <td> <button  onClick={() => window.open('/legales/comprobante/'+ob.id)} variant='contained' >
              Comprobante
            </button></td>  
          
        </tr>
  )}
      </tbody>
    </table>
    <div class="total">
      <p>Total a pagado: </p>
    </div>
  </div>

       
         
            </>:<>No hay pagos en la cuota</>}
        
        </>:<></>}
        </div>
        
      </DialogContent>
    </Dialog>




</>
  );
}