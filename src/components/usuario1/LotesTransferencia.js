import servicioUsuario1 from '../../services/usuario1'
import React, { useEffect, useState, Fragment } from "react";
import { Button } from '@mui/material';
import ModalPago from '../../components/usuario1/ModalTransferencia'


const LotesTransferencia = (props) => {
    const [lotes, setLotes] = useState([''])
    useEffect(() => {

        traer()

    }, [])


    const traer = async () => {
        console.log('lotes')
        const preba = JSON.parse( window.localStorage.getItem('loggedNoteAppUser'))
     
        const lotes = await servicioUsuario1.lotesCliente(preba.cuil_cuit)
        setLotes(lotes[0])




    }
    const vercuotas = async () => {
        console.log('click')

    }


    return (

        <Fragment>
            <br></br><br></br><br></br><br></br>
                
            {
                lotes.map((item, index) =>
                    <div>
                        <Button key={index} variant="contained" onClick={() => { vercuotas(item['id']) }}>      {item['zona']}F{item['fraccion']}M{item['manzana']}L{item['lote']}</Button>
                        <ModalPago 
                        id={item['id']}
                        zona={item['zona']}
                        fraccion={item['fraccion']}
                        manzana= {item['manzana']}
                        lote={item['lote']}
                        />

                        


                    </div>
                )
            }



        </Fragment>

    )

}
export default LotesTransferencia