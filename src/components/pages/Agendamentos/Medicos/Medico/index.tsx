import { useState } from 'react';
import './Medico.css';

interface IMedicoProps {
    nome: string;
    funcao: string;
}

const Medico = ({ nome, funcao }: IMedicoProps) => {
    const [selected, setSelected] = useState(false);
    const select = () => setSelected(!selected);

    return (
        <div className={`row medico mt-3 ${selected ? 'selected' : 'not-selected'}`} onClick={select}>
            <div className="col-sm-6">
                <div style={{ color: 'white', marginLeft: '10px' }} >
                    {nome}
                </div>
            </div>
            <div className="col-sm-6">
                <div style={{ color: 'white' }}>
                    {funcao}
                </div>
            </div>
        </div>
    );
};

export default Medico;