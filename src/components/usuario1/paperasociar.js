import React from 'react';
import {Box, Paper, Typography } from '@mui/material';

const InfoPaper = () => {

  return (
    <Box
    height="100%" // Establece la altura al 100% de la ventana visible
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Paper
    sx={{
      cursor: 'pointer',
      background: '#d9edf7',
      padding: '16px',
       maxWidth: '75%' ,
      border: '1px dashed #ccc',
      '&:hover': { border: '1px solid #ccc' },
    }}
  >
       <Typography variant="h6" gutterBottom>
        Asociación de Tarjeta para Pagos Automáticos
      </Typography>
      <Typography variant="body1" paragraph>
        En esta sección, puedes asociar tu <strong>tarjeta de débito o crédito</strong> para realizar el débito automático
        de tus cuotas mensuales de forma conveniente y segura.
      </Typography>
      <Typography variant="body1" paragraph>
        Al asociar tu tarjeta, garantizamos un proceso sin complicaciones para el pago automático de tus facturas.
        Las transacciones se realizan de manera segura y cumplen con los más altos estándares de seguridad.
      </Typography>
      <Typography variant="body1" paragraph>
        Aceptamos una amplia variedad de tarjetas, incluyendo, pero no limitándonos a:
      </Typography>
      <Typography variant="body2" component="ul">
        <li>
          <strong>Visa</strong>
        </li>
        <li>
          <strong>MasterCard</strong>
        </li>
        <li>
          <strong>American Express</strong>
        </li>
        </Typography>
    </Paper>
    </Box>
  );
};

export default InfoPaper;
