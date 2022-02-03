import React from 'react';
import './projets.css';
import Card from '../CardProject/index';

const Projets = ({ id }) => (
  <section className='projet-container' id={id}>Projets
  <Card />
  
  </section>
);

export default Projets;