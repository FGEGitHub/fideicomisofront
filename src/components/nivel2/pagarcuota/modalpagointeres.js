import React, { useEffect, useState } from 'react';
import serviciopagos from '../../../services/pagos';

const ModalPagos = (props) => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [pagos, setPagos] = useState([]);
  const [pagoSeleccionado, setPagoSeleccionado] = useState('');
  const [tipoOperacion, setTipoOperacion] = useState(''); // nuevo estado


      const cargarPagos = async () => {
        try {
          
          const data = await serviciopagos.traerpagosdeuncliente(props.cuil_cuit);
          console.log(data)
          setPagos(data);
        } catch (error) {
          console.error('Error al traer pagos:', error);
        }
      };
      const puedeEnviar = () => {
        if (tipoOperacion === 'pago interes') {
          return pagoSeleccionado !== '';
        } else if (tipoOperacion === 'diferencia minima') {
          return true;
        }
        return false;
      };
 

      const handleEnviar = async () => {
      
          const datosAEnviar = {
            id_interes: props.id_interes,
            id_pago: pagoSeleccionado,
            tipo_operacion: tipoOperacion,
          };
      
          console.log('Datos a enviar:', datosAEnviar);
          
          // Acá hacés la llamada a tu servicio o API
          // Ejemplo:
          //
           await serviciopagos.registrarInteres(datosAEnviar);
      
          setModalAbierto(false);
        } 
        

  return (
    <>
      <button style={{ whiteSpace: 'nowrap' }} onClick={() =>{cargarPagos()
         setModalAbierto(true)}}>Pagar interes</button>

      {modalAbierto && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
          <h2>Tipo de operación:</h2>
  <select
    value={tipoOperacion}
    onChange={(e) => setTipoOperacion(e.target.value)}
  >
    <option value="">-- Seleccioná tipo de operación --</option>
    <option value="pago interes">Pago Interés</option>
    <option value="diferencia minima">Diferencia Mínima</option>
  </select>
            <h2>Seleccionar pago en el que se realizo</h2>
            <select
              value={pagoSeleccionado}
              onChange={(e) => setPagoSeleccionado(e.target.value)}
            >
              <option value="">-- Seleccioná un pago --</option>
              {pagos.map((pago) => (
                <option key={pago.id} value={pago.id}>
                  {`${pago.mes}/${pago.anio} - $${pago.monto}`}
                </option>
              ))}
            </select>
            <div style={{ marginTop: '1rem' }}>
  
</div>
            <div style={{ marginTop: '1rem' }}>
            <button onClick={handleEnviar} disabled={!puedeEnviar()}>Enviar</button>              <button onClick={() => setModalAbierto(false)} style={{ marginLeft: '1rem' }}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    minWidth: '300px',
  },
};

export default ModalPagos;
