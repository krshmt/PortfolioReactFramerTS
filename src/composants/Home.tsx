import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './CSS/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const cursorRef = useRef(null);

  useEffect(() => {

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX+30}px`;
        cursorRef.current.style.top = `${e.clientY+30}px`;
      }
    };

    const handleLinkHover = (e) => {
      setCursorText("Voir +"); // Set text to display in the cursor
      cursorRef.current.classList.add("shrink");
    };

    const handleLinkMouseOut = () => {
      setCursorText(""); // Remove text when not hovering
      cursorRef.current.classList.remove("shrink");
    };

    const links = document.querySelectorAll('.lienAccueil');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkMouseOut);
    });

    window.addEventListener("mousemove", moveCursor);


    document.documentElement.classList.add("black-background");

    const headerElement = document.querySelector("header");
    const liens = document.querySelectorAll(".lienheader");

    if (headerElement && liens.length > 0) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      liens.forEach((lien) => {
        (lien as HTMLElement).style.color = "white";
      });
    }

    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("black-background");
    }

    // Fonction de nettoyage pour réinitialiser les styles lors du démontage du composant
    return () => {
      document.documentElement.style.backgroundColor = "";
      window.removeEventListener("mousemove", moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkMouseOut);
      });
      if (headerElement && liens.length > 0) {
        headerElement.style.backgroundColor = "";
        liens.forEach((lien) => {
          (lien as HTMLElement).style.color = "";
        });
      }
      if (appElement) {
        appElement.classList.remove("black-background");
        document.documentElement.classList.remove("black-background");
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className='div__centrage'>
      <div ref={cursorRef} className="custom-cursor-home">{cursorText}</div>
      <main className='main'>
        <h2 className='titre__accueil'>Développeur WEB</h2>
        <p className='paragraphe__accueil'>Bienvenue sur mon portfolio ! Je suis Kris, étudiant en BUT Informatique et passionné par le développement WEB.</p>
        <div className="btn__projets__savoir__plus">
          <Link className='lienAccueil' to="/Projets">Voir mes projets</Link>
          <Link className='lienAccueil' to="/Moi">En savoir plus sur moi</Link>
        </div>
      </main>
    </motion.div>
  );
}

export default Home;
