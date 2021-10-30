import React, { useEffect, useState } from "react";
import scrollTop from '../../images/scrolltop.png';

import './scrollTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top " >
      {isVisible && 
        <div onClick={scrollToTop} className='fixed-bottom' style={{ marginTop:'1rem'}} >
          <img src={scrollTop} alt='Go to top' title='Scroll Top' className='scrolltop-img' style={{float:"right", margin:"10px"}}/>
        </div>}
    </div>
  );
}

export default ScrollToTop;