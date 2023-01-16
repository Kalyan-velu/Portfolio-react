import * as React from 'react';
import  person from '../../../../assests/images/person.jpg'
import Resume from '../../../../assests/pdf/Kalyan Jyoti Borah.pdf'
import { Button } from '@mui/material';

export default function About() {
  return (
  <div className="about">
    <div className="about-container">
      <div className="typography" data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <p>Hi,</p>
        <p> My Name is Kalyan Jyoti Borah</p>
        <div className="wrapper">
          <ul className="dynamic-txts">
           <li>
              <span>
                 I am a React Developer    
              </span>
           </li> 
          </ul>
        </div>
      </div>
      <div className="more-details">
        <Button variant='contained' className="download" startIcon={<i className="fa-regular fa-file-pdf"></i>} disableElevation>
          <a href={Resume} download={Resume}>Download Resume</a>
        </Button>
      </div>
    </div>
      <div className="img-container" >
        <img src={person} alt='img'/>
      </div>
  </div>
  )
}