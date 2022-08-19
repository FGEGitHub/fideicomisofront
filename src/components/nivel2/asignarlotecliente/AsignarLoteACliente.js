import Button from '@mui/material/Button';
import { useEffect, useState, Fragment } from "react";
import servicioClientes from '../../../services/clientes'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';


export default function AsignarLoreACliente() {
  
    const navigate = useNavigate();
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [lotes, setLotes] = useState({
        cuil_cuit: cuil_cuit
        /////////asignar lote 0 caso que no se seleccione
    })

    

    

    const designar = async (event) => {
    
       
        console.log(lotes)
     await servicioClientes.ventaLote(lotes)
         navigate('/usuario2/detallecliente/'+cuil_cuit)


    }

    



    const handleChange = (e) => {
        console.log(lotes)
        setLotes({ ...lotes, [e.target.name]: e.target.value })
    }
    return (
        
        <Card sx={{ maxWidth: 690 }}>

        <Grid container direction="column">

                    <form onSubmit={designar}>
                          <InputLabel  color='success' variant="standard" htmlFor="uncontrolled-native">
                           ZONA
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'zona',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'IC3'}>Elegir</option>
                            <option   value={'PIT'}>Parque Industrial</option>
                            <option  value={'IC3'}>IC3</option>
                         
                        </NativeSelect> 
                        <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                           Fraccion
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'fraccion',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'IC3'}>Elegir</option>
                            <option   value={'ID/4'}>ID/4 (parque)</option>
                            <option  value={'A'}>A</option>
                            <option  value={'B'}>B</option>
                            <option  value={'C'}>C</option>
                            <option  value={'D'}>D</option>
                    
                         
                        </NativeSelect> 
                        <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                           Tipo de asignacion
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'estado',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'IC3'}>Elegir</option>
                            <option   value={'VENDIDO'}>Venta</option>
                            <option  value={'RESERVADO'}>Reservar</option>
                         
                    
                         
                        </NativeSelect> 
                        <TextField
                            autoFocus
                            margin="dense"
                            variant="filled"
                            type={'number'}
                            id="name"
                            label="Manzana"
                            name="manzana"
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
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
                            type={'number'}
                            id="name"
                            label="Parcela"
                            name="parcela"
                            onChange={handleChange}
                            fullWidth
                            variant="filled"
                        />
                      
                      



                    </form>
                    
                    <Button onClick={designar} variant='contained' >Enviar</Button>
                    </Grid>

                </Card>
    





    );
}