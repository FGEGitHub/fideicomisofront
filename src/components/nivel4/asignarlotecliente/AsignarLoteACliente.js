import { useState, useEffect } from "react";
import servicioClientes from "../../../services/clientes";
import servicioLotes from "../../../services/lotes";
import { useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import NativeSelect from '@mui/material/NativeSelect';
//import ModalLote from "./ModalSeguro";
import InputLabel from '@mui/material/InputLabel';



const AsignarLoteACliente = () => {
  const navigate = useNavigate();
  const { cuil_cuit } = useParams();
  const [lotes, setLotes] = useState({
    cuil_cuit: cuil_cuit,
    zona: "Legales",
    fraccion:"ID/4",
    estado: "VENDIDO",
    manzana: "",
    parcela: "",
    lote: "",
  });
  const [manzanas, setManzanas] = useState([]);

  const [lot, setLot] = useState();

  

  useEffect(() => {
    traerLotes()
}, [])
const traerLotes = async () => {
        
  const clients = await servicioLotes.traermanzanas()
  console.log(clients)
  setManzanas(clients)

}


  const designar = async (event) => {

  const rta =  await servicioClientes.ventaLoteleg(lotes);
  alert(rta)
  
  if(rta==='Lote asignado'){
    navigate("/legales/detallecliente/" + cuil_cuit); 
  }
    
  };

  const handleChange = (e) => {
    console.log(lotes)
    setLotes({ ...lotes,  [e.target.name]: e.target.value });

  };

  return (

    
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card sx={{ maxWidth: 690, padding: 2 }}>
        <h2>Seleccionar el lote correspondiente a la persona</h2>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
           
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Manzana
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'manzana',
                                    id: 'uncontrolled-native',

                                }}
                            
                            >  
                             <option value={'1'}> Elegir</option>
                 
                    
                 
                    {manzanas.map((row) => (
                                       
                              <option value={row.manzana}> {row.manzana}</option>

                    ))}
                
               
                    </NativeSelect>
           
               <TextField
            
            margin="dense"
            id="name"
            label="parcela"
            name="parcela"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
      
              </FormControl>
          
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" color="primary" onClick={designar}>
                Designar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            {/* <ModalLote datos={lotes} cuil_cuit={cuil_cuit} /> */}
          </Grid>
        </Grid>
      </Card>

      
    </Box>
  );
};

export default AsignarLoteACliente;
