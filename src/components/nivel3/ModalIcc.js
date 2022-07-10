import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import servicionivel3 from '../../services/nivel3'
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';


export default function ModalIcc() {

    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({


    })
    const handleChange = (e) => {
        console.log('una')
        setForm({ ...form, [e.target.name]: e.target.value })
     
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleDeterminar = async (event) => {
        event.preventDefault();
       await servicionivel3.agregariccgral(form)
     

        setOpen(false);
       
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                AGREGAR NUEVO ICC
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cliente nuevo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ingrese Datos del nuevo Cliente
                    </DialogContentText>
                    <form onSubmit={handleDeterminar}>
                     
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                           Mes
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'mes',
                                id: 'uncontrolled-native',

                            }}
                        >   <option value={'1'}>Elegir</option>
                            <option value={1}>Enero</option>
                            <option value={2}>Febrero</option>
                            <option value={3}>Marzo</option>
                            <option value={4}>Abril</option>
                            <option value={5}>Mayo</option>
                            <option value={6}>Junio</option>
                            <option value={7}>Julio</option>
                            <option value={8}>Agosto</option>
                            <option value={9}>Septiembre</option>
                            <option value={10}>Octubre</option>
                            <option value={11}>Noviembre</option>
                            <option value={12}>Diciembre</option>

                        </NativeSelect>
                   
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Año
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'anio',
                                id: 'uncontrolled-native',

                            }}
                        >   <option value={'Empresa'}>Elegir</option>
                            <option value={2015}>2015</option>
                            <option value={2016}>2016</option>
                            <option value={2017}>2017</option>
                            <option value={2018}>2018</option>
                            <option value={2019}>2019</option>
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                            <option value={2022}>2022</option>
                            <option value={2023}>2023</option>

                        </NativeSelect>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Valor"
                            name="ICC"
                            onChange={handleChange}
                            fullWidth
                            variant="standard"
                        />

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Enviar</Button>
                        </DialogActions>
                    </form>
                </DialogContent>




            </Dialog>
        </div>
    );
}
