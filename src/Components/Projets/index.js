import React from 'react';
import './projets.css';
import Card from '../CardProject/index';
import MiniLogo from '../DesignComponents/MiniLogo/miniLogo';




//Data for projects
const cardsProjects = [

  {
    title: 'Video Chat',
    description: 'Reprehenderit adipisicing minim sit non aliquip voluptate labore sunt. Aliquip amet eiusmod non exercitation reprehenderit magna veniam culpa culpa laboris quis laboris cillum sint. Cillum pariatur quis nisi id quis ullamco excepteur. Magna officia dolore enim consequat anim cupidatat cupidatat minim minim tempor qui. Occaecat aute est anim laborum. Quis adipisicing cupidatat minim proident cupidatat voluptate ex sunt id aute do nisi ex eu. Mollit laboris incididunt veniam qui cupidatat sunt velit.',
    image: '/assets/images/youtubeIllustation.png',
    link: 'www.google.com'
  },
  {
    title: 'Football HightLights',
    description: 'ReEnim exercitation minim do ut culpa occaecat. Officia reprehenderit duis culpa sint duis irure nulla consequat esse dolore. Pariatur anim ut est cupidatat officia ipsum est laborum irure dolore ullamco aliquip aliqua consectetur. Duis fugiat elit dolore aliqua cillum aute dolor duis pariatur aute laboris cupidatat ullamco ipsum. Veniam commodo qui voluptate duis nisi culpa enim exercitation. Fugiat reprehenderit nulla aute laboris.',
    image: '/assets/images/hightLightsFootball.jpeg',
    link: 'www.staderennais.com'
  },
  {
    title: 'Crêpes Party',
    description: 'Duis anim anim laboris esse. Elit do consectetur magna aute fugiat amet sunt mollit. Commodo sunt nulla in sit aliqua dolor consequat culpa sit nulla commodo. Ullamco voluptate cupidatat anim adipisicing deserunt sit reprehenderit anim et incididunt laboris. Duis deserunt ut tempor Lorem officia adipisicing excepteur labore Lorem dolore.',
    image: '/assets/images/crepes.jpeg',
    link: 'www.bretagne.com'
  },
];

// Text for Mini-logo
const textLogo = {
  text: "Projets",
  abv: "P"
};


const Projets = ({ id }) => (
  <section className='projet-container' id={id}>
    <div className="logo-project">
    <MiniLogo
      textLogo={textLogo}
      />
    </div>

    {cardsProjects.map((project) => (
      <Card
        project={project}
        key={project.title}
      />
    ))}

  </section>
);

export default Projets;