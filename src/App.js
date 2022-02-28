import React from 'react';
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
      <HomePage
      id="accueil"
      />
      <Projets
      id="projets"
       />
      <APropos 
      id="apropos"
      />
      <Contact 
      id="contact"
      />     
  
    </div>
  );
}

export default App;
