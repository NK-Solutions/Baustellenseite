import logo from './NK.svg';
import './App.css';
import Bttn from './mail';
import Text from './text'


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{pointerEvents:'none'}}>
          Wir gehen bald online!
        </p>
        <Bttn />
      </header>
      
    </div>
  );
}

export default App;
