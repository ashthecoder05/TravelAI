import React from 'react';
import './MovingText.css';

const MovingText = ({ text }) => {
  return (
    <div className="moving-text">
      {text}
    </div>
  );
};

export default MovingText;