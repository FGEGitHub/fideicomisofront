import * as React from 'react';
import { Paper, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import DialogTitle from '@mui/material/DialogTitle';
import {useCallback,useState,  } from "react";
import servicioLegajo from '../../../services/legajos'

import { useDropzone } from 'react-dropzone'
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom"


export default function FormDialog(props) {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = useState();
    const [completado, setCompletado] = useState(false);
    const [fileUpload, setFileUpload] = useState(null);
    const [legform, setLegform] = useState({
        cuil_cuit:cuil_cuit
    })

    const selecthandler = e => {
        setFile(e.target.files[0])
        console.log(file)

    }
//////////

const onDrop = useCallback((files, acceptedFiles) => {
    const formData = new FormData();
    setFileUpload(acceptedFiles);
    formData.append('file', files[0]);
  
    formData.append('datos', [cuil_cuit,legform.tipo,legform.descripcion])
       
   
      servicioLegajo.subirlegajode(formData)
   
     

/*axios.post("http://localhost:4000/usuario1/upload-to-s3", formData, { headers: {'Content-Type': 'multipart/form-data'
}})
        .then((res) => {
            
            setFileUpload({fileName: files[0].name});
            console.log(res)
            if (res.status === 200)
                return (this.setState({sucessmessage: "File uploaded successfullyS3"}))
        })
        .catch((error) => {
            console.error(error.response);
            this.setState({errormessage:error.response.status+" Please select the file"})
        })*/

    });


const { getRootProps, getInputProps, isDragActive, isDragAccept, acceptedFiles } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*,application/pdf,.doc,.docx,.xls,.xlsx,.csv,.tsv,.ppt,.pptx,.pages,.odt,.rtf',

  });
  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  )); 
/////////////////cargar  no actualizo 



    const enviar = () => {
        
      window.location.reload(true)

    }

    const handleChange = (e) => {
        setLegform({ ...legform, [e.target.name]: e.target.value })
        setCompletado(true)
        console.log(legform)
    }








    const handleClickOpen = () => {
        setOpen(true);
        setCompletado(false)
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
                    <>
                        Seleccionar archivo y el tipo de comprobante
                    </>
                    <NativeSelect
                        defaultValue={30}
                        onChange={handleChange}
                        inputProps={{
                            name: 'tipo',
                            id: 'uncontrolled-native',

                        }}

                    > <option value={''}>Elegir</option>
                        <option value={'Dni'}>dni</option>
                        <option value={'Constancia de Afip'}>Constancia de Afip</option>
                        <option value={'Estatuto Social'}>Estatuto Social</option>
                        <option value={'Acta del organo decisorio'}>Acta de organo Sucesorio Asignado</option>
                        <option value={'Acreditacion Domicilio'}>Acreditacion Domicilio</option>
                        <option value={'Ultimos balances'}>Ultimos Balances</option>
                        <option value={'DjIva'}>DJ IVA</option>
                        <option value={'Pagos Previsionales'}>Pagos Provisionales</option>
                        <option value={'Dj Datospers'}>DJ Datos Personales</option>
                        <option value={'Dj CalidadPerso'}>DJ Calidad de Persona</option>
                        <option value={'Dj OrigenFondos'}>DJ Origen de fondos</option>


                    </NativeSelect>
               
                {completado? <div>
                    <Box sx={{ m: 1 }}>
          <Button size="small" variant="contained">
            Descargar modelo
          </Button>
        </Box>
        <Paper
          sx={{
            cursor: 'pointer',
            background: '#fafafa',
            color: '#bdbdbd',
            border: '1px dashed #ccc',
            '&:hover': { border: '1px solid #ccc' },
          }}
        >
          <div style={{ padding: '16px' }} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p style={{ color: 'green' }}>Suelta aqui el documento</p>
            ) : (
              <p>Arrastra hasta aqui el archivo descargado con tus datos personales</p>
            )}
            <em>(Documentos .*pdf, .*doc, *.jpeg, *.png, *.jpg  extenciones aceptadas)</em>
          </div>
        </Paper>
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
        </div>:<div></div>}



              

                </DialogContent>
            
                <DialogActions>
                       
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={enviar}>Enviar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}