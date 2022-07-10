


import Navbar from '../../../components/Navbar'
import  useUser from '../../../hooks/useUser'
import LotesCliente from '../../../components/usuario1/LotesTransferencia'





export default function Transferencias() {
    const usuario  = useUser().userContext
    console.log(usuario)

    return (
        <>
            <div className="App">


                <Navbar />
                <LotesCliente
                cuil_cuit ={usuario.cuil_cuit} />

            </div>


        </>
    );

}