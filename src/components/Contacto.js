import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// Packages

import servicioUsuario1 from "../services/usuario1";
import React, { useState, useEffect} from "react";
import { Divider, Toolbar, Typography } from "@mui/material";

import axios from "axios";
// Constants
const HOOK_ID = "cb662cd3-488f-49af-a544-78cc110fffc4";
const SERVER = "sandbox.skrumify.com";
const URL = `https://${SERVER}/api/v1/hooks/${HOOK_ID}/tickets`;
// Components
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contacto(props) {
  const [form, setForm] = useState({
 
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setContent("");
  };

  const validateEmail = () => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
  const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
  const user = JSON.parse(loggedUserJSON)
  setForm({id:user.id})

}, [])


  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  const handleChange = (e) => {
    console.log(form)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleDeterminar = async () => {
  
 
     const rta= await servicioUsuario1.mandarconsul(form)
     alert()
     window.location.reload();
 
   

  };
  
  return (
    <div className="App">
    <Box component="span" sx={{ p: 4}}>
                    <Grid container spacing={2} justifyContent="center">
                    <Typography color="primary" alingContent="center" variant="h4" component="h1" gutterBottom>
                        Fideicomiso de Administración Santa Catalina
                    </Typography>

                    </Grid>
                </Box>
                <Divider variant="middle" />
                <Toolbar />
                
      <Box sx={{ flexGrow: 1, mx: "2%" }}>
      <Typography alingContent="center" variant="h5" component="h1" gutterBottom>
                    Formulario de Contacto
                    </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
               onChange={handleChange}
             
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Nombres"
              placeholder="Ingresar nombre"
              name="nombre"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            onChange={handleChange}
            
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Apellido"
              name="apellido"
              placeholder="Apellido"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
             
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Email"
              name="mail"
              placeholder="Enter contact email..."
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            onChange={handleChange}
             
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Asunto"
              name="asunto"
              placeholder="Asunto"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              
              style={{ width: "100%" }}
              placeholder="Ingresar el mensaje de consulta..."
              name="consulta"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleDeterminar}
              style={{ width: "100%" }}
              variant="contained"
            >
                Enviar Mensaje
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Mensaje enviado!
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Contacto;
