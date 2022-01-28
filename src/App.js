import './App.css';

//DesignComponents
import CardIllustration from './DesignComponents/CardIllustration/cardIllustation';
//Components
import Navbar from '../src/Components/NavBar';
import Projets from '../src/Components/Projets';
import APropos from '../src/Components/APropos';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CardIllustration/>
      <Projets />
      <APropos />
      <Contact />
     
  
    </div>
  );
}

export default App;
