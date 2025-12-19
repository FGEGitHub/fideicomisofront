import * as React from 'react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import servicioCliente from '../../../services/clientes';
import {
  Button,
  TextField,
  NativeSelect,
  InputLabel,
  Paper,
  Backdrop,
  CircularProgress,
  Typography,
  Box,
  Divider,
  Grid
} from '@mui/material';

export default function ClienteNuevo({ getClients }) {
  let { cuil_cuit } = useParams();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formCompleto =
    form.Nombre &&
    form.razon &&
    form.cuil_cuit &&
    form.domicilio &&
    form.telefono &&
    form.observaciones;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formCompleto) return;

    setLoading(true);
    try {
      const resultado = await servicioCliente.crear(form);
      alert(resultado);
      getClients();
      setForm({});
    } catch (error) {
      console.error(error);
      alert('Error al crear el cliente');
    }
    setLoading(false);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 900,
        mx: 'auto',
        p: 4,
        backgroundColor: '#f9fbfc'
      }}
    >
      {/* ENCABEZADO */}
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Solicitud de Alta de Cliente
      </Typography>

      <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
        Complete la siguiente información para registrar un nuevo cliente en el sistema.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <form onSubmit={handleSubmit}>
        {/* DATOS */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Datos del Cliente
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre / Razón Social"
              name="Nombre"
              value={form.Nombre || ''}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <InputLabel>Tipo de Cliente</InputLabel>
            <NativeSelect
              name="razon"
              value={form.razon || ''}
              onChange={handleChange}
              fullWidth
            >
              <option value="">Seleccionar</option>
              <option value="Empresa">Empresa</option>
              <option value="Persona">Persona</option>
            </NativeSelect>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="CUIL / CUIT"
              name="cuil_cuit"
              value={form.cuil_cuit || ''}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Teléfono"
              name="telefono"
              value={form.telefono || ''}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Domicilio"
              name="domicilio"
              value={form.domicilio || ''}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        {/* OBSERVACIONES */}
        <Divider sx={{ my: 3 }} />

        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
          Observaciones
        </Typography>

        <TextField
          name="observaciones"
          value={form.observaciones || ''}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          placeholder="Ingrese cualquier observación relevante"
        />

        {/* ACCIÓN */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={!formCompleto}
            sx={{
              minWidth: 220,
              backgroundColor: formCompleto ? '#6D9F71' : '#b0b0b0',
              '&:hover': {
                backgroundColor: formCompleto ? '#5c8f63' : '#b0b0b0'
              }
            }}
          >
            Registrar Cliente
          </Button>
        </Box>
      </form>

      {/* LOADING */}
      <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={loading}>
        <CircularProgress color="inherit" />
        <Typography sx={{ ml: 2 }}>
          Guardando información...
        </Typography>
      </Backdrop>
    </Paper>
  );
}
