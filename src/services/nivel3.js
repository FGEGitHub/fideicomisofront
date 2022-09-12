import axios from "axios"

const  baseUrl = 'https://api.santacatalinafideicomiso.com/nivel3/'
//const  baseUrl ='http://localhost:4000/nivel3/'


const agregariccgral= async  (datos) => {
   console.log(datos)
    const {data } = await axios.post(baseUrl+'agregariccgral2',datos)
    alert(data)
   
}  
const traerhistorial= async  () => {
   console.log(1)
    const {data } =await axios.get(baseUrl+'historialicc')

    return data 
}  

const nuevoicc= async  (datos) => {
    console.log(datos)
     const {data } =await axios.post(baseUrl+'consultaricc',datos)
    console.log(data)
     return data 
 } 
 const valormetrocuadrado= async  (datos) => {
    console.log(datos)
     const {data } =await axios.post(baseUrl+'asignarvalormetroc',datos)
    console.log(data)
     return data 
 } 

const borrarhistorial= async  () => {
    
    const data =await axios.get(baseUrl+'borrarhistorial')
 
     return data 
 }  

 const asignarclave= async  (datos) => {
    console.log(datos)
     const {data } =await axios.post(baseUrl+'asignarclave',datos)
        alert(data)
     return data 
 } 
 const registronivel3 = async (datos) => {
    console.log(datos)
  
 
      const {data} = await axios.post(baseUrl+'signupp', datos)
 
         alert(data)
    
 
       
  }
  const traerUsuarios = async () => {
    
  
 
      const {data} = await axios.get(baseUrl+'traerusuarios')
      console.log(data)

      return data
 
       
      

    
 
       
  }
  
export default {agregariccgral,traerUsuarios,asignarclave,traerhistorial,borrarhistorial,nuevoicc,valormetrocuadrado,registronivel3};
