import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import {  useState } from "react";
import servicioUsuario from '../services/usuarios'
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import RegIcon from "@mui/icons-material/HowToRegRounded";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';

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
  maxWidth="md"
  open={open}
  onClose={handleClose}
  PaperProps={{
    sx: {
      borderRadius: 3,
      height: '90vh',       // Altura fija del diálogo
      display: 'flex',
      overflow: 'hidden'
    }
  }}
>
  <div style={{ display: 'flex', width: '100%', height: '100%' }}>
    {/* Panel izquierdo */}
    <div style={{
      backgroundColor: '#2E6999',
      padding: '40px',
      width: '40%',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography variant="h3" sx={{ mt: 2, fontWeight:'bold', color: 'white', textAlign: 'center' }}>
        ¡BIENVENIDO!
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
        Sumate a nuestra plataforma completando tus datos.<br></br>
        
      </Typography>
    </div>

    {/* Panel derecho */}
    <div style={{
      backgroundColor: '#fffff',
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      padding: '40px',
      boxSizing: 'border-box',
      height: '100%'
    }}>
      <Typography variant="h4" fontWeight="bold" align="center" sx={{ mb: 1 }}>
        Crear una cuenta
      </Typography>
      <Typography variant="body2" align="center" sx={{ mb: 3 }}>
        Complete con todos sus datos
      </Typography>

      {/* Contenido scrollable */}
      <div style={{ overflowY: 'auto', flexGrow: 1 }}>
        <form onSubmit={handleDeterminar} id="registro-form">
          {[
            { label: "CUIT/CUIL", name: "cuil_cuit" },
            { label: "Contraseña", name: "password", type: "password" },
            { label: "Nombre Completo", name: "nombre" },
            { label: "Número de Cliente", name: "nro_cliente" },
            { label: "Email", name: "email" },
            { label: "Email Alternativo", name: "email2" },
            { label: "Número de Teléfono", name: "telefono" }
          ].map(({ label, name, type = "text" }, index) => (
            <TextField
              key={index}
              label={label}
              name={name}
              type={type}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
            />
          ))}
        </form>
      </div>

      {/* Botones siempre visibles */}
      <div style={{
        paddingTop: '20px',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between'
      }}>

      <Button variant="contained" onClick={handleClickOpen} 
        sx={{ mb: 2, backgroundColor: 'red', '&:hover': { backgroundColor: '#af0303' } }}>
        Cancelar
      </Button>  
      

        {loading ? (
          <CircularProgress size={24} />
        ) : (
          <Button variant="contained" onClick={handleClickOpen} 
        sx={{ mb: 2, backgroundColor: '#148d8d', '&:hover': { backgroundColor: '#4d7d26' } }}>
        REGISTRARME
      </Button>  
        )}
      </div>
    </div>
  </div>
</Dialog>

    </div>
  );
}
