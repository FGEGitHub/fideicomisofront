import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import servicioNivel3 from '../../../services/nivel3'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Ingresos() {
    let params = useParams()
    


    const [usuario, setUsuario] = useState({
   
    });
    const handleChange = (e) => {
        console.log(usuario)
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }


    const handleDeterminar = async (event) => {
        event.preventDefault()
        const rta = await servicioNivel3.registronivel3(
            usuario
        )


    };



    return (
        <div>


            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="cuil_cuit"
                name="cuil_cuit"
                onChange={handleChange}
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                type="password"
                label="password"
                name="password"
                onChange={handleChange}
                fullWidth
                variant="standard"
            />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Nivel</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="Nivel"
                    name="nivel"
                    onChange={handleChange}
                >
                    <MenuItem value="2">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'1'}>1-Cliente</MenuItem>
                    <MenuItem value={'2'}>2-Administracion</MenuItem>
                    <MenuItem value={'3'}>3-Gerencia</MenuItem>
                    <MenuItem value={'4'}>Legales</MenuItem>
                </Select>
            </FormControl>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="nombre"
                name="nombre"
                onChange={handleChange}
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Numero de cliente"
                name="nro_cliente"
                onChange={handleChange}
                fullWidth
                variant="standard"
            />

            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="mail"
                name="mail"
                onChange={handleChange}
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="telefono"
                name="telefono"
                onChange={handleChange}
                fullWidth
                variant="standard"
            />


         
            <Button onClick={handleDeterminar}>Enviar</Button>



        </div>
    );
}
