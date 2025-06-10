import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from '../../LotesCliente'
import InfoCliente from './FichaAxios'
import servicioCliente from '../../../services/clientes'
import Ingreso from './Ingresos'
import { Paper } from '@mui/material';
import PEP from './DeterminarPep'
//import Debitoaut from '../../360/modalcrearadhesiontarjeta'
//import DebitoauCBUt from '../../360/modaladhesiondebito'
//import Listacbus from '../../360/modallistacbu'
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Cargadetabla from '../../CargaDeTabla'
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

      setCarga(false)    ;
    };
  

    return (


        <div> 
            {!carga ? <>
               <div>   
                <div> 
                <PEP
                cuil_cuit = {cuil_cuit}
                getData={async () => {
      
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
          
                setCarga(false)    ;
              }}
                /> 
             
           
                
               </div>
               <Paper
        sx={{
          cursor: 'pointer',
          background: '#bdbdbd',
          color: '#bdbdbd',
          border: '1px dashed #ccc',
          '&:hover': { border: '1px solid #ccc' },
        }}
      >    {habilitado ? <div>
        <Alert severity="success">  <b>  Cliente habilitado por {cliente.cuil_cuit}  , el dia {cliente.fecha}</b></Alert>
      </div>:<div><Alert severity="error"> <b>Cliente no habilitado por {cliente.cuil_cuit}  el dia {cliente.fecha}, (No se puede asignar lote a un cliente no habilitado)</b>. Ir a LEGAJOS para habilitar</Alert></div> 
      
      }
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
            
           
      
            {<LotesCliente
                  cuil_cuit={cuil_cuit} />}

                 
            </div> : <div></div> }
            </Paper>
          
                      {habilitado ? <>
                    
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
    <Button
                        variant="outlined"
                        onClick={() => navigate('/usuario2/actualizarcomporbantes/'+cuil_cuit)}
                      >
                   ACTUALIZAR COMPROBANTES
                      </Button>
</>:<><Cargadetabla/></>}
        </div>
    )
}
export default DetalleCliente