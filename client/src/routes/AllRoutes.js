import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import Education from '../pages/education/Education'
import Projects from '../pages/project/Project'

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/achivements' element={<Education/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default AllRoutes