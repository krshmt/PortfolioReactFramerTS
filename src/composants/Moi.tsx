import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import "./CSS/Moi.css";
import Paragraph from "./Paragraph";

const paragraphe = "Bonjour, je suis Kris. Je suis en deuxième année de BUT Informatique à Orléans et je suis en recherche d'un contrat d'apprentissage dans une agence WEB"

function Moi() {
  return (
    <>
    <main>
      <div style={{height:"100vh"}}></div>
      <Paragraph value={paragraphe} />
      <div style={{height:"100vh"}}></div>
    </main>
    </>
  );
}

export default Moi;
