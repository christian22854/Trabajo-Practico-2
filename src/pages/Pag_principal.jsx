import React, { useState } from 'react';
import HeaderInicioSesion from '../components/Headerinic';
import HeaderBienvenida from '../components/HeaderB';
import Footer from '../components/Footer';
import Main from '../components/Main';


const Pag_principal = ({alumno2}) => {

    const [usuarioVerificacion, setUsuarioVerificacion] = useState(false);
    const Verificado = () => {
        setUsuarioVerificacion(true);
    }

    return (
        <div>

            {usuarioVerificacion ? <HeaderBienvenida /> : <HeaderInicioSesion />}
            <Main usuarioVerificacion={usuarioVerificacion} Verificado={Verificado} alumno2={alumno2}/>
            <Footer />

        </div>
    )
}

export default Pag_principal