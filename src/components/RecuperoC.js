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
     
    }else{
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
      <Dialog maxWidth="md"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
     
          <Avatar
            sx={{
              m: 1,
              bgcolor: "darkblue",
              marginRight: 3
            }}
          >
            <LockIcon fontSize="small" />
          </Avatar>
          <Typography align="center" component="h1" variant="h6">
            Recuperar Contraseña
          </Typography>
        <DialogContent>

          <form onSubmit={handleDeterminar}>

            {!ver ? <>

              <TextField className={cardStyles.field}
                sx={{
                  mx: 4, width: '80%'
                }}
                autoFocus
                required
                margin="dense"
                id="name"
                label="CUIT/CUIL"
                name="cuil_cuit"
                onChange={handleChange}
                size="small"
                variant="standard"
              />



            </> : <>

              <TextField className={cardStyles.field}
                sx={{
                  mx: 3, width: '75%'
                }}
                autoFocus
                required
                margin="dense"
                id="name"
                label="Codigo recibido"
                name="codigo"
                onChange={handleChangee}
                size="small"
                variant="standard"
              />
              <TextField className={cardStyles.field}
                sx={{
                  mx: 3, width: '75%'
                }}
                autoFocus
                required
                margin="dense"
                id="name"
                label="Nueva contraseña"
                name="password"
                onChange={handleChangee}
                size="small"
                variant="standard"
              />
               <TextField className={cardStyles.field}
                sx={{
                  mx: 3, width: '75%'
                }}
                autoFocus
                required
                margin="dense"
                id="name"
                label="Repetir nueva contraseña"
                name="password2"
                onChange={handleChangee}
                size="small"
                variant="standard"
              />

            </>}

            <DialogActions>
              <Button

                onClick={handleClose}
                variant="contained"
                sx={{
                  mt: 3,
                  maxWidth: 130,
                  borderRadius: 2,
                  height: 30,
                  fontWeight: 850,
                  fontSize: 12
                }}
              >
                <span style={{ padding: 10 }}>Cancelar{"     "}</span>

              </Button>
              {!ver ? <>

                <Button
                  onClick={handleDeterminar}
                  variant="contained"
                  sx={{
                    mt: 3,
                    maxWidth: 130,
                    borderRadius: 2,
                    height: 30,
                    fontWeight: 850,
                    fontSize: 12
                  }}
                >
                  <span style={{ padding: 10 }}>     {loading ? (
                    <CircularProgress color="inherit" size={25} />
                  ) : <>   Recuperar{"     "}  </>}</span>
                  <RegIcon fontSize="small" />
                </Button>

              </> : <>
              {recupero.password === recupero.password2 ? <>
                <Button
                  onClick={handleDeterminarr}
                  variant="contained"
                  sx={{
                    mt: 3,
                    maxWidth: 130,
                    borderRadius: 2,
                    height: 30,
                    fontWeight: 850,
                    fontSize: 12
                  }}
                >
                  <span style={{ padding: 10 }}>Enviar codigo{"     "}</span>
                  <RegIcon fontSize="small" />
                </Button>
              </> : <><p>La contraseña no coincide</p></> }
                

              </>}
            </DialogActions>

          </form>
        </DialogContent>



      </Dialog>
    </div>
  );
}
