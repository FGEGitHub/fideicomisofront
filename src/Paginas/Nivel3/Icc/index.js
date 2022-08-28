

import Historialicc  from "../../../components/nivel3/HistorialIcc";
import BarraLAteral from '../../../components/nivel3/Menuizq3'
import AgregarIcc from '../../../components/nivel3/ModalIcc'
import BorrarIcc from '../../../components/nivel3/borrarhistorialicc/BorrarHistorialICC'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
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
       
  
       < BorrarIcc/>
  <Historialicc/>
     
      </BarraLAteral>
        </ThemeProvider>
        
    
    );

}