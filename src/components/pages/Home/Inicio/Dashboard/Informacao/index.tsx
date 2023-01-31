import React from 'react';
import './Informacao.css';

interface IInformacaoProps {
    texto: string;
    valor?: string;
}

const Informacao = ({ texto, valor = '0' }: IInformacaoProps) => {

    return (
        <div className='agendamentosDia-container'>
            <span className='texto-dashboard'>{texto}</span>
            <span className='texto-dashboard'>{valor}</span>
        </div>
    );
};

export default Informacao;