import React, { useState } from 'react';
import axios from 'axios';
import serviciousuarios from "../../services/Administracion"
function App() {
  const [nombre, setNombre] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState(null);

  const buscarNombre = async (e) => {
    e.preventDefault();
    setResultado('');
    setError(null);

    try {
        const response = await serviciousuarios.consultapep(nombre);
      setResultado(response.data.resultado); // Mostrar solo el resultado recibido
    } catch (error) {
      setError('Ocurrió un error al buscar el nombre.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Buscar en OpenSanctions</h1>
      <form onSubmit={buscarNombre}>
        <input
          type="text"
          placeholder="Ingrese un nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: '300px', padding: '10px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '10px' }}>
          Buscar
        </button>
      </form>

      {resultado && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', textAlign: 'left' }}>
          <h2>Resultado:</h2>
          <p>{resultado}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
