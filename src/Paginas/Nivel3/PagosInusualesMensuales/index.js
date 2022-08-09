

import PagosInusuales  from "../../../components/nivel3/MensualesInusuales";
import BarraLAteral from '../../../components/nivel3/Menuizq3'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});






export default function Legajos() {

  

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
       <BarraLAteral>
  <PagosInusuales/>
     
      </BarraLAteral>
        </ThemeProvider>
    
    );

}