import axios from 'axios'
const  baseUrl = 'http://localhost:4000/'

const pagar= async  (pago) => {
   console.log(pago)
// pago nivel 1
 // const {data } = await axios.post(baseUrl+'usuario1/realizarr',(pago))
    
  
}  

const rechazararpago= async  (form) => {
 
  
   const {data } = await axios.post(baseUrl+'pagos/rechazarr',form)
     console.log(data)
    return data
   } 


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

const pagosinusuales= async  () => {
  

 const {data } = await axios.get(baseUrl+'pagos/listainusual')
   
 return data
}  

export default { pagar,pagosinusuales,aprobaciones,aprobarpago,rechazararpago};