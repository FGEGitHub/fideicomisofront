import React from 'react';
import { Paper, Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import servicioLegajo from '../../../../services/legajos'
import BackupIcon from '@material-ui/icons/Backup';
<<<<<<< HEAD

=======
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Info from '../../../../components/Info';
>>>>>>> 9794559194801f88740c0da415c0474cf0662a34

const AddDatos = () => {
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
    multiple: false,
    accept: 'document/*',

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
        <div style={{ padding: '16px' }} {...getRootProps()}>
          <input {...getInputProps({
            onChange: selecthandler,
          })} />
          {isDragActive ? (
            <p style={{ color: 'green' }}>Suelta aqui el documento</p>
          ) : (
            <p>Arrastra hasta aqui el archivo descargado con tus datos personales</p>
          )}
          <em>(Documentos .*pdf, .*doc, *.jpeg, *.png, *.jpg  extenciones aceptadas)</em>
        </div>
      </Paper>
<<<<<<< HEAD
=======
      <Box sx={{ m: 2 }}>
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label= {<Info />}     />
      
      </FormGroup>
      
      </Box>
>>>>>>> 9794559194801f88740c0da415c0474cf0662a34
      <Box sx={{ m: 1, 
      color: 'green',
      fontSize: '1rem',      }}
       >
        Archivos Aceptados <BackupIcon fontSize="small" />
        <ul>{acceptedFileItems}</ul>
        <Button onClick={enviar}>Enviar</Button>
      </Box>
      
    </>
  );
};

export default AddDatos;