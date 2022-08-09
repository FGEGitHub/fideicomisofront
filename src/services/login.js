import axios from "axios"

<<<<<<< HEAD
const  baseUrl ='https://api.santacatalinafideicomiso.com/signinn'
=======
const  baseUrl ='http://44.209.171.118:4000/signinn'
//const  baseUrl ='http://localhost:4000/signinn'



>>>>>>> 9794559194801f88740c0da415c0474cf0662a34

const login= async  credentials => {
    const {data } = await axios.post(baseUrl,credentials)
    return data 
}   

const guardar= async  credentials => {
    const {data } = await axios.post(baseUrl,credentials)
    return data 
} 
export default {login, guardar}