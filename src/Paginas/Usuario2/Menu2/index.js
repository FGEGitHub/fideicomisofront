import Tabla from '../../components/Table'
import Menu2 from '../Paginas/nivel2/MenuUsuario2'
import NotificacionLegajo from '../../../components/Ingresos'
const Login = () => {
    useEffect(() => {

        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          servicioUsuario.setToken(user.token)
    
    
        }
        /*  if (user){
           navigate('/login')
         } */
    
        //
      }, [])
    return (
        <br/>

    )

}
 export default Login