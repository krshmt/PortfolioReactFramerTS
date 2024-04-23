import React, { useEffect } from "react";
import "./CSS/Header/HeaderBlanc.css";
import "./CSS/Projets/Projet.css";
import Header from "./Header";
import { motion } from "framer-motion";

function Projets() {
  useEffect(() => {
    // Changement de la couleur de fond de la balise <html> en blanc lors du montage du composant
    document.documentElement.style.backgroundColor = "white";

    // Ajout d'une classe à l'élément avec la classe .App pour changer la couleur de fond
    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("white-background");
    }

    // Fonction de nettoyage pour réinitialiser les styles lors du démontage du composant
    return () => {
      document.documentElement.style.backgroundColor = "";
      if (appElement) {
        appElement.classList.remove("white-background");
      }
    };
  }, []);

  return (
    <>
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="projets"
      >
        <div className="description__page">
          De mes réalisations académiques aux expériences enrichissantes en
          stage, jusqu'aux projets personnels que j'ai développés seul pour
          aiguiser mes compétences, chaque projet raconte une étape de mon
          développement professionnel et personnel. Découvrez comment chaque
          initiative a contribué à façonner mon expertise.
        </div>
      </motion.div>
    </>
  );
}

export default Projets;
