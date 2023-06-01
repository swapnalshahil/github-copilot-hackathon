
import './App.css';
import Login from './components/Login';
import Welcomepage from './components/Welcomepage';
import NavBarr from './components/Navbar/NavBarr';
import Profile from './components/Profile/Profile';
import Bargraphs from './components/Charts/Bargraphs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    
  );
}

export default App;
