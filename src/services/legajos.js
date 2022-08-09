import axios from "axios"

<<<<<<< HEAD
const baseUrl = 'https://api.santacatalinafideicomiso.com/usuario1/'

=======
const baseUrl = 'http://44.209.171.118:4000/usuario1/'
//const  baseUrl = 'http://localhost:4000/usuario1/'
>>>>>>> 9794559194801f88740c0da415c0474cf0662a34
const subirprueba = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata)
  console.log(data)

}

const subirlegajode = async ( formdata) => {
 

  console.log(formdata)
<<<<<<< HEAD
  await axios.post('https://api.santacatalinafideicomiso.com/links/subirlegajodni', formdata)
=======

 await axios.post('http://44.209.171.118:4000/links/subirlegajodni', formdata)
 // await axios.post('http://localhost:4000/links/subirlegajodni', formdata)


>>>>>>> 9794559194801f88740c0da415c0474cf0662a34

  
  



}


export default { subirprueba, subirlegajode };