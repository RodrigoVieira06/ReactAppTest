const TabelaAvisos = () => {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Feito</th>
                    <th scope="col">Título</th>
                    <th scope="col">Prazo</th>
                    <th scope="col">Custo de tempo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Agendar consultas</td>
                    <td>08:00</td>
                    <td>1h</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Confirmar agendamentos</td>
                    <td>09:00</td>
                    <td>1h</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Verificar pendências</td>
                    <td>10:00</td>
                    <td>1h</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TabelaAvisos;