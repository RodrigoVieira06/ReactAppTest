import React from 'react';
import CalendarApp from '../../common/CalendarApp';
import Inicio from './Inicio';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Inicio />
            <CalendarApp />
        </div>
    );
};

export default Home;