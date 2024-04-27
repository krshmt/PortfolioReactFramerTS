// @ts-nocheck
import React, { useState } from 'react';
import './CSS/Header/HeaderPlacement.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [estClick, setEstClick] = useState(false);

  const clickBurger = () => {
    setEstClick(!estClick);
  };

  const navVariants = {
    open: { height: "330px" },
    closed: { height: "0%" }
  };

  const bar1Variants = {
    normal: { rotate: 0},
    rotated: { rotate: 45}
  };

  const bar2Variants = {
    normal: { rotate: 0},
    rotated: { rotate: -45 }
  };

  return (
    <motion.header
      initial={{ y: "-100px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1><Link className="lienheader" to="/">Kris</Link></h1>
      <div onClick={clickBurger} 
        className="btn__burger__menu"
        style={{
          justifyContent: estClick ? 'center' : 'space-evenly'
        }}>
        <motion.div 
          className="bar__burger__menu b1"
          variants={bar1Variants}
          animate={estClick ? "rotated" : "normal"}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <motion.div 
          className="bar__burger__menu b2"
          variants={bar2Variants}
          animate={estClick ? "rotated" : "normal"}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
      <nav className='nav__not__burger'>
        <ul>
          <li><Link className="lienheader" to="/Projets">Projets</Link></li>
          <li><Link className="lienheader" to="/Moi">Moi</Link></li>
          <li><Link className="lienheader" to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <AnimatePresence>
        {estClick && (
          <motion.nav 
            variants={navVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.5 }}
            className='nav__burger'
          >
            <motion.div
              initial={{ y: "-30px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-30px", opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <ul>
                <li><Link className="lienheader" to="/Projets">Projets</Link></li>
                <li><Link className="lienheader" to="/Moi">Moi</Link></li>
                <li><Link className="lienheader" to="/Contact">Contact</Link></li>
              </ul>
              <ul className='nav__reseau'>
                <li><a className="nav__reseau__lien" href='' target='_blank'>LinkedIn</a></li>
                <li><a className="nav__reseau__lien" href='' target='_blank'>GitHub</a></li>
              </ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
