import React, { useEffect, useState, } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Card from "@mui/material/Card";
import Container from '@mui/material/Container';
import servicioCliente from '../../../services/clientes';
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import "../../profile.css";
import Ingreso from './Ingresos'
import LinearProgress from "@mui/material/LinearProgress";
import Agregarbenefciarios from './agregarbeneficiarios'



const FichaAxios = (props) => {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState([])
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const [verMas, setVerMas] = useState(false);
  const [editMode, setEditMode] = useState(false);
  function submitFormHandler(event) {
    event.preventDefault();
  }
  useEffect(() => {

    traer()

  }, [])

  const traer = async () => {


    const cliente = await servicioCliente.cliente(props.cuil_cuit)
console.log(cliente)
    setCliente(cliente)



      ;
  };



  return (<>

    {cliente.map((client) => (
      <div className="profile">

        <Grid Container style={{
          direction: "column", alignItems: "left",
          justifyContent: "left", display: "flex"
        }}>


          <Grid item xs={8} style={{}}>

            <Container>

              <br />
              <Box sx={{ minWidth: "250px", flex: 1 }}>

                <LinearProgress
                  variant="determinate"
                  value={cliente[0].riesgo}
                  style={{
                    width: "100%",
                    marginRight: 8,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#f3f5f5", // Fondo de la barra
                  }}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      backgroundColor:
                        cliente[0].riesgo <= 58
                          ? "green"
                          : cliente[0].riesgo <= 70
                            ? "yellow"
                            : "red", // Color de la barra según el valor
                    },
                  }}
                />


                <Typography

                  variant="body2"
                  sx={{
                    mt: 1,
                    fontWeight: "bold",
                    color:
                      cliente[0].riesgo <= 58
                        ? "green"
                        : cliente[0].riesgo <= 70
                          ? "orange"
                          : "red",
                    textTransform: "uppercase",
                  }}
                > Riesgo
                  {cliente[0].riesgo <= 58
                    ? " Bajo"
                    : cliente[0].riesgo <= 70
                      ? " Medio"
                      : " Alto"} ( {cliente[0].riesgo}% )
                </Typography>

                {cliente[0].razon === "Persona" && (
                  <Box sx={{ fontWeight: "bold", fontSize: 16 }}>
                    Edad: <span style={{ fontWeight: "normal" }}>{cliente[0].edad}</span>
                  </Box>
                )}
              </Box>
              {cliente[0].pep_extranjero === "Si" && (
                <Box sx={{ color: "crimson", fontWeight: "bold" }}>
                  PEP Extranjero
                </Box>
              )}

              {cliente[0].categoria_especial === "Si" && (
                <Box sx={{ color: "crimson", fontWeight: "bold" }}>
                  Categoría Especial
                </Box>
              )}

              <Box>
                <h5>
                  Datos Personales del Cliente
                </h5></Box>

             
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <TextField
        label="Nombre y apellido"
        fullWidth
        defaultValue={client.Nombre || ""}
        InputProps={{ readOnly: true }}
      />
    </Grid>

    <Grid item xs={12} md={6}>
      <TextField
        label="CUIT"
        fullWidth
        defaultValue={client.cuil_cuit || ""}
        InputProps={{ readOnly: true }}
      />
    </Grid>

    <Grid item xs={12} md={6}>
      <TextField
        label="Tipo de Cliente"
        fullWidth
        defaultValue={client.razon || ""}
        InputProps={{ readOnly: true }}
      />
    </Grid>

    <Grid item xs={12} md={6}>
      <TextField
        label="Actividad Económica"
        fullWidth
        defaultValue={client.actividadEconomica || ""}
        InputProps={{ readOnly: true }}
      />
    </Grid>
  </Grid>

  <Box sx={{ mt: 2 }}>
    <Button sx={{ color: "black" }} onClick={() => setVerMas(!verMas)}>
      {verMas ? "Ver menos" : "Ver más"}
    </Button>
  </Box>

  {/* ------------------ SECCIÓN EXTRA ------------------ */}
  {verMas && (
    <>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Información adicional
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Código Postal"
            fullWidth
            defaultValue={client.cp || ""}
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          {client.razon === "Persona" ? (
            <TextField
              label="Fecha de nacimiento"
              fullWidth
              defaultValue={client.FechaNacimiento || ""}
              InputProps={{ readOnly: true }}
            />
          ) : (
            <TextField
              label="Antigüedad"
              fullWidth
              defaultValue={client.antiguedad || ""}
              InputProps={{ readOnly: true }}
            />
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Teléfono"
            fullWidth
            defaultValue={client.telefono || ""}
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="ID"
            fullWidth
            defaultValue={client.id || ""}
            InputProps={{ readOnly: true }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Volumen Transaccional"
            fullWidth
            defaultValue={client.volumenTransaccional || ""}
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>

      {/* ------------------ BENEFICIARIOS ------------------ */}
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Beneficiarios
        </Typography>
      </Box>

      {client.beneficiarios !== "No" && (
        <Grid container spacing={2}>

          {/* Beneficiario 1 */}
          <Grid item xs={12} md={4}>
            <TextField
              label="Beneficiario 1"
              fullWidth
              value={client.beneficiario1}
              InputProps={{ readOnly: true }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="CUIL Beneficiario 1"
              fullWidth
              value={client.cuilbeneficiario1}
              InputProps={{ readOnly: true }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Porcentaje 1"
              fullWidth
              value={client.porcentaje1 + "%"}
              InputProps={{ readOnly: true }}
            />
          </Grid>

          {/* Beneficiario 2 */}
          {client.beneficiario2 !== "No" && (
            <>
              <Grid item xs={12} md={4}>
                <TextField label="Beneficiario 2" fullWidth value={client.beneficiario2} />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField label="CUIL Beneficiario 2" fullWidth value={client.cuilbeneficiario2} />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField label="Porcentaje 2" fullWidth value={client.porcentaje2 + "%"} />
              </Grid>
            </>
          )}

          {/* Beneficiario 3 */}
          {client.beneficiario3 && client.beneficiario3 !== "No" && (
            <>
              <Grid item xs={12} md={4}>
                <TextField label="Beneficiario 3" fullWidth value={client.beneficiario3} />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField label="CUIL Beneficiario 3" fullWidth value={client.cuilbeneficiario3} />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField label="Porcentaje 3" fullWidth value={client.porcentaje3 + "%"} />
              </Grid>
            </>
          )}
        </Grid>
                  
                  )}
                
                <Agregarbenefciarios
                  id={client.id}
                  traer={async () => {


                    const cliente = await servicioCliente.cliente(props.cuil_cuit)

                    setCliente(cliente)



                      ;
                  }} /> </>)}


              <Box>

                <columns lg={8}>
                  {editMode ? (
                    <div className="profile-form-button">
                      <Button
                        variant="outlined"
                        sx={{ marginRight: "10px" }}
                        onClick={() => setEditMode(false)}
                      >
                        Cancelar
                      </Button>
                      <Button variant="contained">Enviar</Button>
                    </div>
                  ) : (
                    <div className="profile-edit-button">
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Button

                          variant="contained" 
                          sx={{ mb: 2, backgroundColor: '#148d8d', '&:hover': { backgroundColor: '#4d7d26' } }}

                          onClick={() => navigate("/usuario2/legajoscliente/" + props.cuil_cuit)}
                        >
                          Ir a legajos
                        </Button>

                        <Button

                          variant="contained" 
                          sx={{ mb: 2, backgroundColor: '#148d8d', '&:hover': { backgroundColor: '#4d7d26' } }}
                          onClick={() => navigate("/usuario2/modificarcliente/" + props.cuil_cuit)}
                        >Modificar cliente

                        </Button>

                        <Ingreso
                          traer={async () => {
                            const cliente = await servicioCliente.cliente(props.cuil_cuit);
                            setCliente(cliente);
                          }}
                        />

                      </Box>



                    </div>
                  )}
                </columns>

              </Box>
            </Container>

          </Grid>

          <Grid item xs={8} style={{ justifyContent: "center", display: "flex" }}>


          </Grid>
        </Grid>
      </div>
    ))} </>);
}

export default FichaAxios;

