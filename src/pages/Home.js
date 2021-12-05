import React from 'react';

import '../assets/effect_opacity_gradient.css'
import EstadioBerlin from '../assets/estadios/berlin.jpg'

const Home = () => {

    const [yearCurrent] = React.useState((new Date()).getFullYear());

    // console.log(EstadioBerlin)

    return (
        <div className='w-full h-screen'>
            <div className='effect z-10 top-0 absolute w-full h-full' />
            <img className='left-0 z-0 top-0 absolute object-cover w-full h-full' style={{ opacity: '1' }} src={EstadioBerlin} />

            <nav className='absolute text-white my-8 z-30 right-0'>
                <ul className='flex justify-end'>
                    <li className='text-2xl mx-4 cursor-pointer font-semibold hover:underline'>Calendario</li>
                    <li className='text-2xl mx-4 cursor-pointer font-semibold hover:underline'>Grupos</li>
                    <li className='text-2xl mx-4 cursor-pointer font-semibold hover:underline'>Paises</li>
                    <li className='text-2xl mx-4 cursor-pointer font-semibold hover:underline'>Historia</li>
                    <li className='text-2xl mx-4 cursor-pointer font-semibold hover:underline'>Leyendas del Fútbol</li>
                </ul>
            </nav>
            <div className='absolute w-full h-screen flex items-end pb-32 text-4xl justify-center z-30'>
                <p className='text-white rounded p-3 cursor-pointer' style={{border: '5px solid #DEBD3C'}}>
                    Comenzar
                </p>
            </div>
            <div className='relative z-20 h-full flex flex-col justify-center ml-6'>
                <div className='max-w-max h-auto p-6 rounded' style={{backgroundColor: 'rgba(255,255,255,0.45)'}}>
                    <p className='text-8xl' style={{color: '#000000'}}>Alemania 2006</p>
                    <p className='my-4 text-5xl' >Un vistazo al pasado</p>
                    <p className='text-xl font-semibold' >Descubre la cultura e historia del mundo de hace <span className='underline'>{yearCurrent - 2006} años</span></p>
                </div>
            </div>

        </div>
    )
}

export default Home
