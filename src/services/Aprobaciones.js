
import axios from "axios"
const url =require ('./url')


const baseUrl = url.database+'aprobaciones/'
//const  baseUrl = 'http://localhost:4000/aprobaciones/'


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


const lista= async  () => {
   
    const {data } = await axios.get(baseUrl+'pendientestodas',config)
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
  const {data } = await axios.get(baseUrl+'aprobar/'+id,config)
    console.log(data)
 
}   

const rechazo= async  (form) => {

  console.log(form)
  const data  = await axios.post(baseUrl+'rechazarr/',form,config)
  console.log(data)
 
} 

const rechazocbu= async  (form) => {

  console.log(form)
  const data  = await axios.post(baseUrl+'rechazarcbu/',form,config)
  console.log(data)
 
} 
const aprobacioncbu= async  (id) => {
  console.log(id)
 const {data } = await axios.get(baseUrl+'aprobarcbu/'+id,config)
   console.log(data)

}  

export default {lista,aprobacioncbu, aprobacion,rechazo,rechazocbu};
