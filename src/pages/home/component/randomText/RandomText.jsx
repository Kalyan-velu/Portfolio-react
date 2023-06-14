import React, { useEffect } from 'react';
import "./RandomText.scss"
function getRandomColor() {
   var letters = '6789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
   }
   return color;
}

function RandomText({ cycle, color }) {
   useEffect(() => {
      const texts = document.querySelectorAll('.rw-words-1 span');
      for (let i = 0; i < texts.length; i++) {
         texts[i].style.setProperty('--anim-delay', `${i * 3 * 1000}ms`);
         texts[i].style.setProperty(
            '--anim-length',
            `${texts.length * 3 * 1000}ms`
         );
         if (color === 'random') {
            texts[i].style.setProperty('--text-color', getRandomColor());
         }
      }
   }, [cycle, color]);

   return (
      <div className="cycle-wrapper">
         <div style={{ '--text-color': color || '#55ffdd' }} className="rw-words rw-words-1">
            {cycle.map((text) => (
               <span key={text}>{text}</span>
            ))}
         </div>
      </div>
   );
}


export default RandomText