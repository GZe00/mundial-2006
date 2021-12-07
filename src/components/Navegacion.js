import React from 'react';
import { Link } from 'react-router-dom';


const Navegacion = ({colorText}) => {
    return (
        <nav className='pt-8'>
            <ul className='flex justify-end'>
                <Link className={`${colorText ?? null} text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/calendario'>Calendario</Link>
                <Link className={`${colorText ?? null} text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/grupos'>Grupos</Link>
                <Link className={`${colorText ?? null} text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/paises'>Paises</Link>
                <Link className={`${colorText ?? null} text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/historia'>Historia</Link>
                <Link className={`${colorText ?? null} text-2xl mx-4 cursor-pointer font-semibold hover:underline`} to='/leyendas_del_futbol'>Leyendas del Fútbol</Link>
            </ul>
        </nav>
    )
}

export default Navegacion
