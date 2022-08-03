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
        formdata.append('descripcion', legform.descripcion)
        formdata.append('mes', legform.mes)
        formdata.append('anio', legform.anio)





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
                <DialogTitle>Completar</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Seleccionar archivo y el tipo de comprobante
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
                        <option value={'DjCalidadPerso'}>DJ Calidad de Persona</option>
                        <option value={'DjOrigenFondos'}>DJ Origen de fondos</option>


                    </NativeSelect>
                    {/* <NativeSelect
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
                        <option value={'12'}>Diciembre</option>


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
                      

                    </NativeSelect> */}

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
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={enviar}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}