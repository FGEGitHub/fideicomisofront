import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// Packages
import React, { useState } from "react";
import axios from "axios";
// Constants
const HOOK_ID = "cb662cd3-488f-49af-a544-78cc110fffc4";
const SERVER = "sandbox.skrumify.com";
const URL = `https://${SERVER}/api/v1/hooks/${HOOK_ID}/tickets`;
// Components
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contacto() {
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

  const validatePayload = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      subject === "" ||
      content === ""
    ) {
      throw Error("Field missing!");
    }
    if (validateEmail() === false) {
      throw Error("Invalid email format");
    }
  };

  const handleClick = async () => {
    const payload = {
      name: `${firstName} ${lastName}`,
      email: email,
      subject: subject,
      body: content
    };

    // Try request
    try {
      validatePayload(payload);
      const res = await axios.post(URL, payload);
      console.log(res.status);
      if (res.status === 200 || res.status === 201) {
        setOpen(true);
        clearForm();
      }
    } catch (e) {
      alert(e);
      console.error(e);
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="App">
      <h2>
        <a href={"https://" + SERVER} target="_blank" rel="noreferrer">
          Fideicomiso de Administración Santa Catalina
        </a>{" "}
      </h2>
      <h2>Formulario de Contacto</h2>
      <Box sx={{ flexGrow: 1, mx: "2%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Nombres"
              placeholder="Enter first name..."
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Apellido"
              placeholder="Enter last name..."
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Email"
              placeholder="Enter contact email..."
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              style={{ width: "100%" }}
              id="outlined-error-helper-text"
              label="Asunto"
              placeholder="Enter subject regards..."
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setContent(e.target.value)}
              value={content}
              style={{ width: "100%" }}
              placeholder="Ingresar el mensaje de consulta..."
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleClick}
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
