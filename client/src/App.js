
import './App.css';
import Welcomepage from './components/Welcomepage';
import NavBarr from './components/Navbar/NavBarr';
import Profile from './components/Profile/Profile';
import Bargraphs from './components/Charts/Bargraphs';
function App() {
  return (
    // <div>
    // {/*  */}
    //</div>
    // <welcomepage></welcomepage>
    <>
      <NavBarr />
      <Profile />
      <Bargraphs/>
    </>
  );
}

export default App;
