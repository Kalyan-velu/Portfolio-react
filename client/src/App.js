import { useEffect } from 'react';
import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css"
import Navbar from './component/navbar/Navbar';
import AllRoutes from './routes/AllRoutes';

function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1500,
    })
  },[])
  return (  
    <div className="App">
      <Navbar/>
      <AllRoutes/>  
     
    </div>
  )
}

export default App;
