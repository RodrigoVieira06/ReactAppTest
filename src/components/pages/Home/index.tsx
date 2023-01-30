import React from 'react';
import CalendarApp from '../../common/CalendarApp';
import Dashboard from './Dashboard';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Dashboard />
            <CalendarApp />
        </div>
    );
};

export default Home;