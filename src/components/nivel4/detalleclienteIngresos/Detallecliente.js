import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from '../lotescliente'
import InfoCliente from './FichaAxios'
import servicioCliente from '../../../services/clientes'

import { Paper } from '@mui/material';



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

        const clientee = await servicioCliente.clientehabilitado(cuil_cuit)
       
         setCliente(clientee[1])
    console.log(clientee[0])
         if (clientee[0][0].habilitado =='Si'){
             sethabilitado(true)
         }
         if (clientee[0][0].expuesta =='SI'){
          setExpuesta(true)
      }

            ;
    };
  

    return (


        <div> 
            
               <div>   
           
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
                Cliente habilitado {/* por {cliente.cuil_cuit}  , el dia {cliente.fecha}*/} 
             
      
            {<LotesCliente
                  cuil_cuit={cuil_cuit} />}


                 
            </div> : <div> Cliente no habilitado no se puede asignar el lote </div> }
            </Paper>
        </div>
    )
}
export default DetalleCliente