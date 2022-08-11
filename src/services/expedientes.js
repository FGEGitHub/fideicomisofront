import axios from "axios"


const baseUrl = 'https://api.santacatalinafideicomiso.com/expedientes/'

//const  baseUrl = 'http://localhost:4000/expedientes/'

const listaexp = async () => {
console.log('etc')
  const { data } = await axios.get(baseUrl + 'lista')
  return data

}

const expediente = async (id) => {
 
    const { data } = await axios.get(baseUrl +'expediente/'+ id)
    console.log(data)
    return data
  
  }

  const expedientemodif = async (id) => {

    const { data } = await axios.post(baseUrl +'modifexpediente/', id)
    return data
  
  }



export default { listaexp,  expediente,expedientemodif};