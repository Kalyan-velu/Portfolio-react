import * as React from 'react';
import About from '../introduction/About'
import NameAnimation from '../introduction/NameAnimation';
import "../../style/Home.scss"
export default function HomeMainbar() {
  function updateGradient(event) {
    const dist = Math.sqrt(
      Math.pow(window.innerWidth / 2 - event.clientX, 2) +
      Math.pow(window.innerHeight / 2 - (event.clientY + window.scrollY), 2)
    );
    const maxDist = Math.sqrt(
      Math.pow(window.innerWidth / 2 - 0, 2) +
      Math.pow(window.innerHeight / 2 - 0, 2)
    );
    const size = 40 - 25 * (dist / maxDist);
    document
      .getElementById("gradient")
      .style.setProperty("--size", `${size}vw`);
  }

  React.useEffect(() => {
    document.addEventListener("mousemove", updateGradient);

    return (() =>
      document.removeEventListener("mousemove", updateGradient)
    )
  }, [])
  return (
    <>
      <div className="absolute mx-auto my-auto overflow-hidden w-full h-full flex justify-center items-center">
        <div className=" mx-auto my-auto gradient opacity-70" id="gradient" />
      </div>
      <NameAnimation />
      <About />
    </>
  )
}