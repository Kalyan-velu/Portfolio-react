import React, { useEffect } from 'react';
import LeftNavbar from '../../../component/navbar/leftnavbar/LeftNavbar'
import ContactDetails from './details/ContactDetails';

import "../style/Contact.scss"

const Contact = () => {

  useEffect(() => {
    document.title = "Kalyan | Contact"
  }, [])

  return (
    <div className="container">
      <LeftNavbar />
      <section id='contact' className="container-details">
        <ContactDetails />
      </section>
    </div>
  )
}

export default Contact