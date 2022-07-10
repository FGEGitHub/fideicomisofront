import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from '../../LotesCliente'
import InfoCliente from '../../FichaAxios'

import servicioCliente from '../../../services/clientes'


const DetalleCliente = () => {
   
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [cliente, setCliente] = useState([])

    useEffect(() => {

        traer()

    }, [])
    const traer = async () => {

        const cliente = await servicioCliente.cliente(cuil_cuit)

        setCliente(cliente)



            ;
    };
  
    return (
        <div> 
            
              <div>
            
            <InfoCliente
                cuil_cuit={cuil_cuit} />
             </div> 
             <div>
            {<LotesCliente
                cuil_cuit={cuil_cuit} />}
</div> 
        </div>
    )
}
export default DetalleCliente