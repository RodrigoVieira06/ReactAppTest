import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Consulta.css';

interface IConsultaProps {
    horario: string;
    nome?: string;
    cpf?: string;
    datanascimento?: string;
    endereco?: string;
}

const Consulta = ({ horario, nome, cpf, datanascimento, endereco }: IConsultaProps) => {
    return (
        <div className='row consulta'>
            <div className='col-sm-3'>
                <span className='horario'>{horario}</span>
            </div>
            <div className='col-sm-6'>
                <span className='dados-consulta'>Rodrigo Vieira</span>
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