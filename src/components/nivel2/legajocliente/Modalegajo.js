import * as React from 'react';
import { Paper, Button, TextField, Dialog, DialogActions, DialogContent, NativeSelect, DialogTitle, Box, CircularProgress } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useParams } from "react-router-dom";
import BackupIcon from '@material-ui/icons/Backup';
import servicioLegajo from '../../../services/legajos';

export default function FormDialog(props) {
  let params = useParams();
  let cuil_cuit = params.cuil_cuit;
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState();
  const [enviarr, setEnviarr] = useState();
  const [completado, setCompletado] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [cargando, setCargando] = useState(false);

  const [legform, setLegform] = useState({
    cuil_cuit: cuil_cuit,
    tipo: '',
    descripcion: ''
  });

  const selecthandler = e => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      setFileUpload(acceptedFiles);
      formData.append('file', acceptedFiles[0]);
      setEnviarr(formData);
    } else {
      alert('No se aceptó ningún archivo');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    multiple: false,
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const enviar = async () => {
    setCargando(true);
    if (enviarr) {
      enviarr.append('cuil_cuit', legform.cuil_cuit);
      enviarr.append('tipo', legform.tipo);
      enviarr.append('descripcion', legform.descripcion);
      
      try {
        const data = await servicioLegajo.subirlegajode(enviarr) 
        alert(data);
        console.log("getData");
        props.getData();
      } catch (error) {
        console.error('Error subiendo archivo:', error);
      }
    } else {
      alert('No hay archivo para subir');
    }
    setFileUpload(null)
    setCargando(false);
    setOpen(false);
  };

  const handleChange = (e) => {
    setLegform({ ...legform, [e.target.name]: e.target.value });
    setCompletado(true);
    console.log(legform);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setCompletado(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Agregar Legajo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Completar</DialogTitle>
        <DialogContent>
          <>
            Seleccionar archivo y el tipo de comprobante
          </>
          <NativeSelect
            defaultValue={30}
            onChange={handleChange}
            inputProps={{ name: 'tipo', id: 'uncontrolled-native' }}
          >
            <option value={''}>Elegir</option>
            <option value={'Poder General'}>Poder General</option>
            <option value={'Acta de Entrega'}>Acta de Entrega </option>
            <option value={'Cbu personal'}>CBU personal</option>
            <option value={'Cbu familiar'}>CBU familiar</option>
            <option value={'Dni'}>DNI</option>
            <option value={'Constancia de Afip'}>Constancia de Afip</option>
            <option value={'Acreditacion Domicilio'}>Acreditación Domicilio</option>
            <option value={'Acreditacion de ingresos'}>Acreditación de ingresos</option>
            <option value={'Ultimos balances CPCE'}>Últimos Balances certificados en el CPCE</option>
            <option value={'DjIva'}>DJ IVA</option>
            <option value={'Pagos Previsionales'}>Pagos Previsionales</option>
            <option value={'Referencias comerciales'}>Detalle Referencias comerciales</option>
            <option value={'DDJJ IIBB'}>DDJJ IIBB</option>
            <option value={'Dj Datospers'}>DJ Datos Personales</option>
            <option value={'Estatuto Social'}>Estatuto Social</option>
            <option value={'Acta del organo decisorio'}>Acta de órgano Sucesorio Asignado</option>
            <option value={'Constancia CUIL/CUIT'}>Constancia CUIL/CUIT (Pers física)</option>
            <option value={'Dj CalidadPerso'}>DJ Calidad de Persona (Pers física)</option>
            <option value={'Dj OrigenFondos'}>DJ Origen de fondos (Pers física)</option>
            <option value={'Recibo de sueldo'}>Recibo de sueldo</option>
            <option value={'Pago Monotributo'}>Pago Monotributo</option>
            <option value={'Pago autonomo'}>Pago de autónomo</option>
          </NativeSelect>

          {completado ? (
            <div>
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
                    <p style={{ color: 'green' }}>Suelta aquí el documento</p>
                  ) : (
                    <p>Arrastra hasta aquí el archivo descargado con tus datos personales</p>
                  )}
                  <em>(Se aceptan todos los tipos de archivos)</em>
                </div>
                <Box sx={{ m: 1, color: 'green', fontSize: '1rem' }}>
                  Archivos Aceptados <BackupIcon fontSize="small" />
                  <ul>{acceptedFileItems}</ul>
                </Box>
              </Paper>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Descripción"
                name="descripcion"
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
            </div>
          ) : (
            <div></div>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          {cargando ? (
            <Box sx={{ display: 'flex' }}>
              <Button><CircularProgress /></Button>
            </Box>
          ) : (
            <Button onClick={enviar}>Guardar</Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
