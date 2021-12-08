import React from 'react';
import '../assets/effect_opacity_gradient.css'

const CardPais = ({pais, key}) => {

    let bandera = require(`../assets/paises/${pais}/bandera/${pais}.png`);

    const [informacionPais] = React.useState(require(`../assets/paises/${pais}/informacion/informacion.js`).informacion())


    return (
        <div className='bg-black mx-3 my-4 shadow' style={{borderRadius: '20px 20px 20px 20px', width: '300px',height: '500px', boxShadow: '9px 11px 17px -4px #000000'}}>
            <div className='w-full relative'>
                <img key={key} src={ bandera.default } alt={`Bandera ${bandera}`} style={{height:'222px', borderRadius: '20px 20px 0 0'}} className='w-full'/>
                <div className='absolute effectPais top-0 text-white w-full h-full'/>
            </div>
            <div className='text-white ml-4'>
                {
                    informacionPais.datosGenerales ? 
                    <>
                        <p className='text-center text-xl mb-3'>
                            Pais: <span className='underline'>{informacionPais.datosGenerales.pais}</span>
                        </p>
                        <p>
                            Nombre Oficial: <span className='underline'>{informacionPais.datosGenerales.nombreOficial}</span>
                        </p>
                        <p>
                            Capital: <span className='underline'>{informacionPais.datosGenerales.capital}</span>
                        </p>
                        <p>
                            Población: <span className='underline'>{informacionPais.datosGenerales.poblacion}</span>
                        </p>
                        <p>
                            Moneda: <span className='underline'>{informacionPais.datosGenerales.moneda}</span>
                        </p>
                    </> : 'cargando'
                }
            </div>
            <div className='text-white text-center mt-12 w-full mx-auto cursor-pointer' style={{width: 'max-content',borderBottom: '2px solid #FFFFFF'}}>Saber Más</div>
        </div>
    )
}

export default CardPais
