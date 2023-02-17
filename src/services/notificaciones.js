import axios from "axios"

const  baseUrl = 'https://api.santacatalinafideicomiso.com/notificaciones/'
//const  baseUrl ='http://localhost:4000/notificaciones/'

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

 
const leer= async  (id) => {
    
    const {data} = await axios.get(baseUrl+'leer/'+id,config)
    console.log(data.asunto)
     return data 
 }  
 const cantidadpendientes= async  (cuil_cuit) => {
    
    const {data} = await axios.get(baseUrl+'cantidad/'+cuil_cuit,config)
    if(data === 'error login'){  
        // alert('Debe loguearse nuevamente')
        window.localStorage.removeItem('loggedNoteAppUser')
     
        window.location.reload();
    }
     return data 
 }  

 
export default {leer,cantidadpendientes};
