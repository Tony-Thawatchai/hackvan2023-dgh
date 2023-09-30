import React, { useState } from 'react';
import './ButtonBar.css'; // Create a CSS file for styling

function ButtonBar({ values }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (value) => {
    setCurrentIndex(value);
    
  };
  console.log(currentIndex);

  return (
    <div className="slider-bar">
      {values.map((value, index) => (
        <button
          key={index}
          className={`slider-button ${index === currentIndex ? 'active' : ''}`}
          value={value}
          onClick={() => handleButtonClick(value)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
export default ButtonBar;

