import React, { useEffect, useState, } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import InputAdornment from "@mui/material/InputAdornment";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Avatar from "@mui/material/Avatar";
import Container from '@mui/material/Container';
import servicioCliente from '../../../services/clientes';
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import "../../profile.css";
import LinearProgress from "@mui/material/LinearProgress";
import Agregarbenefciarios from './agregarbeneficiarios'

const FichaAxios = (props) => {
  const navigate = useNavigate();
    const [cliente, setCliente] = useState([])
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const [address, setAddress] = useState(null);
  const [editMode, setEditMode] = useState(false);
  function submitFormHandler(event) {
    event.preventDefault();
  }
  useEffect(() => {
      
    traer()
    
}, []) 

  const traer = async() => {
       
   
      const  cliente = await servicioCliente.cliente(props.cuil_cuit)
      
      setCliente(cliente)
  
     
  
      ;
    };  
 
  

  return (<>    
    
   {cliente.map((client) =>( 
    <div className="profile">
      <Grid Container style={{ direction: "column", alignItems:"left", justifyContent: "left", display: "flex"}}>
        <Grid item xs={8} style={{ direction: "column", justifyContent: "left", display: "flex" }}>
        <Avatar sx={{ width: 170, height: 140 }}> <AccountCircle fontSize="large"/> </Avatar>
        </Grid>
        <Grid item xs={8}style={{ }}>
  
            <Container>
            <Box>
            <h5>
            Datos Personales del Cliente
            </h5>
            <Box sx={{ display: "flex", alignItems: "center", width: "25%" }}>
      Riesgo
      <LinearProgress
        variant="determinate"
        value={client.riesgo}
        style={{
          width: "100%",
          marginRight: 8,
          height: 10,
          borderRadius: 5,
          backgroundColor: "#e0e0e0", // Fondo de la barra
        }}
        sx={{
          "& .MuiLinearProgress-bar": {
            backgroundColor:
            client.riesgo <= 58
                ? "green"
                : client.riesgo <= 70
                ? "yellow"
                : "red", // Color de la barra según el valor
          },
        }}
      />
      <span
        style={{
          fontWeight: "bold",
          color:
          client.riesgo <= 58
              ? "green"
              : client.riesgo <= 70
              ? "yellow"
              : "red", // Color del texto según el valor
          textTransform: "uppercase",
        }}
      >
        {client.riesgo <= 58
          ? "Bajo"
          : client.riesgo <= 70
          ? "Medio"
          : "Alto"}{" "}
        ({client.riesgo}%)
      </span>
    </Box>  
            </Box>
       
              <Box>
              <TextField
                  label="CUIL"
                  id="cuil"
                 // defaultValue="CUIL"
                  value= {client.cuil_cuit}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: !editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="Nombre"
                  id="Nombre"
                  value={client.Nombre}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
                         {client.razon =="Empresa" ? <>
                          <TextField
                  label="Tipo de cliente"
                  id="tipoCliente"
                  value={client.tipoCliente}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
                         </>:<>
                         <TextField
                  label="Fecha de nacimiento"
                  id="FechaNacimiento"
                  value={client.FechaNacimiento}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
                         </>}
             
                         
              </Box>
                   

                    
              <Box>
             
                <TextField
                  label="Email"
                  id="email"
                  value={client.email}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="Codigo postal"
                  id="cp"
                  value={client.cp}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: !editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeWorkIcon />
                      </InputAdornment>
                    )
                  }}
                />


                <TextField
                  label="Actividad economica"
                  id="actividadEconomica"
                  value={client.actividadEconomica}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
             


              </Box>
              <Box>
                <TextField
                  label="Numero de Telefono"
                  id="numero de telefono"
                  defaultValue=""
                  value={client.telefono}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: !editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="ID para registro"
                  id="ID para registro"
                  defaultValue=""
                  value={client.id}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: !editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    )
                  }}
                >
                  
                </TextField>
                {client.razon =="Empresa" ? <>
                  <TextField
                  label="Antiguedad"
                  id="antiguedad"
                  value={client.antiguedad}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
                </>:<>
                <TextField
                  label="Tipo de cliente"
                  id="tipoCliente"
                  value={client.tipoCliente}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
                </>}
              </Box>
              <Box>
                <TextField
                  label="Razon"
                  id="Razon"
                  defaultValue=""
                  value={client.razon}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: !editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="Ingresos Declarados"
                
                  defaultValue=""
                  value={"$"+client.ingresos}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: !editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeIcon />
                      </InputAdornment>
                    )
                  }}
                >
               
                </TextField>
                <TextField
                  label="Volumen Transaccional"
                  id="volumenTransaccional"
                  value={"$"+client.volumenTransaccional}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />
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
        value={client.porcentaje1+"%"}
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
        value={client.porcentaje2+"%"}
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
                      <Button
                        variant="outlined"
                        onClick={() => navigate('/usuario2/legajoscliente/'+props.cuil_cuit)}
                      >
                      Ir a legajos
                      </Button>
                     
                   <Button
                   variant="outlined"
                   onClick={() =>  navigate('/usuario2/modificarcliente/'+props.cuil_cuit)}                 >
                Modificar cliente
                 </Button>
                 { client ? <>
                 
                  <Agregarbenefciarios
                  id={client.id}
                  traer={async() => {
       
   
                    const  cliente = await servicioCliente.cliente(props.cuil_cuit)
                    
                    setCliente(cliente)
                
                   
                
                    ;
                  }}/>
                 </>:<></>}
                 
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
