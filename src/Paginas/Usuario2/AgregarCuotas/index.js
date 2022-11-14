

import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import DialogActions from '@mui/material/DialogActions';

import { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";
import servicioCuotas from '../../../services/cuotas'
import servicioUsuario from '../../../services/usuarios'
import MenuIzq2 from '../../../components/nivel2/MenuIzq2';
//////
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert } from '@mui/material';

/////
const drawerWidth = 240;

export default function MenuUsuario2() {
  let params = useParams()
  let id = params.id
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [estadoCuotas, setestadoCuotas] = useState({
    id:id


  })
  const [logueado, setLogueado] = useState(false) 
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      if (user.nivel != 2){
        window.localStorage.removeItem('loggedNoteAppUser')
     navigate('/login')

      }else{

        setLogueado(true)
      }
    
      //servicioUsuario.setToken(user.token)  
     
      
    }
   
  }, [])

  ///

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  ///

  const agregarFalso = async (event) => {
 
    alert('Completar todos los datos')
  }

  const agregarCuotas = async (event) => {
    event.preventDefault();
    try {
      console.log('entra')
      const respuesta = await servicioCuotas.agregarCuotas(estadoCuotas)
     alert(respuesta[1])
      navigate('/usuario2/detallecliente/'+respuesta[0]) 
      

    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')


    }
  }



  const handleChange = (e) =>{
        console.log(estadoCuotas)
    setestadoCuotas({ ...estadoCuotas, [e.target.name]: e.target.value })


  }
   
  



  return (
<div>
    { logueado ?<div>
    <MenuIzq2>
      <br /> <br /> <br />
      <form onSubmit={agregarCuotas}>

{/*  <h2>Valor del lote</h2>
      <TextField
       style ={{width: '25%'}}
          autoFocus
          margin="dense"
          id="name"
          label="Valor del lote "
          name="monto_total"
          onChange={handleChange}
          fullWidth
          variant="standard"
        />

<br /> <br /> 

      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} columns={16}>
          <TextField
          style ={{width: '25%'}}
          autoFocus
          margin="dense"
          id="name"
          label="Anticipo"
          name="anticipo"
          onChange={handleChange}
          fullWidth
          variant="standard"
        />
          </Grid>
        </Box> */}
<h2>Fecha Anticipo</h2>
        <NativeSelect
                        defaultValue={30}
                        onChange={handleChange}
                        inputProps={{
                            name: 'mesanticipo',
                            id: 'uncontrolled-native',

                        }}

                    > <option value={''}>Elegir</option>
                        <option value={'1'}>Enero</option>
                        <option value={'2'}>Febrero</option>
                        <option value={'3'}>Marzo</option>
                        <option value={'4'}>Abril</option>
                        <option value={'5'}>Mayo</option>
                        <option value={'6'}>Junio</option>
                        <option value={'7'}>Julio</option>
                        <option value={'8'}>Agosto</option>
                        <option value={'9'}>Septiembre</option>
                        <option value={'10'}>Octubre</option>
                        <option value={'11'}>Noviembre</option>
                        <option value={'12'}>Diciebre</option>


                    </NativeSelect>
                    <NativeSelect
                        defaultValue={30}
                        onChange={handleChange}
                        inputProps={{
                            name: 'anioanticipo',
                            id: 'uncontrolled-native',

                        }}

                    > <option value={''}>Elegir</option>
                        <option value={'2015'}>2015</option>
                        <option value={'2016'}>2016</option>
                        <option value={'2017'}>2017</option>
                        <option value={'2018'}>2018</option>
                        <option value={'2019'}>2019</option>
                        <option value={'2020'}>2020</option>
                        <option value={'2021'}>2021</option>
                        <option value={'2022'}>2022</option>
                        <option value={'2023'}>2023</option>
                        <option value={'2024'}>2024</option>
                      

                    </NativeSelect>

                    <br /> <br /> <br /> 

                    <h2>Fecha inicio de las cuotas</h2>
         <NativeSelect
                        defaultValue={30}
                        onChange={handleChange}
                        inputProps={{
                            name: 'mes',
                            id: 'uncontrolled-native',

                        }}

                    > <option value={''}>Elegir</option>
                        <option value={'1'}>Enero</option>
                        <option value={'2'}>Febrero</option>
                        <option value={'3'}>Marzo</option>
                        <option value={'4'}>Abril</option>
                        <option value={'5'}>Mayo</option>
                        <option value={'6'}>Junio</option>
                        <option value={'7'}>Julio</option>
                        <option value={'8'}>Agosto</option>
                        <option value={'9'}>Septiembre</option>
                        <option value={'10'}>Octubre</option>
                        <option value={'11'}>Noviembre</option>
                        <option value={'12'}>Diciebre</option>


                    </NativeSelect>
                    <NativeSelect
                        defaultValue={30}
                        onChange={handleChange}
                        inputProps={{
                            name: 'anio',
                            id: 'uncontrolled-native',

                        }}

                    > <option value={''}>Elegir</option>
                        <option value={'2015'}>2015</option>
                        <option value={'2016'}>2016</option>
                        <option value={'2017'}>2017</option>
                        <option value={'2018'}>2018</option>
                        <option value={'2019'}>2019</option>
                        <option value={'2020'}>2020</option>
                        <option value={'2021'}>2021</option>
                        <option value={'2022'}>2022</option>
                        <option value={'2023'}>2023</option>
                        <option value={'2024'}>2024</option>
                      

                    </NativeSelect>
                    <br /> 
       
        <TextField
         style ={{width: '20%'}}
          autoFocus
          margin="dense"
          id="name"
          label="Cantidad de Cuotas"
          name="cantidad_cuotas"
          onChange={handleChange}
          fullWidth
          variant="standard"
        />



        <DialogActions>
        {estadoCuotas.mesanticipo && estadoCuotas.mes && estadoCuotas.anio && estadoCuotas.anioanticipo ? <> <Button onClick={agregarCuotas()} >Enviar</Button> </>  :  <> <p>Completar todos los datos</p></> } 
        </DialogActions>
      </form>

    </MenuIzq2>

    </div>  : <div></div> }
    </div> 
  )




}