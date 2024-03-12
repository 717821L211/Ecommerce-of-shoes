import React from 'react';
import { Link } from 'react-router-dom';
import BannerCarousel from './component/BannerCarousel';


import './Home.css'; 


const Home = () => {
  return (
    <div>
     
      <div className="button-container">
      <Link to="/mens" className="button button-men">
          Mens
          </Link>
        <Link to="/womens" className="button button-women">
          Womens
        </Link>
        <Link to="/kids" className="button button-kids">
          Kids
        </Link>
       
      
        <BannerCarousel/>
        
       

      
      </div>
    </div>
  );
};

export default Home;
