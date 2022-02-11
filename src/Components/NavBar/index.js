import React from 'react';
import './navbar.css';

//import du package react-scroll pour les divers sections du portfolio
import { Link } from 'react-scroll';

//import react-reveal pour animations
import Fade from 'react-reveal/Fade';





const Navbar = () => (
  <div className='nav' id='navbar'>
    <nav >
      <Fade top delay={3000} duration={1000}>
        <div className='nav-content'>
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
        </div>
      </Fade>
    </nav>
  </div>


);

export default Navbar;

