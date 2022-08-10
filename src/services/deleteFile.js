import axios from "axios"

//const baseUrl = 'https://api.santacatalinafideicomiso.com/usuario1/'
const baseUrl = 'http://localhost:4000/cuotas/usuario1/'

const deleteFile = async (file) => {
    await axios.delete(baseUrl + 'deleteFile', {
        data: {
            file
        }
    })
}



export default deleteFile;