import axios from "axios"

//const  baseURL = 'https://api.santacatalinafideicomiso.com/links/'

const  baseURL = 'http://localhost:4000/links/'

const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')

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
  
  const datoslegajo= async  (datos) => {
 
    const data  = await axios.post(baseURL+'estadisticaslegajos',datos,config)
 

    return data.data 
} 
const modificarCliente= async  (datos) => {
   
    const data  = await axios.post(baseURL+'modificarcli',datos,config)
 

    return data.data 
} 


const crear= async  (datos) => {
   console.log(datos)
    const {data } = await axios.post(baseURL+'add2',datos,config)
    
    alert(data)  
}  

const lista= async  () => {
  
    const {data } = await axios.get(baseURL+'infocantidad',config)
  //const {data } = await axios.get('https://api.santacatalinafideicomiso.com/prueba',config)

   // const {data } = await axios.get('http://localhost:4000/prueba',config)

    
    return data 
}   


 const ventaLote = async  (datos) => {
   
    const {data}  = await axios.post(baseURL+'ventalotee',datos,config)
    
    
    alert(data[0])
    return data
   
} 
const cliente= async  (cuil_cuit) => {
 
    const {data } = await axios.get(baseURL+'detalle/'+cuil_cuit,config)
    
    return data 
} 

const determinarIngreso= async  (datos) => {
   console.log(datos)
  const {data } = await axios.post(baseURL+'agregaringreso2/',datos,config)
    console.log(data)
    alert('Guardado con exito')
    return data 
}

const traerLejagos= async  (cuil_cuit) => {
   console.log(cuil_cuit)
    const {data } = await axios.get(baseURL+'legajos/'+cuil_cuit,config)
    
    return data 
}

 
  const habilitar= async  (etc) => {
     console.log(etc)
      const {data } = await axios.post(baseURL+'habilitar/',etc,config)
     
      return data 
  }
  const deshabilitar= async  (etc) => {
     console.log(etc)
      const {data } = await axios.post(baseURL+'deshabilitar/',etc,config)
     
      return data 
  }
  const listacbupendientes= async  () => {
    
     const {data } = await axios.get(baseURL+'cbuspendientes/',config)
    
     return data 
 }

 const clientehabilitado= async  (cuil_cuit) => {
 
    const {data } = await axios.get(baseURL+'clientehabilitado/'+cuil_cuit,config)
  
    return data 
} 

const infocantidad= async  (cuil_cuit) => {
 
    const {data } = await axios.get(baseURL+'infocantidad/',config)
  
    return data 
} 
const enviarmailprueba= async  (etc) => {
 console.log(etc)
    const {data } = await axios.post(baseURL+'enviarmailprueba/',etc,config)
  
    return data 
} 

export default {enviarmailprueba,lista,infocantidad,datoslegajo, clientehabilitado,listacbupendientes,cliente,modificarCliente,deshabilitar, determinarIngreso,ventaLote,traerLejagos,crear,habilitar};


