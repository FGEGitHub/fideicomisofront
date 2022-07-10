import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginService from '../services/login'
import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    CircularProgress,
} from "@mui/material";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import servicioUsuario from '../services/usuarios'

const Login = () => {

    const [usuario, setUsuario] = useState({
        cuil_cuit: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    //const [editing, setEditing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    let user =''



    const loginSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {

             user = await loginService.login({
                cuil_cuit: usuario.cuil_cuit,
                password: usuario.password
            })
            
            window.localStorage.setItem(
                'loggedNoreAppUser', JSON.stringify(user)
            )

            servicioUsuario.setToken(user.token)
            console.log(user)


            setLoading(false);
            // navigate("/login");
        } catch (error) {
            console.error(error);
            console.log('error credenciales')
        }
     
    };

    const pediuser =  (event) =>{
        return(user)
    }
    const handleChange = (e) =>
        setUsuario({ ...usuario, [e.target.name]: e.target.value });

    return(
    <>
    <Grid
        container
        alignItems="center"
        direction="column"
        justifyContent="center"
    >
        <Grid item xs={3}>
            <Card
                sx={{ mt: 5 }}
                style={{
                    backgroundColor: "#1E272E",
                    padding: "1rem",
                }}
            >
                <Typography variant="h5" textAlign="center" color="white">
                    Login
                </Typography>
                <CardContent>
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
                            inputProps={{ style: { color: "white" } }}
                            InputLabelProps={{ style: { color: "white" } }}
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
                            inputProps={{ style: { color: "white" } }}
                            InputLabelProps={{ style: { color: "white" } }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!usuario.cuil_cuit || !usuario.password}
                        >
                            {loading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : (
                                "Save"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    </>
    )
}

export default Login;