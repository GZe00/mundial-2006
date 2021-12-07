import React from 'react';
import ResaltaTexto from '../components/ResaltaTexto';

const Alemania2006 = () => {
    return (
        <div>
            <p>
                La República Federal de Alemania está en el corazón de Europa y comunica a;l este con el oeste y al norte con el sur. Desde la reunificación de los dos estados alemanes en 1990, el país europeo más poblado limita con nueve vecinos: Polonia y República Checa al este; Austria y Suiza al sur; Francia, Bélgica, Luxemburgo y Holanda al oeste, y Dinamarca al norte.
                El territorio tiene una extensión de <ResaltaTexto texto={'357,021'} color={'blue-600'}/> km² y una pobliación de alrededor de 82.4 millones de habitantes.
            </p>
            <div>
                <p className='font-bold'>LOS ESTADOS FEDERALES</p>
                <p>Alemania está integrada por 16 estados</p>
            </div>

        </div>
    )
}

export default Alemania2006
