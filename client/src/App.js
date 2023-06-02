
import './App.css';
import Login from './components/Login';
import Welcomepage from './components/LandingPage';
import NavBarr from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import Bargraphs from './components/Charts/Bargraphs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandinPage from './components/LandingPage';
import TransactionPage from './components/TransactionPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<LandinPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/analytics" element={<Bargraphs />} />
      </Routes>
    </Router>
    
  );
}

export default App;
