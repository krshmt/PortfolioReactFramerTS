// @ts-nocheck
import React from 'react';
import './CSS/Header/HeaderPlacement.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
    return(<motion.header
    initial={{y:"-100px", opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.8}}>
      <h1><Link className="lienheader" to="/">Kris</Link></h1>
      <nav>
        <ul>
          <li><Link className="lienheader" to="/Projets">Projets</Link></li>
          <li><Link className="lienheader" to="/Moi">Moi</Link></li>
          <li><Link className="lienheader" to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </motion.header>
  );
}   

export default Header;
