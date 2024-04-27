// @ts-nocheck
import {motion} from "framer-motion";
import './CSS/ProgressBar/Bar.css'
function Bar() {
  return (
    <>
    <div className="content__bar">
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 2}}
            style={{
            height: "100%",
            borderRadius: "20px",
            backgroundColor: "white",
            }}
        >
        </motion.div>
    </div>
    </>
  );
}

export default Bar;