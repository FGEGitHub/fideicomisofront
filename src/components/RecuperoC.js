import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useState } from "react";
import servicioUsuario from '../services/usuarios'
import { Box, Typography, Avatar, Grid, Paper, CircularProgress } from '@mui/material';
import RegIcon from "@mui/icons-material/HowToRegRounded";
import LockIcon from '@mui/icons-material/Lock';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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


  let params = useParams()
  let cuil_cuit = params.cuil_cuit

  const [open, setOpen] = React.useState(false);
  const [usuario, setUsuario] = useState({
    cuil_cuit: "",

  });
  const [recupero, setRecupero] = useState({});
  const [loading, setLoading] = useState(false);
  const [ver, setVer] = useState(false);

  const handleChange = (e) => {
    console.log(usuario)
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  const handleChangee = (e) => {
    console.log(recupero)
    setRecupero({ ...recupero, [e.target.name]: e.target.value })
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeterminar = async (event) => {
    event.preventDefault()
    setLoading(true);
    setRecupero({ cuil_cuit: usuario.cuil_cuit })
    const rta = await servicioUsuario.recupero(
      usuario
    )
    if (rta === 'Se envio un codigo a tu correo') {
      setVer(true)
    }
    alert(rta)
    setLoading(false);



  };
  const handleDeterminarr = async (event) => {
    event.preventDefault()


    const rta = await servicioUsuario.recuperar(
      recupero
    )

    if (rta === 'Sin Exito') {
      alert('Error, codigo incorrecto')

    } else {
      alert('Cambio de contraseña exitoso ')
    }
    setVer(true)




  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p variant="outlined" onClick={handleClickOpen}>
        ¿Olvidaste la contraseña?
      </p>

      <Dialog
  open={open}
  onClose={handleClose}
  fullWidth
  maxWidth="xs"
  PaperProps={{
    sx: {
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      px: 2,
    },
  }}
>
  {/* Icono de cierre arriba a la derecha */}
  <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 1 }}>
    <IconButton onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  </Box>

  {/* Avatar */}
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Avatar
      sx={{
        bgcolor: "#002D57",
        width: 56,
        height: 56,
      }}
    >
      <LockIcon fontSize="small" />
    </Avatar>
  </Box>

  {/* Título */}
  <Typography
    align="center"
    component="h1"
    variant="h6"
    sx={{ mt: 1, fontWeight: "bold", color: "#002D57" }}
  >
    RECUPERAR CONTRASEÑA
  </Typography>

  {/* Formulario */}
  <DialogContent>
    <Box
      component="form"
      onSubmit={handleDeterminar}
      sx={{
        width: { xs: "90%", sm: "80%" },
        mx: "auto",
        mt: 1,
      }}
    >
      {!ver ? (
        <TextField
          required
          fullWidth
          margin="dense"
          label="CUIT/CUIL"
          name="cuil_cuit"
          onChange={handleChange}
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          sx={{ my: 2 }}
        />
      ) : (
        <>
          <TextField
            required
            fullWidth
            margin="dense"
            label="Código recibido"
            name="codigo"
            onChange={handleChangee}
            size="small"
            variant="standard"
            sx={{ my: 1 }}
          />
          <TextField
            required
            fullWidth
            margin="dense"
            label="Nueva contraseña"
            name="password"
            onChange={handleChangee}
            size="small"
            variant="standard"
            sx={{ my: 1 }}
          />
          <TextField
            required
            fullWidth
            margin="dense"
            label="Repetir nueva contraseña"
            name="password2"
            onChange={handleChangee}
            size="small"
            variant="standard"
            sx={{ my: 1 }}
          />
        </>
      )}

      {/* Botones */}
      <DialogActions
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {!ver ? (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              onClick={handleDeterminar}
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#148d8d",
                "&:hover": { backgroundColor: "#4CAF50" },
                height: 36,
                minWidth: 100,
                fontWeight: 600,
              }}
            >
              {loading ? (
                <CircularProgress color="inherit" size={24} />
              ) : (
                <>
                  Enviar&nbsp;
                  <RegIcon fontSize="small" />
                </>
              )}
            </Button>
          </Box>
        ) : recupero.password === recupero.password2 ? (
          <Button
            onClick={handleDeterminarr}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#148d8d",
              "&:hover": { backgroundColor: "#388e3c" },
              height: 36,
              fontWeight: 600,
            }}
          >
            Enviar código&nbsp;
            <RegIcon fontSize="small" />
          </Button>
        ) : (
          <Typography variant="body2" color="error">
            Las contraseñas no coinciden
          </Typography>
        )}
      </DialogActions>
    </Box>
  </DialogContent>
</Dialog>


    </div>
  );
}
