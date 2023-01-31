import TabelaAvisos from './TabelaAvisos';

const Avisos = () => {
    return (
        <div className='row'>
            <span className='titulo'>
                AVISOS E LEMBRETES
            </span>
            <div className='row'>
                <div className='d-flex justify-content-center mt-3'>
                    <TabelaAvisos />
                </div>
            </div>
        </div>
    );
};

export default Avisos;