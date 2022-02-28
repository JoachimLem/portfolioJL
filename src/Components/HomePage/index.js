import React from 'react';
import './homePage.css';

import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';


import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

const textLogo = {
  text: "Développeur Web/Mobile",
  abv: "DEV"
};




const HomePage = ({ id }) => {


  return (

    <section className='homePage' id={id}>

      <Fade top delay={1500} duration={1000}>
        <MiniLogo
          textLogo={textLogo}
        />
      </Fade>

      <div className='homePage-container'>
        {/* Container Left  */}
        <div className='container-left'>
          {/* Title */}
          <div className="title">
            <Fade left mirror duration={2000} >
              <h1 className="main-title">Développeur <br />Front-End</h1>
            </Fade>
            <Fade left>
              <h2 className="secondary-title">Bienvenue sur mon Portfolio</h2>
              {/* ******************************************* */}
              {/* Description to portfolio */}
              {/* ******************************************* */}
            </Fade>
          </div>
          <Fade left>
            <p className="description">
              Découvrez mes réalisations, qui je suis.
              Je réalise des applications web , site e-commerce
              ou bien encore site vitrine.
              Si vous souhaitez gagner en visibilité dans le monde digital, je peux vous aider à y parvenir.</p>
          </Fade>
        </div>


        <Rotate top right delay={500} duration={1800} >
          {/* Container Right */}
          <div className='container-right'>
            {/* Circle photo */}
            <div className="circle-photo"></div>
            {/* ******************************************* */}
          </div>
        </Rotate>


      </div>
    </section>

  )

};

export default HomePage;