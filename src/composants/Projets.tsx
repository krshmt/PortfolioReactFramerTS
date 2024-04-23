import React, { useEffect, useState } from "react";
import "./CSS/Header/HeaderBlanc.css";
import "./CSS/Projets/Projet.css";
import ImgDior from "./IMG/Gris_Dior.jpg";
import ImgPortfolio from "./IMG/Portfolio.png";
import ImgEscrime from "./IMG/Escrime.png";
import ImgSpotMusic from "./IMG/SpotMusic.png";
import ImgVintIK from "./IMG/FV.png";
import { motion } from "framer-motion";

function Projets() {
  const [projets, setProjets] = useState([]);
  const listeImages = [ImgDior, ImgPortfolio, ImgEscrime, ImgSpotMusic, ImgVintIK];

  useEffect(() => {
    document.documentElement.style.backgroundColor = "white";

    const headerElement = document.querySelector("header");
    const liens = document.querySelectorAll(".lienheader");

    if (headerElement && liens.length > 0) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.12)";
      liens.forEach(lien => {
        lien.style.color = "black"; 
      });
    }

    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("white-background");
    }

    // Récupération des projets depuis l'API
    fetch("http://localhost:3000/projets")
      .then(response => response.json())
      .then(data => setProjets(data))
      .catch(error => console.error("Erreur de chargement des projets", error));

    // Fonction de nettoyage pour réinitialiser les styles lors du démontage du composant
    return () => {
      document.documentElement.style.backgroundColor = "";
      if (headerElement && liens.length > 0) {
        headerElement.style.backgroundColor = "";
        liens.forEach(lien => {
          lien.style.color = "";
        });
      }
      if (appElement) {
        appElement.classList.remove("white-background");
      }
    };
  }, []);

  return (
    <>
      <motion.div
        transition={{ duration: 0.9 }}
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        className="projets"
      >
        <div className="description__page">
          De mes réalisations académiques aux expériences enrichissantes en
          stage, jusqu'aux projets personnels que j'ai développés seul pour
          aiguiser mes compétences, chaque projet raconte une étape de mon
          développement professionnel et personnel. Découvrez comment chaque
          initiative a contribué à façonner mon expertise.
        </div>
        <div className="liste__projets">
          {projets.map((projet: { id: number, image: string, nom: string, realisation: string }) => (
            <div key={projet.id} className="projet-card">
              <img src={ listeImages[projet.id] } alt={projet.nom} className="projet-image" />
              <div className="projet-info">
                <h3 className="nom__projet">{projet.nom}</h3>
                <p className="realisation">{projet.realisation}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Projets;
