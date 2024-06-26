// @ts-nocheck
import React, { useEffect, useState } from "react";

function Test(){
    useEffect(() => {
        document.documentElement.classList.add("test-background");
    
        const headerElement = document.querySelector("header");
        const liens = document.querySelectorAll(".lienheader");
    
        if (headerElement && liens.length > 0) {
          headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.12)";
          liens.forEach((lien) => {
            (lien as HTMLElement).style.color = "black";
          });
        }
    
        const appElement = document.querySelector(".App");
        if (appElement) {
          appElement.classList.add("test-background");
        }
    
        // Fonction de nettoyage pour réinitialiser les styles lors du démontage du composant
        return () => {
          document.documentElement.style.backgroundColor = "";
          if (headerElement && liens.length > 0) {
            headerElement.style.backgroundColor = "";
            liens.forEach((lien) => {
              (lien as HTMLElement).style.color = "";
            });
          }
          if (appElement) {
            appElement.classList.remove("test-background");
            document.documentElement.classList.remove("test-background");
          }
        };
      }, []);
    

    return (
      <motion.main
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay:0.7}}
      className="mainMoi"
    >

      
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
    );
}

export default Test;