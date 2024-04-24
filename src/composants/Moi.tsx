import React from "react";
import { motion, useTransform, useMotionValue, useScroll } from "framer-motion";
import "./CSS/Moi.css";

function Moi() {  
  return (
    <div className="informations__content">
      <div className="information information1">
        <motion.p
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{
            amount: "all",
          }}
          className="parag"
        >
          Je suis en deuxième année de BUT Informatique à Orléans
        </motion.p>
      </div>
      <div className="information information1">
        <motion.p
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{
            amount: "all",
          }}
          className="parag"
        >
          Je suis en deuxième année de BUT Informatique à Orléans
        </motion.p>
      </div>
    </div>
  );
}

export default Moi;
