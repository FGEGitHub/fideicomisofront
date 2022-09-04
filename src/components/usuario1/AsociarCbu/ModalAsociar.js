import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import NativeSelect from '@mui/material/NativeSelect';
import { useDropzone } from 'react-dropzone';
import BackupIcon from '@material-ui/icons/Backup';
import servicioUsuario1 from '../../../services/usuario1'

import React, { useCallback, useEffect, useState, Fragment } from "react";
const currencies = [
  {
    value: 'Propio',
    label: 'Propio',
  },
  {
    value: 'Familiar',
    label: 'Familiar',
  },

];

export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  const [file, setFile] = useState(null);
  const [fileUpload, setFileUpload] = useState(null);
  const [comp1, setComp1] = useState(false)
  const [comp2, setComp2] = useState(false)

  const [ultima, setUltima] = useState(false)
  const [pago, setPago] = useState({

    
  })




  const traer = async () => {
    console.log('lotes')
    const prueba = JSON.parse(window.localStorage.getItem('loggedNoteAppUser'))


    
    setPago({ ...pago, cuil_cuit: cuil_cuit, })





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


  const handleChange1 = (e) => {
    console.log(pago)

    // setPago({ ...pago, ['id']: props.id })
    setPago({ ...pago, [e.target.name]: e.target.value })
    setComp1(true)

  }
  const handleChange2 = (e) => {
    console.log(pago)

    // setPago({ ...pago, ['id']: props.id })
    setPago({ ...pago, [e.target.name]: e.target.value })
    setComp2(true)

  }

  ////

  const [currency, setCurrency] = React.useState('EUR');




  const onDrop = useCallback((files, acceptedFiles) => {
    const formData = new FormData();
    setFileUpload(acceptedFiles);
    formData.append('file', files[0]);
console.log('before')
    formData.append('datos', [pago.cuil_cuit, pago.numero, pago.lazo]);///// aca en forma de array se envian datos del dormulario

    servicioUsuario1.cargarcbu(formData)
    console.log('after')
    window.location.reload(true);



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
    window.location.reload(true);
    let formdata = new FormData()
    console.log(file)
    formdata.append('image', file)








    servicioUsuario1.subirlegajode(formdata)
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
        Asociar nuevo CBU
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
            <h3>Asociar CBU</h3>



            {/* <TextField component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                

                id="outlined-select-currency"
                select
                label="CBU"
                value={currency}
                name="cbu"
                onChange={handleChange}
                helperText="Por favor ingrese su CBU"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> */}


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
              <TextField onChange={handleChange1}
                id="filled-basic"
                label="Numero"
                name="numero"
                variant="filled"
                type="number" />
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
            <TextField component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"

              id="outlined-select-currency"
              select
              label="lazo"
              value={currency}
              name="lazo"
              onChange={handleChange2}
              helperText="Por favor ingrese su CBU"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {comp1 ? <>
              {comp2 ? <>

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
                  <Box sx={{
                    m: 1,
                    color: 'green',
                    fontSize: '1rem',
                  }}
                  >
                    Archivos Aceptados <BackupIcon fontSize="small" />
                    <ul>{acceptedFileItems}</ul>
                    <Button onClick={enviar}>Enviar</Button>
                  </Box>


                </>

              </> : <>  </>}
            </>
              : <></>}


          </div>
        </DialogContent>
      </Dialog>
    </Box >




  );
}