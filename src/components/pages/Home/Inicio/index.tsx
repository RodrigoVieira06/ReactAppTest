import React from 'react';
// import Avisos from './Avisos';
import Dashboard from './Dashboard';
import './Inicio.css';

const Inicio = () => {
    return (
        <div className='inicio-container'>
            <Dashboard />
            {/* <Avisos /> */}
        </div>
    );
};

export default Inicio;