// ImagePopu p.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ImagePopup.css';

const ImagePopup = () => {
  return (
    <div className="image-popup-container">
      <Link to="/gallery">
        <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/311WAWY+wnL._AC_UY1000_.jpg" alt="Popup Image" className="popup-trigger" />
      
      </Link>
    </div>
  );
};

export default ImagePopup;