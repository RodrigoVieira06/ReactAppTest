import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Consulta from './Consulta';
import { Scrollbars } from 'react-custom-scrollbars-2';
import consultas from '../../../../data/consultas.json';
import { IConsulta } from '../../../../models/IConsulta';

// função que monta a lista de horários, replicando horários na agenda de trinta em
// trinta minutos ao longo do dia
function horariosAgenda(): Array<JSX.Element> {
    const linhas: Array<JSX.Element> = [];

    // horário de funcionamento de 7h às 19h
    for (let hora = 7; hora < 19; hora++) {
        for (let minuto = 0; minuto < 60; minuto += 30) {
            // resetando o nome e a situação para nova busca
            let nome = '';
            let situacao = '';

            const horario = `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}`;
            // buscando consultas agendadas e atribuindo na agenda
            consultas.forEach((consulta: IConsulta) => {
                if (consulta.horario == horario) {
                    nome = consulta.paciente.nome;
                    situacao = consulta.situacao;
                }
            });
            linhas.push(
                <Consulta key={horario} horario={horario} nome={nome} situcao={situacao} />
            );
        }
    }
    return linhas;
}

const Consultas = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const consultaslista = horariosAgenda();

    return (
        <>
            <div className='row mt-3'>
                <div className='d-flex justify-content-between'>
                    <div className='titulo'>{formattedDate}</div>
                    <button className='btn btn-criar' style={{ marginRight: '25px' }}>
                        <FontAwesomeIcon icon='add'></FontAwesomeIcon>
                        <span style={{ marginLeft: '5px' }}>Agendar</span>
                    </button>
                </div>
            </div>
            <div className='mt-2'>
                <Scrollbars style={{ height: 500 }}>
                    {consultaslista}
                </Scrollbars>
            </div>
        </>
    );
};

export default Consultas;
