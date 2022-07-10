import axios from 'axios'
const  baseUrl = 'http://localhost:4000/usuario1/'

const cantidad= async  (cuil_cuit) => {
   
    const {data } = await axios.post(baseUrl+'cantidadnotificaciones/'+cuil_cuit)
    console.log(cuil_cuit)
    return(data)
   
}
export default {cantidad};