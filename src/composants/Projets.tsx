import React, { useEffect, useState } from "react";
import "./CSS/Header/HeaderBlanc.css";
import "./CSS/Projets/Projet.css";
import ImgDior from "./IMG/Gris_Dior.jpg";
import ImgPortfolio from "./IMG/Portfolio.png";
import ImgEscrime from "./IMG/Escrime.png";
import ImgSpotMusic from "./IMG/SpotMusic.png";
import ImgVintIK from "./IMG/FV.png";
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
  ];

  useEffect(() => {
    document.documentElement.classList.add("white-background");

    const headerElement = document.querySelector("header");
    const liens = document.querySelectorAll(".lienheader");

    if (headerElement && liens.length > 0) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.12)";
      liens.forEach((lien) => {
        lien.style.color = "black";
      });
    }

    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("white-background");
    }

    fetch("http://localhost:3000/projets")
      .then((response) => response.json())
      .then((data) => setProjets(data))
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
        transition={{ duration: 0.3, delay: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
              to={`/projet/${projet.id}`}
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