import React from 'react';
import image from "../../Assets/undraw_under_construction_-46-pa.svg";
import "./Banner.css";
import Notificaciones from './Notificaciones'
const Banner = () => {
    return ( 
       
        <div className="contaniner_all">
            <div className="cover">
                <div className="container_cover">
                     <div className="container_info">
                        <h1>ACCEDE</h1>
                        <h2>A TU VIVIENDA</h2>
                        <p>El desarrollo urbanístico está ubicado en el barrio Santa Catalina al sur de la ciudad de Corrientes. Se encuentra a 15 minutos del centro y a 7 minutos de la terminal de ómnibus de Corrientes.
                            Este proyecto posee casas unifamiliares y departamentos de 2 dormitorios, con terminaciones de obra de gran calidad. Además tiene excelentes vías de acceso, cercanía a diferentes centros educativos, recreativos y de salud, y una completa infraestructura de servicios públicos y espacios verdes.</p>
                        <button className='btn-again'>COMENZAR</button>
            </div>
            <div className="container__vector">
                <img src={image} alt="" /> 
            </div>
                    </div>
                </div>
        </div>
    );
};

export default Banner;