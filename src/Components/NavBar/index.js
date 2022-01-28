import React from 'react';
import './navbar.css';

//import du package react-scroll pour les divers sections du portfolio
import { Link, animateScroll as scroll } from 'react-scroll';


const Navbar = () => (
  <nav className='nav' id='navbar'>
  <div className='nav-content'>
    <ul className='nav_items'>
      <Link to='CardIllustration' className='nav-link'>Accueil</Link>
      <Link to="Projects" className='nav-link'>Projets</Link>
      <Link className='nav-link'>À propos</Link>
      <Link className='nav-link'>Contact</Link>
    </ul>
    {/* <span className='navbar-link'>Accueil</span>
    <span className='navbar-link'>Projets</span>
    <span className='navbar-link'>À propos</span>
    <span className='navbar-link'>Contact</span> */}
  </div>
  </nav>
);

export default Navbar;

