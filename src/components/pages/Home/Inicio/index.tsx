import Avisos from './Avisos';
import Dashboard from './Dashboard';

const Inicio = () => {
    return (
        <>
            <div className='mt-3'>
                <Dashboard />
            </div>
            <div className='mt-5'>
                <Avisos />
            </div>
        </>
    );
};

export default Inicio;