import React, { useState } from 'react';
import './slider.css';
import BtnSlider from './BtnSlider';


const cardsProjects = [

  {
    id: 1,
    title: 'EN COURS',
    description: `Plusieurs projets, sont en cours d'élaboration et dès que l'un d'eux sera terminé vous pourrez y avoir accès via l'intermédiaire du bouton "Découvrir".

    Plusieurs technologie seront utilisés et un panel très large d'application seront proposé pour couvrir un large panel de mes compétences.
    
    Je vous donne rendez-vous très bientôt et si vous avez des idées, suggestions rendez-vous dans la partie Contact et envoyé moi un message.`,
    image: '/assets/images/workInProgress.jpg',
    link: 'www.google.com'
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
  };


  return (
    <div className="container-button">
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
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
              <h1 className="slide-right-title"> {obj.title} </h1>
              <p className="slide-right-description"> {obj.description} </p>
              <button className="slide-right-discover"> Découvrir</button>
            </div>




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
    </div>
  )
}



