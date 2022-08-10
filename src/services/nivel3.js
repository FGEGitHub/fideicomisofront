import axios from "axios"

const  baseUrl = 'http://44.209.171.118:4000/nivel3/'
//const  baseUrl ='http://localhost:4000/nivel3/'

const agregariccgral= async  (datos) => {
   
    const {data } = await axios.post(baseUrl+'agregariccgral2',datos)
    alert(data)
   
}  
const traerhistorial= async  () => {
   console.log(1)
    const {data } =await axios.get(baseUrl+'historialicc')

    return data 
}  

export default {agregariccgral,traerhistorial};