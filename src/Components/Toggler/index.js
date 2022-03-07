import React, { useState } from 'react';
import './toggler.css';
import { Link } from 'react-scroll';



const Toggler = () => {

  const [isToggled, setIsToggled] = useState(false);


  const togglerApear = () => {
    if (!isToggled) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  };


  return (

    <div className='toggler_container'>


      <div className={isToggled ? 'toggler_btn_close' : 'toggler_btn'} onClick={togglerApear}>
        <span></span>
      </div>


      <nav className={isToggled ? 'toggler_nav_open' : 'toggler_nav'}>
        <div className='toggler_menu'>
          <ul >
            <Link
              activeClass="active"
              to='accueil'
              className='toggler_nav-link'
              spy={true}
              smooth={true}
              duration={500}
              onClick={togglerApear}
            >
              Accueil
            </Link>


            <Link
              className='toggler_nav-link'
              activeClass="active"
              to='projets'
              spy={true}
              smooth={true}
              duration={500}
              onClick={togglerApear}
            >
              Projets
            </Link>


            <Link
              className='toggler_nav-link'
              activeClass="active"
              to='apropos'
              spy={true}
              smooth={true}
              duration={500}
              onClick={togglerApear}
            >
              À propos
            </Link>


            <Link
              className='toggler_nav-link'
              activeClass="active"
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
              onClick={togglerApear}
            >
              Contact
            </Link>


          </ul>
        </div>

      </nav>
    </div>


  )
};

export default Toggler;