import React from 'react'
import { Link } from '../action'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar-top' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <Link to={'/'} link={`https://www.instagram.com/_kalyan_jyoti_borah/`} title='Instagram' className='logo'>
       <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link to={'/'}  title='Twitter' className='logo'>
       <i className="fa-brands fa-twitter"></i>
      </Link>
      <Link to={'/'} link={`https://www.linkedin.com/in/kalyan-jyoti-borah-3595b5178/`}  title='LinkedIn' className='logo'>
        <i className="fa-brands fa-linkedin"></i>
      </Link>
      <Link link={`https://www.facebook.com/kalyanjyotiborah.dev/`} title='Facebook' className='logo'>
        <i className="fa-brands fa-facebook"></i>
      </Link>
      <Link link={`https://wa.me/919101725446`} target="_blank" title='Whatsapp' className='logo'>
       <i className="fa-brands fa-whatsapp"></i>
      </Link>
    </nav>
  )
}

export default Navbar