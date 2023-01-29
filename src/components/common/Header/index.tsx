import React from 'react';
import './Header.css';
import AdviceHealthLogo from '../../../assets/AdviceHealthLogo.png';

const Header = () => {
    return (
        <header className="header-container">
            <div className='header-logo'>
                <img className='logo-app' src={AdviceHealthLogo} alt="Logo" />
                <span className='titulo-app'>Painel de consultas médicas</span>
            </div>
            <div className='profile'>
                <span className='user-name'>User Name</span>
            </div>
        </header>
    );
};

export default Header;