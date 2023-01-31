import Scrollbars from 'react-custom-scrollbars-2';
import consultas from '../../../../data/consultas.json';
import { IConsulta } from '../../../../models/IConsulta';
import HeaderAgenda from './HeaderAgenda';
import ResumoConsulta from './ResumoConsulta';

function agenda(): Array<JSX.Element> {
    const linhas: Array<JSX.Element> = [];

    // buscando consultas agendadas e atribuindo no resumo da agenda
    consultas.forEach((consulta: IConsulta) => {
        linhas.push(
            <ResumoConsulta key={consulta.horario} horario={consulta.horario} nome={consulta.paciente.nome} situcao={consulta.situacao} medico={consulta.medico} />
        );
    });

    return linhas;
}

const ResumoAgenda = () => {
    const consultaslista = agenda();
    return (
        <div className='row mt-2 d-flex justify-content-center'>
            <HeaderAgenda />
            <Scrollbars style={{ height: 200, width: 400 }}>
                {consultaslista}
            </Scrollbars>
        </div>
    );
};

export default ResumoAgenda;