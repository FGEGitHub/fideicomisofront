import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/marcas.png";
import  useUser from '../../hooks/useUser'
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerNav from "../DrawerNav";


const Navbar = (props) => {
  const usuario  = useUser().userContext

  
  const [user, setUser] = useState(null)
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const islogo = {
                  width: "100px",                  
                  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  const hanleLogout = () => {
    /* console.log('click')
     setUser(null)
     servicioUsuario.setToken(user.token) */
     window.localStorage.removeItem('loggedNoteAppUser')
     window.location.reload(true);
   } 
   const inicio = () => {
    navigate("/nivel3/");
   } 
  console.log(isMatch);
  const logueado = () => {
  
  
    if (usuario != null  ){
      return 
      (<Button onClick={handleClick} sx={{ marginLeft: "auto" }} variant="contained">
      Ingresar
    </Button>)
    } else{
    return
    (<Button onClick={handleClick} sx={{ marginLeft: "auto" }} variant="contained">
    Ingresar
  </Button>)

  }}
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#Primary" }}>
        <Toolbar>
            <img style={islogo} src={logo} alt="logo" />
          {isMatch ? (
            <>
              <DrawerNav />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="Secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
              
              
              {usuario &&  <Button onClick={inicio} sx={{ marginLeft: "10px" }} variant="contained">
              <Tab label="Inicio" />
              </Button>  }
            
                <Tab label="Nosotros" />
                <Tab label="Contacto" />
                <Tab label="Ayuda" />
              </Tabs>
              {usuario &&  <Button onClick={hanleLogout} sx={{ marginLeft: "10px" }} variant="contained">
                Logout
              </Button>  }


              {!usuario && <div>    <Button sx={{ marginLeft: "10px" }} variant="contained">
                Registrarse
              </Button>
              <Button onClick={handleClick} sx={{ marginLeft: "auto" }} variant="contained">
                Ingresar
              </Button></div>}
             

            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;