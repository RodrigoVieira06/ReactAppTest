import React from 'react';
import Consulta from './Consulta';
import './Consultas.css';

const Consultas = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <div className='consultas-container'>
            <div className='data'>{formattedDate}</div>
            <Consulta/>
        </div>
    );
};

export default Consultas;