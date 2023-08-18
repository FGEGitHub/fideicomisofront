import axios from "axios"

const url =require ('./url')


const baseUrl = url.database+'usuario1/'
//const  baseUrl ='http://localhost:4000/usuario1/'


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

const cantidadd= async  (cuil_cuit) => {///////////////ver no esta conctado
   
    const {data } = await axios.get(baseUrl+'cantidadnotificaciones/'+cuil_cuit,config)
    console.log(cuil_cuit)
    return(data)
   
}
const verief= async  (id) => {
    console.log(id)
    const data = await axios.get(baseUrl+'ief/'+id,config)
             

   

  return data.data
} 


const usuario1acredingresos= async  (cuil_cuit) => {
   
  let {data}  = await axios.get(baseUrl+'usuario1acredingresos/'+cuil_cuit,config)



 
 
  return data
} 

const lotesCliente= async  (cuil_cuit) => {
   
      let {data}  = await axios.get(baseUrl+'lotescliente/'+cuil_cuit,config)
  
    
  
     
     
      return data
  } 

  const vercuotas= async  (id) => {
 
    const {data } = await axios.get(baseUrl+'lote2/'+id,config)
    console.log(data)
    
    return data 
}  
const vertodascuotas= async  (id) => {
    
   console.log(id)
    const {data } = await axios.get(baseUrl+'lote2/'+id,config)
    console.log(data)
    
    return data 
}  

const noticliente= async  (cuil_cuit) => {
 
    const {data } = await axios.get(baseUrl+'noticliente/'+cuil_cuit,config)

    return(data)
   
}

const notiId= async  (id) => {

  const data = await axios.get(baseUrl+'notiid/'+id,config)

  return(data.data)
 
}

const respuestanoti= async  (rta) => {
  console.log(rta)
  const data = await axios.post(baseUrl+'justificacion/',rta,config)
return (data.data)
 
}

//////////Api para obtener Url de descarga
/////////////////Ver si es necesario la config. y si afecta
const obtenerurl = async (key) => {
 
  const  data = await axios.get(baseUrl+`get-object-url/` + (key),config)
 
return data
}

const obtenerurlonline = async (key) => {
 
  const  data = await axios.get(baseUrl+`get-object-url2/` + (key),config)
 
return data
}



const pagarnivel1 = async (formdata) => {

  const { data } = await axios.post(baseUrl + 'pagarnivel1', formdata,config)
  alert(data)

}


///legajo
const subirprueba = async (formdata) => {
    console.log(formdata)
    const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata,config)
   
  
  }


  const cbuscliente = async (formdata) => {
  
   const { data } = await axios.get(baseUrl + 'cbus/'+ formdata,config)
   return (data)
  
  }

  const listacbus = async (formdata) => {
  
    const { data } = await axios.get(baseUrl + 'cbuscliente/'+ formdata,config)
    return (data)
   
   }

  

///legajo
const cargarcbu = async (formdata) => {
  console.log('formdata')
 const data = await axios.post(baseUrl + 'cargarcbu/', formdata,config)
 console.log({data})

}

const constancias= async  (cuil_cuit) => {
  console.log(cuil_cuit)
  const data = await axios.get(baseUrl+'constancias/'+cuil_cuit,config)
           
console.log(data.data)

 
 
return data.data
} 

const traercompleto= async  (cuil_cuit) => {
  console.log(cuil_cuit)
  const pos = {
    cuil_cuit
  }
  const {data} = await axios.post(baseUrl+'completolegajos',pos,config)
           


 
 
return data
} 

const determinarPep = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'determinarPep', formdata,config)

}

const constanciasdelpago = async (id) => {
 console.log(id) 

 const { data } = await axios.get(baseUrl + 'constanciasdelpago/'+id,config)
 
  return data

}

const pagarnivel2= async  (pago) => {////pago desde el usuario 2

console.log(pago)
  const {data } = await axios.post(baseUrl+'pagonivel2',(pago),config)

    
     return data
   
  } 
  const modificarCliente= async  (datosNuevos) => {////

      const {data } = await axios.post(baseUrl+'modificarcli',(datosNuevos),config)
         alert(data)
       
      } 

      
      const modificarcli2= async  (datosNuevos) => {////

        const {data } = await axios.post(baseUrl+'modificarcli2',(datosNuevos),config)
           alert(data)
         
        } 


  
  const cliente = async (cuil) => {
   
  
    const { data } = await axios.get(baseUrl + 'cliente/'+cuil,config)
    
     return data
   
   }



   const cliente2 = async (cuil) => {
   
  
    const { data } = await axios.get(baseUrl + 'cliente2/'+cuil,config)
    
     return data
   
   }



   const pagarnivel2varios= async  (pago) => {


    const {data } = await axios.post(baseUrl+'pagarnivel2varios',(pago),config)
       return (data)
     
    } 
    const pagarnivel1cuota= async  (pago) => {


      const {data } = await axios.post(baseUrl+'pagarnivel1cuota',(pago),config)
      alert(data)
         return (data)
       
      } 

      const modificarpass= async  (datos) => {
      
        
       const {data} = await axios.post(baseUrl+'modificarpass',datos,config)
                
      
       
       
     return data
      } 
    

    
      const mandarconsul= async  (form) => {

        console.log(form)
        
        const {data} = await axios.post(baseUrl+'enviarconsulta',form,config)
      console.log(data)
           return (data)
         
        } 

    
export default {obtenerurlonline,cliente2,modificarcli2,usuario1acredingresos,modificarpass,pagarnivel1cuota,mandarconsul,pagarnivel2varios,determinarPep,modificarCliente,cliente,pagarnivel2,constanciasdelpago,cantidadd,traercompleto,constancias,noticliente,cbuscliente,listacbus,lotesCliente,cargarcbu,vercuotas,vertodascuotas,verief,subirprueba,notiId,respuestanoti, obtenerurl,pagarnivel1};
