import React from 'react';
import './projets.css';



//import Card from '../CardProject/index';
import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

//import Scroll to top
import ScrollToTop from '../ScrollToTop';

//import Carroussel
import Slider from './Slider';



// Text for Mini-logo
const textLogo = {
  text: "Projets",
  abv: "P"
};


const Projets = ({ id }) => {
 
  return (

    <section className='projet-container' id={id}>

      {/* Logo */}
      <div className="logo-project">
        <MiniLogo
          textLogo={textLogo}
        />
      </div>
      {/* ......................... */}
      <Slider/>
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