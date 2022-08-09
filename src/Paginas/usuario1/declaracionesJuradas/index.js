import MenuUsuario1 from '../../../components/usuario1/Legajo1/MenuUsuario1'
import StepperDJ from '../../../components/usuario1/declaracionesJuradas/StepperDJ';
import { ThemeProvider, createTheme } from '@mui/material/styles';





export default function DeclaracionesJuradas() {



    return (
      <ThemeProvider>

        <MenuUsuario1>
      <StepperDJ />
    </MenuUsuario1>  
    </ThemeProvider>
    );

}