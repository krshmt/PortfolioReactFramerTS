// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "./CSS/Moi.css";

import ImgReact from "./IMG/logo-react.svg";
import ImgFrameMotion from "./IMG/logo-framer-motion.svg";
import ImgTypeScript from "./IMG/logo-ts.svg";
import ImgHtml from "./IMG/logo-html.svg";
import ImgCss from "./IMG/logo-css.svg";
import ImgJavaScript from "./IMG/logo-js.svg";
import ImgFigma from "./IMG/logo-figma.svg";
import ImgGit from "./IMG/logo-git.svg";

const paragraphe = "Bonjour, je m'appelle Kris. Actuellement en deuxième année de BUT Informatique à l'Université d'Orléans, je suis passionné par le développement web et les technologies numériques. Je recherche activement un contrat d'apprentissage dans une agence web.";
const paragraphe2 = "Passionné par le développement web, je suis constamment à la recherche de nouvelles technologies à maîtriser, ce qui me permet de rester à la pointe de l'innovation dans ce domaine en rapide évolution.";
const paragraphe3 = "Mon objectif est de rejoindre une équipe dynamique en tant qu'alternant, où je pourrais développer mes compétences techniques sous la mentorat de développeurs seniors expérimentés.";

function Moi() {
  const [projects, setProjects] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: false, // L'animation ne se déclenche qu'une seule fois
    threshold: 0.2      // L'animation se déclenche lorsque 50% de l'élément est visible
  });
  const listeImages = [ImgReact, ImgFrameMotion, ImgTypeScript, ImgHtml, ImgCss, ImgJavaScript, ImgFigma, ImgGit];
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const cursorRef = useRef(null);



  useEffect(() => {

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };


    window.addEventListener("mousemove", moveCursor);


    document.documentElement.classList.add("black-background");

    const headerElement = document.querySelector("header");
    const liens = document.querySelectorAll(".lienheader");

    if (headerElement && liens.length > 0) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.41)";
      liens.forEach((lien) => {
        (lien as HTMLElement).style.color = "white";
      });
    }

    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("black-background");
    }

    fetch("http://localhost:3000/langages")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) =>
        console.error("Erreur de chargement des projets", error)
      );

    // Fonction de nettoyage pour réinitialiser les styles lors du démontage du composant
    return () => {
      document.documentElement.style.backgroundColor = "";
      window.removeEventListener("mousemove", moveCursor);
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
    <>
      <div className="cursor-mask">
        <div ref={cursorRef} className="custom-cursor"></div>
        <motion.main
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay:0.7}}
          className="mainMoi"
        >
        <div className="div__1">
          <h2 className="titre__scroll">Scroll pour en savoir plus sur moi</h2>
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div>
        <Paragraph value={paragraphe} />
        <div className="div__1">
          <Paragraph value={paragraphe2} />
        </div>
        <div className="div__2">
          <Paragraph value={paragraphe3} />
        </div>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ duration: 1 }}
          className="liste__competence"
        >
          {projects.map((project, index) => (
            <div key={index} className="competence">
              <img src={listeImages[index]} alt={project.name} />
              <h3>{project.h3}</h3>
              <p className="description__competence">{project.p.text}</p>
            </div>
          ))}
        </motion.div>
      </motion.main>
      </div>
    </>
  );
}

export default Moi;
