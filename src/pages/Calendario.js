import React from 'react'
import Navegacion from '../components/Navegacion'
import CardGrupos from '../components/CardGrupos'

const Calendario = () => {
    return (
        <div className='w-full h-screen'>
            <Navegacion />
            <div className='flex flex-wrap justify-evenly'>
            <CardGrupos grupo="A" equipos={['Alemania', 'Costa Rica', 'Polonia', 'Ecuador']}/>
            <CardGrupos grupo="B" equipos={['Inglaterra', 'Paraguay', 'Trinidad y Tobago', 'Suecia']}/>
            <CardGrupos grupo="C" equipos={['Argentina', 'Costa de Marfil', 'Serbia y Montenegro', 'Holanda']}/>
            <CardGrupos grupo="D" equipos={['México', 'Irán', 'Angola', 'Portugal']}/>
            <CardGrupos grupo="E" equipos={['Italia', 'Ghana', 'Estados Unidos', 'República Checa']}/>
            <CardGrupos grupo="F" equipos={['Brasil', 'Croacia', 'Australia', 'Japón']}/>
            <CardGrupos grupo="G" equipos={['Francia', 'Suiza', 'República de Corea', 'Togo']}/>
            <CardGrupos grupo="H" equipos={['España', 'Ucrania', 'Túnez', 'Arabia Saudita']}/>
            </div>
        </div>
    )
}

export default Calendario
