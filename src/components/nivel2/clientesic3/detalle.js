import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from '../../LotesCliente'
import InfoCliente from '../detalleclienteIngresos/FichaAxios'
import servicioCliente from '../../../services/clientes'
import Ingreso from '../detalleclienteIngresos/Ingresos'
import { Paper } from '@mui/material';
import PEP from '../detalleclienteIngresos/DeterminarPep'
import Cuotas from '../cuotasic3/tabla'
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Chip from '@mui/material/Chip';
const DetalleCliente = () => {
  const navigate = useNavigate();
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [cliente, setCliente] = useState({})
     const [habilitado, sethabilitado] = useState(false)
     const [carga, setCarga] = useState(true)
     const [expuesta, setExpuesta] = useState(false)
     useEffect(() => {

        traer()

    }, [])
     const traer = async () => {
      
        const clientee = await servicioCliente.clientehabilitadoic3(cuil_cuit) ////api/links/clientehabilitado
         setCliente(clientee[1])
        /// veridicacion de cliente segun posibilidad de gestionarlo
         if (clientee[0][0].habilitado =='Si'){
             sethabilitado(true)
         }
           /// veridicacion de cliente segun PEP
         if (clientee[0][0].expuesta =='SI'){
          setExpuesta(true)
      }

      setCarga(false)    ;
    };
  

    return (


        <div> 
            {!carga ? <>
               <div>   
                <div> 
                <PEP
                cuil_cuit = {cuil_cuit}
                /> 
             
                {expuesta ? <div>
                  <Alert variant="filled" severity="warning">
                  Persona PEP
</Alert>
               
                   </div> : 
                   <div>
                    <Chip label="Persona no PEP" color="success" />
                   
                     </div>}
                
               </div>
               <Paper
        sx={{
          cursor: 'pointer',
          background: '#b0bec5',
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
           <Button
                        variant="outlined"
                        onClick={() => navigate('/usuario2/actualizarcomporbantes/'+cuil_cuit)}
                      >
                   ACTUALIZAR COMPROBANTES
                      </Button>
             {habilitado ? <div>
              <Alert severity="success">  <b>  Cliente habilitado por {cliente.cuil_cuit}  , el dia {cliente.fecha}</b></Alert>
            
                <div> <Ingreso/> </div>
      
            {<LotesCliente
                  cuil_cuit={cuil_cuit} />}

                 
            </div> : <div><Alert severity="error"> <b>Cliente no habilitado por {cliente.cuil_cuit}  el dia {cliente.fecha}, (No se puede asignar lote a un cliente no habilitado)</b>. Ir a LEGAJOS para habilitar</Alert></div> }
            </Paper>
          
                      {habilitado ? <>
                        <Button
                        variant="outlined"
                        onClick={() => navigate('/usuario2/legajoscliente/'+cuil_cuit)}
                      >
                      Ir a legajos
                      </Button>
        
</>:<><Button
      variant="outlined"
      onClick={() => navigate('/usuario2/legajoscliente/' + cuil_cuit)}
      sx={{
        position: 'relative',
        border: '2px solid #ff0000', // Borde rojo
        color: '#f50057', // Texto rojo
        fontWeight: 'bold', // Texto en negrita
        backgroundColor: '#fff0f0', // Fondo ligeramente rojo
        transition: 'transform 0.2s', // Transición para el efecto de zoom
        '&:hover': {
          transform: 'scale(1.1)', // Efecto de zoom al pasar el cursor
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '20px',
          height: '20px',
          background: 'url("path-to-your-arrow-image.png") no-repeat center center', // Puedes usar una imagen de flecha para señalar
          backgroundSize: 'contain',
        },
      }}
    >
      Ir a legajos
    </Button></>}

</>:<>Cargando</>}

{cuil_cuit ? <>
  <Cuotas
  cuil_cuit={cuil_cuit}
  />
  
  </>:<></>}
  
        </div>


    )
}
export default DetalleCliente