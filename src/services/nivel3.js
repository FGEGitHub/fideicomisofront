import axios from "axios"

const  baseUrl = 'https://api.santacatalinafideicomiso.com/nivel3/'

const agregariccgral= async  (datos) => {
   
    const {data } = await axios.post(baseUrl+'agregariccgral2',datos)
    alert(data)
   
}  
const traerhistorial= async  () => {
   
    const {data } =await axios.get(baseUrl+'nivel3/historialicc')

    return data 
}  

export default {agregariccgral,traerhistorial};