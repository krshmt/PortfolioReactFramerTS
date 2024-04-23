import React from 'react';
import './CSS/Header/HeaderPlacement.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1><Link to="/">Kris</Link></h1>
      <nav>
        <ul>
          <li><Link to="/projets">Projets</Link></li>
          <li><Link to="/moi">Moi</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}   

export default Header;
