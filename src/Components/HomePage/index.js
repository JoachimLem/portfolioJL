import React from 'react';
import './homePage.css';

import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';





import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';


//test scroll
import { animateScroll as scroll } from "react-scroll"

const textLogo = {
  text: "Développeur Web/Mobile",
  abv: "DEV"
};




const HomePage = ({ id }) => {


  const scrollToSection = () => {

    scroll.scrollTo("projet-container", {
      delay: 0,
      smooth: "easeInOutQuart",

    });
    console.log('je tourne a roue')
  };



  return (

    <section className='homePage' id={id} onWheel={scrollToSection} >
      
      <Fade top delay={1500} duration={1000}>
        <div className='homePage-logo'>
          <MiniLogo
            textLogo={textLogo}
          />
        </div>

      </Fade>

      <div className='homePage-container' >
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