import React from 'react';
import './scrollToTop.css';

//import index icon
import { IconContext } from 'react-icons';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';

//import react-scroll to scroll to Top of the page
import  {animateScroll as scroll} from 'react-scroll';


const ScrollToTop = ()=> {

  return (
    <div className="index-container">
    <div className='index'>
      <IconContext.Provider value={{color:'#6636dd', size: '2em'}}>
        <BsFillHandIndexThumbFill
        onClick={()=>{scroll.scrollToTop();}} />
      </IconContext.Provider> 
    </div>
    </div>
  )
}

export default ScrollToTop;