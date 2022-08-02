


import Navbar from '../../../components/usuario1/Navbar1'
import  useUser from '../../../hooks/useUser'
import LotesCuotas from '../../../components/usuario1/LotesCuotas '
import ConstultaCuota from '../../../components/usuario1/ConsultaCuota'





export default function Transferencias() {
    const usuario  = useUser().userContext
    console.log(usuario)

    return (
        <>
            <div className="App">
            <ConstultaCuota />   

              
                

            </div>


        </>
    );

}