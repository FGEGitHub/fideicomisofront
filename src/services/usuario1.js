import axios from "axios"

const  baseUrl = 'https://api.santacatalinafideicomiso.com/usuario1/'
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
    console.log('u1')
      let {data}  = await axios.get(baseUrl+'lotescliente/'+cuil_cuit)
  
      console.log(data)
  
     
     
      return data
  } 

  const vercuotas= async  (id) => {
    console.log('servicio')
   console.log(id+'id')
    const {data } = await axios.get(baseUrl+'lote2/'+id)
    console.log(data)
    
    return data 
}  
const vertodascuotas= async  (id) => {
    
   console.log(id)
    const {data } = await axios.get(baseUrl+'lote2/'+id)
    console.log(data)
    
    return data 
}  

const noticliente= async  (cuil_cuit) => {
 
    const {data } = await axios.get(baseUrl+'noticliente/'+cuil_cuit)

    return(data)
   
}

const notiId= async  (id) => {

  const data = await axios.get(baseUrl+'notiid/'+id)

  return(data.data)
 
}

const responderNoti= async  (rta) => {
  console.log(rta)
  const data = await axios.post(baseUrl+'justificacion/',rta)
alert(data.data)
 
}
const obtenerurl = async (key) => {
 
  const  data = await axios.get(baseUrl+`get-object-url/` + (key))
 
return data
}

const pagarnivel1 = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'pagarnivel1', formdata)
  console.log(data)

}


///legajo
const subirprueba = async (formdata) => {
    console.log(formdata)
    const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata)
   
  
  }


  const cbuscliente = async (formdata) => {
  
   const { data } = await axios.get(baseUrl + 'cbus/'+ formdata)
   return (data)
  
  }

  const listacbus = async (formdata) => {
  
    const { data } = await axios.get(baseUrl + 'cbuscliente/'+ formdata)
    return (data)
   
   }

  

///legajo
const cargarcbu = async (formdata) => {
  console.log('formdata')
  const { data } = await axios.post(baseUrl + 'cargarcbu/', formdata)
 

}

const constancias= async  (cuil_cuit) => {
  console.log(cuil_cuit)
  const data = await axios.get(baseUrl+'constancias/'+cuil_cuit)
           
console.log(data.data)

 
 
return data.data
} 

const traercompleto= async  (cuil_cuit) => {
  console.log(cuil_cuit)
  const pos = {
    cuil_cuit
  }
  const {data} = await axios.post(baseUrl+'completolegajos',pos)
           
console.log(data)

 
 
return data
} 

const determinarPep = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'determinarPep', formdata)

}

export default {determinarPep,cantidadd,traercompleto,constancias,noticliente,cbuscliente,listacbus,lotesCliente,cargarcbu,vercuotas,vertodascuotas,verief,subirprueba,notiId,responderNoti, obtenerurl,pagarnivel1};
