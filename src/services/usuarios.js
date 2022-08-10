import axios from "axios"

//const baseUrl = 'http://52.90.82.154:4000/prueba'
const  baseUrl ='http://localhost:4000/prueba'

let token = null

const setToken = newToken =>{
    
    token = `Bearer ${newToken}`
}

const usuarios = async () => {
   
   const config = {
        headers:{
            Authorization:token
        }
    }
    const request = await axios.get(baseUrl, config)
    let dataa = request.data
   console.log('hola')

    return dataa
     
}


const registro = async (datos) => {
   console.log(datos)
 

     const data = await axios.post('http://localhost:4000/signupp', datos)
     //const data = await axios.post('http://52.90.82.154:4000/signupp', datos)
   

 

     return data.data

      
 }

export default { usuarios, setToken,registro }