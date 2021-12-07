import React from 'react'

const ResaltaTexto = ({texto, color}) => {
    return (
        <span className={`text-${color ?? 'black'} font-bold`}>
            {texto}
        </span>
    )
}

export default ResaltaTexto
