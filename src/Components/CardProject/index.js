import React from 'react';
import './card.css';

const Card = ({project:{image, title, description,link}})=>(
  <div className="card-container">

    <div className="card-image">
      <img  src={window.location.origin + image} className="image" alt="illustration du projet"/>
    </div>


    <div className="card-description">
      <h1 className="card-title">{title}</h1>
      <article className="card-text">{description}</article>
      <button className="card-link" href={link}>Voir le projet</button>
    </div>


  </div>
);



export default Card;