import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Consulta.css';

interface IConsultaProps {
    horario: string;
    nome?: string;
}

const Consulta = ({ horario, nome }: IConsultaProps) => {
    return (
        <div className='row consulta'>
            <div className='col-sm-3'>
                <span className='horario'>{horario}</span>
            </div>
            <div className='col-sm-6'>
                <span className='dados-consulta'>{nome}</span>
            </div>
            <div className='col-sm-1'>
                <FontAwesomeIcon icon={'calendar-alt'} color='white' size='lg' />
            </div>
            <div className='col-sm-1'>
                <FontAwesomeIcon icon={'edit'} color='white' size='lg' />
            </div>
            <div className='col-sm-1'>
                <FontAwesomeIcon icon={'trash'} color='white' size='lg' />
            </div>

        </div>
    );
};

export default Consulta;