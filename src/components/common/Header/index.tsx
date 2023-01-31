import './Header.css';
import AdviceHealthLogo from '../../../assets/AdviceHealthLogo.png';
import profile from '../../../data/profile.json';

const Header = () => {
    return (
        <header className="header-container d-flex justify-content-between">
            <div className='header-logo d-flex justify-content-center'>
                <img className='logo-app' src={AdviceHealthLogo} alt="Logo" />
                <span style={{ fontSize: '14px' }}>Painel de consultas médicas</span>
            </div>
            <div className='row'>
                <span style={{ fontSize: '20px' }}>{profile.nome}</span>
                <span style={{ fontSize: '16px' }} >{profile.email}</span>
            </div>
        </header>
    );
};

export default Header;