import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioPagos from '../../services/pagos'
import servicioCuotas from '../../services/cuotas'
import useUser from '../../hooks/useUser'
import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';

import NativeSelect from '@mui/material/NativeSelect';
const currencies = [
    {
        value: 'CBU',
        label: 'CBU N°1',
    },
    {
        value: 'CBU',
        label: 'CBU N°2',
    },
    {
        value: 'CBU',
        label: 'CBU N°3',
    },

];

export default function SelectTextFields(props) {
    const [open, setOpen] = React.useState(false);

    const usuario = useUser().userContext
    const cuil_cuit = usuario.cuil_cuit
    const [pago, setPago] = useState({
        cuil_cuit: cuil_cuit,
        id: props.id,

    })
    const [cuotas, setCuotas] = useState({

    })

    useEffect(() => {

        traercuotas()

    }, [])

    const handleClickOpen = () => {
        traercuotas(props.id)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleChange = (e) => {
        console.log(e)
        setPago({ ...pago, [e.target.name]: e.target.value })
    }
    ////
    const pagar = async (event) => {
        event.preventDefault();
        console.log(pago)
        try {

            await servicioPagos.pagar(
                pago,


            )


        } catch (error) {
            console.error(error);
            console.log('Error algo sucedio')

        }

        setOpen(false);
    };/////
    const [currency, setCurrency] = React.useState('EUR');

    ///////////////Version 2

    const traercuotas = async () => {
        console.log(props.id)
        const cuotas = await servicioCuotas.cuotasDeUnLote(props.id)
        console.log(cuotas)
        setCuotas(cuotas)



            ;
    };





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
                Subir comprobante Zona {props.zona} Fraccion {props.fraccion} Manzana{props.manzana} Lote {props.id}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <div>
                        <form onSubmit={pagar}>

                            <TextField component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"

                                id="outlined-select-currency"
                                select
                                label="CBU"
                                value={currency}
                                name="cbu"
                                onChange={handleChange}
                                helperText="Por favor ingrese su CBU"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>


                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField onChange={handleChange} id="filled-basic" label="Monto" name="monto" variant="filled" />
                            </Box>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                            </Box>

                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                               Elegir Cuota
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'zona',
                                    id: 'uncontrolled-native',

                                }}
                            >   
                              {currencies.map((option) => (<option value={'IC3'}>Elegir</option> ))}
                           
                           
                           
                            <option value={'IC3'}>Elegir</option>
                                <option value={'PIT'}>Parque Industrial</option>
                                <option value={'IC3'}>IC3</option>

                            </NativeSelect>

                            <Box sx={{ '& > :not(style)': { m: 1 } }}>

                            </Box>
                            <Button type="submit" size="small" variant="contained">
                                Subir Comprobante
                            </Button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </Box>




    );
}