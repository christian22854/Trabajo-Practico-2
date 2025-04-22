import React, { useState } from 'react';
import HeaderInicioSesion from '../components/HeaderInicioSesion';
import HeaderBienvenida from '../components/HeaderBienvenida';
import Footer from '../components/Footer';
import Main from '../components/Main';


const PaginaPrincipal = ({alumno1}) => {

    const [usuarioVerificacion, setUsuarioVerificacion] = useState(false);
    const Verificado = () => {
        setUsuarioVerificacion(true);
    }

    return (
        <div>

            {usuarioVerificacion ? <HeaderBienvenida /> : <HeaderInicioSesion />}
            <Main usuarioVerificacion={usuarioVerificacion} Verificado={Verificado} alumno1={alumno1}/>
            <Footer />

        </div>
    )
}

export default PaginaPrincipal