import React from 'react';
import './aPropos.css';

import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';

// Text for Mini-logo
const textLogo = {
  text: "À Propos :",
  abv: "AP"
};



const APropos = ({id}) => (
  <section className='ap-container' id={id}>
    <MiniLogo
     textLogo={textLogo}
    />


  <div className='profil'>

    <div className='photo'>
      je suis la photo
    </div>

    <div className='profil-description'>
      <h1 className='name'>JOjo</h1>
      <h2 className='city'>Rennes</h2>
      <p className='about'>Occaecat consectetur dolore velit reprehenderit exercitation aute ipsum tempor magna ut. Cillum aliqua eiusmod ad et nulla occaecat fugiat enim. Deserunt eiusmod pariatur ex occaecat occaecat esse dolore do nisi nisi.</p>
    </div>

  </div>

  
  <div className='network'>Link twitter git </div>
  </section>
);

export default APropos;