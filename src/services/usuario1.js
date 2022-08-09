import axios from "axios"
<<<<<<< HEAD
const  baseUrl = 'https://api.santacatalinafideicomiso.com/usuario1/'
=======
const  baseUrl = 'http://44.209.171.118:4000/usuario1/'
//const  baseUrl ='http://localhost:4000/usuario1/'
>>>>>>> 9794559194801f88740c0da415c0474cf0662a34

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
    console.log('u1')
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


///legajo
const subirprueba = async (formdata) => {
    console.log(formdata)
    const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata)
    console.log(data)
  
  }
export default {cantidadd,noticliente,lotesCliente,vercuotas,vertodascuotas,verief,subirprueba};