// @ts-nocheck

import React, { useState } from 'react';
import "./CSS/Bouton/Bouton.css";


function Bouton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="bouton">
      <button className="floating-button" onClick={handleClick}>
        <span role="img" aria-label="heart">👏</span>
        <div>{clickCount}</div>
      </button>
    </div>
  );
}

export default Bouton;
