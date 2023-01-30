import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Consulta.css';

const Consulta = () => {
    return (
        <div className='consulta-container'>
            <span className='horario'>00:00</span>
            <span className='dados-consulta'>Rodrigo Vieira</span>
            <FontAwesomeIcon icon={'calendar-alt'}  className='icons-consulta'/>
            <FontAwesomeIcon icon={'edit'}  className='icons-consulta'/>
            <FontAwesomeIcon icon={'trash'}  className='icons-consulta'/>
        </div>
    );
};

export default Consulta;