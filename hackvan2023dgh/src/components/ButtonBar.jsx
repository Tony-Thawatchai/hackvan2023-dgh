import React, { useState } from 'react';
import './ButtonBar.css'; // Create a CSS file for styling

function ButtonBar({ values, onSelect = () => { } }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleButtonClick = (index) => {
    setCurrentIndex(index);
    onSelect(values[index]);
  };

  return (
    <div className="button-bar">
      {values.map((value, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(index)}
          className={`button ${index === currentIndex ? 'active' : ''}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
export default ButtonBar;

