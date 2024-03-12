// 
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { productData } from "../component/Data/ProductData";

//   {
//     id: 1,
//     name: "Running Shoes",
//     price: 699,
//     image: "/Mensmodels/sportsshoe1.png",
//   },
//   {
//     id: 1,
//     name: "Running Shoes",
//     price: 799,
//     image: "/Mensmodels/sportsshoe2.png",
//   },
//   {
//     id: 1,
//     name: "Running Shoes",
//     price: 599,
//     image: "/Mensmodels/sportsshoe3.png",
//   },
//   {
//     id: 1,
//     name: "running Shoes",
//     price: 499,
//     image: "/Mensmodels/sportsshoe4.png",
//   },
//   {
//     id: 1,
//     name: "Running Shoes",
//     price: 899,
//     image: "/Mensmodels/sportsshoe5.png",
//   },
// ];
const App = () => {
  const navigate=useNavigate();
  return (
    <div className="App">
      <h1>ShoeMart</h1>
      <Container>
      <div className="shoe-container">
        {productData.filter((shoe) => shoe.category === "sportsshoes").map((shoe) => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.imageurl[0]} alt={shoe.name} />
            <h3>{shoe.model}</h3>
            <p>{shoe.price.toFixed(2)}</p>
            <button onClick={()=>navigate(`/${shoe.model}`)}>View Product</button> 
          </div>
        ))}
      </div>
      </Container>
      <div className="cart">
        <Link to="/Formalshoe" className="button button-shoe1">
          FORMAL SHOE
        </Link>
        <Link to="/Rough" className="button button-shoe1">
          FANCY
        </Link>
        <Link to="/Belttype" className="button button-shoe1">
          Belttype
        </Link>
        <Link to="/Casualshoe" className="button button-shoe1">
          CASUAL SHOE
        </Link>
        <div>
          <Link to="/Reggular" className="button button-shoe1">
            REGGULAR
          </Link>
          <Link to="/Vtype" className="button button-shoe1">
            V TYPE
          </Link>
          <Link to="/Slipper" className="button button-shoe1">
            SLIPPER
          </Link>
          <Link to="/Flipflop" className="button button-shoe1">
            FLIPFLOP
          </Link>
        </div>
      </div>
      
    </div>
  );
};
export default App;
