import React from 'react';
import './card.css';

const Card = ()=>(
  <div className="card-container">


    <div className="card-image">Je suis l'image</div>


    <div className="card-description">
      <h1>Titre projet</h1>
      <article>Description projet</article>
      <button>Voir le projet</button>
    </div>

    
  </div>
);

export default Card;