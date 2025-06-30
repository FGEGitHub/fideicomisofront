import * as React from 'react';
import { useParams } from "react-router-dom"

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {  useState } from "react";
import servicioUsuario from '../services/usuarios'

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import RegIcon from "@mui/icons-material/HowToRegRounded";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import CloseIcon from '@mui/icons-material/Close';

import { Box, Typography, TextField, Button, IconButton, CircularProgress } from '@mui/material';


const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 100,
		maxHeight: 500,
		width: 600,
		maxWidth: 900,
		borderRadius: 20,
		"-webkit-box-shadow":
			"0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)",
		"box-shadow":
			"0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)",
		"--softUIEffect-3": "inset 3px 3px 5px #b8b9be, inset -3px -3px 6px #fff"
	},
	field: {
		"box-shadow":
			"inset 3px 3px 6px #b8b9be, inset -3px -3px 6px rgb(253, 253, 253)"
	}
}));
const theme = createTheme();

export default function Ingresos() {
  const cardStyles = useStyles(theme);
  const [loading, setLoading] = useState(false);

  let params = useParams()
    let cuil_cuit = params.cuil_cuit
   
    const [open, setOpen] = React.useState(false);
    const [usuario, setUsuario] = useState({
      cuil_cuit: "",
      password: "",
});
  const handleChange = (e) =>{
    console.log(usuario)
    setUsuario({  ...usuario, [e.target.name]: e.target.value })}

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDeterminar = async (event) => {
    event.preventDefault()
    setLoading(true)
    const rta=  await servicioUsuario.registro(
      usuario
     )
    
 
        

   setOpen(false);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

return (
  <div>
    <Button
      variant="text"
      onClick={handleClickOpen}
      sx={{ textTransform: 'none', color: '#1976d2', padding: 0 }}
    >
      Registrarme
    </Button>

    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          height: { xs: '95vh', sm: '90vh' },
          width: { xs: '95vw', sm: '500px' }, // caja blanca más angosta
          display: 'flex',
          overflow: 'hidden',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          p: { xs: 2, sm: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Botón de cierre (X) */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Títulos */}
        <Typography variant="h5" fontWeight="bold" align="center" sx={{ mb: 1 }}>
          Crear una cuenta
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 3 }}>
          Complete con todos sus datos
        </Typography>

        {/* Contenido del formulario */}
        <Box
          component="form"
          id="registro-form"
          onSubmit={handleDeterminar}
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: 380, // inputs más angostos
          }}
        >
          {[
            { label: 'CUIT/CUIL', name: 'cuil_cuit' },
            { label: 'Contraseña', name: 'password', type: 'password' },
            { label: 'Nombre Completo', name: 'nombre' },
            { label: 'Número de Cliente', name: 'nro_cliente' },
            { label: 'Email', name: 'email' },
            { label: 'Email Alternativo', name: 'email2' },
            { label: 'Número de Teléfono', name: 'telefono' },
          ].map(({ label, name, type = 'text' }, index) => (
            <TextField
              key={index}
              label={label}
              name={name}
              type={type}
              onChange={handleChange}
              required
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
          ))}
        </Box>

        {/* Botón inferior */}
        <Box
          sx={{
            mt: 2,
            width: '100%',
            maxWidth: 380,
            display: 'flex',
            justifyContent: 'flex-end',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            pt: 2,
          }}
        >
          {loading ? (
            <CircularProgress size={24} />
          ) : (
            <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{
                backgroundColor: '#148d8d',
                '&:hover': { backgroundColor: '#4d7d26' },
                fontWeight: 600,
                minWidth: 130,
              }}
            >
              REGISTRARME
            </Button>
          )}
        </Box>
      </Box>
    </Dialog>
  </div>
);


}
