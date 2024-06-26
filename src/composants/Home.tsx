// @ts-nocheck
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CSS/Home.css";
import { Link } from "react-router-dom";
import gifProjets from "./GIF/animiertes-gif-von-online-umwandeln-de.gif";
import gifMoi from "./GIF/quisuisje.gif";


function Home() {
  const [hoveredLink, setHoveredLink] = useState('');

  useEffect(() => {
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

    return () => {
      document.documentElement.style.backgroundColor = "";
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
      className="div__centrage"
    >
      <main className="main">
        <h2 className="titre__accueil">
          Je suis étudiant développeur WEB en quête d'une alternance{" "}
        </h2>
        <p className="paragraphe__accueil">
          Bienvenue sur mon portfolio !{" "}
        </p>
        <p className="paragraphe__accueil">
          Vous pouvez découvrir{" "}
          <Link
            to="/Projets"
            onMouseEnter={() => setHoveredLink("projets")}
            onMouseLeave={() => setHoveredLink("")}
            className="hover-link"
          >
            mes projets
          </Link>{" "}
          ou{" "}
          <Link
            to="/Moi"
            onMouseEnter={() => setHoveredLink("moi")}
            onMouseLeave={() => setHoveredLink("")}
            className="hover-link"
          >
            en apprendre un peu plus sur moi
          </Link>
        </p>
        <AnimatePresence>
          {hoveredLink === "projets" && (
            <motion.img
              key="gif-projets"
              src={gifProjets}
              alt="GIF Projets"
              initial={{ y: '100%', opacity: 0, rotate: 0 }}
              animate={{ y: '50%', opacity: 1, rotate: 5 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="animated-gif"
            />
          )}
          {hoveredLink === "moi" && (
            <motion.img
              key="gif-moi"
              src={gifMoi}
              alt="GIF Moi"
              initial={{ y: '100%', opacity: 0, rotate: 0 }}
              animate={{ y: '50%', opacity: 1, rotate: -5 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="animated-gif"
            />
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
}


export default Home;
 