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
  
  const crear= async  (datos) => {
 
    const data  = await axios.post(baseURL+'crear',datos,config)
    alert(data.data)

    return data.data 
} 
const todas= async  (cuil_cuit) => {
 
    const {data } = await axios.get(baseURL+'todas/',config)
  
    return data 
} 
const leer= async  (id) => {
 
    const {data } = await axios.get(baseURL+'leer/'+id,config)
  
    return data 
} 
export default {todas,crear,leer};

