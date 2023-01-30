import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from './Item';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => setisOpen(!isOpen);

    return (
        <aside className={isOpen ? 'open' : 'closed'}>
            <nav className={`sidebar-container ${isOpen ? 'container-open' : 'container-closed'}`}>
                <button className='btn btn-light toggle' onClick={toggle}>
                    <FontAwesomeIcon icon={isOpen ? 'times' : 'bars'} />
                </button>
                <Item isOpen={isOpen} title='Início' icon='home' rota='/' />
                <Item isOpen={isOpen} title='Agendamento de consulta' icon='calendar' rota='/agendamentos'/>
                <Item isOpen={isOpen} title='Consulta de agendamento' icon='search' rota='/buscarAgendamentos' />
            </nav>
        </aside>
    );
};

export default Sidebar;
