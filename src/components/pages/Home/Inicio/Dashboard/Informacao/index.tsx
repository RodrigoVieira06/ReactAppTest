import './Informacao.css';

interface IInformacaoProps {
    texto: string;
    valor?: string;
}

const Informacao = ({ texto, valor = '0' }: IInformacaoProps) => {
    return (
        <div className='d-flex justify-content-between agendamentosDia'>
            <span className='texto-dashboard'>{texto}</span>
            <span className='texto-dashboard'>{valor}</span>
        </div>
    );
};

export default Informacao;