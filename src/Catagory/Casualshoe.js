// 
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { productData } from "../component/Data/ProductData";


const App = () => {
  const navigate=useNavigate();
  return (
    <div className="App">
      <h1>ShoeMart</h1>
      <Container>
      <div className="shoe-container">
        {productData.filter((shoe) => shoe.category === "Casualshoe").map((shoe) => (
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
        <Link to="/Shoe" className="button button-shoe1">
           RUNNING SHOE
        </Link>
        <Link to="/Rough" className="button button-shoe1">
          FANCY
        </Link>
        <Link to="/Belttype" className="button button-shoe1">
          Belttype
        </Link>
        <Link to="/Formalshoe" className="button button-shoe1">
          FORMAL SHOE
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
