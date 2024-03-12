import React from 'react';
import bannernew7 from '../Pictures/bannernew7.jpg';
import bannernew9 from '../Pictures/bannernew9.png';
import bannernew5 from '../Pictures/bannernew5.jpg';

import { Carousel } from 'react-bootstrap';
import './BannerCarousel.css';
import Slider from './Slider';
function BannerCarousel() {
  
  return (
    <div>
      <Carousel className='container1' data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannernew7}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
        
            className="d-block w-100"
            src={bannernew9}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannernew5}
            alt="Third slide"
          />
        </Carousel.Item>

        
      </Carousel>
      <Slider/>
    
    </div>
    
    






  );
}

export default BannerCarousel;
