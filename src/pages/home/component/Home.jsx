import React from 'react'
import LeftNavbar from '../../../component/navbar/leftnavbar/LeftNavbar'
import HomeMainbar from './main/HomeMainbar'
import "../style/Home.scss"
const Home = () => {
  return (
    <div className="container-main">
      <LeftNavbar />
      <div className="container-details">
        <HomeMainbar />
      </div>
    </div>
  )
}

export default Home