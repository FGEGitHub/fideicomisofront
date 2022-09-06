

import ValorMetro  from "../../../components/nivel3/declaraciones/Valormetro";
import BarraLAteral from '../../../components/nivel3/Menuizq3'
import AgregarIcc from '../../../components/nivel3/ModalIcc'
import BorrarIcc from '../../../components/nivel3/borrarhistorialicc/BorrarHistorialICC'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Tabla from "../../../components/nivel3/declaraciones/ModalAsignacion"; 
import { useNavigate } from "react-router-dom";



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function Legajos() {
  const navigate = useNavigate();
  

    return (
        <ThemeProvider /* theme={darkTheme} */>
            <CssBaseline />
       <BarraLAteral>
       < ValorMetro/>
       <br/>  <br/>  <br/>
      
       < Tabla/>
      </BarraLAteral>
        </ThemeProvider>
        
    
    );

}