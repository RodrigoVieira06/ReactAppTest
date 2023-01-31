import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agendamentos from './components/pages/Agendamentos';
import BuscarAgendamentos from './components/pages/BuscarAgendamentos';
import Home from './components/pages/Home';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import './styles/styles.css';

const AppRouter = () => {
    return (
        <Router>
            <div className='main-content'>
                <Header />
                <div className='d-flex'>
                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/agendamentos' element={<Agendamentos />} />
                        <Route path='/buscarAgendamentos' element={<BuscarAgendamentos />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;
