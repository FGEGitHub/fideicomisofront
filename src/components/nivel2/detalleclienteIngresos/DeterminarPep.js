import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Paper} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import ServicioUsuario1 from '../../../services/usuario1'
import { useDropzone } from 'react-dropzone';
import BackupIcon from '@material-ui/icons/Backup';
import InputLabel from '@mui/material/InputLabel';

import React, {useCallback, useEffect, useState, Fragment } from "react";



const currencies = [
  {
    value: 'SI',
    label: 'SI',
  },
  {
    value: 'NO',
    label: 'NO',
  },

];

export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext

  const [fileUpload, setFileUpload] = useState(null);

   const [establecer, setEstablecer] = useState({
    cuil_cuit:props.cuil_cuit,
    expuesta:'SI'

    })


  





  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
    console.log(establecer)
    setEstablecer({ ...establecer, [e.target.name]: e.target.value })


  }
  ////
  
  const [currency, setCurrency] = React.useState('EUR');




    const onDrop = useCallback  ((files, acceptedFiles) => {
      const formData = new FormData();
      setFileUpload(acceptedFiles);
      formData.append('file', files[0]);
    
      formData.append('datos', [establecer.cuil_cuit,establecer.expuesta]);///// aca en forma de array se envian datos del dormulario
     
      ServicioUsuario1.determinarPep(formData)
     
      
       
  
  
      });
      const { getRootProps, getInputProps, isDragActive, isDragAccept, acceptedFiles } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'document/*',
    
      });
  
      const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      )); 

  
    const enviar = () => {
   
      window.location.reload(true);
  }
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
      Establecer PEP
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
          <InputLabel  color='success' variant="standard" htmlFor="uncontrolled-native">
                           Establecer PEP
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'expuesta',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'Sin determinar'}>Elegir</option>
                            <option   value={'SI'}>SI</option>
                            <option  value={'NO'}>NO</option>
                         
                        </NativeSelect> 
              <br />

              <div>
               {/*  <NativeSelect
                  defaultValue={30}
                  onChange={handleChange}
                  inputProps={{
                    name: 'id',
                    id: 'uncontrolled-native',

                  }}

                >          
                        <option key={index} value={item['id']}>Elegir</option>
                        <option key={index} value={item['id']}>  {item['zona']}F{item['fraccion']}M{item['manzana']}P{item['parcela']}</option>
                      

                </NativeSelect>
 */}

              </div>


              <br />
              
            
              <>
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
              <p>Arrastra hasta aqui el archivo </p>
            )}
            <em>(Documentos .*pdf, .*doc, *.jpeg, *.png, *.jpg  extenciones aceptadas)</em>
          </div>
        </Paper>
      <Box sx={{ m: 1, 
      color: 'green',
      fontSize: '1rem',      }}
       >
        Archivos Aceptados <BackupIcon fontSize="small" />
        <ul>{acceptedFileItems}</ul>
        <Button onClick={enviar}>Enviar</Button>
      </Box>

      
    </>
         
          </div>
        </DialogContent>
      </Dialog>
    </Box >




  );
}