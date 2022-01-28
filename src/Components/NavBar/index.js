import React from 'react';
import './navbar.css';

//import du package react-scroll pour les divers sections du portfolio



const Navbar = () => (
  <div className='navbar'>
    <span className='navbar-link'>Accueil</span>
    <span className='navbar-link'>Projets</span>
    <span className='navbar-link'>À propos</span>
    <span className='navbar-link'>Contact</span>
  </div>
);

export default Navbar;

