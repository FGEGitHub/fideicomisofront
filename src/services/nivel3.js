import axios from "axios"

//const  baseUrl = 'https://api.santacatalinafideicomiso.com/nivel3/'
const  baseUrl ='http://localhost:4000/nivel3/'

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


const agregariccgral= async  (datos) => {
   console.log(datos)
    const {data } = await axios.post(baseUrl+'agregariccgral2',datos,config)
    alert(data)
   
}  

const traerhistorial= async  () => {
   console.log(1)
    const {data } =await axios.get(baseUrl+'historialicc',config)

    return data 
}  

const nuevoicc= async  (datos) => {
    console.log(datos)
     const {data } =await axios.post(baseUrl+'consultaricc',datos,config)
    console.log(data)
     return data 
 } 
 const valormetrocuadrado= async  (datos) => {
    console.log(datos)
     const {data } =await axios.post(baseUrl+'asignarvalormetroc',datos,config)
    console.log(data)
     return data 
 } 

const borrarhistorial= async  () => {
    
    const data =await axios.get(baseUrl+'borrarhistorial',config)
 
     return data 
 }  

 const asignarclave= async  (datos) => {
    console.log(datos)
     const {data } =await axios.post(baseUrl+'asignarclave',datos,config)
        alert(data)
     return data 
 } 
 const registronivel3 = async (datos) => {
    console.log(datos)
  
 
      const {data} = await axios.post(baseUrl+'signupp', datos,config)
 
         alert(data)
    
 
       
  }
  const traerUsuarios = async () => {
    
  
 
      const {data} = await axios.get(baseUrl+'traerusuarios',config)
      console.log(data)

      return data
 
       
      

    
 
       
  }
  
export default {agregariccgral,traerUsuarios,asignarclave,traerhistorial,borrarhistorial,nuevoicc,valormetrocuadrado,registronivel3};
