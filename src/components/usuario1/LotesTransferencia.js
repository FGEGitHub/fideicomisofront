import servicioLotes from '../../services/lotes'
import React, { useEffect, useState, Fragment } from "react";
import { Button } from '@mui/material';
import ModalPago from '../../components/usuario1/ModalTransferencia'


const LotesTransferencia = (props) => {
    const [lotes, setLotes] = useState([''])
    useEffect(() => {

        traer()

    }, [])


    const traer = async () => {

        const lotes = await servicioLotes.lotesCliente2(props.cuil_cuit)
        console.log(lotes)
        setLotes(lotes)




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