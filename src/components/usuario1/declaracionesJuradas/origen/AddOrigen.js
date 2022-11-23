import React from 'react';
import { Paper, Button, CircularProgress } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import servicioLegajo from '../../../../services/legajos'
import BackupIcon from '@material-ui/icons/Backup';


const AddOrigen = (props) => {
  const [file, setFile] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const [enviarr, setEnviarr] = useState(null);    
  const [loading, setLoading] = useState(false);
  const onDrop = useCallback  ((files, acceptedFiles) => {
         // window.location.reload(true);
         const formData = new FormData();
         setFileUpload(acceptedFiles);
         formData.append('file', files[0]);
         setEnviarr(formData)
     


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
  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value })
    
}
  const selecthandler = e =>{
   setFile(e.target.files[0])
   console.log(file)
  }

  const enviar = async () => {
    setLoading(true);
    console.log(enviarr)
     enviarr.append('datos', [props.cuil_cuit,'Dni']);
    console.log(enviarr)
    const rta = await servicioLegajo.subirlegajo1(enviarr)
    setLoading(false);
   alert(rta)
   
    props.enviado()
}
  return (
    <>
    <h2> Constancia de DJ Origen de fondos</h2>
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
              <p>Arrastra hasta aqui el archivo descargado con tus DJ Origen de fondos</p>
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
        { enviarr ? <>  
          {loading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : <Button variant="contained" color="success" onClick={enviar}>Enviar</Button>}
        
        </> : <></>}
      </Box>

      
    </>
  );
};

export default AddOrigen;