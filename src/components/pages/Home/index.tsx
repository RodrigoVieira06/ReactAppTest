import React from 'react';
import CalendarApp from '../../common/CalendarApp';
import Inicio from './Inicio';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Inicio />
            <div className='calendar-container'>
                <CalendarApp />
            </div>
        </div>
    );
};

export default Home;