import AdviceHealthLogo from '../../../assets/AdviceHealthLogo.png';
import profile from '../../../data/profile.json';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container d-flex justify-content-between">
            <div className='header-logo d-flex justify-content-center'>
                <img className='logo-app' src={AdviceHealthLogo} alt="Logo" />
                <span style={{ fontSize: '14px' }}>Painel de consultas médicas</span>
            </div>
            <div className='row'>
                <span className='profile-name'>{profile.nome}</span>
                <span className='profile-email' >{profile.email}</span>
            </div>
        </header>
    );
};

export default Header;