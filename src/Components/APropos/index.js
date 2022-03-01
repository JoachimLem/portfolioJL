import React from 'react';
import './aPropos.css';

import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

//Import Icons
import { IconContext } from 'react-icons';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

//import Scroll to top
import ScrollToTop from '../ScrollToTop';

import Fade from 'react-reveal/Fade';


// Text for Mini-logo
const textLogo = {
  text: "À Propos",
  abv: "AP"
};



const APropos = ({ id }) => (
  <section className='ap-container' id={id}>
    <Fade left delay={800}>
      <MiniLogo
        textLogo={textLogo}
      />
    </Fade>

  <div>
    
  </div>
    <div className='profil'>

      <Fade left delay={1500} duration={1500}>
        <div className='photo'>
          <div className="picture"></div>
        </div>

      </Fade>

      <div className='profil-description'>
        <Fade right delay={1700}>
          <h1 className='name'>Lemenager Joachim</h1>
        </Fade>

        <Fade right delay={1900}>
          <h2 className='city'>Rennes, France</h2>
        </Fade>

        <Fade right delay={2100}>
          <p className='about'>Jeune développeur je me spécialise dans le travail front end, plus particulièrement sur la librairie React.

Je connais également l'environnement NodeJS pour le travail en back-end, le SGBD postgreSQL pour la création de base de données.

Je m'intéresse aussi au WebDesign via des outils comme Figma ou Canva.

Vous pouvez me contacter via le formulaire de contact et je ne manquerai pas de vous répondre dans les meilleurs délais.
À Bientôt.
          </p>
        </Fade>

        <Fade bottom delay={2500}>
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
        </Fade>
      </div>

    </div>
    <ScrollToTop />


  </section>
);

export default APropos;