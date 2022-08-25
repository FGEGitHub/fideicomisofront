import axios from "axios"

const  baseUrl = 'https://api.santacatalinafideicomiso.com/notificaciones/'
//const  baseUrl ='http://localhost:4000/notificaciones/'

const leer= async  (id) => {
    
    const {data} = await axios.get(baseUrl+'leer/'+id)
    console.log(data.asunto)
     return data 
 }  



export default {leer};
