import axios from "axios"

//const baseUrl = 'https://api.santacatalinafideicomiso.com/usuario1/'

const baseUrl = 'http://localhost:4000/usuario1/'


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



const subirprueba = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata, config)
  console.log(data)

}
//nivel2
const subirlegajode = async (formData) => {



  await axios.post('https://api.santacatalinafideicomiso.com/links/subirlegajodni', formdata)
  //await axios.post(baseUrl + 'subirlegajo', formData, config)


}


const subirlegajo1 = async (formData) => {

  console.log(formData)

 const {data} = await axios.post(baseUrl + 'subirlegajo1', formData, config)
 console.log(data)
 return (data)

  //await axios.post(baseUrl +'subirlegajo', formData, { headers: {'Content-Type': 'multipart/form-data'


  //  }})
}
const borrar = async (id) => {
  await axios.get(baseUrl + 'borrarunlegajo/' + id)

}
export default { subirprueba, borrar, subirlegajode, subirlegajo1 };
