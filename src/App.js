import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import cientificos from './utils/Utils';

function App() {
  
  const [orden, setOrden] = useState('nombre'); // Por defecto, ordena por nombre

  
  const cambiarOrden = (nuevoOrden) => {
    setOrden(nuevoOrden);
  };

  
  const cientificosOrdenados = cientificos.sort((a, b) => {
    if (orden === 'nombre') {
      return a.nombre.localeCompare(b.nombre);
    } else if (orden === 'fecha') {
      return a.nacimiento.localeCompare(b.nacimiento);
    }
    return 0;
  });

  return (
    <div className="container">
      <h1 className="title">Científicos Famosos y Exitosos</h1>
      <div className="buttons-container">
        <button
          style={{ backgroundColor: 'gris', marginRight: '10px' }}
          onClick={() => cambiarOrden('nombre')}
        >
          Ordenar por Nombre
        </button>
        <button
          style={{ backgroundColor: 'gris' }}
          onClick={() => cambiarOrden('fecha')}
        >
          Ordenar por Fecha
        </button>
      </div>
      <div className="cards-container">
        {cientificosOrdenados.map((cientifico) => (
          <Card
            key={cientifico.key}
            nombre={cientifico.nombre}
            titulo={cientifico.titulo}
            descripcion={cientifico.descripcion}
            frases={cientifico.frasecelebre}
            nacimiento={cientifico.nacimiento}
            muerte={cientifico.muerte}
            color={cientifico.color}
            imagen={cientifico.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
