import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/marcas.png";
import useUser from '../../hooks/useUser'
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
import servicionotificaciones from '../../services/notificaciones'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';




const Navbar = (props) => {
  const usuario = useUser().userContext

  const [notificacioness, setNotificacioness] = useState();
  const [nombre, setNombre] = useState(null)
  const [value, setValue] = useState();

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [valuee, setValuee] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickk = (event) => {
    if (anchorEl) {
      handleClose(); // Cierra el menú si ya está abierto
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  ;
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const islogo = {
    width: "90px",
  };


  const navigate = useNavigate();


  useEffect(() => {
    cantidadnoti()
  }, [])
  const cantidadnoti = async () => {
    try {
      const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      if (loggedUserJSON) {
        const usuario = JSON.parse(loggedUserJSON)
        //  console.log(usuario.cuil_cuit)
        const notis = await servicionotificaciones.cantidadpendientes(usuario.cuil_cuit)

        setNotificacioness(notis[0])
        setNombre(notis[1])


      }

    } catch (error) {

    }
    //
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
  const nomb = () => {
    navigate("/usuario/datosPers");
  };
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

  const notificaciones = () => {
    navigate("/usuario/notificaciones");
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#Primary",  marginTop: "auto" }}>
        <Toolbar >
          <img style={islogo} src={logo} alt="logo" />
          {isMatch ? (
            <>
              <DrawerNav />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" ,  marginTop: "auto" }}
                indicatorColor="Secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {usuario && <Button onClick={inicio} sx={{ marginLeft: "5px", fontSize: "12px" }} variant="Outlined">
                Inicio
                </Button>}

                <Button onClick={irNosotros} sx={{ marginLeft: "5px", fontSize: "12px" }} variant="Outlined">
                Nosotros
                </Button>
                <Button onClick={irContacto} sx={{ marginLeft: "5px", fontSize: "12px" }} variant="Outlined">
                Contacto
                </Button>
                {usuario && <div>



                </div>}
                {usuario && <Button onClick={nomb} sx={{ marginLeft: "5px", fontSize: "12px" }} variant="Outlined">
                {nombre} 
                </Button>}
                <Button sx={{ marginLeft: "5px", fontSize: "12px" }} variant="Outlined" aria-controls="dropdown-menu"
                    aria-haspopup="true"
                    onClick={handleClickk} >
          
                    Notificaciones
                  {notificacioness &&
                    <Badge badgeContent={notificacioness.length} color="error">   <MailIcon color="primary" />
                    </Badge>}
                  <Menu
                    id="dropdown-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    label="Notificaciones"
                    style={{ minWidth: '150px' }}
                  >
                    <MenuItem onClick={notificaciones} style={{ borderBottom: '1px solid gray', padding: '8px 16px', backgroundColor: 'color-secundario' }} ><b> <h3>Notificaciones</h3></b></MenuItem>
                    <MenuItem onClick={notificaciones} style={{ borderBottom: '1px solid gray', padding: '8px 16px', backgroundColor: 'color-secundario' }} > <div>  <div style={{ textAlign: 'right' }}><a > Ver todas</a></div></div></MenuItem>
                    {notificacioness &&
                      notificacioness.length > 0 ? <>
                      {notificacioness.map((row) => (

                        <MenuItem onClick={notificaciones} style={{ borderBottom: '1px solid gray', padding: '8px 16px' }} >{row.asunto}</MenuItem>

                      )

                      )}
                    </> : <> <MenuItem onClick={notificaciones}>Sin notificaciones nuevas</MenuItem></>}

                  </Menu>
                </Button>

              </Tabs>
              {usuario && <Button onClick={hanleLogout} sx={{ marginLeft: "5px", fontSize: "12px" }} variant="Outlined">
                Cerrar Sesión
              </Button>}


              {!usuario && <div>    <Button sx={{ marginLeft: "5px", fontSize: "12px" }} variant="Outlined">
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