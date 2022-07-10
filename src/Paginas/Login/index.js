import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginService from '../../services/login'
import Guardar from '../../components/Guardar';
import {
  Button,
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




const Login = () => {

  const [loginVisible, setLoginvisible] = useState(false)
  const [usuario, setUsuario] = useState({
    cuil_cuit: "",
    password: "",
  });
  const [user, setUser] = useState(null)


  const [loading, setLoading] = useState(false);
  //const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      servicioUsuario.setToken(user.token)
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

      }
    } catch (error) {
      console.error(error);
      console.log('error credenciales')
      window.location.reload(true);
      alert('error credenciales')
    
    }

  };


  const handleChange = (e) =>
    setUsuario({ ...usuario, [e.target.name]: e.target.value });



  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#2196f3' }
  const btnstyle = { margin: '8px 0' }

  const LoginReturn = () => (


    <div>
  
      <div>
        <Button></Button>
      </div>
    <div>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
              <h2>Ingresar</h2>
            </Grid>
            <form onSubmit={loginSubmit}>
              <TextField
                variant="filled"
                label="Cuil/cuit"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="cuil_cuit"
                onChange={handleChange}
                value={usuario.cuil_cuit}
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />
              <TextField
                variant="outlined"
                label="Password"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="password"
                onChange={handleChange}
                value={usuario.password}
                inputProps={{ style: { color: "black" } }}
                InputLabelProps={{ style: { color: "black" } }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
              /*  disabled={!usuario.cuil_cuit || !usuario.password} */
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Save"
                )}
              </Button>
            </form>
            <Typography >
              <Link href="#" >
               Olvidaste la contraseña?
              </Link>
            </Typography>
            <Typography >No estas registrado ?
              <Link href="#" >
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </div>


    </div>
  )

  /*   const onFinish = (values) => {
      enviarDatos(urll, values)
    }
  
  
  
  
   */
  return (

    <>
     {  <Menu
        hanleLogout={hanleLogout}
      /> }
  
<br></br><br></br><br></br>
  
        {LoginReturn()}






    </>
  )
}
export default Login