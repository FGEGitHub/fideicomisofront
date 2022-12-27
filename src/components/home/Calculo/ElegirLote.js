import Button from '@mui/material/Button';
import { useEffect, useState, Fragment } from "react";
import servicioClientes from '../../../services/clientes'
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import ModalLote from './ModalSeguro'

export default function AsignarLoreACliente() {
  
    const navigate = useNavigate();
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [lotes, setLotes] = useState({
        cuil_cuit: cuil_cuit
        /////////asignar lote 0 caso que no se seleccione
    })
    const [puede, setPuede] = useState(true)
    const [parque, setParque] = useState(false)
    

    

    const designar = async (event) => {
    
       
        console.log(lotes)
     await servicioClientes.ventaLote(lotes)
         navigate('/usuario2/detallecliente/'+cuil_cuit)


    }

    
    const puedee = (e) => {
       this.setPuede(true)
      
    }


    const handleChange = (e) => {
        setLotes({ ...lotes, [e.target.name]: e.target.value })
        if(lotes.zona==='PIT'){
            setParque(true)
        }else{ 
            setParque(false)
        }
        console.log(lotes)
    }
    return (
        
        <Card sx={{ maxWidth: 690 }}>

        <Grid container direction="column">
        <Paper
        sx={{
          cursor: 'pointer',
          background: '#263238',
          color: '#e8f5e9',
          border: '1px dashed #ccc',
          '&:hover': { border: '1px solid #ccc' },
        }}
      >
                    <form onSubmit={designar}>
                          <InputLabel  sx={{  color: '#e8f5e9'}} variant="standard" htmlFor="uncontrolled-native">
                           ZONA
                        </InputLabel>
                        <NativeSelect
                        sx={{  color: '#e8f5e9'}}
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
                        <InputLabel sx={{  color: '#e8f5e9'}} variant="standard" htmlFor="uncontrolled-native">
                           Fraccion
                        </InputLabel>
                        <NativeSelect
                        sx={{  color: '#e8f5e9'}}
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
                  
                        
                        <TextField
                        sx={{  color: '#e8f5e9'}}
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
                       
                        {parque ? <div>
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

                        </div> :<div> <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Lote"
                            name="lote"
                            onChange={handleChange}
                            fullWidth
                            variant="filled"
                        /></div> }
                       
                         
                      
                      



                    </form>
                    <br/>
                    < ModalLote
                    datos ={lotes}
                    puede = {puedee}
                    cuil_cuit= {cuil_cuit}
                    />
                 
                 </Paper>
                   
                    </Grid>

                </Card>
    





    );
}