import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Consulta from './Consulta';
import { Scrollbars } from 'react-custom-scrollbars-2';

// função que monta a lista de horários, replicando horários na agenda de trinta em
// trinta minutos ao longo do dia
function horariosAgenda(): Array<JSX.Element> {
    const linhas: Array<any> = [];

    for (let hora = 0; hora < 24; hora++) {
        for (let minuto = 0; minuto < 60; minuto += 30) {
            const horario = `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}`;
            linhas.push(
                <Consulta key={horario} horario={horario} />
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
