import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginService from '../../services/login'
import Guardar from '../../components/Guardar';
import {
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Paper,
  Avatar,
  Link
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import servicioUsuario from '../../services/usuarios'
import Checkbox from '@mui/material/Checkbox';
import Menu from "../../components/Navbar";
import Registro from "../../components/Registro"
import RecuperoC from "../../components/RecuperoC"
import marcas from '../../Assets/marcas.png'



const Login = () => {

 const [errorCredenciales, setErrorCredenciales] = useState("");

  const [usuario, setUsuario] = useState({
    cuil_cuit: "",
    password: "",
  });
  const [user, setUser] = useState(null)


  const [loading, setLoading] = useState(false);
  //const [editing, setEditing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      
      switch (user.nivel) {
        case 1:
          navigate('/usuario/menu')
          break;
        case 2:
          navigate('/usuario2/clientes')
          break;
      
        case 3:
          navigate('/nivel3/')
          break;
          case 4:
            navigate('/legales/clientes')
          break;
          case 5:
            navigate('/usuariomapas/inicio')
          break;
        default:
          
          break;
      }
    }
  }, [])


  const hanleLogout = () => {
    setUser(null)
    servicioUsuario.setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  const loginSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {

      const user = await loginService.login({
        cuil_cuit: usuario.cuil_cuit,
        password: usuario.password
      })

      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      servicioUsuario.setToken(user.token)
      console.log(user)
      setUser(user)

      setLoading(false);

      console.log(user.nivel)
      switch(user.nivel){
        case 1: navigate('/usuario/menu')
        window.location.reload(true);
          break;
          case 2:navigate('/usuario2/clientes')
                window.location.reload(true);
          break;
          case 3:navigate('/nivel3')
          window.location.reload(true);
          break;
          case 4:navigate('/legales/clientes')
          window.location.reload(true);
          break;
          case 5:
            navigate('/usuariomapas/inicio')
          window.location.reload(true);

          break;
          case 10:navigate('/admin/usuarios')
          window.location.reload(true);
          break;

      }
    } catch (error) {
  console.error(error);
  console.log('Cuil/Cuit y/o contraseña incorrectos');

  setLoading(false);
  setErrorCredenciales("Cuil/Cuit y/o contraseña incorrectos");
    
    }

  };


  const handleChange = (e) =>
    setUsuario({ ...usuario, [e.target.name]: e.target.value });



  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#2196f3' }
  const btnstyle = { margin: '8px 0' }

const LoginReturn = () => (
  <Grid container component="main" sx={{ height: '100vh' }}>
    
    {/* Columna izquierda con fondo y logo 
    'linear-gradient(to bottom right,hsl(209, 100%, 9%),rgb(0, 34, 66))'*/}
    <Grid
      item
      xs={false}
      md={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        textAlign: 'center',
        background: '#051821',
        color: 'white',
      }}
    >
      <Box component="img" src={marcas} alt="Santa Catalina Logo" 
      sx={{ width: 700, maxWidth: '100%' }} />
      
    </Grid>

    {/* Columna derecha con formulario dentro de una Card */}
    <Grid item xs={12} md={6}  square 
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background:'#051821'}}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          mx: 4,
        }}
      >
        <Card elevation={8} sx={{ p: 4, backgroundColor: '#ffffff', borderRadius: 3}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: '#002d57' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              BIENVENIDO
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, mb: 3, textAlign: 'center' }}>
             Iniciar Sesión
            </Typography>
          </Box>

          <Box component="form" onSubmit={loginSubmit} noValidate>
          <TextField
  fullWidth
  margin="normal"
  label="Cuil/Cuit"
  name="cuil_cuit"
  value={usuario.cuil_cuit}
  onChange={handleChange}
  variant="outlined"
  error={!!errorCredenciales}
  helperText={" "}
 />

          <TextField
  fullWidth
  margin="normal"
  label="Contraseña"
  type="password"
  name="password"
  value={usuario.password}
  onChange={handleChange}
  variant="outlined"
  error={!!errorCredenciales}
  helperText={errorCredenciales || " "}
 />

            <Link href="#" variant="body2">
                  <RecuperoC />
                </Link>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Recordarme"
              sx={{ mt: 1 }}
            />

            <Button
              type="submit"
              
              variant="contained"
             
              sx={{ background:'#148D8D', mt: 2, mb: 2, ml:'auto', display: 'block'}}
              
            >
            {loading ? (
  <CircularProgress size={25} sx={{ color: '#002d57' }} />
) : (
  "Ingresar"
)}

            </Button>

            <Grid container justifyContent="space-between">
             
                <Typography variant="body2">
                  ¿No estás registrado? <Registro />
                </Typography>
              
              
            </Grid>
          </Box>
        </Card>
      </Box>
    </Grid>
  </Grid>
);

/*   const onFinish = (values) => {
      enviarDatos(urll, values)
    }
  
  
  
  
   */
  return (

    <>
    
  

  
        {LoginReturn()}



        

    </>
  )
}

export default Login;