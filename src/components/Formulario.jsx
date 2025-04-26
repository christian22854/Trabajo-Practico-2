import React, { useState } from 'react';
import '../style/Formulario.css';

const Formulario = ({ Verificado }) => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario === 'admin' && contraseña === '123456') {
            Verificado();
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <main>
            <div class="login-contenedor">
                <form class="login-formulario" onSubmit={handleSubmit}>
                    <label>Usuario:</label>
                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />

                    <label>Contraseña:</label>
                    <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />

                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </main>
    );
};

export default Formulario;