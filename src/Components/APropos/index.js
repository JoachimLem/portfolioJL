import React from 'react';
import './aPropos.css';

import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

//Import Icons
import { IconContext } from 'react-icons';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

//import Scroll to top
import ScrollToTop from '../ScrollToTop';


// Text for Mini-logo
const textLogo = {
  text: "À Propos",
  abv: "AP"
};



const APropos = ({ id }) => (
  <section className='ap-container' id={id}>
    <MiniLogo
      textLogo={textLogo}
    />


    <div className='profil'>

      <div className='photo'>
        <div className="picture"></div>
      </div>

      <div className='profil-description'>
        <h1 className='name'>Lemenager Joachim</h1>
        <h2 className='city'>Rennes, France</h2>
        <p className='about'>Occaecat consectetur dolore velit reprehenderit exercitation aute ipsum tempor magna ut. Cillum aliqua eiusmod ad et nulla occaecat fugiat enim. Deserunt eiusmod pariatur ex occaecat occaecat esse dolore do nisi nisi.
          Est adipisicing exercitation dolore dolor commodo. Adipisicing commodo aliquip velit fugiat minim reprehenderit ea do adipisicing excepteur consequat ex magna. Incididunt labore irure labore qui.
        </p>
        <div className='network'>
          <IconContext.Provider value={{ color: "#6636dd", size: "8em" }}>
            <a className='link-network' href="https://www.linkedin.com/in/joachim-lemenager/">
              <BsLinkedin />
            </a>
            <a className='link-network' href="https://github.com/JoachimLem">
              <BsGithub />
            </a>
            <a className='link-network' href="https://twitter.com/joalemweb">
              <BsTwitter />
            </a>
          </IconContext.Provider>
        </div>
      </div>

    </div>
      <ScrollToTop />


  </section>
);

export default APropos;