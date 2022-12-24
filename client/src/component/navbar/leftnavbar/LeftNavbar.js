import React from 'react'
import { NavLink } from '../../action/link/Link'
import './LeftNavbar.css'

const LeftNavbar = () => {
  return (
    <nav className='left-navbar'>
      <div className="navbar-contents">
      <NavLink to={'/'} title='About' className={'about-link'} >
         <i className="fa-solid fa-circle-info"></i>   
      </NavLink>
      <NavLink title={'Education'} to={'/education'} className={'education-link '} >
         <i className="fa-solid fa-graduation-cap"></i>
      </NavLink>
      <NavLink title={'Certificates'} to={'/achivements'} className={'achivements-link '} >
         <i className="fa-solid fa-award"></i>
      </NavLink>
      <NavLink title={'Projects'} to={'/projects'} className={'achivements-link '} >
         <i className="fa-solid fa-hammer"></i>
      </NavLink>
      <NavLink title='Contact Details' to={'/contact'} className={'education-link '} >
         <i className="fa-regular fa-address-card"></i>
      </NavLink>
      </div>
    </nav>
  )
}

export default LeftNavbar