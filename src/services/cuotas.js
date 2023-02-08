import axios from "axios"





const  baseUrl = 'https://api.santacatalinafideicomiso.com/cuotas/'
//const baseUrl = 'http://localhost:4000/cuotas/'



const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')

let config = ''
if (loggedUserJSON) {
    const userContext = JSON.parse(loggedUserJSON)


    config = {
        headers: {
            Authorization: `Bearer ${userContext.token}`
        }
    }


} else {
    config = {
        headers: {
            Authorization: `Bearer `
        }
    }
}

const vercuotas = async (id) => {

    console.log(id)
    const { data } = await axios.get(baseUrl + 'lote2/' + id, config)
    console.log(data)

    return data
}

const traercuota = async (id) => {

    console.log(id)
    const { data } = await axios.get(baseUrl + 'traercuota/' + id, config)
   

    return data
}
const verief = async (id) => {
    console.log(id)
    const data = await axios.get(baseUrl + 'ief/' + id, config)

    console.log(data.data)



    return data.data
}
const cuotasDeUnLote = async (id) => {

    console.log(id)
    const data = await axios.get(baseUrl + 'cuotasdeunlote/' + id, config)
    console.log(data)

    return data
}
const borrarcuota = async (id) => {

    console.log(id)
    const rta = await axios.get(baseUrl + 'delete/' + id, config)
    console.log(rta)

    return rta.data
}

const borrarcuotas = async (id) => {

    console.log(id)
    const rta = await axios.get(baseUrl + 'borrartodas/' + id, config)
    alert(rta.data)

    //return rta.data 
}

const agregarCuotas = async (estadoCuotas) => {

    console.log(estadoCuotas)
    const { data } = await axios.post(baseUrl + 'addaut2/', estadoCuotas, config)


    return data
}


const actualizarcuota = async (cuotaact) => {
    console.log(cuotaact)

    const { data } = await axios.post(baseUrl + 'actualizarcuota/', cuotaact, config)


    return data
}


const asignarICC = async (nuevoicc) => {
    console.log(nuevoicc)

    const { data } = await axios.post(baseUrl + 'agregaricc/', nuevoicc, config)


    return data
}



const traercuotasdisponibles = async (id) => {
    console.log(id)
    const { data } = await axios.get(baseUrl + 'traercuotasfinales/' + id, config)
    console.log(data)

    return data
}


const listavarios = async (cuil_cuit) => {
    console.log(cuil_cuit)
    const { data } = await axios.get(baseUrl + 'listavarios/' + cuil_cuit, config)
    console.log(data)

    return data
}


const agregarCuotasVarios = async (estadoCuotas) => {

    console.log(estadoCuotas)
    const { data } = await axios.post(baseUrl + 'addautvarias/', estadoCuotas, config)


    // return data
}
export default { agregarCuotasVarios,actualizarcuota,traercuota, listavarios, asignarICC, traercuotasdisponibles, vercuotas, agregarCuotas, cuotasDeUnLote, borrarcuota, verief, borrarcuotas };
