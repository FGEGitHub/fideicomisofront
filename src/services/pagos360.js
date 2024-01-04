import axios from "axios"

const url =require ('./url')


const baseUrl = url.database+'pagos360/'
//const  baseUrl ='http://localhost:4000/pagos360/'


const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
/////loggedUserJSON Recupera lasesion el tokeny lo envia mediante la constante config. el back lo filtra 
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


 const traerlink360  = async (id) => {
    
    const { data } = await axios.get(baseUrl + 'traerlink360/'+id,config)
    console.log(data)
    return data
  
  }
  const crearAdhesiondeb  = async (datos) => {
    
    const { data } = await axios.post(baseUrl + 'crearadhesiondeb/',datos,config)
   
    return data
  
  }


  export default {traerlink360,crearAdhesiondeb}