import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, } from "react";
import servicioLegajo from '../../../services/legajos'
import NativeSelect from '@mui/material/NativeSelect';



export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = useState();
    const [legform, setLegform] = useState({
    })

    const selecthandler = e => {
        setFile(e.target.files[0])
        console.log(file)

    }


    const enviar = () => {
        if (!file) {
            alert('No seleccionaste el archivo')
            return

        }
        let formdata = new FormData()
        console.log(file)
        formdata.append('image', file)
        formdata.append('tipo', legform.tipo)
        formdata.append('cuil_cuit', props.cuil_cuit)
        formdata.append('descripcion', props.descripcion)





        servicioLegajo.subirlegajode(formdata)
        window.location.reload(true);
    }

    const handleChange = (e) => {
        setLegform({ ...legform, [e.target.name]: e.target.value })
        console.log(legform)
    }








    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Agregar Legajo
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Seleccionar archivo y tipo de comprobante
                    </DialogContentText>
                    <NativeSelect
                        defaultValue={30}
                        onChange={handleChange}
                        inputProps={{
                            name: 'tipo',
                            id: 'uncontrolled-native',

                        }}

                    > <option value={''}>Elegir</option>
                        <option value={'dni'}>dni</option>
                        <option value={'constafip'}>Constancia de Afip</option>
                        <option value={'estatutosocial'}>Estatuto Social</option>
                        <option value={'Actaorgano'}>Acta de organo Sucesorio Asignado</option>
                        <option value={'Acredtaciondom'}>Acreditacion Domicilio</option>
                        <option value={'Ultimobalances'}>Ultimos Balances</option>
                        <option value={'DjIva'}>DJ IVA</option>
                        <option value={'PagosPrevisionales'}>Pagos Provisionales</option>
                        <option value={'DjDatospers'}>DJ Datos Personales</option>
                        <option value={'DjCalidadPerso'}>DJ Calidad Persona</option>
                        <option value={'DjOrigenFondos'}>DJ Origne de fondos</option>


                    </NativeSelect>

                </DialogContent>
                <input onChange={selecthandler} type="file" />
                <DialogActions>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Descripcion"
                        name="descripcion"
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                    />
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={enviar}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
