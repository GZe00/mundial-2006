import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/effect_opacity_gradient.css'
import EstadioBerlin from '../assets/estadios/berlin.jpg'
import Navegacion from '../components/Navegacion';

const Home = () => {

    const [yearCurrent] = React.useState((new Date()).getFullYear());

    // console.log(EstadioBerlin)

    return (
        <div className='w-full h-screen'>
            <div className='effect z-10 top-0 absolute w-full h-full' />
            <img className='left-0 z-0 top-0 absolute object-cover w-full h-full' style={{ opacity: '1' }} src={EstadioBerlin} />

            <nav className='absolute text-white py-8 z-50 right-0'>
                <ul className='flex justify-end'>
                    <Link className={`text-white text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/calendario'>Calendario</Link>
                    <Link className={`text-white text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/grupos'>Grupos</Link>
                    <Link className={`text-white text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/paises'>Paises</Link>
                    <Link className={`text-white text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/historia'>Historia</Link>
                    <Link className={`text-white text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/leyendas_del_futbol'>Leyendas del Fútbol</Link>
                </ul>
            </nav>
            <div className='absolute w-full h-screen flex items-end pb-32 text-4xl justify-center z-30'>
                <Link to='/alemania_2006' className='text-white rounded p-3 cursor-pointer' style={{ border: '5px solid #DEBD3C' }}>
                    Comenzar
                </Link>
            </div>
            <div className='relative z-20 h-full flex flex-col justify-center ml-6'>
                <div className='max-w-max h-auto p-6 rounded' style={{ backgroundColor: 'rgba(255,255,255,0.45)' }}>
                    <p className='text-8xl' style={{ color: '#000000', textShadow: '1px 1px 2px black' }}>Alemania 2006</p>
                    <p className='my-4 text-5xl' style={{ color: 'red', textShadow: '1px 1px 2px black' }} >Un vistazo al pasado</p>
                    <p className='text-xl font-semibold' style={{ color: 'yellow', textShadow: '1px 1px 2px black' }}>Descubre la cultura e historia del mundo de hace <span className='underline'>{yearCurrent - 2006} años</span></p>
                </div>
            </div>

        </div>
    )
}

export default Home
