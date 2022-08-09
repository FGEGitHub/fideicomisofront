
import axios from "axios"

<<<<<<< HEAD
const  baseUrl = 'https://api.santacatalinafideicomiso.com/aprobaciones/'
=======
const  baseUrl = '44.209.171.118:4000/aprobaciones/'
//const  baseUrl = 'http://localhost:4000/aprobaciones/'
>>>>>>> 9794559194801f88740c0da415c0474cf0662a34

const lista= async  () => {
   
    const {data } = await axios.get(baseUrl+'pendientestodas')
    console.log(data)
    return data 
}   

const cantidad= async  () => {
   
  const {data } = await axios.get(baseUrl+'pendientestodas')
  console.log(data)
  return data 
} 

const aprobacion= async  (id) => {
   console.log(id)
  const {data } = await axios.get(baseUrl+'aprobar/'+id)
    console.log(data)
 
}   

const rechazo= async  (form) => {

  console.log(form)
  const data  = await axios.post(baseUrl+'rechazarr/',form)
  console.log(data)
 
} 

export default {lista, aprobacion,rechazo};