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


      {/* Title */}
      <div className="title">
      <h1 className="main-title">Développeur Front-End</h1>
      <h2 className="secondary-title">Bienvenue sur mon Portfolio</h2>
      </div>


      {/* Description to portfolio */}
      <p>Je suis la homePage</p>
    </div>
  )

};

export default HomePage;