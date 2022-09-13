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
  const irNosotros = () => {
    navigate("/usuario/nosotros");
  }
  const irContacto = () => {
    navigate("/usuario/contacto");
  }
  const irAyuda = () => {
    navigate("/usuario/menu");
  }

  const hanleLogout = () => {
    /* console.log('click')
     setUser(null)
     servicioUsuario.setToken(user.token) */

     window.localStorage.removeItem('loggedNoteAppUser')
     navigate('/login')
    // window.location.reload(true);
   } 
 
  const inicio = () => {
    navigate("/usuario/menu");
  
   } 
  
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
               {usuario &&  <Button  sx={{ marginLeft: "10px" }} variant="Outlined">
               <Tab label="Inicio" />
              </Button>  }

              <Button  sx={{ marginLeft: "10px" }} variant="Outlined">
                <Tab label="Ayuda" />
              </Button>
              </Tabs>
              {usuario &&  <Button onClick={hanleLogout} sx={{ marginLeft: "10px" }} variant="Outlined">
                Cerrar Sesión
              </Button>  }


              {!usuario && <div>    <Button sx={{ marginLeft: "10px" }} variant="Outlined">
                Registrarse
              </Button>
              <Button onClick={handleClick} sx={{ marginLeft: "auto" }} variant="Outlined">
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