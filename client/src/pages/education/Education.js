import React, {useEffect} from 'react'
import LeftNavbar from '../../component/navbar/leftnavbar/LeftNavbar'
import '../../App.css'
import EducationDetails from '../../component/bars/education/Education'


const Education = () => {
    useEffect(()=>{
        document.title="Kalyan | Education"
    },[])
  return (
    <div className="container-main">
        <LeftNavbar/>
        <div className="container-details">
          <EducationDetails/>
        </div>
    </div>
  )
}

export default Education