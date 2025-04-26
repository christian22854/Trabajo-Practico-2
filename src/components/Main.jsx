import React from 'react';
import Formulario from './Formulario';
import '../style/Main.css';
import Integrantes from './Integrantes';


const Main = ({ usuarioVerificacion, Verificado, alumno2 }) => {

    console.log(usuarioVerificacion);
    console.log(Verificado);
    return (
        <div>
            <main>
                {usuarioVerificacion ? <Integrantes alumno2={alumno2}/> : <Formulario Verificado={Verificado} />}
            </main>
        </div>
    );
};

export default Main;