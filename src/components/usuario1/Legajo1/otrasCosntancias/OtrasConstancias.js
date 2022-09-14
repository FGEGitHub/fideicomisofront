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
import NativeSelect from '@mui/material/NativeSelect';

const OtrasConstancias = (props) => {
  const handleClick = () => {
    console.log('click');
  };    
  const [completo, setCompleto] = useState(false);                         
  const [file, setFile] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const [adicional, setAdicional] = useState({});
  const onDrop = useCallback  ((files, acceptedFiles) => {
    const formData = new FormData();
    setFileUpload(acceptedFiles);


    formData.append('file', files[0]);
  
    formData.append('datos', [props.cuil_cuit,adicional.tipo]);
   
     servicioLegajo.subirlegajo1(formData)
   
       // window.location.reload(true);
     


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
const handleChangee = (e) => {
    setAdicional({ ...adicional, [e.target.name]: e.target.value })
    console.log(adicional)
    setCompleto(true)
}
  const selecthandler = e =>{
   setFile(e.target.files[0])
   console.log(file)
  }

  const enviar = () => {


    window.location.reload(true);
}
  return (
    <>
      
        <NativeSelect
                            defaultValue={30}
                            onChange={handleChangee}
                            inputProps={{
                                name: 'tipo',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'Recibo de sueldo'}>Elegir</option>
                            <option   value={'Recibo de sueldo'}>Recibo de sueldo</option>
                            <option  value={'Constancia de Afip'}>Constancia de Afip</option>
                            <option  value={'Pago Monotributo'}>Pago del Monotributo</option>
                            <option  value={'Pago autonomo'}>Pago de autonomo</option>
                          
                    
                         
                        </NativeSelect> 
      <Box sx={{ m: 1, 
      color: 'green',
      fontSize: '1rem',      }}
       >

        Archivos Aceptados <BackupIcon fontSize="small" />
        <ul>{acceptedFileItems}</ul>
        {completo ? <div>


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
              <p>Arrastra hasta aqui Las constancias adicionales </p>
            )}
            <em>(Documentos .*pdf, .*doc, *.jpeg, *.png, *.jpg  extenciones aceptadas)</em>
          </div>
        </Paper>
        <Button onClick={enviar}>Enviar</Button>
        </div>: <div></div>}
      </Box>

      
    </>
  );
};

export default OtrasConstancias;