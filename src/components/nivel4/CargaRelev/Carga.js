import Button from '@mui/material/Button';
import {  useState, Fragment } from "react";
import servicioRelev from '../../../services/relevamiento'
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
 
 
    const [datos, setDatos] = useState({
   
        /////////asignar lote 0 caso que no se seleccione
    })


    
    

    

    const designar = async (event) => {
       
       
    const rta = await servicioRelev.cargar(datos)
       alert(rta)
   

    }


   




   const handleChange = (e) => {
       setDatos({ ...datos, [e.target.name]: e.target.value })
       console.log(datos)
   }
   return (

       <Fragment>
           <Toolbar/>
           <Box sx={{ minWidth: 275 }}>
               <Card variant="outlined" >

                   <form onSubmit={designar}>
                   <TextField
                        /* style ={{width: '25%'}} */
                           autoFocus
                           margin="dense"
                           id="name"
                           label="Familia"
                           name="Familia"
                           onChange={handleChange}
                           fullWidth
                           variant="filled"
                           
                       />
                         <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                         Zona
                       </InputLabel>
                       <NativeSelect
                           defaultValue={30}
                           onChange={handleChange}
                           inputProps={{
                               name: 'Zona',
                               id: 'uncontrolled-native',
                              
                           }}
                       >   <option  value={'otra'}>Elegir</option>
                           <option   value={'La Tosquera'}>La Tosquera</option>
                           <option  value={'Otra'}>Otra</option>
                        
                       </NativeSelect> 
                       <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                       Material
                       </InputLabel>
                       <NativeSelect
                           defaultValue={30}
                           onChange={handleChange}
                           inputProps={{
                               name: 'Material_Construccion',
                               id: 'uncontrolled-native',
                              
                           }}
                       >   <option  value={'IC3'}>Elegir</option>
                           <option   value={'Madera'}>Madera</option>
                           <option   value={'Material'}>Material</option>
                       </NativeSelect> 
                       <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                       Status
                       </InputLabel>
                       <NativeSelect
                           defaultValue={30}
                           onChange={handleChange}
                           inputProps={{
                               name: 'Status',
                               id: 'uncontrolled-native',
                              
                           }}
                       >   <option  value={'IC3'}>Elegir</option>
                           <option   value={'Denuncia'}>Denuncia</option>
                           <option   value={'SinDenuncia'}>Sin Denuncia</option>
                           <option   value={'EnProceso'}>En Proceso</option>
                        
                       </NativeSelect> 
                       <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                       Rango
                       </InputLabel>

                       <NativeSelect
                           defaultValue={30}
                           onChange={handleChange}
                           inputProps={{
                               name: 'Rango_Antiguedad',
                               id: 'uncontrolled-native',
                              
                           }}
                       >   <option  value={'0-4'}>Elegir</option>
                           <option   value={'0-4'}>0-4</option>
                           <option   value={'4-8'}>4-8</option>
                           <option   value={'8-12'}>8-12</option>
                           <option   value={'32-36'}>32-36</option>
                        
                       </NativeSelect> 
                       <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                         Adicional
                       </InputLabel>
                       
                       <TextField
                        /* style ={{width: '25%'}} */
                           autoFocus
                           margin="dense"
                           id="name"
                           label="Observaciones"
                           name="Observaciones"
                           onChange={handleChange}
                           fullWidth
                           variant="filled"
                           
                       />
                     
                     


                       <Button onClick={designar} variant='contained' >Enviar</Button>

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