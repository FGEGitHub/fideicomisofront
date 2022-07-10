import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioPagos from '../../services/pagos'
import  useUser from '../../hooks/useUser'
import {  useState } from "react";

const currencies = [
  {
    value: 'CBU',
    label: 'CBU N°1',
  },
  {
    value: 'CBU',
    label: 'CBU N°2',
  },

];

export default function SelectTextFields(props) {
    const [open, setOpen] = React.useState(false);
    const usuario  = useUser().userContext
    const cuil_cuit=usuario.cuil_cuit
    const [pago, setPago] = useState({
      cuil_cuit:cuil_cuit,
      id: props.id,
       
      })
    
     console.log(props.fraccion)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) =>{
    console.log(e)
  setPago({  ...pago, [e.target.name]: e.target.value })}
////
  const pagar = async (event) => {
    event.preventDefault();
    console.log(pago)
    try {

      await servicioPagos.pagar(
        pago,
       
        
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
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <Button variant="outlined" onClick={handleClickOpen}>
        Subir comprobante Zona {props.zona} Fraccion {props.fraccion} Manzana{props.manzana} Lote {props.id}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            <div>
            <form onSubmit={pagar}>
            
                <TextField component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            
                id="outlined-select-currency"
                select
                label="CBU"
                value={currency}
                name="cbu"
                onChange={handleChange}
                helperText="Por favor ingrese su CBU"
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
               

                <Box
                component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField  onChange={handleChange} id="filled-basic" label="Monto" name="monto" variant="filled" />
            </Box>
            <Box
                component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
       
            </Box>
            <TextField component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            
                id="outlined-select-currency"
                select
                label="CBU"
                value={currency}
                name="cbu"
                onChange={handleChange}
                helperText="Por favor ingrese su CBU"
                >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
           
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <TextField
           
             onChange={handleChange}
            name= "fecha"
                id="date"
                label="Fecha de pago"
                type="month"
                defaultValue="2020-01"
                sx={{ width: 220 }}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </Box> 
            <Button  type="submit" size="small" variant="contained">
                        Subir Comprobante 
            </Button>
            </form>
                </div>
        </DialogContent>
        </Dialog>
    </Box>

    
    
    
  );
}