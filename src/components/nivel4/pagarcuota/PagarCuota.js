import { Button, CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState, Fragment } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import BackupIcon from '@material-ui/icons/Backup';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Toolbar } from '@mui/material';
import { Paper,Grid } from '@mui/material';
import servicioPagos from '../../../services/pagos'
import servicioCuotas from '../../../services/cuotas'
import * as React from 'react';
import ComprobantePDF from '../comprobante';
import { useDropzone } from 'react-dropzone';
import { PDFViewer, Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

////
import Select from '@mui/material/Select';
/////
export default function PagarCuota() {

  const navigate = useNavigate();
  let params = useParams()
  let id = params.id

  const [pago, setPagos] = useState({
    fecha: '03-04-2023'
  })

  const [eleccion, setEleccion] = useState({ tipo: '1' })
  const [cuotas, setCuotas] = useState()
  const [pagosVarios, setpagosVarios] = useState(null)
  const [enviarr, setEnviarr] = useState();
  const [fileUpload, setFileUpload] = useState(null);
  const [loading, setLoading] = useState(false)
  const [facturas, setFacturas] = useState([]);
  const [pdfContent, setPdfContent] = useState('');
  const [total, setTotal] = useState(0)
  const comprobanteData = {
    nombre: 'Juan Pérez',
    direccion: 'Calle 123, Ciudad ABC',
    // Agrega aquí los datos necesarios para tu comprobante
  }

  const onDrop = useCallback((files, acceptedFiles) => {
    setLoading(true)
    const formData = new FormData();

    setFileUpload(acceptedFiles);
    formData.append('file', files[0]);
    setEnviarr(formData)
    setLoading(false)



  });

  /*   const onDrop = useCallback((files, acceptedFiles) => {
      setLoading(true)
      const formData = new FormData();
      setFileUpload(acceptedFiles);
      formData.append('file', files[0]);
      setEnviarr(formData)
      setLoading(false)
  
  
  
    }); */


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



  const generarFactura = () => {
    // Lógica para generar la factura utilizando los datos necesarios
    const nuevaFactura = {}; // Por ejemplo, aquí deberías definir el objeto 'data' con los datos necesarios para la factura

    // Agregar la factura generada a la lista
    agregarFactura(nuevaFactura);
  };
  const agregarFactura = (factura) => {
    setFacturas([...facturas, factura]);
  };
  const generarPDF = () => {
    const content = (
      <PDFViewer width={500} height={300}>
        <Document>
          {/* Lógica para generar el PDF con los datos recibidos en 'data' */}
          {/* ... */}
        </Document>
      </PDFViewer>
    );

    // Convertir el contenido del PDF a una cadena utilizando renderToString()
    setPdfContent(content.renderToString());
  };




  const designar = async (event) => {
    event.preventDefault()


    const rta = await servicioPagos.pagarnivel2(pago)
    alert(rta[1])
    navigate('/legales/detallecliente/' + rta[0])

  }


  useEffect(() => {

    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setPagos({
        cuil_cuit: user.cuil_cuit,
        id: params.id
      })
      traer()

    }

  }, [])
  const traer = async () => {


    const cuot = await servicioCuotas.traercuotasdisponibles(params.id)
   
    setCuotas(cuot)


  }

  const enviar = async () => {


    const rta = await servicioPagos.pagarnivel4(pago)
    console.log(rta)
    alert(rta[0])
    navigate('/legales/detallecliente/' + rta[1])





    //window.location.reload(true);
  }

  const enviar2 = async () => {

    setLoading(true)
    enviarr.append('datos', [pago.cuil_cuit, pago.fecha, pago.id, JSON.stringify(pagosVarios)]);///// aca en forma de array se envian datos del dormulario

    const rta = await servicioPagos.pagarnivel2varios(enviarr)
    console.log(rta)
    alert(rta[0])
    navigate('/legales/detallecliente/' + rta[1])





    //window.location.reload(true);
  }
  const handleChange = (e) => {
    console.log(pago)
    setPagos({ ...pago, [e.target.name]: e.target.value })
  }
  const handleChange3 = (e) => {
    handleChange(e)
    console.log(pago)
    setTotal(cuotas[0].Amortizacion*e.target.value)

  }






  return (

    <Fragment>
      <Toolbar />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            <Paper variant="outlined">  <form >
          <h3>Pagar cuota(s)</h3>
          
          {cuotas ? <>

            <p style={{ color: '#2c387e' }}>    Valor de cuota:$ <b>{cuotas[0].Amortizacion
            }</b></p>
          
 
       
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Cuantas Cuotas
            </InputLabel>
            <TextField
              /* style ={{width: '25%'}} */
              autoFocus
              margin="dense"
              id="name"
              label="Cantidad"
              name="cantidad"
              onChange={handleChange3}
              fullWidth
              variant="filled"
              type="number"
              inputProps={{
                pattern: "\\d*", // Expresión regular para aceptar solo dígitos (números enteros)
                inputMode: "numeric", // Para mostrar el teclado numérico en dispositivos móviles
              }}
            
            /> 
             {pago.cantidad ? <>
        <p style={{ color: 'green' }}> Total:$ {total} </p> </>: <></>}
          </> : <></>}
         
            <Box sx={{ '& > :not(style)': { m: 1 } }}>


              <TextField

                onChange={handleChange}
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
            </Box>



            {eleccion.tipo === '1' ?
              <>


              

                {pago.fecha && pago.cantidad ?
                  <div>
                    <Box sx={{
                      m: 1,
                      color: 'green',
                      fontSize: '1rem',
                    }}
                    >
                   
                      <Button variant='contained' onClick={enviar}>
                        {loading ? (
                          <CircularProgress color="inherit" size={25} />
                        ) : (
                          "Pagar"
                        )}
                      </Button>
                    </Box>

                  </div>
                  : <div> </div>}

              </> : <></>}


          </form>
          </Paper>
          </Grid>
        </Grid>
      </Box>


    
    


    </Fragment>
  );
}