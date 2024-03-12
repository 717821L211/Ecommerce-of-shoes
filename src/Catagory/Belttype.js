import React, { useState } from 'react';

import { Link } from 'react-router-dom';
const shoesData = [
  { id: 1, name: 'Backwear', price: 699, image: '/Mensmodels/product7.png' },
  { id: 1, name: 'Backwear', price: 799, image: '/Mensmodels/product8.png' },
  { id: 1, name: 'Backwear', price: 599, image: '/Mensmodels/product9.png' },
  { id: 1, name: 'Backwear', price: 499, image: '/Mensmodels/product11.png' },
  { id: 1, name: 'Backwear', price: 899, image: '/Mensmodels/product17.png' }

  

 
];
const App = () => 
{
const [cart, setCart] = useState([]);
 const addToCart = (shoe) => {  setCart([...cart, shoe]);
};
return (
<div className="App">
 <h1>ShoeMart</h1>
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
 <li key={item.id}>{item.name}</li>))}
 </ul>
 </div>
 <Link to="/Shoe" className="button button-shoe">SPORTS SHOE</Link>
  <Link to="/Casualshoe" className="button button-shoe1">
          CASUAL SHOE
        </Link>   
        <Link to="/Rough" className="button button-shoe1">
         FANCY
        </Link> 
        <div>
        <Link to="/Formalshoe" className="button button-shoe1">
          FORMAL SHOE
        </Link> 
 <Link to="/Reggular" className="button button-shoe1">
      REGGULER 
        </Link> 
        <Link to="/Slipper" className="button button-shoe1">
      SLIPPER
        </Link>
 <Link to="/Filpflop" className="button button-shoe1">FLIPFLOP</Link> 
        </div>
 </div>

 );};
export default App;