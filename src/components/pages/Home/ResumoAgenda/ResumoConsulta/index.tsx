import './ResumoConsulta.css';

interface IResumoConsultaProps {
    horario: string;
    nome?: string;
    situcao?: string;
    medico?: string;
}

const ResumoConsulta = ({ horario, nome, situcao, medico }: IResumoConsultaProps) => {
    return (
        <div className="row resumo-consulta">
            <div className="col-sm-2">
                <span style={{ color: 'white', marginLeft: '5px' }}>
                    {horario}
                </span>
            </div>
            <div className="col-sm-4">
                <span style={{ color: 'white' }}>
                    {nome}
                </span>
            </div>
            <div className="col-sm-3">
                <span style={{ color: 'white' }}>
                    {situcao}
                </span>
            </div>
            <div className="col-sm-3">
                <span style={{ color: 'white' }}>
                    {medico}
                </span>
            </div>
        </div>
    );
};

export default ResumoConsulta;