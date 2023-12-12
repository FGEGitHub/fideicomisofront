import { useState, useEffect } from "react";


import { useNavigate } from "react-router-dom";
import Ic3 from "./soloic3"
import PIT from "./soloparque"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import Modaldetalles from './modalver'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



const Lotes = () => {
    //configuracion de Hooks
    const [mapa, setMapa] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  
 
    const handleChange = (e) => {
        console.log( e.target.value)
        setMapa(e.target.value)


    }
    return (
        <>
            <NativeSelect
defaultValue={30}
onChange={handleChange}
inputProps={{
    name: 'anio',
    id: 'uncontrolled-native',

}}

> <option value={''}>Elegir</option>
<option value={0}>Todo</option>
<option value={1}>IC3</option>
<option value={2}>Parque</option>



</NativeSelect>
{ mapa === "1" ? <><Ic3/></>:<>


{ mapa === "2" ? <><PIT/></>:<>
<br/><br/><br/><br/>
Sin seleccion



</>}



</>}

        </>


    )
}

export default Lotes;

