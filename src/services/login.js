import axios from "axios"

const url =require ('./url')


const baseUrl = url.database+'signinn/'
//const  baseUrl ='https://api.santacatalinafideicomiso.com/signinn'
//const  baseUrl ='http://localhost:4000/signinn'





const login= async  credentials => {
    const {data } = await axios.post(baseUrl,credentials)
    return data 
}   

const guardar= async  credentials => {
    const {data } = await axios.post(baseUrl,credentials)
    return data 
} 
export default {login, guardar}
