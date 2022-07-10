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


export default function AsignarLoreACliente() {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [lotes, setLotes] = useState({
        cuil_cuit: cuil_cuit
        /////////asignar lote 0 caso que no se seleccione
    })
    const [pagos, setPagos] = useState({

    })

    useEffect(() => {


    }, [])

    const designar = async (event) => {
    
        
        console.log(lotes)
     pagos = await servicioClientes.ventaLote(lotes)
        setPagos(pagos)



    }
    /*{lotes.map((item,index) =>{
        item['']   
      }      }*/



    const handleChange = (e) => {
        console.log(e.target.value)
        setLotes({ ...lotes, [e.target.name]: e.target.value })
    }
    return (

        <Fragment>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">

                    <form onSubmit={designar}>
                          <InputLabel  variant="standard" htmlFor="uncontrolled-native">
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
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Fraccion"
                            name="fraccion"
                            onChange={handleChange}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Manzana"
                            name="manzana"
                            onChange={handleChange}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Lote"
                            name="lote"
                            onChange={handleChange}
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Parcela"
                            name="parcela"
                            onChange={handleChange}
                            fullWidth
                            variant="standard"
                        />
                      
                      


                        <Button type="submit">Enviar</Button>

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
    );
}