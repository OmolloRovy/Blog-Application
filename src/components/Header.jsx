import React from 'react'
import {Link} from 'react-router-dom'
import  Logo from '../assets/Logo.jpeg'
const Header = () => {
  return (
   <nav>
    <div className="container nav__container">
      <Link to="/" className='nav__logo'>
      <img src="Logo" alt=""/>
      </Link>
    </div>

   </nav>
  )
}

export default Header
