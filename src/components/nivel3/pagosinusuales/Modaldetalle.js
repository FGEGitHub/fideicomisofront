// components/ModalDetalle.js
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function ModalDetalle({ open, handleClose, detalle }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          Detalles del Pago
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {detalle || 'Sin detalles disponibles'}
        </Typography>
        <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
}
