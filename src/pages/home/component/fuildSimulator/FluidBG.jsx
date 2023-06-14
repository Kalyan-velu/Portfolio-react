import React, { useEffect, useRef } from 'react';

function MyComponent() {
  const name = useRef(null);

  useEffect(() => {
    const namePaths = name.current.querySelectorAll("#name path");
    for (let i = 0; i < namePaths.length; i++) {
      namePaths[i].style.setProperty(
        "--total-length",
        namePaths[i].getTotalLength()
      );
      namePaths[i].style.setProperty("--anim-delay", `${i * 200}ms`);
      namePaths[i].addEventListener("mouseenter", () => {
        namePaths[i].style.transform = `rotate(${
          Math.random() * 2 * (Math.random() < 0.5 ? -1 : 1)
        }deg)`;
      });
      namePaths[i].addEventListener("mouseleave", () => {
        namePaths[i].style.transform = "rotate(0deg)";
      });
    }
  }, []);

  return (
    <div
      ref={name}
      className="overflow-hidden w-[80vw] h-screen mobile:h-full flex justify-center items-center mobile:w-[50vw] mobile:overflow-visible"
    >
    </div>
  );
}
