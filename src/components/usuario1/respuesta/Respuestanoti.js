import Button from '@mui/material/Button';
import { useEffect, useState, Fragment } from "react";
import servicioUsuario1 from '../../../services/usuario1'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Toolbar } from '@mui/material';


export default function PagarCuota() {
  
    const navigate = useNavigate();
    let params = useParams()
    const id=params.id
    const [rta, setRta] = useState([''])
    const [pago, setPagos] = useState({
   
        /////////asignar lote 0 caso que no se seleccione
    })


    
    

    

    const designar = async (e) => {
      e.preventDefault()
       
     
    const reta = await servicioUsuario1.responderNoti(rta)
       
    navigate('usuario/menu')

    }
    const traer = async () => { 
       
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      
          const user = JSON.parse(loggedUserJSON)
          const noti = await servicioUsuario1.notiId(params.id)
          setRta( {'cuil_cuit': user.cuil_cuit,
            'id':id} )

            console.log(rta)
   
   
         
   
  
      }


    useEffect(() => {
traer()
        
   
     }, [])
   




   const handleChange = (e) => {
       setRta({ ...rta, [e.target.name]: e.target.value })
       console.log(rta)
       }


   return (

       <Fragment>
           <Toolbar/>
           <Box sx={{ minWidth: 275 }}>
               <Card variant="outlined" >

                   <form onSubmit={designar}>
                         <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                       Dato adicional
                       </InputLabel>
                       <NativeSelect
                           defaultValue={30}
                           onChange={handleChange}
                           inputProps={{
                               name: 'tipo',
                               id: 'uncontrolled-native',
                              
                           }}
                       >   <option  value={'IC3'}>Elegir</option>
                           <option   value={'Dato 1'}>Dato 1</option>
                        
                       </NativeSelect> 
                      
                      
               
                       
                       <TextField
                        /* style ={{width: '25%'}} */
                           autoFocus
                           margin="dense"
                           id="name"
                           label="Observaciones"
                           name="observaciones"
                           inputProps={{ maxLength: 100 }}
                           onChange={handleChange}
                           fullWidth
                           variant="filled"
                           
                       />
                       {/* <TextField
                           autoFocus
                           margin="dense"
                           id="name"
                           label="Lote"
                           name="lote"
                           onChange={handleChange}
                           fullWidth
                           variant="filled"
                       />
                       <TextField
                           autoFocus
                           margin="dense"
                           id="name"
                           label="Parcela"
                           name="parcela"
                           onChange={handleChange}
                           fullWidth
                           variant="filled"
                           type={"Number"}
                       /> */}
                     
                     


                       <Button onClick={designar} variant='contained'>Enviar</Button>

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