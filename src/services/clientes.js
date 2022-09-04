import axios from "axios"

const  baseURL = 'https://api.santacatalinafideicomiso.com/links/'

//const  baseURL = 'http://localhost:4000/links/'


  
  const datoslegajo= async  (datos) => {
   
    const data  = await axios.post(baseURL+'estadisticaslegajos',datos)
 

    return data.data 
} 
const modificarCliente= async  (datos) => {
   
    const data  = await axios.post(baseURL+'modificarcli',datos)
 

    return data.data 
} 


const crear= async  (datos) => {
   console.log(datos)
    const {data } = await axios.post(baseURL+'add2',datos)
    
    alert(data)  
}  

const lista= async  () => {
   

   const {data } = await axios.get('https://api.santacatalinafideicomiso.com/prueba')

   //  const {data } = await axios.get('http://localhost:4000/prueba')

    
    return data 
}   
//crear
const crearCliente= async  (datos) => {
   
     const data  = await axios.post(baseURL,datos)
  
     return data 
 } 
 
 const ventaLote = async  (datos) => {
    console.log('datos')
    const data  = await axios.post(baseURL+'ventalotee',datos)
    console.log(data)
    alert(data.data)
   
} 
const cliente= async  (cuil_cuit) => {
   console.log(cuil_cuit)
    const {data } = await axios.get(baseURL+'detalle/'+cuil_cuit)
    
    return data 
} 

const determinarIngreso= async  (datos) => {
   console.log(datos)
  const {data } = await axios.post(baseURL+'agregaringreso2/',datos)
    console.log(data)
    alert('Guardado con exito')
    return data 
}

const traerLejagos= async  (cuil_cuit) => {
   console.log(cuil_cuit)
    const {data } = await axios.get(baseURL+'legajos/'+cuil_cuit)
    
    return data 
}

 
  const habilitar= async  (etc) => {
     console.log(etc)
      const {data } = await axios.post(baseURL+'habilitar/',etc)
     
      return data 
  }
  const deshabilitar= async  (etc) => {
     console.log(etc)
      const {data } = await axios.post(baseURL+'deshabilitar/',etc)
     
      return data 
  }
  const listacbupendientes= async  () => {
    
     const {data } = await axios.get(baseURL+'cbuspendientes/')
    
     return data 
 }
  
export default {lista,datoslegajo, listacbupendientes,cliente,modificarCliente,deshabilitar, determinarIngreso,crearCliente,ventaLote,traerLejagos,crear,habilitar};


