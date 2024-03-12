import React from 'react'
import walkshoe1  from '../Pictures/walkshoe1.jpg';
import product1  from '../Pictures/product1.png';
import casualshoe1  from '../Pictures/casualshoe1.png';
import product6  from '../Pictures/product6.png';
import product15  from '../Pictures/product15.png';
import product13  from '../Pictures/product13.png';
import product18  from '../Pictures/product18.png';
import Slipper1  from '../Pictures/Slipper1.png';
import flipflop1 from '../Pictures/flipflop1.png';



import { Link } from 'react-router-dom';
import './Mens.css';
const Mens = () => {  
  return (
    <div>
         
      <h2>MENS COLLECTION</h2>
      <div className="pics">
      <div className="pic-wrapper">
    <img className="walkshoe1" src={walkshoe1} alt="name" />
    <Link to="/Shoe" className="button button-shoe">SPORTS SHOE</Link>
  </div>  
  <div className="pics">
  <div className="pic-wrapper">
      <img className="product1" src={product1} alt="name"/>
      <Link to="/Formalshoe" className="button button-shoe1">
          FORMAL SHOE
        </Link>    
    </div>
    <div className="pics">
  <div className="pic-wrapper">
      <img className="casualshoe1" src={casualshoe1} alt="name"/>
      <Link to="/Casualshoe" className="button button-shoe1">
          CASUAL SHOE
        </Link>    
    </div>
    <div className="pics">
  <div className="pic-wrapper">
      <img className="product6" src={product6} alt="name"/>
      <Link to="/Belttype" className="button button-shoe1">
      Belttype
        </Link>    
    </div>
    <div className="pics">
  <div className="pic-wrapper">
      <img className="product15" src={product15} alt="name"/>
      <Link to="/Rough" className="button button-shoe1">
         FANCY
        </Link>    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="pics">
  <div className="pic-wrapper">
      <img className="product13" src={product13} alt="name"/>
      <Link to="/Reggular" className="button button-shoe1">
      REGGULER 
        </Link>    
    </div>
    <div className="pics">
  <div className="pic-wrapper">
      <img className="product18" src={product18} alt="name"/>
      <Link to="/Vtype" className="button button-shoe1">
      V TYPE
        </Link>    
    </div>
    <div className="pics">
  <div className="pic-wrapper">
      <img className="Slipper1" src={Slipper1} alt="name"/>
      <Link to="/Slipper" className="button button-shoe1">
      SLIPPER
        </Link>    
    </div>
    <div className="pics">
     <div className="pic-wrapper">
      <img className="flipflop1" src={flipflop1} alt="name"/>
      <Link to="/Filpflop" className="button button-shoe1">
     Filpflop
        </Link>    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Mens
