import React from 'react';
import { Paper } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { handleBreakpoints } from '@mui/system';

const AddDocimicilio = () => {
  const handleClick = () => {
    console.log('click');
  };
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      
      "text/*": [],
      'image/*': [],
    },
    
  });
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
      <Button onClick={handleClick} size="small" variant="contained">
                Guardar
      </Button>

      </Box>
      

      

      

      </FormControl>
    </Box>
    </>
  );
};

export default AddDocimicilio;