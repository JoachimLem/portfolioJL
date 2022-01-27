import logo from './logo.svg';
import './App.css';

//DesignComponents
import MiniLogo from './DesignComponents/miniLogo/miniLogo';


//Components
import Navbar from '../src/Components/NavBar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MiniLogo />
    </div>
  );
}

export default App;
