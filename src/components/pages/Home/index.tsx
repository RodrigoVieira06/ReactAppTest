import CalendarApp from '../../common/CalendarApp';
import Inicio from './Inicio';
import ResumoAgenda from './ResumoAgenda';

const Home = () => {
    return (
        <div className='row body-content'>
            <div className='col-sm-8 left-content'>
                <Inicio />
            </div>
            <div className='col-sm-4 right-content'>
                <div className='col'>
                    <div className='row-sm-6 d-flex justify-content-center'>
                        <CalendarApp />
                    </div>
                    <div className='row-sm-6 d-flex justify-content-center'>
                        <ResumoAgenda />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;