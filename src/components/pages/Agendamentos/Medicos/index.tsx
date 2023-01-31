import Scrollbars from 'react-custom-scrollbars-2';
import medicos from '../../../../data/medicos.json';
import { IMedico } from '../../../../models/IMedico';
import Medico from './Medico';

function buscarMedicos(): Array<JSX.Element> {
    const linhas: Array<JSX.Element> = [];

    medicos.forEach((medico: IMedico) => {
        linhas.push(
            <Medico key={medico.nome} nome={medico.nome} funcao={medico.funcao} />
        );
    });

    return linhas;
}


export default function Agendamentos() {
    const medicoslista = buscarMedicos();

    return (
        <div className='row mt-2 d-flex justify-content-center'>
            <span className='titulo mt-2'>
                Médicos disponíveis
            </span>
            <Scrollbars style={{ height: 150, width: 400 }}>
                {medicoslista}
            </Scrollbars>
        </div>
    );
}