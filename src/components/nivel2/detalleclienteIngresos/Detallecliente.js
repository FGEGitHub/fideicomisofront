import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from '../../LotesCliente'
import InfoCliente from './FichaAxios'
import servicioCliente from '../../../services/clientes'
import Ingreso from './Ingresos'
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PEP from './DeterminarPep'

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));
const DetalleCliente = () => {
   
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [cliente, setCliente] = useState()
     const [habilitado, sethabilitado] = useState(false)
     const [expuesta, setExpuesta] = useState(false)
     useEffect(() => {

        traer()

    }, [])
     const traer = async () => {

        const cliente = await servicioCliente.cliente(cuil_cuit)
        console.log(cliente)
         setCliente(cliente)
    
         if (cliente[0].habilitado =='Si'){
             sethabilitado(true)
         }
         if (cliente[0].expuesta =='SI'){
          setExpuesta(true)
      }

            ;
    };
  

    return (


        <div> 
            
               <div>   
                <div> 
                <PEP
                cuil_cuit = {cuil_cuit}
                /> 
             
                {expuesta ? <div>
                  <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Pep" />
                   </div> : 
                   <div>
                   
                    <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="PEP (No)" />
                     </div>}
                
               </div>
             <InfoCliente
                 cuil_cuit={cuil_cuit} />
             </div>

             {habilitado ? <div>
                <div> <Ingreso/> </div>
            {<LotesCliente
                  cuil_cuit={cuil_cuit} />}
                 
            </div> : <div> Cliente no habilitado, no se puede asignar el lote </div> }
             
        </div>
    )
}
export default DetalleCliente