import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Consulta.css';

interface IConsultaProps {
    horario: string;
    nome?: string;
    situcao?: string;
}

const Consulta = ({ horario, nome, situcao }: IConsultaProps) => {
    return (
        <div className='row consulta'>
            <div className='col-sm-3'>
                <span className='horario'>{horario}</span>
            </div>
            <div className='col-sm-6'>
                <div className='row'>
                    <span className='dados-consulta'>{nome}</span>
                    <span className='dados-consulta'>{situcao}</span>
                </div>
            </div>
            <div className='col-sm-1'>
                {
                    nome
                        ? <FontAwesomeIcon icon={'calendar-alt'} color='white' size='lg' />
                        : <div></div>
                }
            </div>
            <div className='col-sm-1'>
                {
                    nome
                        ? <FontAwesomeIcon icon={'edit'} color='white' size='lg' />
                        : <div></div>
                }
            </div>
            <div className='col-sm-1'>
                {
                    nome
                        ? <FontAwesomeIcon icon={'trash'} color='white' size='lg' />
                        : <div></div>
                }
            </div>

        </div>
    );
};

export default Consulta;