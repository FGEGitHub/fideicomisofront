// DialogComponent.js
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import servicioLotes from '../../services/lotes'


const DialogComponent = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  // Función para abrir el diálogo
  const openDialog = () => {
    setOpen(true);
  };

  // Función para cerrar el diálogo
  const closeDialog = () => {
    setOpen(false);
  };

  // Permite al componente padre llamar a openDialog desde el ref
  useImperativeHandle(ref, () => ({
    openDialog,
    closeDialog, // También puedes exponer la función closeDialog si es necesario
  }), []); // Asegura que esto se ejecute solo una vez

  return (
    <Dialog open={open} onClose={closeDialog}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>

    </Dialog>
  );
});

export default DialogComponent;
