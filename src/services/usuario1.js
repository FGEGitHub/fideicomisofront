import axios from "axios"
const  baseUrl = 'http://52.203.247.51:4000/usuario1/'
//const  baseUrl ='http://localhost:4000/usuario1/'

const cantidadd= async  (cuil_cuit) => {
    console.log('cuil_cuit')
    const {data } = await axios.get(baseUrl+'cantidadnotificaciones/'+cuil_cuit)
    console.log(cuil_cuit)
    return(data)
   
}
const verief= async  (id) => {
    console.log(id)
    const data = await axios.get(baseUrl+'ief/'+id)
             
console.log(data.data)

   
   
  return data.data
} 

const lotesCliente= async  (cuil_cuit) => {
    
      let {data}  = await axios.get(baseUrl+'lotescliente/'+cuil_cuit)
  
      console.log(data)
  
     
     
      return data
  } 

  const vercuotas= async  (id) => {
    console.log('servicio')
   console.log(id)
    const {data } = await axios.get(baseUrl+'lote2/'+id)
    console.log(data)
    
    return data 
}  
const vertodascuotas= async  (id) => {
    console.log('servicio')
   console.log(id)
    const {data } = await axios.get(baseUrl+'lote2/'+id)
    console.log(data)
    
    return data 
}  

const noticliente= async  (cuil_cuit) => {
    console.log('cuil_cuit')
    const {data } = await axios.get(baseUrl+'noticliente/'+cuil_cuit)
    console.log(cuil_cuit)
    return(data)
   
}
export default {cantidadd,noticliente,lotesCliente,vercuotas,vertodascuotas,verief};