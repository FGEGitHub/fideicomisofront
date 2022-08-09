import axios from "axios"

<<<<<<< HEAD
const  baseUrl = 'https://api.santacatalinafideicomiso.com/pagos/'
=======
const  baseUrl = 'http://44.209.171.118:4000/pagos/'
//const  baseUrl ='http://localhost:4000/pagos/'
>>>>>>> 9794559194801f88740c0da415c0474cf0662a34

const buscar= async  (form) => {
   console.log(form)

 const {data} = await axios.post(baseUrl+'mensualesinusuales',form)
 console.log(data)

  return data
}
const cantidad= async  () => {
 

const cantidad = await axios.get(baseUrl+'cantidadinusuales')
console.log(cantidad)

 return cantidad
}   





export default { buscar, cantidad};