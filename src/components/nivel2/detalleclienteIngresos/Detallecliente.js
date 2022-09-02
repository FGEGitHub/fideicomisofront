import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from '../../LotesCliente'
import InfoCliente from './FichaAxios'
import servicioCliente from '../../../services/clientes'


const DetalleCliente = () => {
   
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [cliente, setCliente] = useState([])
     const [habilitado, sethabilitado] = useState(false)
     useEffect(() => {

        traer()

    }, [])
     const traer = async () => {

        const cliente = await servicioCliente.cliente(cuil_cuit)

         setCliente(cliente)
    
         if (cliente[0].habilitado =='Si'){
             sethabilitado(true)
         }


            ;
    };
  

    return (


        <div> 
            
               <div>
            
             <InfoCliente
                 cuil_cuit={cuil_cuit} />
             </div>

             {habilitado ? <div>
            {<LotesCliente
                  cuil_cuit={cuil_cuit} />}
            </div> : <div> Cliente no habilitado, no se puede asignar el lote </div> }
             
        </div>
    )
}
export default DetalleCliente