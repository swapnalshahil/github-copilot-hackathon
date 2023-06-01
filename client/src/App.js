
import './App.css';
import Login from './components/Login';
import Welcomepage from './components/Welcomepage';
import NavBarr from './components/Navbar/NavBarr';
import Profile from './components/Profile/Profile';
import Bargraphs from './components/Charts/Bargraphs';

function App() {
  return (
    <div className="App">
      <Login />
      <NavBarr />
      <Profile />
      <Bargraphs/>
    </div>
  );
}

export default App;
