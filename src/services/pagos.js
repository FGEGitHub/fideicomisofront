import axios from "axios"

const  baseUrl = 'https://api.santacatalinafideicomiso.com/'

//const  baseUrl = 'http://localhost:4000/'

const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
/////loggedUserJSON Recupera lasesion el tokeny lo envia mediante la constante config. el back lo filtra 
 let config = ''
 if (loggedUserJSON) {
     const userContext = JSON.parse(loggedUserJSON)
  
 
      config = {
         headers:{
             Authorization:`Bearer ${userContext.token}`
         }
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




const detallespagoscuota= async  (id_cuota) => {
  console.log(id_cuota)
// pago nivel 1
// const {data } = await axios.post(baseUrl+'usuario1/realizarr',(pago))
   
 
}  
const pagar= async  (pago) => {
   
// pago nivel 1
  const {data } = await axios.post(baseUrl+'usuario1/realizarr',(pago),config)
    
  
}  

const rechazararpago= async  (form) => {
 
  
   const {data } = await axios.post(baseUrl+'pagos/rechazarr',form,config)
     console.log(data)
    return data
   } 

///////aprobar pago nivel 2
const aprobarpago= async  (form) => {

console.log(form)
  const {data } = await axios.post(baseUrl+'pagos/aprobarr/',form,config)
    //console.log(data)
  return data
 }  

const aprobaciones= async  () => {


 const {data } = await axios.get(baseUrl+'pagos/pendientess',config)
   console.log(data)
 return data
}  

const listaExtractos= async  () => {


  const {data } = await axios.get(baseUrl+'pagos/todoslosextractos',config)
    console.log(data)
  return data
 }  



const detallesPago= async  (id) => {
////detalles de los pagos de una cuota(nivel2)
console.log(id)
  const {data } = await axios.post(baseUrl+'pagos/detallespagos',id,config)
    console.log(data)
  return data
 }  

 const VerExtracto= async  (id) => {
  ////
  console.log(id)
  const {data } = await axios.post(baseUrl+'pagos/extractoid',id,config)
    console.log(data)
   return data
   } 
 
const pagosinusuales= async  () => {

 const {data } = await axios.get(baseUrl+'pagos/listainusual',config)
   
 return data
}  
const cantidadpendientes= async  () => {

  const {data}  = await axios.get(baseUrl+'pagos/cantidadpendientes',config)

  return data
 } 
 const verCoincidencias= async  (id) => {

  const {data}  = await axios.get(baseUrl+'pagos/vercoincidencias/'+id,config)
    console.log(data)
  return data
 } 
 const rechazararpagoniv3= async  (form) => {
 console.log(form)
  
  const {data } = await axios.post(baseUrl+'pagos/rechazararpagoniv3',form,config)
    console.log(data)
   return data
  } 


  
  const todoslospagos= async  () => {
  
     
     const {data } = await axios.get(baseUrl+'pagos/todoslospagos',config)
       
      return data
     }


export default {todoslospagos,rechazararpagoniv3,verCoincidencias,listaExtractos,VerExtracto, pagar,pagosinusuales,aprobaciones,aprobarpago,rechazararpago,pagarnivel2,detallespagoscuota,cantidadpendientes,detallesPago};
