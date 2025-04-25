import axios from "axios"

const url =require ('./url')


const baseUrl = url.database

//const  baseUrl = 'http://localhost:4000/'

const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
/////loggedUserJSON Recupera lasesion el tokeny lo envia mediante la constante config. el back lo filtra 
 let config = ''
 if (loggedUserJSON) {
  try {
    
 
     const userContext = JSON.parse(loggedUserJSON)
  
 
      config = {
         headers:{
             Authorization:`Bearer ${userContext.token}`
         }
     }
 
    } catch (error) {
      window.localStorage.removeItem('loggedNoteAppUser')
    }
 }else{
      config = {
         headers:{
             Authorization:`Bearer `
         }
     }
 }



const pagarnivel2= async  (pago) => {


const {data } = await axios.post(baseUrl+'pagos/pagonivel2',(pago),config)
   return (data)
 
} 

const derivarpagoic3= async  (pago) => {


  const {data } = await axios.post(baseUrl+'pagos/derivarpagoic3',(pago),config)
     return (data)
   
  } 



const pagarnivel4lote= async  (pago) => {


  const {data } = await axios.post(baseUrl+'pagos/pagarnivel4lote',(pago),config)
     return (data)
   
  } 
const pagarnivel4= async  (pago) => {


  const {data } = await axios.post(baseUrl+'pagos/pagarnivel4',(pago),config)
     return (data)
   
  } 



const detallespagoscuota= async  (id_cuota) => {
  
// pago nivel 1
// const {data } = await axios.post(baseUrl+'usuario1/realizarr',(pago))
   
 
}  
const pagar= async  (pago) => {
   
// pago nivel 1
  const {data } = await axios.post(baseUrl+'usuario1/realizarr',(pago),config)
    
  
}  

const rechazararpago= async  (form) => {
 
  
   const {data } = await axios.post(baseUrl+'pagos/rechazarr',form,config)
     
    return data
   } 

///////aprobar pago nivel 2
const aprobarpago= async  (form) => {


  const {data } = await axios.post(baseUrl+'pagos/aprobarr/',form,config)
    //
  return data
 }  

const aprobaciones= async  () => {


 const {data } = await axios.get(baseUrl+'pagos/pendientess',config)
   
 return data
}  

const listaExtractos= async  () => {


  const {data } = await axios.get(baseUrl+'pagos/todoslosextractos',config)
    
  return data
 }  

 
 const detallesPagocli= async  (id) => {
  ////detalles de los pagos de una cuota(nivel2)
  
    const {data } = await axios.post(baseUrl+'pagos/detallesPagocli',id,config)
      
    return data
   }  
const detallesPago= async  (id) => {
////detalles de los pagos de una cuota(nivel2)

  const {data } = await axios.post(baseUrl+'pagos/detallespagos',id,config)
    
  return data
 }  
 

 const detallesPagoic3= async  (id) => {
  ////detalles de los pagos de una cuota(nivel2)
  
    const {data } = await axios.post(baseUrl+'pagos/detallesPagoic3',id,config)
      
    return data
   } 

 const VerExtracto= async  (id) => {
  ////
  
  const {data } = await axios.post(baseUrl+'pagos/extractoid',id,config)
    
   return data
   } 
 
const pagosinusuales= async  () => {

 const {data } = await axios.get(baseUrl+'pagos/listainusual',config)
   
 return data
}  

const pagosinusuales2= async  () => {

  const {data } = await axios.get(baseUrl+'pagos/pagosinusuales2',config)
    
  return data
 }  
const cantidadpendientesadmin= async  () => {

  const {data}  = await axios.get(baseUrl+'pagos/cantidadpendientesadmin',config)
  if(data === 'error login'){  
    // alert('Debe loguearse nuevamente')
    window.localStorage.removeItem('loggedNoteAppUser')
 
    window.location.reload();
}
  return data
 } 

const cantidadpendientes= async  () => {

  const {data}  = await axios.get(baseUrl+'pagos/cantidadpendientes',config)
  if(data === 'error login'){  
    // alert('Debe loguearse nuevamente')
    window.localStorage.removeItem('loggedNoteAppUser')
 
    window.location.reload();
}
  return data
 } 
 const verCoincidencias= async  (id) => {

  const {data}  = await axios.get(baseUrl+'pagos/vercoincidencias/'+id,config)
    
  return data
 } 
 const traerpagodecuota= async  (id) => {

  const {data}  = await axios.get(baseUrl+'pagos/traerpagodecuota/'+id,config)
    
  return data
 } 


 const traerpagosdeuncliente= async  (id) => {

  const {data}  = await axios.get(baseUrl+'pagos/traerpagosdeuncliente/'+id,config)
    
  return data
 } 


 const rechazararpagoniv3= async  (form) => {
 
  
  const {data } = await axios.post(baseUrl+'pagos/rechazararpagoniv3',form,config)
    
   return data
  } 

  
  const registrarInteres= async  (form) => {
 
  
    const {data } = await axios.post(baseUrl+'pagos/registrarInteres',form,config)
      
     return data
    } 
  
  const todoslospagos= async  () => {
  
     
     const {data } = await axios.get(baseUrl+'pagos/todoslospagos',config)
       
      return data
     }
     const traerpago= async  (id) => {
  
     
      const {data } = await axios.get(baseUrl+'pagos/traerpago/'+id,config)
        
       return data
      }
 
      const traerPdfConstanciadepago = async (id) => {
        try {
          const config = {
            responseType: 'blob', // Esto es importante para manejar blobs de archivos
          };
          const { data } = await axios.get(`${baseUrl}traerPdfConstanciadepago/${id}`, config);
          return data;
        } catch (error) {
          console.error('Error al obtener el PDF:', error);
          throw error;
        }
      };
      
      const traerPdfConstanciadepagoic3 = async (id) => {
        try {
          const config = {
            responseType: 'blob', // Esto es importante para manejar blobs de archivos
          };
          const { data } = await axios.get(`${baseUrl}traerPdfConstanciadepagoic3/${id}`, config);
          return data;
        } catch (error) {
          console.error('Error al obtener el PDF:', error);
          throw error;
        }
      };
export default {derivarpagoic3,pagosinusuales2,registrarInteres,traerpagosdeuncliente,traerPdfConstanciadepagoic3,detallesPagoic3,detallesPagocli,traerPdfConstanciadepago,cantidadpendientesadmin,todoslospagos,traerpago,pagarnivel4lote,pagarnivel4,traerpagodecuota,rechazararpagoniv3,verCoincidencias,listaExtractos,VerExtracto, pagar,pagosinusuales,aprobaciones,aprobarpago,rechazararpago,pagarnivel2,detallespagoscuota,cantidadpendientes,detallesPago};
