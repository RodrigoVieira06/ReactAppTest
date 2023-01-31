import Informacao from './Informacao';
import consultas from '../../../../../data/consultas.json';
import { IConsulta } from '../../../../../models/IConsulta';

// function buscarValores(data: string): Array<string> {
function buscarValores(): Array<string> {
    // foi desenvolvida uma lista de valores que serão contabilizados e informados na tela
    // inicial referente à data selecionada
    let faturamento = 0;
    let agendamentos = 0;
    let pacientes = 0;

    consultas.forEach((consulta: IConsulta) => {
        // if (consulta.data == data) {
        faturamento += consulta.valor;
        agendamentos++;
        pacientes++;
        // }
    });
    return [faturamento.toFixed(2).toString(), agendamentos.toString(), pacientes.toString()];
}

const Dashboard = () => {
    const dadosDashboard = buscarValores();

    const faturamento = 'R$ '+dadosDashboard[0];
    const agendamentos = dadosDashboard[1];
    const pacientes = dadosDashboard[2];

    return (
        <div className='row'>
            <span className='titulo'>
                DASHBOARD
            </span>
            <div className='row mt-3'>
                <div className='col-sm-6'>
                    <Informacao texto='Faturamento do dia:' valor={faturamento} />
                </div>
                <div className='col-sm-6'>
                    <Informacao texto='Agendamentos do dia:' valor={agendamentos} />
                    <Informacao texto='Pacientes do dia:' valor={pacientes} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;