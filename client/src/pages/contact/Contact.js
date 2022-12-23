import React from 'react'
import LeftNavbar from '../../component/navbar/leftnavbar/LeftNavbar'
import '../../App.css'
import ContactDetails from '../../component/bars/contact/Contact'

const Contact = () => {
  return (
    <div className="container-main">
        <LeftNavbar/>
        <div className="container-details">
          <ContactDetails/>
        </div>
    </div>
  )
}

export default Contact