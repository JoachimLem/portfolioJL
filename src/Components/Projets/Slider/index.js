import React, { useState } from 'react';
import './slider.css';

import BtnSlider from './BtnSlider';


const cardsProjects = [

  {
    id: 1,
    title: 'Video Chat',
    description: 'Reprehenderit adipisicing minim sit non aliquip voluptate labore sunt. Aliquip amet eiusmod non exercitation reprehenderit magna veniam culpa culpa laboris quis laboris cillum sint. Cillum pariatur quis nisi id quis ullamco excepteur. Magna officia dolore enim consequat anim cupidatat cupidatat minim minim tempor qui. Occaecat aute est anim laborum. Quis adipisicing cupidatat minim proident cupidatat voluptate ex sunt id aute do nisi ex eu. Mollit laboris incididunt veniam qui cupidatat sunt velit.',
    image: '/assets/images/youtubeIllustation.png',
    link: 'www.google.com'
  },
  {
    id: 2,
    title: 'Football HightLights',
    description: 'ReEnim exercitation minim do ut culpa occaecat. Officia reprehenderit duis culpa sint duis irure nulla consequat esse dolore. Pariatur anim ut est cupidatat officia ipsum est laborum irure dolore ullamco aliquip aliqua consectetur. Duis fugiat elit dolore aliqua cillum aute dolor duis pariatur aute laboris cupidatat ullamco ipsum. Veniam commodo qui voluptate duis nisi culpa enim exercitation. Fugiat reprehenderit nulla aute laboris.',
    image: '/assets/images/hightLightsFootball.jpeg',
    link: 'www.staderennais.com'
  },
  {
    id: 3,
    title: 'Crêpes Party',
    description: 'Duis anim anim laboris esse. Elit do consectetur magna aute fugiat amet sunt mollit. Commodo sunt nulla in sit aliqua dolor consequat culpa sit nulla commodo. Ullamco voluptate cupidatat anim adipisicing deserunt sit reprehenderit anim et incididunt laboris. Duis deserunt ut tempor Lorem officia adipisicing excepteur labore Lorem dolore.',
    image: '/assets/images/crepes.jpeg',
    link: 'www.bretagne.com'
  },
];

export default function Slider() {

  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    console.log("next");
    if (slideAnim.index !== cardsProjects.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true })

      //TimeOut pour autoriser de nouveau le click vers le prochain projet
      setTimeout(() => {
        setSlideAnim({
          index: slideAnim.index + 1,
          inProgress: false
        });
      }, 400)
    }


    //Cas ou on arrive au bout du tableau
    else if (slideAnim.index === cardsProjects.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true })
      setTimeout(() => {
        setSlideAnim({
          index: 1,
          inProgress: false
        });
      }, 400)
    }
  };

  const prevSlide = () => {
    console.log("prev");
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({
        index: slideAnim.index - 1,
        inProgress: true
      })
      setTimeout(() => {
        setSlideAnim({
          index: slideAnim.index - 1,
          inProgress: false
        });
      }, 400)
    }
    else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: cardsProjects.length, inProgress: true })

      setTimeout(() => {
        setSlideAnim({
          index: cardsProjects.length,
          inProgress: false
        });
      }, 400)
    }
  };

  const moveDot = index => {
    setSlideAnim({ index: index, inProgress: false })
  }
  return (
    <div className="container-slider">

      {/* map sur le tableaux de project pour créer les slides */}
      {cardsProjects.map((obj, index) => {
        return <div
          key={obj.id}
          className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
        >


          <div className="slide-left">
            <img src={process.env.PUBLIC_URL + obj.image} alt="projet" />
          </div>



          <div className="slide-right">
            <h1 className="slide-right title"> {obj.title} </h1>
            <p className="slide-right description"> {obj.description} </p>
            <button className="slide-right discover"> Découvrir</button>
          </div>

          
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />



          {/* Dots  */}
          <div className="container-dots">
            {Array.from({ length: cardsProjects.length }).map((item, index) => {
              return <div key={index} className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                onClick={() => moveDot(index + 1)}
              >
              </div>
            })}
          </div>

        </div>
      })}

    </div>
  )
}



