import Rutas from './Rutas/Rutas'
import NotiContext from './context/NotiContext';
import UserContext from './context/UserContext';
import InusualContext from './context/inusualesContext';
import {BrowserRouter, useRoutes, Route, Switch} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Login from './Paginas/Login';
import servicioUsuario from './services/usuarios'
import servicioAprobaciones from './services/Aprobaciones'
import servicioPagos from './services/pagos'
import { useNavigate } from "react-router-dom";


function App () {

  const element = useRoutes(Rutas)
  const [userContext, setUserContext] = useState()
  const [notiContext, setUserNotiContext] = useState(0)
  const [inusualContext, setUsInusualContext] = useState(0)
  const navigate = useNavigate();

  

///

useEffect(() => {
  
   const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
   if (loggedUserJSON) {
     const userContext = JSON.parse(loggedUserJSON)
    console.log(userContext)
     setUserContext(userContext)
   
     servicioUsuario.setToken(userContext.token) 
    

     /* switch (userContext.nivel) {
      case 1:navigate('/usuario/menu')
        
        break;
        case 2:navigate('/usuario2/clientes')
     
          break;
          case 3:navigate('/nivel3/')
     
        break;
        case 4: navigate('/legales/menu')
        
        break;

     }*/
   }  else{

      navigate('/login')
     
   }  
  


 }, [])
 const inusuales = async () => {

  const cantInusual =servicioPagos.cantidad()
  console.log(cantInusual)
    setUsInusualContext(cantInusual)

}

 const declarar = async () => {

  const cantNoti ={
    cantidad: 8}
   setUserNotiContext(cantNoti)

}

///
  




    return(

      
  <UserContext.Provider value={{userContext}}>
    <InusualContext.Provider value={inusualContext}>
  <NotiContext.Provider value={notiContext}>
 

  
    {element}

</NotiContext.Provider>
</InusualContext.Provider>
   </UserContext.Provider>)

 






}






export default () =>
 <BrowserRouter>
  <App />

 </BrowserRouter>