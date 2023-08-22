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


const FichaAxios = (props) => {
  const navigate = useNavigate();
    const [cliente, setCliente] = useState([])
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const [modificaciones, setModificaciones] = useState({});
  const [editMode, setEditMode] = useState(false);
  function submitFormHandler(event) {
    event.preventDefault();
  }
  useEffect(() => {
      
    traer()
    
}, []) 

  const traer = async() => {
       
   
      const  cliente = await servicioCliente.cliente(props.cuil_cuit)
      
      setModificaciones({
        id: cliente[0].id,
       Nombre: cliente[0].Nombre,
        telefono: cliente[0].telefono,
        cuil_cuit: cliente[0].cuil_cuit,
        email: cliente[0].email,
      }
      )
   
      setCliente(cliente)

    };  
 
    const handleChange = (e) =>{
      setModificaciones({  ...modificaciones, [e.target.name]: e.target.value })
      console.log(modificaciones)
    }
    const handleDeterminar = async (event) => {

      try {
  
        const rta =await servicioCliente.modificarclientelegales(
       modificaciones
       )
       alert(rta)
       
       } catch (error) {
         console.error(error);
         console.log('Error algo sucedio')
       
       }

    };

  return (<>    
    
   {cliente.map((client) =>( 
    <div className="profile">
      <Grid Container style={{ direction: "column", alignItems:"center", justifyContent: "center", display: "flex"}}>
        <Grid item xs={8} style={{ direction: "column", justifyContent: "center", display: "flex" }}>
        <Avatar sx={{ width: 170, height: 140 }}> <AccountCircle fontSize="large"/> </Avatar>
        </Grid>
        <Grid item xs={8}style={{ }}>
  
            <Container>
            <Box>
            <h5>
            Datos Personales del Cliente
            </h5>
                
            </Box>
       
              <Box>
              <TextField
                  label="CUIL"
                  id="cuil"
                  name="cuil_cuit"
                 // defaultValue="CUIL"
                 defaultValue= {client.cuil_cuit}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  onChange={handleChange}
                  InputProps={{
                    readOnly: false,
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
                  name="Nombre"
                  onChange={handleChange}
                  defaultValue={client.Nombre}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: false,
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
                  label="Email"
                  id="email"
                  onChange={handleChange}
                  name="email"
                  defaultValue={client.email}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: false,
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                />

<TextField
                  label="Numero de Telefono"
                  id="numero de telefono"
                  name="telefono"
                  onChange={handleChange}
                  defaultValue={client.telefono}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: false,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    )
                  }}
                />
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
                       <Button variant="contained" onClick={handleDeterminar}>Modificar </Button>
                      <Button
                        variant="outlined"
                        onClick={() => navigate('/legales/legajoscliente/'+props.cuil_cuit)}
                      >
                      Ir a legajos
                      </Button>
                  
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
