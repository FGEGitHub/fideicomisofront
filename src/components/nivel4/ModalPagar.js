import Box from '@mui/material/Box';
import { Button, CircularProgress } from '@mui/material';
import { Toolbar } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Paper,Grid } from '@mui/material';
import servicioPagos from '../../services/pagos'
import servicioCuotas from '../../services/cuotas'
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import React, { useEffect, useState, Fragment } from "react";


export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  const [eleccion, setEleccion] = useState({ tipo: '1' })

  const [loading, setLoading] = useState(false)
  const [facturas, setFacturas] = useState([]);
  const [pdfContent, setPdfContent] = useState('');
  const [total, setTotal] = useState(0)

  const [pago, setPagos] = useState({
    fecha: '03-04-2023',
    cuil_cuit: props.cuil_cuit,
    id: props.id
  })
  const comprobanteData = {
    nombre: 'Juan Pérez',
    direccion: 'Calle 123, Ciudad ABC',
    // Agrega aquí los datos necesarios para tu comprobante
  }
  const [seleccion, seSeleccion] = useState([''])
  const [cuotas, setCuotas] = useState([''])


  const handleChange = (e) => {
    console.log(pago)
    setPagos({ ...pago, [e.target.name]: e.target.value })
  }
  const handleClickOpen = () => {
    setOpen(true);
    traer()
  };
  const traer = async () => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setPagos({ ...pago, cuil_cuit: user.cuil_cuit })
    }

    const cuot = await servicioCuotas.traercuotasdisponibles(props.id)
   
    setCuotas(cuot)


  }
  const enviar = async () => {


    const rta = await servicioPagos.pagarnivel4(pago)
    console.log(rta)
    alert(rta[0])
    props.vercuotas(props.id_lote)
    setOpen(false);




    //window.location.reload(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange3 = (e) => {
    handleChange(e)
    console.log(pago)
    setTotal(cuotas[0].Amortizacion*e.target.value)

  }
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
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
       Pagar 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
       
        

          <Fragment>
      <Toolbar />
      <Box sx={{ p: 2 }}>
    
            <Paper variant="outlined">  <form >
          <h3>Pagar cuota(s)</h3>
          {props.id}-{props.id_lote}
          {cuotas ? <>

            <p style={{ color: '#2c387e' }}>    Valor de cuota:$ <b>{cuotas[0].Amortizacion
            }</b></p>
          
 
       
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Cuantas Cuotas
            </InputLabel>
            <TextField
              /* style ={{width: '25%'}} */
              autoFocus
              margin="dense"
              id="name"
              label="Cantidad"
              name="cantidad"
              onChange={handleChange3}
              fullWidth
              variant="filled"
              type="number"
              inputProps={{
                pattern: "\\d*", // Expresión regular para aceptar solo dígitos (números enteros)
                inputMode: "numeric", // Para mostrar el teclado numérico en dispositivos móviles
              }}
            
            /> 
             {pago.cantidad ? <>
        <p style={{ color: 'green' }}> Total:$ {total} </p> </>: <></>}
          </> : <></>}
         
            <Box sx={{ '& > :not(style)': { m: 1 } }}>


              <TextField

                onChange={handleChange}
                name="fecha"
                id="date"
                label="Fecha de pago"
                type="date"
                defaultValue="2020-01"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>



            {eleccion.tipo === '1' ?
              <>


              

                {pago.fecha && pago.cantidad ?
                  <div>
                    <Box sx={{
                      m: 1,
                      color: 'green',
                      fontSize: '1rem',
                    }}
                    >
                   
                      <Button variant='contained' onClick={enviar}>
                        {loading ? (
                          <CircularProgress color="inherit" size={25} />
                        ) : (
                          "Pagar"
                        )}
                      </Button>
                    </Box>

                  </div>
                  : <div> </div>}

              </> : <></>}


          </form>
          </Paper>
         
      </Box>


    
    


    </Fragment>
      </DialogContent>
    </Dialog>
    </Box >




  );
}