import React from 'react'
import css from '../style/Integrantes.css'

const Integrantes = ({ alumno1, alumnoL,alumnog }) => {
    return (
        <body>
            <div className='contenedor'>
                <div className='tarjeta'>
                    <ul>
                        <li>{alumno1.nombre}</li>
                        <li>{alumno1.apellido}</li>
                        <li>{alumno1.legajo}</li>
                        <li><a href={alumno1.github}>Github</a></li>
                        <li><figure><img src={require(`../resources/${alumno1.foto}`)} alt="foto alumno Juanma" /></figure></li>
                    </ul>
                </div>

                <div className='tarjeta'>
                    <ul>
                        <li>{alumnoL.nombre}</li>
                        <li>{alumnoL.apellido}</li>
                        <li>{alumnoL.legajo}</li>
                        <li><a href={alumnoL.github}>Github</a></li>
                        <li><figure><img src={require(`../resources/${alumnoL.foto}`)} alt="foto alumno Lucas" /></figure></li>
                    </ul>
                </div>

                <div className='tarjeta'>
                    <ul>
                        <li>{alumnog.nombre}</li>
                        <li>{alumnog.apellido}</li>
                        <li>{alumnog.legajo}</li>
                        <li><a href={alumnog.github}>Github</a></li>
                        <li><figure><img src={require(`../resources/${alumnog.foto}`)} alt="foto alumno christian" /></figure></li>
                    </ul>
                </div>

            </div>

        </body>

    )
}

export default Integrantes