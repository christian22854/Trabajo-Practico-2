import React from 'react'


const Integrantes = ({ alumno2 }) => {
    return (
        <div>

            <ul>
                <li>{alumno2.nombre}</li>
                <li>{alumno2.apellido}</li>
                <li>{alumno2.legajo}</li>
                <li><a href={alumno2.github}>Github</a></li>
                <li><figure><img src={require(`../style/${alumno2.foto}`)} alt="foto del alumno 2" /></figure></li>
            </ul>
        </div>
    )
}

export default Integrantes