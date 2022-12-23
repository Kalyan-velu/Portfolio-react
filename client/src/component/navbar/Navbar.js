import React from 'react'
import { Link } from '../action/link/Link'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-top'>
      <Link to={'/'} title='Instagram' className='logo'>
       <i className="fa-brands fa-instagram"></i>
      </Link>
    </nav>
  )
}

export default Navbar