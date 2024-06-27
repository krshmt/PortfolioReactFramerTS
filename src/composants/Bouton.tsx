// @ts-nocheck

import React, { useState, useEffect } from 'react';
import "./CSS/Bouton/Bouton.css";

function Bouton() {
  const [clickCount, setClickCount] = useState(() => {
    // Récupérer le nombre de clics depuis sessionStorage, ou utiliser 0 s'il n'existe pas
    const savedCount = sessionStorage.getItem('clickCount');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    // Enregistrer le nouveau nombre de clics dans sessionStorage
    sessionStorage.setItem('clickCount', newCount);
  };

  // Utilisation d'un effet pour enregistrer le nombre de clics lorsque le composant se démonte
  useEffect(() => {
    sessionStorage.setItem('clickCount', clickCount);
  }, [clickCount]);

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
