import { Button,CircularProgress } from '@mui/material';
import {useCallback, useEffect, useState, Fragment } from "react";
import servicioPagos from '../../../services/pagos'
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
import { Paper} from '@mui/material';
import servicioUsuario1 from '../../../services/usuario1'
import { useDropzone } from 'react-dropzone';


////
import Select from '@mui/material/Select';
/////
export default function PagarCuota() {
  
    const navigate = useNavigate();
    let params = useParams()
    let id = params.id
    const [user, setUser] = useState(null)
    const [pago, setPagos] = useState({
   
        /////////asignar lote 0 caso que no se seleccione
    })
    const [enviarr, setEnviarr] = useState();
    const [fileUpload, setFileUpload] = useState(null);
    const [loading, setLoading] = useState(false)

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
 
    

    

    const designar = async (event) => {
      event.preventDefault()
       
     
    const rta = await servicioPagos.pagarnivel2(pago)
       alert(rta[1])
    navigate('/usuario2/detallecliente/'+rta[0])

    }


    useEffect(() => {

        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setPagos({ cuil_cuit: user.cuil_cuit,
            id : params.id})
  
   
   
       }
   
     }, [])
   

     const enviar = async () => {

      
        enviarr.append('datos', [pago.cuil_cuit,pago.id,pago.monto,pago.fecha]);///// aca en forma de array se envian datos del dormulario
       
        const rta = await servicioUsuario1.pagarnivel2(enviarr)  
        console.log(rta)
        alert(rta[0])
        navigate('/usuario2/detallecliente/'+rta[1])
       

        
        
      
        //window.location.reload(true);
    }


   const handleChange = (e) => {
       console.log(pago)
       setPagos({ ...pago, [e.target.name]: e.target.value })
   }
   return (

       <Fragment>
           <Toolbar/>
           <Box sx={{ minWidth: 275 }}>
               <Card variant="outlined" >

                   <form >
                         <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                         Tipo de Pago
                       </InputLabel>
                       <NativeSelect
                       sx={{ '& > :not(style)': { m: 1 } }}
                           defaultValue={30}
                           onChange={handleChange}
                           inputProps={{
                               name: 'tipo',
                               id: 'uncontrolled-native',
                              
                           }}
                       >   <option  value={'IC3'}>Elegir</option>
                           <option   value={'Transferencia'}>Transferencia</option>
                        
                       </NativeSelect> 
                      
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
               
                       
                       <TextField
                        /* style ={{width: '25%'}} */
                           autoFocus
                           margin="dense"
                           id="name"
                           label="Monto"
                           name="monto"
                           onChange={handleChange}
                           fullWidth
                           variant="filled"
                           type={"Number"}
                       />
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
                     
        {pago.monto >0 ?   
        <div>
      <Box sx={{ m: 1, 
      color: 'green',
      fontSize: '1rem',      }}
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


                      

                   </form>

               </Card>
               
           </Box>

           {/*  {
                               lotes.map((item, index) =>
                                   //   item['']
                                   <div>
                                       <MenuItem value={10}>{item['zona']}  </MenuItem>
                                   </div>
                               )} */}






       </Fragment>
   );}