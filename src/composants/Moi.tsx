// @ts-nocheck
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./CSS/Moi.css";

import ImgReact from "./IMG/logo-react.svg";
import ImgFrameMotion from "./IMG/logo-framer-motion.svg";
import ImgTypeScript from "./IMG/logo-ts.svg";
import ImgHtml from "./IMG/logo-html.svg";
import ImgCss from "./IMG/logo-css.svg";
import ImgJavaScript from "./IMG/logo-js.svg";
import ImgFigma from "./IMG/logo-figma.svg";
import ImgGit from "./IMG/logo-git.svg";

import gifWebDesign from "./GIF/amazing-spiderman-webdesign.gif";
import gifTakeMe from "./GIF/take-me-now-spongebob.gif";

function Moi() {
  const [projects, setProjects] = useState([]);
  const listeImages = [
    ImgReact,
    ImgFrameMotion,
    ImgTypeScript,
    ImgHtml,
    ImgCss,
    ImgJavaScript,
    ImgFigma,
    ImgGit,
  ];

  const [hoveredLink, setHoveredLink] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("black-background");

    const headerElement = document.querySelector("header");
    const liens = document.querySelectorAll(".lienheader");
    const cursor1 = document.querySelector(".cursor")
    const cursor2 = document.querySelector(".cursor2")

    cursor1.style.border = "1px solid white"
    cursor2.style.backgroundColor = "white"
    

    if (headerElement && liens.length > 0) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.41)";
      liens.forEach((lien) => {
        lien.style.color = "white";
      });
    }

    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("black-background");
    }

    fetch(
      "https://krshmt.github.io/PortfolioReactFramerTS/src/composants/JSON/projets.json"
    )
      .then((response) => response.json())
      .then((data) => setProjects(data.langages))
      .catch((error) =>
        console.error("Erreur de chargement des projets", error)
      );

    // Fonction de nettoyage pour réinitialiser les styles lors du démontage du composant
    return () => {
      document.documentElement.style.backgroundColor = "";
      if (headerElement && liens.length > 0) {
        headerElement.style.backgroundColor = "";
        liens.forEach((lien) => {
          lien.style.color = "";
        });
      }
      cursor1.style.border = ""
      cursor2.style.backgroundColor = ""
      if (appElement) {
        appElement.classList.remove("black-background");
        document.documentElement.classList.remove("black-background");
      }
    };
  }, []);

  // Hook pour détecter la visibilité des sections
  const { ref: competencesRef, inView: competencesInView } = useInView({
    triggerOnce: true, // Déclencher une seule fois
    threshold: 0.5, // Détecter lorsque 50% de l'élément est visible
  });

  const { ref: parcoursRef, inView: parcoursInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <motion.div
        className="a-propos"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h3>A propos</h3>
        <h2>Kris Touré</h2>
        <p>
          Actuellement, je suis un étudiant de deuxième année en BUT
          Informatique qui est passionné par le développement WEB. Je suis plus
          orienté par le côté{" "}
          <strong
            onMouseEnter={() => setHoveredLink("web")}
            onMouseLeave={() => setHoveredLink("")}
            className="hover-link"
          >
            {" "}
            Front-End et design{" "}
          </strong>
          des sites WEB car cela permet d'exprimer sa créativité et d'avoir une
          variété de projets.
        </p>
        <p>
          Je suis à la{" "}
          <strong
            onMouseEnter={() => setHoveredLink("takeme")}
            onMouseLeave={() => setHoveredLink("")}
            className="hover-link"
          >
            {" "}
            recherche d'un contrat d'apprentissage{" "}
          </strong>
          au sein d'une agence web qui valorise autant les fonctionnalités que
          le design des projets. Travailler dans une agence qui aspire à offrir
          des projets à forte valeur ajoutée correspond parfaitement à mes
          valeurs et à mes ambitions professionnelles.
        </p>
      </motion.div>

      <motion.div
        className="parcours__experience"
        ref={parcoursRef} // Référence pour le hook useInView
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: parcoursInView ? 0 : 100, opacity: parcoursInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="titre-autres">Parcours & expérience</h3>
        <p>
          En ce qui concerne mon parcours, je suis actuellement étudiant en BUT
          Informatique, une filière qui m'a toujours intrigué. C'est en
          intégrant cette formation que ma passion pour le Web Design s'est
          réellement développée. À l'avenir, j'envisage de poursuivre un Mastère
          en développement web afin d'approfondir mes connaissances dans ce
          domaine. Parallèlement, je réalise des projets personnels pour
          acquérir de nouvelles compétences en développement web et renforcer
          mon expertise.{" "}
        </p>
        <p>
          En dehors de mes projets personnels et académiques, ma formation en
          deuxième année m'a offert l'opportunité de réaliser un stage de deux
          mois. J'ai eu la chance de l'effectuer au sein du consortium{" "}
          <strong>
            <a href="https://hub-lo.fr/">HUB-LO</a>
          </strong>
          . Grâce à mes maîtres de stage, j'ai pu clarifier mon parcours
          professionnel et affiner mes objectifs de carrière.
        </p>
      </motion.div>

      <motion.div
        className="liste__competence"
        ref={competencesRef} // Référence pour le hook useInView
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: competencesInView ? 0 : 100, opacity: competencesInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project, index) => (
          <div key={index} className="competence">
            <img src={listeImages[index]} alt={project.name} />
            <h3>{project.h3}</h3>
            <p className="description__competence">{project.p.text}</p>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {hoveredLink === "web" && (
          <motion.img
            key="gif-web-design"
            src={gifWebDesign}
            alt="GIF Projets"
            initial={{ y: "100%", opacity: 0, rotate: 0 }}
            animate={{ y: "50%", opacity: 1, rotate: 5 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="animated-gif-moi-un"
          />
        )}
        {hoveredLink === "takeme" && (
          <motion.img
            key="gif-take-me"
            src={gifTakeMe}
            alt="GIF Moi"
            initial={{ y: "100%", opacity: 0, rotate: 0 }}
            animate={{ y: "50%", opacity: 1, rotate: -5 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="animated-gif-moi-deux"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Moi;
