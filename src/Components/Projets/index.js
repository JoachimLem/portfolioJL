import React from 'react';
import './projets.css';



//import Card from '../CardProject/index';
import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

//import Scroll to top
import ScrollToTop from '../ScrollToTop';

//import Carroussel
import Slider from './Slider';

import Fade from 'react-reveal/Fade';



// Text for Mini-logo
const textLogo = {
  text: "Projets",
  abv: "P"
};


const Projets = ({ id }) => {

  return (

    <section className='projet-container' id={id}>

      {/* Logo */}
      <Fade left delay={800}>
        <div className="logo-project">
          <MiniLogo
            textLogo={textLogo}
          />
        </div>
      </Fade>
      {/* ......................... */}
      <Fade bottom delay={1500} duration={1500}>
        <Slider />
      </Fade>
      <ScrollToTop />
    </section>
  )
};

export default Projets;
//  <div className='project'>
//   {cardsProjects.map((project) => (
//     <Card
//       project={project}
//       key={project.title}
//     />
//   ))}
// </div> 