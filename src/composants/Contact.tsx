// @ts-nocheck

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import './CSS/Contact.css';

function Contact() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMailSent, setIsMailSent] = useState(false); // Nouvel état pour suivre l'état de l'envoi du courriel

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      const data = await response.json();
      console.log(data);  // Traiter la réponse
      // Réinitialiser les champs d'entrée et marquer le courriel comme envoyé
      setEmail('');
      setMessage('');
      setIsMailSent(true);
    } catch (error) {
      console.error("erreur lors de l'envoi du formulaire", error);
    }
  };

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
      cursor1.style.border = ""
      cursor2.style.backgroundColor = ""
      if (appElement) {
        appElement.classList.remove("black-background");
        document.documentElement.classList.remove("black-background");
      }
    };
  }, []);

  return (
    <>
      <motion.div
        transition={{ duration: 0.8, delay: 0.7 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <main className="main__contact">
          <form netlify action="/sendmail" method="POST" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Votre email"
            />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Votre message"
              name="" id="" cols={30} rows={10}
            />
            <div className="btn__center">
              <button className='btn__envoyer'>Ne fonctionne pas, c'est en cours</button>
            </div>
            <div className="btn__center">
              {isMailSent && <p className='confirmation__mail__envoyé'>Le courriel a été envoyé !</p>}
            </div>
          </form>
          <div className="contenu__contact">
            <h2 className="titre__contact">
              Établissons un contact ?
            </h2>
            <p className='contact__p'>Si vous souhaitez me contacter pour un contrat d'alternance ou parler de ce portfolio, remplissez ce formulaire. Je vous répondrais dans les plus brefs délais.</p>
            <div className="liens__contact">
              <div><a target='_blank' className='lien__reseau' href="https://www.linkedin.com/in/kris-toure/">LinkedIn</a></div>
              <div><a target='_blank' className='lien__reseau' href="https://github.com/krshmt">GitHub</a></div>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}

export default Contact;
