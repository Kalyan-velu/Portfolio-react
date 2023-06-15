import React, { useEffect } from 'react';
import './RandomText.scss';

const getRandomColor = () => {
  const letters = '6789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

const RandomText = ({ cycle, color }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('.rw-words-1 span');
    texts.forEach((text, i) => {
      text.style.setProperty('--anim-delay', `${i * 3 * 1000}ms`);
      text.style.setProperty('--anim-length', `${texts.length * 3 * 1000}ms`);
      if (color === 'random') {
        text.style.setProperty('--text-color', getRandomColor());
      }
    });
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
};

export default RandomText;
