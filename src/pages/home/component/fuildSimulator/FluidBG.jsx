import React, { useEffect, useRef } from 'react';

function FluidBG() {
  const name = useRef(null);

  useEffect(() => {
    const namePaths = Array.from(name.current.querySelectorAll("#name path"));

    namePaths.forEach((path, i) => {
      const totalLength = path.getTotalLength();
      path.style.setProperty("--total-length", totalLength);
      path.style.setProperty("--anim-delay", `${i * 200}ms`);
    
      const handleMouseEnter = () => {
        path.style.transform = `rotate(${
          Math.random() * 2 * (Math.random() < 0.5 ? -1 : 1)
        }deg)`;
      };
    
      const handleMouseLeave = () => {
        path.style.transform = "rotate(0deg)";
      };
    
      path.addEventListener("mouseenter", handleMouseEnter);
      path.addEventListener("mouseleave", handleMouseLeave);
    });

  }, []);

  return (
    <div
      ref={name}
      className="overflow-hidden w-[80vw] h-screen mobile:h-full flex justify-center items-center mobile:w-[50vw] mobile:overflow-visible"
    >
    </div>
  );
}
