    import React from 'react'


    const Integrantes = ({ alumno1 }) => {
        return (
            <div>

                <ul>
                    <li>{alumno1.nombre}</li>
                    <li>{alumno1.apellido}</li>
                    <li>{alumno1.legajo}</li>
                    <li><a href={alumno1.github}>Github</a></li>
                    <li><figure><img src={require(`../resources/${alumno1.foto}`)} alt="foto alumno 1" /></figure></li>
                </ul>
            </div>
        )
    }

export default Integrantes