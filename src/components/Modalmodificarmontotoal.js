import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import sercicioCuotas from '../services/cuotas'
import NativeSelect from '@mui/material/NativeSelect';

import servicioLotes from '../services/lotes'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, Fragment } from "react";

const currencies = [
    {
        value: 'CBU',
        label: 'CBU N°1',
    },
    {
        value: 'CBU',
        label: 'CBU N°2',
    },

];

export default function SelectTextFields(props) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    //const usuario  = useUser().userContext

    const [rta, setRta] = useState({
        id_lote: props.idlote,
    })

    const [habilitado, setHabilitado] = useState(false)



    //{if(rta.puede=''){ props.setpuede()}}


    const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
    const cuil_cuit = preba.cuil_cuit

    const handleChange = (e) => {
        console.log(rta)
        setRta({ ...rta, [e.target.name]: e.target.value });
    }

    const handleClickOpen = () => {

        setOpen(true);
    };

    const handleClose = () => {
        window.location.reload()

    };

    const designar = async (event) => {


        const resp = await sercicioCuotas.modificarmontotal(rta)
        console.log(resp)
        alert(resp)



    }


    ////


    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Button variant="outlined" onClick={handleClickOpen}>
                Modificar monto total
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>

                    <TextField
                        variant="outlined"
                        label="Monto Nuevo"
                     
                        sx={{
                            display: "block",
                            margin: ".5rem 0",
                        }}
                        name="montonuevo"
                        onChange={handleChange}

                        inputProps={{ style: { color: "white" } }}
                        InputLabelProps={{ style: { color: "white" } }}
                    />


                    <Button onClick={designar} size="small" variant="contained" >
                        designar
                    </Button>
                    <Button onClick={handleClose} size="small" variant="contained" >
                        Cerrar
                    </Button>
                </DialogContent>
            </Dialog>
        </Box >




    );
}