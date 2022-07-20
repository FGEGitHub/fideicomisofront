import axios from "axios"

const baseUrl = 'http://52.203.247.51:4000/usuario1/'

const deleteFile = async (file) => {
    await axios.delete(baseUrl + 'deleteFile', {
        data: {
            file
        }
    })
}



export default deleteFile;