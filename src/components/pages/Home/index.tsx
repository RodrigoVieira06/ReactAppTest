import React from 'react';
import CalendarApp from '../../common/CalendarApp';
import Inicio from './Inicio';

const Home = () => {
    return (
        <div className='row main-content'>
            <div className='col-sm-8 left-content'>
                <Inicio />
            </div>
            <div className='col-sm-4 right-content'>
                <div className='col'>
                    <div className='row-sm-6 d-flex justify-content-center'>
                        <CalendarApp />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;