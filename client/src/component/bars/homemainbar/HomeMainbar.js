import * as React from 'react';
import './Homemainbar.css'
import  person from '../../../assests/images/person.jpg'
import Resume from '../../../assests/pdf/Resume 2022 September.docx'
import { Button } from '@mui/material';

export default function HomeMainbar() {
  return (
  <div className="about">
    <div className="about-container">
      <div className="typography">
        <p>Hi, My Name is Kalyan Jyoti Borah</p>
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
          <a href={Resume} download={Resume}>Download CV</a>
        </Button>
      </div>
    </div>
      <div className="img-container">
        <img src={person} alt='img'/>
      </div>
  </div>
  )
}
  
