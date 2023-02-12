import React, {useEffect} from 'react';
import LeftNavbar from '../../component/navbar/leftnavbar/LeftNavbar'
import '../../App.css'
import ContactDetails from '../../component/bars/contact/Contact.js'

const Contact = () => {
    useEffect(()=>{
        document.title="Kalyan | Contact"
    },[])
  return (
    <div className="container-main">
        <LeftNavbar/>
        <section id='contact' className="container-details">
          <ContactDetails/>
        </section>
    </div>
  )
}

export default Contact