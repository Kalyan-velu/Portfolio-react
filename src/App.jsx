import { useEffect } from 'react';
import  Blobity  from 'blobity';
import Aos from 'aos'
import "aos/dist/aos.css"
import AllRoutes from './routes/AllRoutes';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])


  new Blobity({
      licenseKey: '...',
      dotColor: "#ff0266",
      mode: "bouncy",
      zIndex: 0,
      invert: 0,
      focusableElements:
          "[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip], .blobity-magnetic, .magnetic-svg--individual-paths path",
  });


  return (
    <div className="app">
      {/*<Socials />*/}
      <AllRoutes />
    </div>
  )
}

export default App;