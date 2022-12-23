import React from 'react'
import LeftNavbar from '../../component/navbar/leftnavbar/LeftNavbar'
import '../../App.css'
import HomeMainbar from '../../component/bars/homemainbar/HomeMainbar'

const Education = () => {
  return (
    <div className="container-main">
        <LeftNavbar/>
        <div className="container-details">
          <HomeMainbar/>
        </div>
    </div>
  )
}

export default Education