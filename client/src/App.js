
import './App.css';
import Login from './components/Login';
import Welcomepage from './components/LandingPage';
import Profile from './components/Profile/Profile';
import Bargraphs from './components/Charts/Bargraphs';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandinPage from './components/LandingPage';
import TransactionPage from './components/TransactionPage';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Addtransaction from './components/Transactions/Addtransaction';
import Addamount from './components/Transactions/Addamount';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute><LandinPage /></ProtectedRoute>} />
        <Route path="/transaction" element={<ProtectedRoute><TransactionPage /></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute><Bargraphs /></ProtectedRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addamount" element={<Addamount />} />
        <Route path="/addtransaction" element={<Addtransaction />} />
      </Routes>
    </Router>

  );
}

export default App;
