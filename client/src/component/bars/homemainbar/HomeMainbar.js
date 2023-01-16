import * as React from 'react';
import './Homemainbar.css'
// import {useNavigate} from 'react-router-dom'
import About from './intro/About'
import Intro from './intro/Intro';

export default function HomeMainbar() {
  // const navigate=useNavigate()
  // const handleScroll=(e)=>{
  //   let node = e.target
  //   const down = node.scrollHeight - node.scrollTop === node.clientHeight;
  //       if (down) {
  //           navigate("/education");
  //       }
  // }
  // const mounted = (node)=>{
  //   if(node){
  //     node.addEventListener("scroll",handleScroll)
  //   }
  // }

  return (
  <div className="home-container">
    <About />
    {/* <div className='about'> */}
      <Intro/>
    {/* </div> */}
  </div>
  )
}
  
