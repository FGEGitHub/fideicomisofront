import axios from "axios"

const  baseUrl ='https://api.santacatalinafideicomiso.com/lotes/'
// const  baseUrl ='http://localhost:4000/lotes/'

 const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
/////loggedUserJSON Recupera lasesion el tokeny lo envia mediante la constante config. el back lo filtra 
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
   
    const {data } = await axios.get(baseUrl+'listadetodos',config)
    console.log(data)
    return data 
}  
const prueba= async  (s) => {
    await axios.post(baseUrl+'prueba',s)
  console.log(s)
    
   
}  
const listalotes= async  () => {
   
    const {data } = await axios.get(baseUrl+'listadelotes',config)
    
    return data 
}  

const lotesCliente= async  (cuil_cuit) => {
  console.log(cuil_cuit)
    let {data}  = await axios.get(baseUrl+'lotescliente/'+cuil_cuit,config)

    const lotes=(data[0])

   
   
    return data
}  

const lotesClienteUsuario1= async  (cuil_cuit) => {
    //  console.log(cuil_cuit) hacer la separacion
   
   
       let {data}  = await axios.get(baseUrl+'lotescliente/'+cuil_cuit,config)
   
       const lotes=(data[0])
   
      
      
       return data
   } 

const lotesCliente2= async  (cuil_cuit) => {
      console.log(cuil_cuit)
       let {data}  = await axios.get(baseUrl+'lotescliente2/'+cuil_cuit,config)
       console.log(data[0])

       const lotes=(data[0])
       console.log(data)
      
      
       return data
   }  

   const calcular= async  (datos) => {
   console.log(datos)
    const {data } = await axios.post(baseUrl+'calcularvalor',datos,config)
    console.log(data)
    return data 
}  
export default {lista, lotesCliente,lotesCliente2,listalotes,prueba, lotesClienteUsuario1, calcular};
