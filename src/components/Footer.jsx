import React from 'react';
import '../style/Footer.css';

const Footer = ({ alumnos }) => {

  const nombresIntegrantes = alumnos
    .map(alumno => `${alumno.nombre} ${alumno.apellido}`)
    .join(', ');

  return (
    <footer className="footer">
      <p>Integrantes: {nombresIntegrantes} </p>
    </footer>
  );
};

export default Footer;
