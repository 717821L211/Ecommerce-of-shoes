import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const shoesData = [
  { id: 1, name: 'r', price: 299, image: '/Mensmodels/Fancy1.png' },
  { id: 1, name: 'r', price: 299, image: '/Mensmodels/Fancy2.png' },
  { id: 1, name: 'r', price: 299, image: '/Mensmodels/Fancy3.png' },
  { id: 1, name: 'r', price: 299, image: '/Mensmodels/Fancy4.png' },
  { id: 1, name: 'r', price: 299, image: '/Mensmodels/Fancy5.png' },
  { id: 1, name: 'r', price: 299, image: '/Mensmodels/Fancy6.png' },
  { id: 1, name: 'r', price: 299, image: '/Mensmodels/Fancy7.png' },

 
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
        <Link to="/Belttype" className="button button-shoe1">
      Belttype
        </Link>
        <div>
        <Link to="/Formalshoe" className="button button-shoe1">
          FORMAL SHOE
        </Link> 
 <Link to="/Reggular" className="button button-shoe1">
      REGGULER 
        </Link> 
        <Link to="/Vtype" className="button button-shoe1">
      V TYPE
        </Link>  
        <Link to="/Silpper" className="button button-shoe1">
      SLIPPER
        </Link>
        <Link to="/Filpflop" className="button button-shoe1">FLIPFLOP</Link> 
        </div>
 </div>
 );};
export default App;