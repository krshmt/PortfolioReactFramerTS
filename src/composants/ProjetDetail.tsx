// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CSS/Projets/ProjetDetail.css";

import ImageDiorCollectionPrive from './IMG/collection-privee-dior.png';
import egerie from './IMG/egerie.jpg';
import look from './IMG/look.jpg';

import ImgPortfolio1 from "./IMG/Portfolio1.png";
import ImgPortfolio2 from "./IMG/Portfolio2.png";
import ImgPortfolio3 from "./IMG/Portfolio3.png";

import ImgEscrime1 from "./IMG/Escrime1.png";
import ImgEscrime2 from "./IMG/Escrime2.png";
import ImgEscrime3 from "./IMG/Escrime3.png";

import ImgSpotMusic from "./IMG/SpotMusic.png";
import ImgMusic1 from "./IMG/Musique1.png";
import ImgMusic2 from "./IMG/Musique2.png";

import ImgVintIK from "./IMG/FV.png";
import ImgVintIK1 from "./IMG/image 4.png";
import ImgVintIK2 from "./IMG/image 5.png";
import { motion } from "framer-motion";

function ProjetDetail() {
  const { id } = useParams<{ id: string }>();
  const [projet, setProjet] = useState<any>(null);
  const autresProjetsIndices = [];

  if (id === "0"){
    autresProjetsIndices.push(1, 2);
  }
  //Il faudra changer le chiffre pour prendre le dernier indice de la liste des projets
  else if (id === "4"){
    autresProjetsIndices.push(2, 3);
  }
  else{
    autresProjetsIndices.push(parseInt(id) - 1, parseInt(id) + 1);
  }

  const dictionnaireImages = {
    0 : [ImageDiorCollectionPrive, egerie, look],
    1 : [ImgPortfolio1, ImgPortfolio2, ImgPortfolio3],
    2 : [ImgEscrime1, ImgEscrime2, ImgEscrime3],
    3 : [ImgSpotMusic, ImgMusic1, ImgMusic2],
    4 : [ImgVintIK, ImgVintIK1, ImgVintIK2],
  };

  useEffect(() => {
    document.documentElement.style.backgroundColor = "white";

    const headerElement = document.querySelector("header");
    const liens = document.querySelectorAll(".lienheader");
    
    const barNav1 = document.querySelector(".b1");
    const barNav2 = document.querySelector(".b2");

    if (headerElement && liens.length > 0) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.12)";
      liens.forEach((lien) => {
        lien.style.color = "black";
      });
      barNav1.style.backgroundColor = "black"; 
      barNav2.style.backgroundColor = "black"; 
    }

    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("white-background");
    }

    // Récupération des détails du projet depuis l'API
    fetch(`https://krshmt.github.io/PortfolioReactFramerTS/src/composants/JSON/projets.json`)
      .then((response) => response.json())
      .then((data) => setProjet(data.projets[id]))
      .catch((error) => console.error("Erreur de chargement du projet", error));

    // Fonction de nettoyage pour réinitialiser les styles lors du démontage du composant
    return () => {
      document.documentElement.style.backgroundColor = "";
      if (headerElement && liens.length > 0) {
        headerElement.style.backgroundColor = "";
        liens.forEach((lien) => {
          lien.style.color = "";
        });
        barNav1.style.backgroundColor = ""; 
        barNav2.style.backgroundColor = ""; 
      }
      if (appElement) {
        appElement.classList.remove("white-background");
      }
    };
  }, [id]);

  // Vérifier si le projet est chargé
  if (!projet) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <>
      <motion.div
      initial={{opacity:0, y: 100}}
      animate={{opacity:1, y: 0}}
      transition={{duration: 1}} className="projet__detail">
        <div className="titre__langage">
          <h2 className="titre__projet__detail">{projet.nom}</h2>
        </div>
          <div className="langages">
            {projet.langages.map((langage: string, index: number) => (
              <span key={index} className="langage">
                {langage}
              </span>
            ))}
          </div>
        <p>{projet.description}</p>
        <a className="lien__voir__site" href={projet.lien} target="_blank" rel="Lien site">Voir site</a>
        <div className="images__site">
            <img className="image__1" src={dictionnaireImages[projet.id][0]} alt="" />
            <div className="image-2__image-3">
                <img src={dictionnaireImages[projet.id][1]} alt="" className="image__2" />
                <img src={dictionnaireImages[projet.id][2]} alt="" className="image__2" />
            </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjetDetail;
