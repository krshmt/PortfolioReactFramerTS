import Header from "./Header";
import "./CSS/Header/HeaderNoir.css";
import { motion } from "framer-motion";

function Moi() {
  return (
    <>
      <motion.div
        transition={{ duration: 0.9 }}
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
      >
        <div>
          <h1>À propos de moi</h1>
          <p>
            Je suis un développeur web basé à Montréal, au Canada. J'ai une
            passion pour la création de sites Web et d'applications Web qui sont
            à la fois beaux et fonctionnels. J'ai une expérience dans une
            variété de technologies Web, y compris HTML, CSS, JavaScript, React
            et Node.js.
          </p>
          <p>
            Je suis actuellement à la recherche de nouvelles opportunités de
            développement Web. Si vous avez un projet ou une idée que vous
            aimeriez discuter, n'hésitez pas à me contacter!
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Moi;
