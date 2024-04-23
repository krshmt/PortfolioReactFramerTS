import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Componant() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      controls.start({
        y: 200,
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" }
      });
    }
  }, [isVisible, controls]);

  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }}>
      {isVisible && (
        <motion.div
          style={{
            color: "#000"
          }}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ duration: 2 }}
        >
          Contenu du conteneur
        </motion.div>
      )}
      {!isVisible && (
        <motion.div
          animate={controls}
          style={{
            color: "#000"
          }}
        >
          Contenu du conteneur
        </motion.div>
      )}
    </div>
  );
};

export default Componant;
