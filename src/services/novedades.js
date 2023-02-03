import axios from "axios"

const  baseURL = 'https://api.santacatalinafideicomiso.com/links/'

//const  baseURL = 'http://localhost:4000/novedades/'

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
  
  const funcion= async  (datos) => {
 
    const data  = await axios.post(baseURL+'todas',datos,config)
 

    return data.data 
} 
const todas= async  (cuil_cuit) => {
 
    const {data } = await axios.get(baseURL+'todas/',config)
  
    return data 
} 
export default {todas};

