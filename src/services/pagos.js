import axios from "axios"

const  baseUrl = 'https://api.santacatalinafideicomiso.com/'

//const  baseUrl = 'http://localhost:4000/'


const pagarnivel2= async  (pago) => {


const {data } = await axios.post(baseUrl+'pagos/pagonivel2',(pago))
   return (data)
 
}  
const detallespagoscuota= async  (id_cuota) => {
  console.log(id_cuota)
// pago nivel 1
// const {data } = await axios.post(baseUrl+'usuario1/realizarr',(pago))
   
 
}  
const pagar= async  (pago) => {
   console.log(pago)
// pago nivel 1
  const {data } = await axios.post(baseUrl+'usuario1/realizarr',(pago))
    
  
}  

const rechazararpago= async  (form) => {
 
  
   const {data } = await axios.post(baseUrl+'pagos/rechazarr',form)
     console.log(data)
    return data
   } 

///////aprobar pago nivel 2
const aprobarpago= async  (id) => {
console.log(id)

  const {data } = await axios.get(baseUrl+'pagos/aprobarr/'+id)
    console.log(data)
  return data
 }  

const aprobaciones= async  () => {


 const {data } = await axios.get(baseUrl+'pagos/pendientess')
   console.log(data)
 return data
}  

const detallesPago= async  (id) => {
////detalles de los pagos de una cuota(nivel2)
console.log(id)
  const {data } = await axios.post(baseUrl+'pagos/detallespagos',id)
    console.log(data)
  return data
 }  

const pagosinusuales= async  () => {
  console.log('i')

 const {data } = await axios.get(baseUrl+'pagos/listainusual')
   
 return data
}  

export default { pagar,pagosinusuales,aprobaciones,aprobarpago,rechazararpago,pagarnivel2,detallespagoscuota,detallesPago};