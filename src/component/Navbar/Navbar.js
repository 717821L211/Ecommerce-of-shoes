import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
   
      <nav className='navbar'>
        <div className='container'>
        <h3 className='STYLE IN WALK'> STYLE IN WALK</h3>
        <ul className='nav-links'>
        <Link to='/'> <li></li></Link>
            <Link to='/'> <li>Home</li></Link>
            <Link to='/login'> <li>Login</li></Link>
            <Link to='/signup'> <li>Signup</li></Link>
            <Link to='/about'> <li>About</li></Link>
            <Link to='/Contact'> <li>Contact</li></Link>
            
        </ul>
        </div>
      </nav>
  
   
  )
}

export default Navbar
