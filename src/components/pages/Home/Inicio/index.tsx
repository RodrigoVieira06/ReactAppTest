import React from 'react';
import Dashboard from './Dashboard';
import './Inicio.css';

const Inicio = () => {
    return (
        <div className='inicio-container'>
            <Dashboard />
            <span className='titulo'>
                AVISOS E LEMBRETES
            </span>
        </div>
    );
};

export default Inicio;