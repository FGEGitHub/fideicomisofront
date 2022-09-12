import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import servicioNivel3 from '../../../services/nivel3'
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField'
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';





const Valormetro = () => {
    const [valor, setValor] = useState({
      zona:'PIT'
      })
   
      const handleChange = (e) =>{
      setValor({  ...valor, [e.target.name]: e.target.value })
        console.log(valor)}



      const handleDeterminar = async (event) => {
        event.preventDefault();
        try {
    
          await servicioNivel3.valormetrocuadrado(
            valor
          )
          window.location.reload(true)
         
         } catch (error) {
           console.error(error);
           console.log('Error algo sucedio')
       
         
         }
    
     
      };


return (
    

    <div>
       
        <br/>   <br/>   
        <InputLabel  variant="standard" htmlFor="uncontrolled-native">
                           Mes
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={handleChange}
                            inputProps={{
                                name: 'zona',
                                id: 'uncontrolled-native',
                               
                            }}
                        >   <option  value={'PIT'}>PIT</option>
                            <option   value={'IC3'}>Resto</option>
                          
                      
                         
                        </NativeSelect>    <br/>
      Valor Metro cuadrado
        <TextField
            autoFocus
            margin="dense"
            type={'number'}
            id="name"
            label=""
            name="valor"
            onChange={handleChange}
            fullWidth
            variant="filled"
          />
           <Button onClick={handleDeterminar} >Enviar</Button>
        
    </div>
)
}

export default Valormetro;