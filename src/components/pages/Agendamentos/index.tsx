import CalendarApp from '../../common/CalendarApp';
import Medicos from './Medicos';
import Consultas from './Consultas';

export default function Agendamentos() {
    return (
        <div className='row body-content'>
            <div className='col-sm-8 left-content'>
                <Consultas />
            </div>
            <div className='col-sm-4 right-content'>
                <div className='col'>
                    <div className='row-sm-6 d-flex justify-content-center'>
                        <Medicos />
                    </div>
                    <div className='row-sm-6 d-flex justify-content-center'>
                        <CalendarApp />
                    </div>
                </div>
            </div>
        </div>
    );
}