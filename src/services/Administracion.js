
import axios from "axios"

const  baseUrl = 'https://api.santacatalinafideicomiso.com/administracion/'
//const  baseUrl = 'http://localhost:4000/administracion/'


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


const lista= async  () => {
   
    const {data } = await axios.get(baseUrl+'pendientestodas')
    console.log(data)
    return data 
}   

const borrarusuario= async  (cuil_cuit) => {
   
  const {rta}  = await axios.get(baseUrl+'borrarusuario/'+cuil_cuit,config)
    console.log(rta)
    return rta 
} 

const rechazocbu= async  (form) => {

  console.log(form)
  const data  = await axios.post(baseUrl+'rechazarcbu/',form)
  console.log(data)
 
} 

const extracto= async  () => {
   
    const {data } = await axios.get(baseUrl+'extracto')
    console.log(data)
    return data 
}  
const subirprueba = async (formdata) => {
    console.log(formdata)
    const { data } = await axios.post(baseUrl + 'subirprueba', formdata,config)
    console.log(data)
  
  }



  const traerPagos = async () => {
    
    const { data } = await axios.get(baseUrl + 'pagos',config)
    console.log(data)
    return data
  
  }
//borrar pago
  const borrarPago = async (id) => {
    
    const { data } = await axios.get(baseUrl + 'borrarpago/'+id,config)
    console.log(data)
    return data
  
  }
export default {borrarPago,lista,rechazocbu,borrarusuario,extracto,subirprueba,traerPagos};
