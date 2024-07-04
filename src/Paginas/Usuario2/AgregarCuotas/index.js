import * as React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Alert, Checkbox, FormControlLabel } from '@mui/material';

import { useEffect, useState } from "react";
import servicioCuotas from '../../../services/cuotas';
import servicioUsuario from '../../../services/usuarios';
import MenuIzq2 from '../../../components/nivel2/MenuIzq2';

const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MenuUsuario2() {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [estadoCuotas, setestadoCuotas] = useState({ id: params.id });
  const [logueado, setLogueado] = useState(false);
  const [isValorLoteEnabled, setIsValorLoteEnabled] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      if (user.nivel !== 2) {
        window.localStorage.removeItem('loggedNoteAppUser');
      } else {
        setLogueado(true);
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setestadoCuotas({ ...estadoCuotas, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setIsValorLoteEnabled(e.target.checked);
  };

  const agregarCuotas = async (event) => {
    try {
      const respuesta = await servicioCuotas.agregarCuotas(estadoCuotas);
      alert(respuesta[1]);
      navigate('/usuario2/detallecliente/' + respuesta[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {logueado ? (
        <div>
          <MenuIzq2>
            <br /> <br /> <br />
            <form onSubmit={agregarCuotas}>
              <h2>Fecha Anticipo</h2>
              <NativeSelect
                defaultValue={30}
                onChange={handleChange}
                inputProps={{ name: 'mesanticipo', id: 'uncontrolled-native' }}
              >
                <option value={''}>Elegir</option>
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
                <option value={'12'}>Diciembre</option>
              </NativeSelect>
              <NativeSelect
                defaultValue={30}
                onChange={handleChange}
                inputProps={{ name: 'anioanticipo', id: 'uncontrolled-native' }}
              >
                <option value={''}>Elegir</option>
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
                inputProps={{ name: 'mes', id: 'uncontrolled-native' }}
              >
                <option value={''}>Elegir</option>
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
                <option value={'12'}>Diciembre</option>
              </NativeSelect>
              <NativeSelect
                defaultValue={30}
                onChange={handleChange}
                inputProps={{ name: 'anio', id: 'uncontrolled-native' }}
              >
                <option value={''}>Elegir</option>
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
                style={{ width: '20%' }}
                autoFocus
                margin="dense"
                id="name"
                label="Cantidad de Cuotas"
                name="cantidad_cuotas"
                onChange={handleChange}
                fullWidth
                variant="standard"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={isValorLoteEnabled} onChange={handleCheckboxChange} />}
                label="Habilitar Cambiar valor total"
              /> <br />
              <TextField
                style={{ width: '20%' }}
                autoFocus
                margin="dense"
                id="name"
                label="Cambiar valor total"
                name="valordellote"
                onChange={handleChange}
                fullWidth
                variant="standard"
                disabled={!isValorLoteEnabled}
              />
              <br />
              <TextField
                style={{ width: '20%' }}
                autoFocus
                margin="dense"
                id="name"
                label="Cambiar el porcentaje de anticipo"
                name="porcentaje"
                onChange={handleChange}
                fullWidth
                variant="standard"
              />

              <DialogActions>
                {estadoCuotas.mesanticipo && estadoCuotas.mes && estadoCuotas.anio && estadoCuotas.anioanticipo ? (
                  <Button type="submit">Enviar</Button>
                ) : (
                  <p>Completar todos los datos</p>
                )}
              </DialogActions>
            </form>
          </MenuIzq2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
