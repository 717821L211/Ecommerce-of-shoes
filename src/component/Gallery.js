import React from 'react';

const Gallery = () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  return (
    <div>
      <h1>Image Gallery</h1>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;