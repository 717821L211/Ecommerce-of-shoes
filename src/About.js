import React, { useState } from 'react';
import './About.css';

function App() {
  const [showTeamInfo, setShowTeamInfo] = useState(false);

  const toggleTeamInfo = () => {
    setShowTeamInfo(!showTeamInfo);
  };

  return (
    <div className="App">
      <header>
        <h1>About</h1>
      </header>

      <section>
        <h2>Our Story</h2>
        <p>Welcome to Shoe E-commerce, where passion for footwear meets the convenience of online shopping. We started this journey with the goal of providing the latest and trendiest shoes to our customers at the click of a button.</p>

        <h2>Our Mission</h2>
        <p>At Shoe E-commerce, we are committed to offering a wide range of high-quality shoes for every style and occasion. Our mission is to make your shopping experience enjoyable, convenient, and memorable.</p>
        

        <h2>Meet the Team</h2>
        <p>Learn more about the people behind Shoe E-commerce. Click the button below!</p>
        <button onClick={toggleTeamInfo}>CLICK</button>

        {showTeamInfo && (
          <div>
    
            <p> I am passionate enthusiasts dedicated to bringing you the best footwear selection.</p>
          </div>
        )}
      </section>

      <footer>
        &copy; 2023 Shoe E-commerce. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
