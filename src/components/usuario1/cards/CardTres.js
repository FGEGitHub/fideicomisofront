import * as React from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import "./CardStyle.css";
import { useNavigate } from 'react-router-dom';

const CardTres = () => {
const navigate=useNavigate()

const ir = () => {
        navigate('/usuario/legajos')
    }



    return (
        <div className="body__Page">
            <div className="container__article">
    
                <div onClick={ir} className="box__article">
                   <i onClick={ir}> < FileCopyIcon /></i>
                    <h5 onClick={ir}>Ir a legajos</h5>
                </div>
               
                
            </div>
        </div>
    );
}

export default CardTres;