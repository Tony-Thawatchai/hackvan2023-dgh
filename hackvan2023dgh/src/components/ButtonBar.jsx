import React, { useState } from 'react';
import './ButtonBar.css'; // Create a CSS file for styling

function ButtonBar({ values }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-bar">
      {values.map((value, index) => (
        <button
          key={index}
          className={`slider-button ${index === currentIndex ? 'active' : ''}`}
          onClick={() => handleButtonClick(index)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
export default ButtonBar;

