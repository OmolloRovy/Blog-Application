import React from 'react'
import {Link} from 'react-router-dom'
import  Logo from '../assets/Logo.jpeg'
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  return (
   <nav>
    <div className="container nav__container">
      <Link to="/" className='nav__logo'>
      <img src={Logo} alt=""/>
      </Link>
<ul className="nav__menu">
  
    <li><Link to="/profile">Earnest Achiever</Link>  </li>
    <li><Link to="/create" >Create Post </Link>  </li>
    <li><Link to="/authors">Authors</Link>  </li>
    <li><Link to="/logout">Logout</Link>  </li>
   </ul>
   <button className="nav__toggle-btn">
<AiOutlineCloseCircle />
   </button>
    </div>

   </nav>
  )
}

export default Header
