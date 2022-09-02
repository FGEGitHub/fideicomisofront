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


const Valormetro = () => {
    const [valor, setValor] = useState({
   
      })
   
      const handleChange = (e) =>
      setValor({  ...valor, [e.target.name]: e.target.value })



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
       
        <br/>   <br/>   <br/>   <br/>   <br/>
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