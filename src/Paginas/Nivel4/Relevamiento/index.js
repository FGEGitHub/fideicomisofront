


import MenuUsuario4 from '../../../components/nivel4/Menuizq4'
import Widget from '../../../components/nivel4/EstadistivasRelev/Widget/Widget';
import Featured from '../../../components/nivel4/EstadistivasRelev/Featured/Featured'
import Chart from '../../../components/nivel4/EstadistivasRelev/Featured/Featured'
import Tabla from '../../../components/nivel4/EstadistivasRelev/Tabla/Tabla'
import "./Home.scss";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button } from '@mui/material';
import servicioRelevamiento from '../../../services/relevamiento'







export default function Legajos() {

  const [barrio, setBarrio] = React.useState([]);
  const [datos, setDatos] = React.useState([]);


  const handleChange = (e) => {

    setBarrio({ ...barrio, [e.target.name]: e.target.value })
  }





  const buscar = async () => {

    const datoss = await servicioRelevamiento.buscar(barrio)
    setDatos(datoss)
    console.log(datos)

  };
  return (
    <MenuUsuario4>

      <div>
        <Box sx={{ minWidth: 120 }}>
          <NativeSelect
            defaultValue={30}
            onChange={handleChange}
            inputProps={{
              name: 'barrio',
              id: 'uncontrolled-native',

            }}
          >   <option value={'Otro'}>Otro</option>
            <option value={'La Tosquera'}>La Tosquera</option>

          </NativeSelect>
        </Box>

        <Button onClick={buscar}>Buscar</Button>
      </div>





        {datos?   
      <div>
      <div className="home">

        <div className="container">

          <div className="widgets">
            
          <div>
          <Widget type="familias" />
          </div>
            
            <Widget type="condenuncia" 
            cantidad ={datos} />
            <Widget type="sindenuncua" />
            <Widget type="enproceso" />
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Tabla />
          </div>
        </div>
      </div>


      </div>

         : <div></div>}
    </MenuUsuario4>
  );

}

