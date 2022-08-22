import React, { useEffect, useState, } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";

import Container from '@mui/material/Container';
import servicioCliente from '../../../services/clientes'
import "../../profile.css";
import { Box } from "@mui/system";
import ModalLegajo from './Modalegajo'
import { useNavigate } from "react-router-dom";

const LegajoCliente = (props) => {
  const navigate = useNavigate();
  const [legajos, setLegajos] = useState([])
  const [file, setFile] = useState(null);
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
       
   
      const  legajos = await servicioCliente.traerLejagos(props.cuil_cuit)
      console.log(legajos)
      setLegajos(legajos)
  
     
  
      ;
    };  
 


    const selecthandler = e =>{
      setFile(e.target.files[0])
     }



  return (<>  
 
 <ModalLegajo
 cuil_cuit = {props.cuil_cuit}
 />
    <Button onClick={() => navigate('agregarlegajo/')}variant="contained">Subir Legajo2</Button>
   
     {legajos.map((legajo) =>( 
    <div className="profile">
      <Grid>
       
        <Grid item xs={2}style={{justifyContent:"flex-start", display: "flex" }}>
          <form onSubmit={submitFormHandler}>
            <Container>
            <Box>
            <h5>
           Legajo: {legajo.tipo}
            </h5>
                
            </Box>
       
              <Box>
              <TextField
                  label="CUIL"
                  id="cuil"
                 // defaultValue="CUIL"
                  value= {legajo.cuil_cuit}
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
                  label="Tipo"
                  id="cuil"
                 // defaultValue="CUIL"
                  value= {legajo.tipo}
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

              </Box>
             

              

              <Box>
                <columns lg={12}>
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
                        onClick={() => setEditMode(true)}
                      >
                        editar
                      </Button>
                    </div>
                  )}
                </columns>
              </Box>
            </Container>
          </form>
        </Grid>

        
      </Grid>
    </div>
    ))} </>);
}

export default LegajoCliente;