import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicio360 from '../../services/pagos360'
import NativeSelect from '@mui/material/NativeSelect';
import Listacbs from './listacbu'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, Fragment } from "react";


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
        
        setOpen(false);

    };

    const designar = async (event) => {


        const resp = await servicio360.cancelaradhecioncbu(rta)
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
                 Lista de cbus CBU
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>

                 <Listacbs
                 cuil_cuit={props.cuil_cuit}/>


              
                    <Button onClick={handleClose} size="small" variant="contained" >
                        Cerrar
                    </Button>
                </DialogContent>
            </Dialog>
        </Box >




    );
}