import React from 'react';
import CalendarApp from '../../common/CalendarApp';
import Medicos from './Médicos';
import Consultas from './Consultas';
import './Agendamentos.css';

export default function Agendamentos() {
    return (
        <div className='agendamentos-container'>
            <Consultas />
            <div className='rightColumn-container'>
                <Medicos />
                <div className='calendarConsultas-container'>
                    <CalendarApp />
                </div>
            </div>
        </div>
    );
}