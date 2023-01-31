import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Busca.css';

const Busca = () => {
    return (
        <div className="row">
            <div className="col-sm-6 mt-3">
                <input type='text' className="form-control" placeholder="Buscar..." />
            </div>
            <div className="col-sm-6 mt-3">
                <button className='btn btn-light'>
                    <FontAwesomeIcon icon='filter' color='#0B4C7C' />
                    <span className='filtrar-button'>
                        Filtrar
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Busca;