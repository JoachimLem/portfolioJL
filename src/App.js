import './App.css';


//Components
import Navbar from '../src/Components/NavBar';
import HomePage from '../src/Components/HomePage';
import Projets from '../src/Components/Projets';
import APropos from '../src/Components/APropos';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Projets />
      <APropos />
      <Contact />
     
  
    </div>
  );
}

export default App;
