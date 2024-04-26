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
        <div style={{color: "black"}}>
            <h1>modification</h1>
        </div>
    );
}

export default Test;