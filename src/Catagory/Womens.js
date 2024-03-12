import React, { useState } from 'react';
const shoesData = [
  { id: 1,  price: 699, image: '/Womensmodels/product 20.png'},
  { id: 1,  price: 799, image: '/Womensmodels/product 21.png'},
  { id: 1,  price: 599, image: '/Womensmodels/product 22.png'},
  { id: 1,  price: 499, image: '/Womensmodels/product 23.png'},
  { id: 1,  price: 899, image: '/Womensmodels/product 24.png'},
  { id: 1,  price: 899, image: '/Womensmodels/vstrapslipper.png'},
  { id: 1,  price: 899, image: '/Womensmodels/womenbelt.png'},
  { id: 1,  price: 899, image: '/Womensmodels/womench1.jpg'},
  { id: 1,  price: 899, image: '/Womensmodels/womench2.jpg'},
  { id: 1,  price: 899, image: '/Womensmodels/womench3.png'},
  { id: 1, price: 899, image: '/Womensmodels/womench4.png'},
  { id: 1,  price: 899, image: '/Womensmodels/womench5.png'},
  { id: 1,  price: 899, image: '/Womensmodels/womench6.png'},
  { id: 1,  price: 899, image: '/Womensmodels/womench7.png'},
  

 
];
const App = () => 
{
const [cart, setCart] = useState([]);
 const addToCart = (shoe) => {  setCart([...cart, shoe]);
};
return (
<div className="App">
 <h1>WOMENS COLLECTION</h1>
 <div className="shoe-container">
  {shoesData.map((shoe) => (
 <div key={shoe.id} className="shoe-card">
 <img src={shoe.image} alt={shoe.name} />
  <h3>{shoe.name}</h3>
 <p>${shoe.price.toFixed(2)}</p>
 <button onClick={() => addToCart(shoe)}>Add to Cart</button>  
 </div> ))}
</div>
 <div className="cart">
 <h2>Shopping Cart</h2>
 <ul>
 {cart.map((item) => (
 <li key={item.id}>{item.price}</li>))}
 </ul>
 </div>
 </div>

 );};
export default App;