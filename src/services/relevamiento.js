import axios from "axios"


const  baseUrl ='https://api.santacatalinafideicomiso.com/relevamiento/'
//const baseUrl = 'http://localhost:4000/relevamiento/'



const buscar = async (barrio) => {
    console.log(barrio)

    const data = await axios.post(baseUrl + 'datos', barrio)

    console.log(data)
    return data.data

}


const cargar = async (carga) => {


    const data = await axios.post(baseUrl + 'cargar', carga)


    return data.data

}

const nuevazona = async (zona) => {


    const data = await axios.post(baseUrl + 'nuevazona', zona)


    return data.data

}
const borrar = async (zona) => {


    const data = await axios.post(baseUrl + 'borrardatoszona', zona)


    return data.data

}



export default { buscar, cargar, borrar,nuevazona }