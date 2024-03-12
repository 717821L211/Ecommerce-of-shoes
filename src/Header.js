import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {'Header'}
      <Link to="/login">Login / Signup</Link>
    </header>
  );
};

export default Header;
