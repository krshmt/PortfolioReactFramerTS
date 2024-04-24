import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import './CSS/Contact.css';

function Contact() {
  useEffect(() => {
    document.documentElement.classList.add("black-background");

    const headerElement = document.querySelector("header");
    const liens = document.querySelectorAll(".lienheader");

    if (headerElement && liens.length > 0) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.41)";
      liens.forEach((lien) => {
        (lien as HTMLElement).style.color = "white";
      });
    }

    const appElement = document.querySelector(".App");
    if (appElement) {
      appElement.classList.add("black-background");
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
        appElement.classList.remove("black-background");
        document.documentElement.classList.remove("black-background");
      }
    };
  }, []);

  return (
    <>
      <motion.div
        transition={{duration: 0.8, delay:0.7}}
        initial={{y: 100, opacity: 0 }}
        animate={{y: 0,  opacity: 1 }}
      >
        <main className="main__contact">
          <form action="" method="post">
            <input type="text" placeholder='Nom' />
            <input type="text" placeholder='Adresse mail' />
            <textarea placeholder='Message' name="" id="" cols={30} rows={10}></textarea>
            <div className="btn__center">
              <button className='btn__envoyer'>Envoyer mon message</button>
            </div>
          </form>
          <div className="contenu__contact">
            <h2 className="titre__contact">
              Établissons un contact ?
            </h2>
            <p className='contact__p'>
            Si mon profil vous intéresse et vous souhaitez me contacter pour une offre d’alternance/stage ou bien vous souhaitez parler de ce portfolio, rédigez votre message ici 
            </p>
            <div className="liens__contact">
              <div><a className='lien__reseau' href="">LinkedIn</a></div>
              <div><a className='lien__reseau' href="">GitHub</a></div>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}

export default Contact;

