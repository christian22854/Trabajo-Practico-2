import React from 'react';
import '../style/Footer.css';

const Footer = ({ alumnos }) => {

  const NombresIntegrantes = alumnos
    .map(alumno => `${alumno.nombre} ${alumno.apellido}`)
    .join(', ');

  return (
    <footer className="footer">
      <p>Integrantes: {NombresIntegrantes} </p>
    </footer>
  );
};

export default Footer;
