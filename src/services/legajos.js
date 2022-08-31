import axios from "axios"

const baseUrl = 'https://api.santacatalinafideicomiso.com/usuario1/'

// const  baseUrl = 'http://localhost:4000/usuario1/'

const subirprueba = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata)
  console.log(data)

}
//nivel2
const subirlegajode = async ( formData) => {
 


//await axios.post('https://api.santacatalinafideicomiso.com/links/subirlegajodni', formdata)
await axios.post(baseUrl +'subirlegajo', formData, { headers: {'Content-Type': 'multipart/form-data'
}})
       

}


const subirlegajo1 = async ( formData) => {
 
  console.log(formData)
  
  await axios.post(baseUrl +'subirlegajo1', formData, { headers: {'Content-Type': 'multipart/form-data'
}})
    
    //await axios.post(baseUrl +'subirlegajo', formData, { headers: {'Content-Type': 'multipart/form-data'
  
  
  //  }})
  }
  
export default { subirprueba, subirlegajode,subirlegajo1 };
