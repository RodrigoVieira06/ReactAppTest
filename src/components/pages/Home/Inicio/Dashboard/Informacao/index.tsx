import React from 'react';
import './Informacao.css';

interface IInformacaoProps {
    texto: string;
    valor?: string;
}

const Informacao = ({ texto, valor = '0.00' }: IInformacaoProps) => {

    return (
        <div className='agendamentosDia-container'>
            <span className='texto'>{texto}</span>
            <span className='texto'>R${valor}</span>
        </div>
    );
};

export default Informacao;