// @ts-nocheck

import React, { useEffect, useState, useRef } from "react";
import "./CSS/Header/HeaderBlanc.css";
import "./CSS/Projets/Projet.css";
import ImgDior from "./IMG/Gris_Dior.jpg";
import ImgPortfolio from "./IMG/Portfolio.png";
import ImgEscrime from "./IMG/Escrime.png";
import ImgSpotMusic from "./IMG/SpotMusic.png";
import ImgVintIK from "./IMG/FV.png";
import gifHubLo from "./GIF/Insta-Hub-lo_2.gif"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Projets() {
  const [projets, setProjets] = useState([]);
  const [typeProjet, setTypeProjet] = useState("Tous");
  const listeImages = [
    ImgDior,
    ImgPortfolio,
    ImgEscrime,
    ImgSpotMusic,
    ImgVintIK,
    gifHubLo
  ];

  useEffect(() => {



    document.documentElement.classList.add("white-background");

    const headerElement = document.querySelector("header");
    const liens = document.querySelectorAll(".lienheader");
    const barNav1 = document.querySelector(".b1");
    const barNav2 = document.querySelector(".b2");

    if (headerElement && liens.length) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.12)";
      liens.forEach((lien) => {
        (lien as HTMLElement).style.color = "black";
      });
      
      barNav1.style.backgroundColor = "black"; 
      barNav2.style.backgroundColor = "black"; 
    }

    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("white-background");
    }

    fetch("https://krshmt.github.io/PortfolioReactFramerTS/src/composants/JSON/projets.json")
      .then((response) => response.json())
      .then((data) => setProjets(data.projets))
      .catch((error) =>
        console.error("Erreur de chargement des projets", error)
      );

    // Fonction de nettoyage pour réinitialiser les styles lors du démontage du composant
    return () => {
      document.documentElement.style.backgroundColor = "";
      if (headerElement && liens.length) {
        headerElement.style.backgroundColor = "";
        liens.forEach((lien) => {
          (lien as HTMLElement).style.color = "";
        });
        barNav1.style.backgroundColor = ""; 
        barNav2.style.backgroundColor = ""; 
      }
      if (appElement) {
        appElement.classList.remove("white-background");
        document.documentElement.classList.remove("white-background");
      }
    };
  }, []);

  const projetsFiltres = projets.filter((projet) => {
    if (typeProjet === "Tous") {
      return true;
    } else {
      return projet.realisation === typeProjet;
    }
  });

  const handleTypeSelection = (type) => {
    setTypeProjet(type);
  };

  return (
    <>
      <motion.div
        transition={{duration: 0.8, delay:0.7}}
        initial={{y: 100, opacity: 0 }}
        animate={{y: 0,  opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 3 }, y: 100}}
        className="projets"
      >
        <div className="description__page">
          De mes réalisations académiques aux expériences enrichissantes en
          stage, jusqu'aux projets personnels que j'ai développés seul pour
          aiguiser mes compétences, chaque projet raconte une étape de mon
          développement professionnel et personnel. Découvrez comment chaque
          initiative a contribué à façonner mon expertise.
        </div>

        <div className="gestion__btn">
          <button
            className={typeProjet === "Tous" ? "selected" : ""}
            onClick={() => handleTypeSelection("Tous")}
          >
            Tous les projets
          </button>
          <button
            className={typeProjet === "Autonome" ? "selected" : ""}
            onClick={() => handleTypeSelection("Autonome")}
          >
            Projets Autonomes
          </button>
          <button
            className={typeProjet === "Projet Universitaire" ? "selected" : ""}
            onClick={() => handleTypeSelection("Projet Universitaire")}
          >
            Projets Universitaires
          </button>
          <button
            className={typeProjet === "Projet Stage" ? "selected" : ""}
            onClick={() => handleTypeSelection("Projet Stage")}
          >
            Projets de Stage
          </button>
        </div>

        <div className="gestion__select">
          <select
            value={typeProjet}
            onChange={(e) => handleTypeSelection(e.target.value)}
            className="select-style"
          >
            <option value="Tous">Tous les projets</option>
            <option value="Autonome">Projets Autonomes</option>
            <option value="Projet Universitaire">Projets Universitaires</option>
            <option value="Projet Stage">Projets de Stage</option>
          </select>
        </div>


        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          key={typeProjet}
          className="liste__projets"
        >
          {projetsFiltres.map((projet) => (
            <Link
              key={projet.id}
              to={`/Projet/${projet.id}`}
              className="projet-card"
            >
              <div className="projet-card">
                <img
                  src={listeImages[projet.id]}
                  alt={projet.nom}
                  className="projet-image"
                />
                <div className="projet-info">
                  <h3 className="nom__projet">{projet.nom}</h3>
                  <p className="realisation">{projet.realisation}</p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Projets;
