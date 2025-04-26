import React, { useState } from 'react';
import '../style/Formulario.css';

const Formulario = ({ Verificado }) => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario === 'gamu' && contraseña === '2201') {
            Verificado();
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div class="login-contenedor">
            <form class="login-formulario" onSubmit={handleSubmit}>
                <label>Usuario:</label>
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />

                <label>Contraseña:</label>
                <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />

                <button type="submit">Ingresar</button>
            </form>
        </div>

    );
};

export default Formulario;