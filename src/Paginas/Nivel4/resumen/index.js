


import MenuUsuario4 from '../../../components/nivel4/Menuizq4'
import Lista from '../../../components/nivel4/clientes/Table';
import Mantenimiento from '../../../Assets/mantenimiento.jpeg';


const islogo = {
  width: "70%",   
  margin: 0,
  padding: 0,
  display: "flex",
          
  };



export default function Legajos() {



    return (
        <MenuUsuario4>
 <img style={islogo} src={Mantenimiento} alt="logo" /> 
    </MenuUsuario4> 
    );

}

