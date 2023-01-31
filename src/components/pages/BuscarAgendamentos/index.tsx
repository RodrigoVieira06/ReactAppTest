import CalendarApp from '../../common/CalendarApp';
import Consultas from '../Agendamentos/Consultas';
import Medicos from '../Agendamentos/Médicos';

export default function BuscarAgendamentos() {
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