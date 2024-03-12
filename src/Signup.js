import React, { useState } from 'react';
import './Signup.css'; 

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    onSignup(username);
  };

  return (
  <div className="signup-container">
   <h2>Sign Up</h2>
  <form>
   <label>
   Username:
  <input
     type="text"
     value={username}
    onChange={(e) => setUsername(e.target.value)}
     placeholder="Enter your username"
       />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />                                                                                
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
