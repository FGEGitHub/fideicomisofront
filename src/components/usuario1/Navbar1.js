import React, { useState , useEffect} from "react";
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
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



const Navbar = (props) => {
  const usuario  = useUser().userContext

  const [notificacioness, setNotificacioness] = useState(null);
  const [user, setUser] = useState(null)
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const islogo = {
                  width: "100px",                  
                  };
                  
                  
  const navigate = useNavigate();


  useEffect(() => {
    cantidadnoti()
}, [])
const cantidadnoti = async () => {
        
  //const notis = await servicioPagos.cantidadpendientes()

  setNotificacioness(2)
}
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

   const notificaciones= () => {
    navigate("/usuario/notificaciones");
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
               {usuario &&  <Button onClick={inicio} sx={{ marginLeft: "10px" }} variant="Outlined">
               <Tab label="Inicio" />
              </Button>  }

              <Button onClick={irNosotros} sx={{ marginLeft: "10px" }} variant="Outlined">
                <Tab label="Nosotros" />
              </Button>
              <Button onClick={irContacto} sx={{ marginLeft: "10px" }} variant="Outlined">
                <Tab label="Contacto" />
                </Button>
              <Button onClick={irAyuda} sx={{ marginLeft: "10px" }} variant="Outlined">
                <Tab label="Ayuda" />
              </Button>
              <Button onClick={notificaciones} sx={{ marginLeft: "10px" }} variant="Outlined">
                <Tab label="Notificaciones" />
                <Badge badgeContent={notificaciones} color="error">
          <MailIcon color="primary" />
        </Badge>
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