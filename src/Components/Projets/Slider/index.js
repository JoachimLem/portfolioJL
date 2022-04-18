import React, { useState } from 'react';
import './slider.css';
import BtnSlider from './BtnSlider';

//import swiper for mobile view
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';



const cardsProjects = [

  {
    id: 1,
    title: 'Backto90s',
    description: `Blog qui s'intéresse aux années 90, on peut découvrir des articles sur tout ce qui a fait cette décennie, du prince de bel-air en passant par Nirvana. On y parle des phénomènes comme les Pogs, le club Dorothée et bien plus encore.`,
    image: '/assets/images/logo-white.png',
    link: 'https://backto90s.netlify.app/'
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
    <div className="slider">

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
                <img src={process.env.PUBLIC_URL + obj.image} alt="projet" style={{width:'100%',height:'80%', display:'block', padding:'2rem',margin:'0,auto'}} />
              </div>



              <div className="slide-right">
                <h1 className="slide-right-title"> {obj.title} </h1>
                <p className="slide-right-description"> {obj.description}</p>
                <button className="slide-right-discover"><a href={obj.link} style={{textDecoration:"none", color:"white"}} target="_blank" rel="noopener noreferrer">Découvrir</a></button>
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

      {/* For mobile version */}

      <div className='swiper'>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
        >
          {cardsProjects.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className='swiper_card'>
                  <a href={item.link} style={{color:"white",textDecoration:"none" }}>
                  <img className='swiper-image' src={item.image} alt='présentation du projet' width="100%" height="100%" />
                  <div className='swiper-description'>
                    <h1 className='swiper-title'>{item.title}</h1>
                    <p className='swiper-text'>{item.description}</p>
                  </div>

                  </a>
                </div>

              </SwiperSlide>
            )
          })}


        </Swiper>


      </div>

    </div>
  )
}



