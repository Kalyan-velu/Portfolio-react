import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Site from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Site/>}/>
      <Route path='/blog' element={<>Blog</>}/>
    </Routes>
  )
}

export default AllRoutes