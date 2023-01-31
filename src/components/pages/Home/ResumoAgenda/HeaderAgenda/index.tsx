import './HeaderAgenda.css';

const HeaderAgenda = () => {
    return (
        <div className="row header-agenda">
            <div className="col-sm-2">
                <span style={{ color: 'white' }}>
                    Horário
                </span>
            </div>
            <div className="col-sm-4">
                <span style={{ color: 'white' }}>
                    Paciente
                </span>
            </div>
            <div className="col-sm-3">
                <span style={{ color: 'white' }}>
                    Situação
                </span>
            </div>
            <div className="col-sm-3">
                <span style={{ color: 'white' }}>
                    Médico
                </span>
            </div>
        </div>
    );
};

export default HeaderAgenda;