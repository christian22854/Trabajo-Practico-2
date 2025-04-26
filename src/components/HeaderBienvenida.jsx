import React from 'react';
import '../style/Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="headerB">
      <span class="iconoB">🔒</span>
      <h1>Bienvenido</h1>
      <button className="logout-boton" onClick={onLogout}>
        Cerrar Sesión
      </button>
    </header>
  );
};

export default Header;