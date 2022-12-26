import Tabla from '../../components/Table'
import Menu2 from '../Paginas/nivel2/MenuUsuario2'
import NotificacionLegajo from '../../../components/Ingresos'
const Login = () => {
  useEffect(() => {
    
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      
    if (loggedUserJSON) {
      
      const user = JSON.parse(loggedUserJSON)
      if (user.nivel != 2){
        window.localStorage.removeItem('loggedNoteAppUser')
   

      }else{

        setLogueado(true)
      }
    
      //servicioUsuario.setToken(user.token)  
     
      
    }else{
      navigate('/login')
     
    }
   
  }, []) 
    return (
        <br/>

    )

}
 export default Login