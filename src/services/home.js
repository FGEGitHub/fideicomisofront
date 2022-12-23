import axios from "axios"

const baseUrl = 'https://api.santacatalinafideicomiso.com/home/'
//const baseUrl = 'http://localhost:4000/home/'

const calcular= async  (datos) => {
    console.log(datos)
     const {data } = await axios.post(baseUrl+'calcularvalor',datos)
     console.log(data)
     return data }



export default {calcular };