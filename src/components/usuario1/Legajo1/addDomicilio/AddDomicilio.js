import React from 'react';
import { Paper, Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import servicioLegajo from '../../../../services/legajos'
import HomeIcon from '@mui/icons-material/Home';
import BackupIcon from '@material-ui/icons/Backup';


const AddDocimicilio = () => {
  const handleClick = () => {
    console.log('click');
  };                             
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles);
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragAccept, acceptedFiles } = useDropzone({
    onDrop,
    multiple: true,
    accept: 'document/*',
    maxFiles: 3,

  });
  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const selecthandler = e =>{
   setFile(e.target.files[0])
   console.log(file)
  }

  const enviar = () =>{
   if (!file){
    alert('No seleccionaste el archivo')
    return
   }
   const formdata = new FormData()
   formdata.append('image',file)
   console.log(formdata)
   servicioLegajo.subirprueba(formdata)

   }
  return (
  
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
            <p style={{ color: 'green' }}>Suelta aqui la foto</p>
          ) : (
            <p>Arrastra hasta aqui la Acreditacion de Domicilio</p>
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
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Ingresar Domicilio
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          }

        />
      <Box sx={{m:1}}>
      <Button onClick={enviar} size="small" variant="contained">
                Enviar
      </Button>

      </Box>
      

      

      

      </FormControl>
    </Box>
    </>
  );
};

export default AddDocimicilio;