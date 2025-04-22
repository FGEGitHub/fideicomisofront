import React, { useCallback, useState,  Fragment } from "react";
import Box from '@mui/material/Box';
import { Button, CircularProgress, Paper, Grid, TextField, InputLabel } from '@mui/material';
import { Toolbar } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Modalveronline from './verpdfcbu';
import Tooltip from '@mui/material/Tooltip';
import BackupIcon from '@material-ui/icons/Backup';
import Card from '@mui/material/Card';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import servicioUsuario1 from '../../../services/usuario1'
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
export default function SelectTextFields(props) {
  const navigate = useNavigate();
  let params = useParams()
  let id = params.id

  const [pago, setPagos] = useState({

  })

  const [cbus, setCbus] = useState([''])
  const [eleccion, setEleccion] = useState({ tipo: '1' })
  const [cuotas, setCuotas] = useState([])
  const [pagosVarios, setpagosVarios] = useState(null)
  const [enviarr, setEnviarr] = useState();
  const [fileUpload, setFileUpload] = useState(null);
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false);
  const [descripcionCBU, setDescripcionCBU] = useState('');
  const onDrop = useCallback((files, acceptedFiles) => {
    setLoading(true)
    const formData = new FormData();
    setFileUpload(acceptedFiles);
    formData.append('file', files[0]);
    setEnviarr(formData)
    setLoading(false)



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






  const traercbu = async () => {


    const cuot = await servicioUsuario1.listacbus(params.cuil_cuit)
    setCbus(cuot)


  }

  const enviar = async () => {
    setLoading(true);
  
    if (!enviarr) {
      const continuarSinArchivo = window.confirm(
        "Atención: No hay archivo de comprobante adjunto. ¿Desea continuar?"
      );
      if (!continuarSinArchivo) {
        setLoading(false);
        return; // Cancela el envío si el usuario no quiere continuar
      }
    }
  
    const formData = enviarr || new FormData(); // Si no hay archivo, inicializa un FormData vacío
  
    formData.append("cuil_cuit", pago.cuil_cuit);
    formData.append("id_cuota", props.id_cuota);
    formData.append("pago", pago.monto);
    formData.append("fecha", pago.fecha);
    formData.append("cbu", pago.cbu);
  
    console.log(formData);
  
    try {
      const response = await servicioUsuario1.pagarnivel2(formData);
      alert(response[0]);
  
      props.traer(props.id_lote);
      setLoading(false);
      handleClose();
    } catch (error) {
      console.error("Error subiendo archivo:", error);
    }
  };
  

  const enviar2 = async () => {

    setLoading(true)
    enviarr.append('datos', [pago.cuil_cuit, pago.fecha, pago.id, JSON.stringify(pagosVarios)]);///// aca en forma de array se envian datos del dormulario

    const rta = await servicioUsuario1.pagarnivel2varios(enviarr)
    console.log(rta)
    alert(rta)
    
props.traer(props.id_lote)




    //window.location.reload(true);


  }


      /////fecha handle 
      const handleChangefecha = (event) => {
        const selectedDate = new Date(event.target.value);
        const currentDate = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
    
        if (selectedDate > currentDate) {
          setWarning('La fecha seleccionada es en el futuro.');
        } else if (selectedDate < oneYearAgo) {
          setWarning('La fecha seleccionada es de hace más de un año.');
        } else {
          setWarning(''); // Limpia el mensaje si la fecha es válida.
        }
        handleChange(event)
      };
      const handleChange = (e) => {
        const selectedCBU = cbus.find((cbu) => cbu.id === e.target.value);
        setPagos({ ...pago, [e.target.name]: e.target.value });
        setDescripcionCBU(selectedCBU ? selectedCBU.descripcion : '');
      };


  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setPagos({
        cuil_cuit: user.cuil_cuit,
        id: id,
        monto: props.cuota_con_ajuste
      })
     

    }
    traercbu()
    //traer();
  };
  const handleChangeVarios = (e) => {
    console.log(pagosVarios)
    setpagosVarios({ ...pagosVarios, [e.target.name]: e.target.value })
  }
  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
      <Tooltip title="Pago rapido (Nuevo)">
        <Button variant="outlined" onClick={handleClickOpen}  >  Pagar </Button>
       
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <h3>Pagar cuota(s)</h3>
          <Fragment>
            <Toolbar />
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined" >


                <TextField component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate


                  id="outlined-select-currency"
                  select
                  label="Elegir CBU"

                  name="cbu"
                  onChange={handleChange}
                  helperText="Por favor ingrese su CBU"
                >
                  {
                    cbus.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.lazo}-  {option.numero}
                      </MenuItem>
                    ))}
                </TextField>
                {   pago.cbu ?  <Modalveronline id={pago.cbu}/>:<></>
              }
              {descripcionCBU && (
  <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>
    Ultimos numeros: {descripcionCBU}
  </Typography>
)}
                <Box sx={{ '& > :not(style)': { m: 1 } }}>


                <div>
      <TextField
        onChange={handleChangefecha}
        name="fecha"
        id="date"
        label="Fecha de pago"
        type="date"
        defaultValue="2020-01"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {warning && (
        <Typography color="error" sx={{ mt: 2 }}>
          {warning}
        </Typography>
      )}
    </div>
                </Box>



                {eleccion.tipo === '1' ?
                  <>


                    <TextField
                      /* style ={{width: '25%'}} */
                      defaultValue={props.cuota_con_ajuste}
                      margin="dense"
                      id="name"
                      label="Monto"
                      name="monto"
                      onChange={handleChange}
                      fullWidth
                      variant="filled"
                      type={"Number"}
                    />




                  </> : <></>}

                <h2>SUBIR COMPROBANTE </h2>
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
                      <p>Arrastra hasta aqui el archivo </p>
                    )}
                    <em>(Documentos .*pdf, .*doc, *.jpeg, *.png, *.jpg  extenciones aceptadas)</em>
                  </div>
                </Paper>

                {pago.monto > 0 && pago.fecha ?
                  <div>
                    <Box sx={{
                      m: 1,
                      color: 'green',
                      fontSize: '1rem',
                    }}
                    >
                      Archivos Aceptados <BackupIcon fontSize="small" />
                      <ul>{acceptedFileItems}</ul>
                      <Button variant='contained' onClick={enviar}>
                        {loading ? (
                          <CircularProgress color="inherit" size={25} />
                        ) : (
                          "Enviar"
                        )}
                      </Button>
                    </Box>

                  </div>
                  : <div> </div>}
              </Card>

            </Box>



            {eleccion.tipo === 'varias' ? <>
              {cuotas ?
                <>

                  {cuotas.map((option) => (
                    <>
                      <TextField
                        /* style ={{width: '25%'}} */
                        autoFocus
                        margin="dense"
                        id="name"
                        label={"Cuota " + option.nro_cuota}
                        name={option.id}
                        onChange={handleChangeVarios}
                        fullWidth
                        variant="filled"
                        type={"Number"}
                      />





                    </>))}</> : <></>


              }

              {pago.fecha ?
                <div>
                  <Box sx={{
                    m: 1,
                    color: 'green',
                    fontSize: '1rem',
                  }}
                  >
                    Archivos Aceptados <BackupIcon fontSize="small" />
                    <ul>{acceptedFileItems}</ul>
                    <Button variant='contained' onClick={enviar2}>
                      {loading ? (
                        <CircularProgress color="inherit" size={25} />
                      ) : (
                        "Enviar varias"
                      )}
                    </Button>
                  </Box>



                </div> : <></>}

            </> : <></>}




            {/*  {
                               lotes.map((item, index) =>
                                   //   item['']
                                   <div>
                                       <MenuItem value={10}>{item['zona']}  </MenuItem>
                                   </div>
                               )} */}






          </Fragment>
        </DialogContent>
      </Dialog>
    </Box>
  );
}