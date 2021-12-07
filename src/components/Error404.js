import React from 'react';
import { Link } from 'react-router-dom';
import BG from '../assets/bg-1.png';
import '../assets/Fonts.css'
import { useHistory } from "react-router-dom";

const Error404 = () => {
    let history = useHistory()
    let pathName = ((((history.location.pathname).split("/")).join("")).split("_")).join(" ");

    const [pathCurrent, setPathCurrent] = React.useState('');
    
    React.useEffect(() => {
        setPathCurrent(pathName[0].toUpperCase() + pathName.replace(pathName[0], ""))
    }, [pathName])

    return (
        <div className='w-full h-screen relative' >
            <nav className='absolute text-white py-8 z-50 right-0'>
            <ul className='flex justify-end'>
                <Link className={`text-black text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/calendario'>Calendario</Link>
                <Link className={`text-black text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/grupos'>Grupos</Link>
                <Link className={`text-black text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/paises'>Paises</Link>
                <Link className={`text-black text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/historia'>Historia</Link>
                <Link className={`text-black text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/leyendas_del_futbol'>Leyendas del Fútbol</Link>
            </ul>
        </nav>
            <img src={BG} className='absolute w-full h-full object-cover' style={{ zIndex: '-1' }} />
            <div className='flex flex-col h-full items-center justify-center pb-4'>
                <p className='text-9xl' style={{fontFamily: 'Meow Script'}}>404</p>
                <p className='text-6xl my-3 text-center'>Error 404 - Página "<span>{pathCurrent ?? '--'}</span>" no encontrada</p>
                <p className='text-2xl mt-4'>Estoy aún construyendo el sitio y estará lista en 3, 5... quizás 7</p>
                <Link className='mt-6' to='/' style={{backgroundColor: 'rgba(251,255,0, 0.15)'}}><p className='text-xl rounded-lg px-12 p-3 cursor-pointer z-20' style={{ border: '3px solid #000' }}> Continuar</p></Link>
            </div>
        </div>
    )
}

export default Error404
