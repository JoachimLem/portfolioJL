import React from 'react';
import './navbar.css';

//import du package react-scroll pour les divers sections du portfolio
import { Link } from 'react-scroll';

import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

const textLogo = {
  text: "Développeur Web/Mobile",
  abv: "DEV"
};

const Navbar = () => (
  <nav className='nav' id='navbar'>
    <div className='nav-content'>
      <MiniLogo
        textLogo={textLogo}
      />
      <ul className='nav_items'>
        <Link
          activeClass="active"
          to='accueil'
          className='nav-link'
          spy={true}
          smooth={true}
          duration={500}
        >
          Accueil
        </Link>


        <Link
          className='nav-link'
          activeClass="active"
          to='projets'
          spy={true}
          smooth={true}
          duration={500}
        >
          Projets
        </Link>


        <Link
          className='nav-link'
          activeClass="active"
          to='apropos'
          spy={true}
          smooth={true}
          duration={500}
        >
          À propos
        </Link>


        <Link
          className='nav-link'
          activeClass="active"
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>


      </ul>
      {/* <span className='navbar-link'>Accueil</span>
    <span className='navbar-link'>Projets</span>
    <span className='navbar-link'>À propos</span>
    <span className='navbar-link'>Contact</span> */}
    </div>
  </nav>
);

export default Navbar;

