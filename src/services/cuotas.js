import axios from "axios"





const  baseUrl = 'https://api.santacatalinafideicomiso.com/cuotas/'
//const  baseUrl = 'http://localhost:4000/cuotas/'



const vercuotas= async  (id) => {
    console.log('servicio')
   console.log(id)
    const {data } = await axios.get(baseUrl+'lote2/'+id)
    console.log(data)
    
    return data 
}  

const verief= async  (id) => {
    console.log(id)
    const data = await axios.get(baseUrl+'ief/'+id)
             
console.log(data.data)

   
   
  return data.data
} 
const cuotasDeUnLote = async  (id) => {
    
   console.log(id)
    const data  = await axios.get(baseUrl+'cuotasdeunlote/'+id)
    console.log(data)
    
    return data 
} 
const borrarcuota = async  (id) => {
    
    console.log(id)
     const rta  = await axios.get(baseUrl+'delete/'+id)
     console.log(rta)
     
     return rta.data 
 } 

 const borrarcuotas = async  (id) => {
    
    console.log(id)
     const rta  = await axios.get(baseUrl+'borrartodas/'+id)
     alert(rta.data)
     
     //return rta.data 
 } 

const agregarCuotas= async  (estadoCuotas) => {
  
   console.log(estadoCuotas)
    const {data } = await axios.post(baseUrl+'addaut2/',estadoCuotas)

    
    return data
}  

export default {vercuotas,agregarCuotas, cuotasDeUnLote,borrarcuota,verief,borrarcuotas};
