import { Paper, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone'
import Box from '@mui/material/Box';
import {useCallback, useState} from 'react';
import axios from 'axios';
import BackupIcon from '@material-ui/icons/Backup';
import servicioLegajos from '../../../services/legajos'


const SubirLegajo = () => {
  
    const [fileUpload, setFileUpload] = useState(null);

    const onDrop = useCallback((files, acceptedFiles) => {
        const formData = new FormData();
        setFileUpload(acceptedFiles);
        formData.append('file', files[0]);

        servicioLegajos.subirlegajode(formData)
          
   
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
  
    return (
        <>
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
  
        <Box sx={{ m: 1, 
      color: 'green',
      fontSize: '1rem',      }}
       >
        Archivos Aceptados <BackupIcon fontSize="small" />
        <ul>{acceptedFileItems}</ul>
      </Box>
        
      </>
    );
  };
      
    
  export default SubirLegajo;