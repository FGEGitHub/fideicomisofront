
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

const borrar= async  (cuil_cuit) => {
   
  const rta  = await axios.get(baseUrl+'borrar/'+cuil_cuit,config)
    console.log(rta)
    return rta 
} 

const rechazocbu= async  (form) => {

  console.log(form)
  const data  = await axios.post(baseUrl+'rechazarcbu/',form)
  console.log(data)
 
} 

const estracto= async  () => {
   
    const {data } = await axios.get(baseUrl+'estracto')
    console.log(data)
    return data 
}  
const subirprueba = async (formdata) => {
    console.log(formdata)
    const { data } = await axios.post(baseUrl + 'subirprueba', formdata,config)
    console.log(data)
  
  }
export default {lista,rechazocbu,borrar,estracto,subirprueba};
