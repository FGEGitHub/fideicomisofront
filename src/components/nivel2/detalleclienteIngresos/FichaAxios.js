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

    setCliente(cliente)



      ;
  };



  return (<>

    {cliente.map((client) => (
      <div className="profile">
        <Grid Container style={{ direction: "column", alignItems: "left", justifyContent: "left", display: "flex" }}>

          <Grid item xs={8} style={{}}>

            <Container>
              <Box>
                <h5>
                  Datos Personales del Cliente
                </h5>


                <Card
                  sx={{
                    mb: 3,
                    backgroundColor: "#d7e8f2",
                    borderRadius: 2,
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >


                  <Box sx={{ minWidth: "250px", flex: 1 }}>
                    <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold", textTransform: "uppercase" }}>
                      Riesgo
                    </Typography>
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
                    >
                      {cliente[0].riesgo <= 58
                        ? "Bajo"
                        : cliente[0].riesgo <= 70
                          ? "Medio"
                          : "Alto"} ( {cliente[0].riesgo}% )
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
                </Card></Box>

              <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>

                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <TextField
                      label="Nombre y apellido"
                      name="Nombre"
                      defaultValue={client.Nombre || ""}
                      InputProps={{ readOnly: true }}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField
                      label="Cuit"
                      name="cuil_cuit"
                      defaultValue={client.cuil_cuit || ""}
                      InputProps={{ readOnly: true }}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <TextField
                      label="tipo de cliente"
                      name="otroCampo"
                      defaultValue={client.razon || ""}
                      InputProps={{ readOnly: true }}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      label="Actividad economica"
                      name="otroCampo"
                      defaultValue={client.actividadEconomica || ""}
                      InputProps={{ readOnly: true }}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      label="Actividad economica"
                      name="otroCampo"
                      defaultValue={client.actividadEconomica || ""}
                      InputProps={{ readOnly: true }}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                </Grid>
                <br />
                <Button sx={{ color: 'black', borderColor: 'black' }} onClick={() => setVerMas(!verMas)}>
                  {verMas ? "Ver menos" : "Ver más"}
                </Button>

              </Box>


              {verMas && (<>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <TextField
                        label="Codigo postal "
                        name="Nombre"
                        defaultValue={client.cp || ""}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </Grid>

                    <Grid item xs={2}>
                      {client.razon == "Persona" ? <>

                        <TextField
                          label="Fecha de nacimiento"
                          name="cuil_cuit"
                          defaultValue={client.FechaNacimiento || ""}
                          InputProps={{ readOnly: true }}
                          variant="outlined"
                          fullWidth
                          size="small"
                        />

                      </> : <>
                        <TextField
                          label="antiguedad"
                          name="cuil_cuit"
                          defaultValue={client.antiguedad || ""}
                          InputProps={{ readOnly: true }}
                          variant="outlined"
                          fullWidth
                          size="small"
                        />


                      </>} </Grid>

                    <Grid item xs={2}>
                      <TextField
                        label="Numero de telefono"
                        name="otroCampo"
                        defaultValue={client.telefono || ""}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        label="Id"
                        name="otroCampo"
                        defaultValue={client.id || ""}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        label="Volumen transaccional"
                        name="otroCampo"
                        defaultValue={client.volumenTransaccional || ""}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </Grid>
                  </Grid>

                </Box>

                <Box>
                  {/* Beneficiario 1 */}
                  {client.beneficiarios !== "No" && (
                    <>
                      <Box>
                        <TextField
                          label="Beneficiario 1"
                          id="beneficiario"
                          value={client.beneficiario1}
                          variant="filled"
                          sx={{ margin: "10px" }}
                          InputProps={{
                            readOnly: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          label="CUIL Beneficiario 1"
                          id="cuilBeneficiario1"
                          value={client.cuilbeneficiario1}
                          variant="filled"
                          sx={{ margin: "10px" }}
                          InputProps={{
                            readOnly: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          label="porcentaje 1"
                          id="porcentaje1"
                          value={client.porcentaje1 + "%"}
                          variant="filled"
                          sx={{ margin: "10px" }}
                          InputProps={{
                            readOnly: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </>
                  )}

                  {/* Beneficiario 2 */}
                  {client.beneficiario2 !== "No" && (
                    <>   <Box>
                      <TextField
                        label="Beneficiario 2"
                        id="beneficiario2"
                        value={client.beneficiario2}
                        variant="filled"
                        sx={{ margin: "10px" }}
                        InputProps={{
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        label="CUIL Beneficiario 2"
                        id="cuilBeneficiario2"
                        value={client.cuilbeneficiario2}
                        variant="filled"
                        sx={{ margin: "10px" }}
                        InputProps={{
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        label="porcentaje 2"
                        id="porcentaje2"
                        value={client.porcentaje2 + "%"}
                        variant="filled"
                        sx={{ margin: "10px" }}
                        InputProps={{
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      /></Box>
                    </>
                  )}

                  {/* Beneficiario 3 */}
                  {(client.beneficiario3 !== "No" && client.beneficiario3 !== undefined) && (
                    <>
                      <TextField
                        label="Beneficiario 3"
                        id="beneficiario3"
                        value={client.beneficiario3}
                        variant="filled"
                        sx={{ margin: "10px" }}
                        InputProps={{
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        label="CUIL Beneficiario 3"
                        id="cuilBeneficiario3"
                        value={client.cuilbeneficiario3}
                        variant="filled"
                        sx={{ margin: "10px" }}
                        InputProps={{
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        label="porcentaje 3"
                        id="porcentaje3"
                        value={client.porcentaje3}
                        variant="filled"
                        sx={{ margin: "10px" }}
                        InputProps={{
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </>
                  )}
                </Box>
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
                          variant="outlined"
                          sx={{ color: "black", borderColor: "black", fontSize: "0.65rem" }}
                          onClick={() => navigate("/usuario2/legajoscliente/" + props.cuil_cuit)}
                        >
                          Ir a legajos
                        </Button>

                        <Button
                          variant="outlined"
                          size="small"
                          sx={{ color: "black", borderColor: "black", fontSize: "0.65rem", }}
                          onClick={() => navigate("/usuario2/modificarcliente/" + props.cuil_cuit)}
                        >
                          Modificar cliente
                        </Button>

                        <Ingreso
                          traer={async () => {
                            const cliente = await servicioCliente.cliente(props.cuil_cuit);
                            setCliente(cliente);
                          }}
                        />
                        <Button variant="outlined"
                          size="small"
                          sx={{ color: "black", borderColor: "black", fontSize: "0.65rem", }}
                          onClick={() => navigate('/usuario2/asignarloteausuario/' + props.cuil_cuit)}
                        >
                          Asignar lote a usuario
                        </Button>
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
