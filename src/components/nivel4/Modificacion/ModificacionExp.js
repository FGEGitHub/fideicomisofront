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
import servicioExp from '../../../services/expedientes'
import "../profile.css";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

const ModificacionC = (props) => {
  const navigate = useNavigate();
    const [expediente, setExpediente] = useState([])
    const [modificaciones, setModificaciones] = useState([])
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  let params = useParams()
    let id= params.id
   
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
      
    traer()
    
}, []) 


  const traer = async() => {
       
   
      const  exp = await servicioExp.expediente(id)
      
      setExpediente(exp)
   

      setModificaciones({
        id: expediente[0].id,
        Expediente: expediente[0].Expediente,
        Iniciador: expediente[0].Iniciador,
        Extracto: expediente[0].Extracto,
        Cpos: expediente[0].Cpos,
        Fjs: expediente[0].Fjs,
        Barrio: expediente[0].Barrio,
        Observacion: expediente[0].Observacion,
        Rev: expediente[0].Rev,
        Resp: expediente[0].Resp,
        Ubic: expediente[0].Ubic,
        Caratula: expediente[0].Caratula} )
      

      
     
     
  
      ;
    };  
 

    const handleChange = (e) =>{
      setModificaciones({  ...modificaciones, [e.target.name]: e.target.value })
      console.log(modificaciones)
    }
    const handleDeterminar = async (event) => {
      event.preventDefault();
      try {
  
        const rta =await servicioExp.expedientemodif(
       modificaciones
       )
       alert(rta)
       
       } catch (error) {
         console.error(error);
         console.log('Error algo sucedio')
       
       }

    };

  return (<>    
     <form  onSubmit={handleDeterminar}>
   {expediente.map((expe) =>( 
    <div className="profile">
      <Grid Container>
        <Grid item xs={8} style={{ justifyContent: "center", display: "flex" }}>
          <Avatar sx={{ width: 170, height: 140 }}>H</Avatar>
        </Grid>
        <Grid item xs={8}style={{ justifyContent: "center", display: "flex" }}>
  
            <Container>
            <Box>
            <h5>
            Datos Personales del Cliente
            </h5>
                
            </Box>
                <Box>
            <TextField
                  label="Barrio"
                  id="Nombre"
                  name="Barrio"
                  defaultValue={expe.Barrio}
                  onChange={handleChange}
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
          
              <TextField
                  label="Expediente"
                  id="cuil"
                  name="Expediente"
                 // defaultValue="CUIL"
                 defaultValue= {expe.Expediente}
                 onChange={handleChange}
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
                  label="Iniciador"
                  id="email"
                  name="Iniciador"
                  defaultValue={expe.Iniciador}
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
                  label="Extracto"
                  id="Localidad"
                  name="Extracto"
                  onChange={handleChange}
                  defaultValue={expe.Extracto}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: AccountCircle,
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeWorkIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
              <Box>
                <TextField
                  label="Cpos"
                  id="numero de telefono"
                  name="Cpos"
                  defaultValue={expe.Cpos}
                  onChange={handleChange}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="Fjs"
                  id="dirección"
                  name="Fjs"
                  defaultValue={expe.Fjs}
                  onChange={handleChange}
                 /*  value={client.ingresos} */
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                >
                  
                </TextField>
            
                <TextField
                  label="Observacion"
                  id="domicilio"
                  name="Observacion"
                  multiline
                  rows={8}
                  maxRows={4}
                  defaultValue={expe.Observacion}
                  onChange={handleChange}
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                />

                <TextField
                  label="Razon Social"
                  id="dirección"
                  name="razon_social"
                  defaultValue={expe.razon_social}
                  onChange={handleChange}
                 /*  value={client.ingresos} */
                  variant="filled"
                  sx={{ margin: "10px" }}
                  InputProps={{
                    readOnly: editMode,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                >
                  
                </TextField>
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
                        type="submit"
                      >
                      Guardar
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
    ))}</form> </>);
}

export default ModificacionC;