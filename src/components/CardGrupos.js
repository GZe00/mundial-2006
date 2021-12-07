import React from 'react'

const CardGrupos = ({grupo, equipos}) => {

    const renderizaEquipos = equipos => equipos.map(equipo => <p>{equipo}</p>)

    const [gruposEquipo, setGruposEquipo] = React.useState()

    React.useEffect(() => {
        setGruposEquipo(renderizaEquipos(equipos));
    }, [equipos])

    return (
            <div className=' bg-gray-200 mx-5 my-3' style={{width: '200px'}}>
                Grupo {grupo ?? 'Sin datos'}
                <div className='flex flex-col'>
                    {gruposEquipo ?? 'Sin datos'}
                </div>
            </div>
    )
}

export default CardGrupos
