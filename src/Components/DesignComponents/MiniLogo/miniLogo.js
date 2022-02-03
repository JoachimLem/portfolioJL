import React from 'react';
import './miniLogo.css';

const MiniLogo = ({textLogo}) => (
  <div className='logo'>
  <div className="mini-logo">
    <span className="abreviation">{textLogo.abv}</span>
  </div>
  <p className="logo-text">{textLogo.text}</p>
</div>
);

export default MiniLogo;