import React from 'react';
import Informacao from './Informacao';

const Dashboard = () => {
    return (
        <div className='col'>
            <span className='titulo'>
                DASHBOARD
            </span>
            <div className='row mt-3'>
                <div className='col-sm-6'>
                    <Informacao texto='Faturamento do dia:' />
                </div>
                <div className='col-sm-6'>
                    <Informacao texto='Agendamentos do dia:' />
                    <Informacao texto='Pacientes do dia:' />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;