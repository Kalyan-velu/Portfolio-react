import React, { useEffect } from 'react';
import ContactDetails from './details/ContactDetails';
import "../style/Contact.scss"

const Contact = () => {

  useEffect(() => {
    document.title = "Kalyan | Contact"
  }, [])

  return (
    <section className="contact">
        <ContactDetails />
    </section>
  )
}

export default Contact