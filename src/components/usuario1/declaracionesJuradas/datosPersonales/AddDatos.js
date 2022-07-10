import React from 'react';
import { Paper, Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ThemeContext } from '@emotion/react';
import servicioLegajo from '../../../../services/legajos'
const AddDatos = () => {
  const handleClick = () => {
    console.log('click');
  };
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles);
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,

  });

  const selecthandler = e =>{
   setFile(e.target.files[0])
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
      <Box sx={{ m: 1 }}>
        <Button onClick={handleClick} size="small" variant="contained">
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
        <input onChange={selecthandler}  type="file" />
 

          <Button onClick={enviar}>Enviar</Button>

      </Paper>

    </>
  );
};

export default AddDatos;