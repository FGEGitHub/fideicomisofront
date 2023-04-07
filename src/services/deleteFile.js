import axios from "axios"
const url =require ('./url')


const baseUrl = url.database+'usuario1/'
//const baseUrl = 'http://localhost:4000/cuotas/usuario1/'

const deleteFile = async (file) => {
    await axios.delete(baseUrl + 'deleteFile', {
        data: {
            file
        }
    })
}



export default deleteFile;
