import React, { useState, useEffect, Fragment } from "react";
import Box from '@mui/material/Box';
import { Button, CircularProgress, Paper, Grid, TextField, InputLabel } from '@mui/material';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioPagos from '../../services/pagos';
import servicioCuotas from '../../services/cuotas';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export default function SelectTextFields(props) {
  const [open, setOpen] = useState(false);
  const [eleccion, setEleccion] = useState({ tipo: '1' });
  const [loading, setLoading] = useState(false);

  const [total, setTotal] = useState(0);
  const [pago, setPagos] = useState({
    fecha: '03-04-2023',
    cuil_cuit: props.cuil_cuit,
   
  });

  const [cuotas, setCuotas] = useState(['']);

  const handleChange = (e) => {
    setPagos({ ...pago, [e.target.name]: e.target.value });
    console.log(pago)
  }

  const handleClickOpen = () => {
    setOpen(true);
 traer();
  };

  const traer = async () => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setPagos({ ...pago, cuil_cuit: user.cuil_cuit });
    }

    const cuot = await servicioCuotas.traercuotasdisponiblesporlote(props.id);
   
    setPagos({ ...pago, id: cuot[0]['id'] });
    setCuotas(cuot);
  }

  const enviar = async () => {
    const rta = await servicioPagos.pagarnivel4(pago);
    console.log(rta);
    alert(rta[0]);
  props.vercuotas(props.id);
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange3 = (e) => {
    handleChange(e);
    console.log(pago);
    setTotal(cuotas[0].Amortizacion * e.target.value);
  }

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
         < Tooltip title="Pagar desde el ultimo mes sin pago">
    <Button variant="contained" color="success" onClick={handleClickOpen}>
      Pagar una o mas cuotas <MonetizationOnIcon/> 
    </Button></Tooltip>
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <h3>Pagar cuota(s) lote {props.id}</h3>
        <Fragment>
          <Paper variant="outlined">
            {cuotas.length > 0 ? (
              <>
                <p style={{ color: '#2c387e' }}>Valor de cuota: $<b>{cuotas[0].Amortizacion}</b></p>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Cuantas Cuotas
                </InputLabel>
                <TextField
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
                    pattern: "\\d*",
                    inputMode: "numeric",
                    min: "0",
                  }}
                />
                {pago.cantidad ? <p style={{ color: 'green' }}>Total: $ {total}</p> : null}
              </>
            ) : null}
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
            {eleccion.tipo === '1' && pago.fecha && pago.cantidad ? (
              <div>
                <Button variant='contained' onClick={enviar}>
                  {loading ? (
                    <CircularProgress color="inherit" size={25} />
                  ) : (
                    "Pagar"
                  )}
                </Button>
              </div>
            ) : null}
          </Paper>
        </Fragment>
      </DialogContent>
    </Dialog>
  </Box>
  );
}