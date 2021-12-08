import React from 'react'
import Navegacion from '../components/Navegacion'
import CardGrupos from '../components/CardGrupos'
import CardPais from '../components/CardPais'


const Calendario = () => {
    const [paises] = React.useState(['alemania','angola','arabia_saudita','argentina','australia','brasil','costa_de_marfil','costa_rica','croacia','ecuador','españa','estados_unidos','francia','ghana','holanda','inglaterra','iran','italia','japon','mexico','paraguay','polonia','portugal','republica_checa','republica_de_corea','serbia_y_montenegro','suecia','suiza','togo','trinidad_y_tobago','tunez','ucrania'])
    // const [paises] = React.useState(['alemania','angola','arabia_saudita', 'argentina'])

    const paisMini = () =>  paises.map((pais, key) => <CardPais pais={pais} key={key}/>)

    return (
        <div className='w-full h-screen'>
            <Navegacion />
            <div className='flex flex-wrap justify-evenly'>
                <CardGrupos grupo="A" equipos={['Alemania', 'Costa Rica', 'Polonia', 'Ecuador']} />
                <CardGrupos grupo="B" equipos={['Inglaterra', 'Paraguay', 'Trinidad y Tobago', 'Suecia']} />
                <CardGrupos grupo="C" equipos={['Argentina', 'Costa de Marfil', 'Serbia y Montenegro', 'Holanda']} />
                <CardGrupos grupo="D" equipos={['México', 'Irán', 'Angola', 'Portugal']} />
                <CardGrupos grupo="E" equipos={['Italia', 'Ghana', 'Estados Unidos', 'República Checa']} />
                <CardGrupos grupo="F" equipos={['Brasil', 'Croacia', 'Australia', 'Japón']} />
                <CardGrupos grupo="G" equipos={['Francia', 'Suiza', 'República de Corea', 'Togo']} />
                <CardGrupos grupo="H" equipos={['España', 'Ucrania', 'Túnez', 'Arabia Saudita']} />
            </div>
            <div className='container mx-auto'>
                <div className='w-full flex flex-wrap justify-center'>
                    {
                        paises ? paisMini() : 'cargando'
                    }
                </div>
            </div>
        </div>
    )
}

export default Calendario
