import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card({ nombre, titulo, descripcion, frases, nacimiento, muerte, color, imagen }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card" style={{ border: `5px solid ${color}`, backgroundColor: color }}>
      <img src={imagen} alt={nombre} className="card-image" />
      <h2>{nombre}</h2>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p><em>{frases}</em></p>
      <p><strong>Nacimiento:</strong> {nacimiento}</p>
      <p><strong>Muerte:</strong> {muerte}</p>
      <div className="card-actions">
      <button onClick={() => alert(`Más información sobre ${nombre}`)}>Ver más</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  frases: PropTypes.string.isRequired,
  nacimiento: PropTypes.string.isRequired,
  muerte: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default Card;
