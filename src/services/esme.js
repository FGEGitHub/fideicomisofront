import axios from "axios"


const baseUrl = 'https://api.santacatalinafideicomiso.com/esme/'

//const  baseUrl = 'http://localhost:4000/esme/'





const listaCursos = async () => {
 
    const { data } = await axios.get(baseUrl +'listacursos/')
    console.log(data)
    return data
  
  }
  const clases = async (id) => {
 
    const { data } = await axios.get(baseUrl +'clases/'+id)
    console.log(data)
    return data
  
  }

  const alumnos = async () => {
 
    const { data } = await axios.get(baseUrl +'alumnos/')
    console.log(data)
    return data
  
  }

  const nuevoCurso = async (form) => {

    const { data } = await axios.post(baseUrl +'nuevocurso/', form)
    return data
  
  }
  const nuevaClase = async (form) => {

    const { data } = await axios.post(baseUrl +'nuevaclase/', form)
    return data
  
  }
  

export default { alumnos, listaCursos,nuevoCurso,clases,nuevaClase};