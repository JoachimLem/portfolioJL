import React from 'react';
import './homePage.css';

//import design Logo
//import Logo from '../DesignComponents/MiniLogo/miniLogo';

const HomePage = () => {


  return (

    <div className='homePageContainer'>

      {/* Logo dev  */}
      <div className='logo'>
        <div className="mini-logo">
          <span className="abreviation">DEV</span>
        </div>
        <p className="logo-text">Développeur Web/Mobile</p>
      </div>
      {/* ******************************************* */}

      {/* Title */}
      <div className="title">
        <h1 className="main-title">Développeur Front-End</h1>
        <h2 className="secondary-title">Bienvenue sur mon Portfolio</h2>
      </div>
      {/* ******************************************* */}


      {/* Description to portfolio */}
      <p className="description">Découvrez mes réalisations, qui je suis.
Je réalise des applications web , site e-commerce
ou bien encore site vitrine.
Si vous souhaitez gagner en visibilité dans le monde digital, je peux vous aider à y parvenir.</p>
      {/* ******************************************* */}

    </div>
    
  )

};

export default HomePage;