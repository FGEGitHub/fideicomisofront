import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from '../../LotesCliente'
import InfoCliente from './FichaAxios'
import servicioCliente from '../../../services/clientes'
import Ingreso from './Ingresos'
import { Paper } from '@mui/material';
import PEP from './DeterminarPep'
import Debitoaut from '../../360/modalcrearadhesion'
import DebitoauCBUt from '../../360/modaladhesiondebito'
import Cancelarcbu from '../../360/modalcancelaradesion'
import Listacbus from '../../360/modallistacbu'

const DetalleCliente = () => {
   
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [cliente, setCliente] = useState({})
     const [habilitado, sethabilitado] = useState(false)
     const [expuesta, setExpuesta] = useState(false)
     useEffect(() => {

        traer()

    }, [])
     const traer = async () => {

        const clientee = await servicioCliente.clientehabilitado(cuil_cuit) ////api/links/clientehabilitado
         setCliente(clientee[1])
        /// veridicacion de cliente segun posibilidad de gestionarlo
         if (clientee[0][0].habilitado =='Si'){
             sethabilitado(true)
         }
           /// veridicacion de cliente segun PEP
         if (clientee[0][0].expuesta =='SI'){
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
                 Persona PEP

                   </div> : 
                   <div>
                   
                   No es PEP
                     </div>}
                
               </div>
               <Paper
        sx={{
          cursor: 'pointer',
          background: '#fafafa',
          color: '#bdbdbd',
          border: '1px dashed #ccc',
          '&:hover': { border: '1px solid #ccc' },
        }}
      >
             <InfoCliente
                 cuil_cuit={cuil_cuit} />
                 </Paper>
             </div>
             <Paper
        sx={{
          cursor: 'pointer',
          background: '#fafafa',
          color: '#bdbdbd',
          border: '1px dashed #ccc',
          '&:hover': { border: '1px solid #ccc' },
        }}
      >
             {habilitado ? <div>
                Cliente habilitado por {cliente.cuil_cuit}  , el dia {cliente.fecha}
                <div> <Ingreso/> </div>
      
            {<LotesCliente
                  cuil_cuit={cuil_cuit} />}

                 
            </div> : <div> Cliente no habilitado por {cliente.cuil_cuit}  ,el dia {cliente.fecha}, no se puede asignar el lote </div> }
            </Paper>
            <Debitoaut
            cuil_cuit={cuil_cuit}/>
            <DebitoauCBUt
              cuil_cuit={cuil_cuit}/>
            <Cancelarcbu
              cuil_cuit={cuil_cuit}/>
    <Listacbus
              cuil_cuit={cuil_cuit}/>



        </div>
    )
}
export default DetalleCliente