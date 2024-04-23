import { motion } from "framer-motion";
import Bar from "./Bar";
import "./CSS/Chargement/Chargement.css";

function Chargement() {
  return (
    <div className="portfolio__container">
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="portfolio__developpeur__etudiant"
      >
        <div className="portfolio__bar">
          <h2>Portfolio</h2>
          <Bar />
        </div>
        <div className="developpeur__etudiant">Développeur - Étudiant</div>
      </motion.div>
    </div>
  );
}

export default Chargement;
