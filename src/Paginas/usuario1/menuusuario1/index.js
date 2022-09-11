

import Footer from '../../../components/usuario1/Footer';
/* import Navbar from './componentes/usuario1/Navbar'; */
import Banner from '../../../components/usuario1/Banner'
import Cards from '../../../components/usuario1/Cards'
import Faq from '../../../components/usuario1/Faq'
import Navbar from '../../../components/usuario1/Navbar1'

import  useUser from '../../../hooks/useUser'
import { Divider, Toolbar } from '@mui/material';
import NotificacionesFlotantes from '../../..//components/usuario1/NotificacionesFlotantes'




export default function MenuUsuario1() {

    const usuario  = useUser().userContext


    return (
        <>
            <div disableSticky={false} className="App">


                <Navbar /> 
                <br/><br/><br/><br/><br/>
           
                   
                <Banner />
                <Divider variant="middle" />

                <Cards />
                <Divider variant="middle" />

                <Faq />
                <Toolbar />
                <Divider variant="middle" />

                <Footer />

            </div>


        </>
    );

}