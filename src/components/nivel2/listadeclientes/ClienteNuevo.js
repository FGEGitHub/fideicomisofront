import * as React from 'react';
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import servicioCliente from '../../../services/clientes';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Paper, Backdrop, CircularProgress } from '@mui/material';

export default function ClienteNuevo(props) {
  let params = useParams();
  let cuil_cuit = params.cuil_cuit;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeterminar = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await servicioCliente.crear(form);
      alert('Cliente creado con éxito');
    } catch (error) {
      console.error(error);
      alert('Error al crear el cliente');
    }
    setLoading(false);
    props.getClients();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        CARGAR CLIENTE NUEVO <PersonAddAlt1Icon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cliente Nuevo</DialogTitle>
        <Paper
          sx={{
            cursor: 'pointer',
            background: '#fafafa',
            color: '#bdbdbd',
            border: '1px dashed #ccc',
            '&:hover': { border: '1px solid #ccc' },
          }}
        >
          <DialogContent>
            <DialogContentText>
              Datos del Nuevo Cliente
            </DialogContentText>
            <form onSubmit={handleDeterminar}>
              <TextField
                autoFocus
                margin="dense"
                label="Nombre"
                name="Nombre"
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
              <InputLabel variant="standard">Razon</InputLabel>
              <NativeSelect name='razon' onChange={handleChange}>
                <option value='Empresa'>Elegir</option>
                <option value='Empresa'>Empresa</option>
                <option value='Persona'>Persona</option>
              </NativeSelect>
              <InputLabel variant="standard">Tipo DNI</InputLabel>
              <NativeSelect name='tipo_dni' onChange={handleChange}>
                <option value='C.U.I.L.'>Elegir</option>
                <option value='C.U.I.L.'>CUIL</option>
                <option value='C.U.I.T.'>CUIT</option>
              </NativeSelect>
              <TextField margin="dense" label="Numero (con guiones)" name="cuil_cuit" onChange={handleChange} fullWidth variant="standard" />
              <TextField margin="dense" label="Domicilio" name="domicilio" onChange={handleChange} fullWidth variant="standard" />
              <TextField margin="dense" label="Telefono" name="telefono" onChange={handleChange} fullWidth variant="standard" />
              <TextField margin="dense" label="Observaciones" name="observaciones" onChange={handleChange} fullWidth variant="standard" />
              <DialogActions>
                {form.cuil_cuit && form.observaciones && form.telefono && form.domicilio && form.tipo_dni && form.Nombre ? (
                  <Button variant="contained" color="primary" type="submit">Crear</Button>
                ) : (
                  <h6 style={{ color: "red" }}>Completar todos los campos</h6>
                )}
                <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Paper>
      </Dialog>
      {/* Pantalla de carga */}
      <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={loading}>
        <CircularProgress color="inherit" />
        <h2 style={{ marginLeft: 20 }}>Guardando y Analizando...</h2>
      </Backdrop>
    </div>
  );
}
