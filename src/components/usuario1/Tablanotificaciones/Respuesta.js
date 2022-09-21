import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button,CircularProgress } from '@mui/material';
import { Paper} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import { useDropzone } from 'react-dropzone';
import BackupIcon from '@material-ui/icons/Backup';
import servicioUsuario1 from '../../../services/usuario1'
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import React, {useCallback, useEffect, useState, Fragment } from "react";
import Tooltip from '@material-ui/core/Tooltip';    


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

export default function Respuesta(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  const [enviarr, setEnviarr] = useState();
  const [fileUpload, setFileUpload] = useState(null);
  const [lotes, setLotes] = useState([''])
  const [cuotas, setCuotas] = useState([''])
   const [ultima, setUltima] = useState([''])
   const [pago, setPago] = useState({
    cuil_cuit: props.cuil_cuit,
    id:props.id,    })
    const [loading, setLoading] = useState(false)
    const [cbus, setCbus] = useState([''])

  

    


  const handleClickOpen = () => {
    setOpen(true);
  console.log(props.id)
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {

    console.log(pago)
  
    // setPago({ ...pago, ['id']: props.id })
    setPago({ ...pago, [e.target.name]: e.target.value })


  }
  ////
  
  const [currency, setCurrency] = React.useState('EUR');




    const onDrop = useCallback  ((files, acceptedFiles) => {
      setLoading(true)
      const formData = new FormData();
      setFileUpload(acceptedFiles);
      formData.append('file', files[0]);
      setEnviarr(formData)
      setLoading(false)
      
  
  
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

      
      enviarr.append('datos', [pago.id,pago.cuil_cuit,pago.descripcion]);///// aca en forma de array se envian datos del dormulario
     
      servicioUsuario1.respuestanoti(enviarr)
     
      
      
    
      //window.location.reload(true);
  }
  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >  < Tooltip title="Leer">
          <ForwardToInboxTwoToneIcon variant="outlined" onClick={handleClickOpen}/>
          </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
            
          <h2>Responder</h2>




              <Box
              
              >
                <TextField onChange={handleChange}
                 id="filled-basic" 
                 label="Descripcion"
                  name="descripcion"
                   variant="filled" 
                  />
              </Box>
           
             

          
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
        <Button onClick={enviar}>
        {loading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : (
                                "Enviar"
                            )}
          </Button>
      </Box>

      
    </>
         
          </div>
        </DialogContent>
      </Dialog>
    </Box >




  );
}