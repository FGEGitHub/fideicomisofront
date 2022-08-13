import axios from "axios"


const  baseUrl ='https://api.santacatalinafideicomiso.com/relevamiento'
//const  baseUrl ='http://localhost:4000/relevamiento/'



const buscar= async  (barrio) => {
 

    const  data  = await axios.post(baseUrl + 'datos', barrio)

    console.log(data.data)
    return data.data

    }  






export default {buscar}