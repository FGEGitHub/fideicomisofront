

import Footer from '../../../components/usuario1/Footer';
/* import Navbar from './componentes/usuario1/Navbar'; */
import Banner from '../../../components/usuario1/Banner'
import Cards from '../../../components/usuario1/Cards'
import Faq from '../../../components/usuario1/Faq'
import Navbar from '../../../components/usuario1/Navbar1'
import Notificaciones from '../../../components/usuario1/Notificaciones'
import  useUser from '../../../hooks/useUser'





export default function MenuUsuario2() {

    const usuario  = useUser().userContext


    return (
        <>
            <div className="App">


                <Navbar /> 
                <br/><br/><br/><br/>
                <Notificaciones 
                    />  
                <Banner />
                <Cards />
                <Faq />
                <Footer />

            </div>


        </>
    );

}