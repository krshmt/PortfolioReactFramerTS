import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
    initial={{y:"100px", opacity: 0}}
    animate={{y: 0, opacity: 1}}>
      <h1>Home</h1>
    </motion.div>
  );
}

export default Home;
