import React from 'react';
import { Paper, Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import servicioLegajo from '../../../../services/legajos'
import BackupIcon from '@material-ui/icons/Backup';
import Box from '@mui/material/Box';

const AddFoto = (props) => {
  const handleClick = () => {
    console.log('click');
  };                             
  const [file, setFile] = useState(null);


  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles);
   
  
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
  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value })
    
}
  const selecthandler = e =>{
   setFile(e.target.files[0])
   console.log(file)
  }

  const enviar = () =>{
   if (!file){
    alert('No seleccionaste el archivo')
    return
   }
   let formdata = new FormData()
   console.log(file)
   formdata.append('image', file)
   formdata.append('tipo','dni')
   formdata.append('cuil_cuit', props.cuil_cuit)
 
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
          <input {...getInputProps()} onChange={handleChange}/>
          {isDragActive ? (
            <p style={{ color: 'green' }}>Suelta aqui la foto</p>
          ) : (
            <p>Arrastra hasta aqui la foto de tu DNI</p>
          )}
          <em>(images with *.jpeg, *.png, *.jpg extenciones aceptadas)</em>
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
  );
};

export default AddFoto;