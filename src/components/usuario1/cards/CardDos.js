import * as React from 'react';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import "./CardStyle.css";
import { Button } from '@mui/material';
import ModalForm from '../../../components/usuario1/ModalTransferencia'
import { useNavigate } from 'react-router-dom';


const CardDos = () => {
const navigate=useNavigate()


const ir = () => {
    navigate('/usuario/transferencias')
}

    return (


        <div className="body__Page">

            <div className="container__article">
           
                <div onClick={ir} className="box__article">
                
                   <i onClick={ir}> < CreditScoreIcon fontSize="large"/></i>
                      <h5 onClick={ir}>Informar Transferencia </h5>
                      
                  
                    
                </div>
               
                
            </div>
        </div>
    );
}

export default CardDos;