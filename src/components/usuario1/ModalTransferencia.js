import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button,CircularProgress } from '@mui/material';
import { Paper} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import servicioPagos from '../../services/pagos'
import { useDropzone } from 'react-dropzone';
import BackupIcon from '@material-ui/icons/Backup';
import servicioUsuario1 from '../../services/usuario1'

import React, {useCallback, useEffect, useState, Fragment } from "react";



const currencies = [
  {
    value: 'CBU',
    label: 'CBU N°1',
  },
  {
    value: 'CBU',
    label: 'CBU N°2',
  },

];

export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  const [enviarr, setEnviarr] = useState();
  const [fileUpload, setFileUpload] = useState(null);
  const [lotes, setLotes] = useState([''])
  const [cuotas, setCuotas] = useState([''])
   const [ultima, setUltima] = useState([''])
   const [pago, setPago] = useState({

    id:props.id,    })
    const [loading, setLoading] = useState(false)
    const [cbus, setCbus] = useState([''])

  


  const traer = async () => {
    console.log('lotes')
    const prueba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))

    const lotes = await servicioUsuario1.lotesCliente(prueba.cuil_cuit)
    setPago({ ...pago, cuil_cuit: cuil_cuit,  })
   
    setLotes(lotes[0])
    setCuotas(lotes[1])
    //setear
    setUltima(lotes[2])
     const cbuss = await servicioUsuario1.listacbus(prueba.cuil_cuit)
     console.log(cbuss)
     setCbus(cbuss)
   



  }
  const preba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))
  const cuil_cuit = preba.cuil_cuit



  const handleClickOpen = () => {
    traer()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {
    console.log('pago')
    console.log(pago)
  
    // setPago({ ...pago, ['id']: props.id })
    setPago({ ...pago, [e.target.name]: e.target.value })


  }
  ////
  
  const [currency, setCurrency] = React.useState('EUR');




    const onDrop = useCallback  ((files, acceptedFiles) => {
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

  
    const enviar = () => {

      
      enviarr.append('datos', [pago.cuil_cuit,pago.id,pago.monto]);///// aca en forma de array se envian datos del dormulario
     
      servicioUsuario1.pagarnivel1(enviarr)
     
      
      
    
      window.location.reload(true);
  }
  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Button variant="outlined" onClick={handleClickOpen}>
        Subir comprobante Zona {props.zona} Fraccion {props.fraccion} Manzana{props.manzana} Parcela {props.parcela}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
          <h3>Subir comprobante  Zona {props.zona} Fraccion {props.fraccion} Manzana{props.manzana} Parcela {props.parcela}</h3>
         {ultima ? <div> Cuota: {ultima.mes} Año: {ultima.anio}</div>:<div></div>}
          <h4></h4>
          

               <TextField component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                

                id="outlined-select-currency"
                select
                label="Elegir CBU"
                value={currency}
                name="cbu"
                onChange={handleChange}
                helperText="Por favor ingrese su CBU"
              >
                {
                cbus.map((option) => (
                  <MenuItem key={option.id} value={option.lazo}>
                   {option.lazo}-  {option.numero}
                  </MenuItem>
                ))}
              </TextField> 


              <br />

              <div>
               {/*  <NativeSelect
                  defaultValue={30}
                  onChange={handleChange}
                  inputProps={{
                    name: 'id',
                    id: 'uncontrolled-native',

                  }}

                >          
                        <option key={index} value={item['id']}>Elegir</option>
                        <option key={index} value={item['id']}>  {item['zona']}F{item['fraccion']}M{item['manzana']}P{item['parcela']}</option>
                      

                </NativeSelect>
 */}

              </div>







              <br />
              
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField onChange={handleChange}
                 id="filled-basic" 
                 label="Monto"
                  name="monto"
                   variant="filled" 
                   type="number"/>
              </Box>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >

              </Box>
             

              <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField

                  onChange={handleChange}
                  name="fecha"
                  id="date"
                  label="Fecha de pago"
                  type="month"
                  defaultValue="2020-01"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>

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
              <p>Arrastra hasta aqui el archivo </p>
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
        <Button onClick={enviar}>
        {loading ? (
                                <CircularProgress color="inherit" size={25} />
                            ) : (
                                "Enviar"
                            )}
          </Button>
      </Box>

      
    </>
         
          </div>
        </DialogContent>
      </Dialog>
    </Box >




  );
}