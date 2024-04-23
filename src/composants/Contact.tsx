import Header from "./Header";
import "./CSS/Header/HeaderNoir.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h2>Contact</h2>
          <p>Vous pouvez me contacter via mon adresse mail :</p>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
