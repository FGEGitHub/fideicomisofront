import React from 'react';
import { Paper, Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ThemeContext } from '@emotion/react';

const AddActa = () => {
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
            <p style={{ color: 'green' }}>Suelta aqui el documento</p>
          ) : (
            <p>Arrastra hasta aqui el Acta del Organo Decisorio Designado</p>
          )}
          <em>(Documentos .*pdf, .*doc, *.jpeg, *.png, *.jpg  extenciones aceptadas)</em>
        </div>
      </Paper>
      
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="date"
        label="Fecha de vencimiento"
        type="date"
        defaultValue="2020-01-01"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Box> 
      <Box sx={{m:1}}>
      <Button onClick={handleClick} size="small" variant="contained">
                Guardar
      </Button>
      </Box>
    </>
  );
};

export default AddActa;