import React from 'react';
import Informacao from './Informacao';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <span className='titulo'>
                DASHBOARD
            </span>
            <div className='dashboard-container'>
                <Informacao texto='Faturamento do dia:'/>
                <Informacao texto='Agendamentos do dia:'/>
                <Informacao texto='Pacientes do dia:'/>
            </div>
        </>
    );
};

export default Dashboard;