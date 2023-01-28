import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => setisOpen(!isOpen);

    return (
        <aside className={isOpen ? 'open' : 'closed'}>
            <nav className={`sidebar-container ${isOpen ? 'container-open' : 'container-closed'}`}>
                <button className='btn btn-light toggle' onClick={toggle}>
                    <FontAwesomeIcon icon={isOpen ? "times" : "bars"} />
                </button>
                <div className='sidebar-item'>
                    <FontAwesomeIcon icon="home" className='sidebar-item-icon' />
                    <span className={isOpen ? 'item-open' : 'item-closed'}>Início</span>
                </div>
                <div className='sidebar-item'>
                    <FontAwesomeIcon icon="calendar" className='sidebar-item-icon' />
                    <span className={isOpen ? 'item-open' : 'item-closed'}>Agendamento de consulta</span>
                </div>
                <div className='sidebar-item'>
                    <FontAwesomeIcon icon="search" className='sidebar-item-icon' />
                    <span className={isOpen ? 'item-open' : 'item-closed'}>Consulta de agendamento</span>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
