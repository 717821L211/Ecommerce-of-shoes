import React, { useState } from 'react';
const shoesData = [
  { id: 1,  price: 699, image: '/Kids/Kids1.png'},
  { id: 1,  price: 699, image: '/Kids/Kids3.png'},
  { id: 1,  price: 699, image: '/Kids/Kids4.png'},
  { id: 1,  price: 699, image: '/Kids/Kids5.png'},
  { id: 1, price: 699, image: '/Kids/Kids6.png'},
  { id: 1,  price: 699, image: '/Kids/Kids7.png'},
  { id: 1,  price: 699, image: '/Kids/Kids8.png'},
  { id: 1,   price: 699, image: '/Kids/Kids9.png'},
  { id: 1,  price: 699, image: '/Kids/Kids10.png'},
  { id: 1,  price: 699, image: '/Kids/Kids11.png'},
  {  id: 1,price: 699, image: '/Kids/Kids12.png'},
  { id: 1,  price: 699, image: '/Kids/Kids13.png'},
  { id: 1,  price: 699, image: '/Kids/Kids14.png'},
  { id: 1,  price: 699, image: '/Kids/Kids15.png'},
  { id: 1,  price: 699, image: '/Kids/Kids16.png'},
  { id: 1,  price: 699, image: '/Kids/Kids17.png'},
  { id: 1,  price: 699, image: '/Kids/Kids18.png'},
  { id: 1,  price: 699, image: '/Kids/Kids19.png'},
  { id: 1,  price: 699, image: '/Kids/Kids20.png'},
  
  

 
];
const App = () => 
{
const [cart, setCart] = useState([]);
 const addToCart = (shoe) => {  setCart([...cart, shoe]);
};
return (
<div className="App">
 <h1>KIDS COLLECTION</h1>
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
 </div>

 );};
export default App;