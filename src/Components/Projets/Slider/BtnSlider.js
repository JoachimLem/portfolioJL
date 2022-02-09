import React from 'react';

// import Arrows Left & Right for Slider
import { IconContext } from 'react-icons';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';




const BtnSlider = ({ direction, moveSlide }) => {

  return (
    <IconContext.Provider value={{ color: "#6636dd", size: "5em" }}>
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        { direction === "next"
          ?
          <BsFillArrowRightCircleFill onClick={moveSlide}/>
          :
          <BsFillArrowLeftCircleFill onClick={moveSlide} />
        }

      </button>
    </IconContext.Provider>
  )
};

export default BtnSlider;