import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Home,Contact,Education,Project} from "../pages"

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/achivements' element={<Education/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default AllRoutes