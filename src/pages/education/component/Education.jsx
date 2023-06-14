import React, { useEffect } from 'react'
import LeftNavbar from '../../../component/navbar/leftnavbar/LeftNavbar'
import EducationDetails from './main/Education'
import "../style/Education.scss"

const Education = () => {
  useEffect(() => {
    document.title = "Kalyan | Education"
  }, [])
  return (
    <div className="container-main">
      <LeftNavbar />
      <div className="container-details">
        <EducationDetails />
      </div>
    </div>
  )
}

export default Education