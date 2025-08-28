import { motion } from "motion/react";

const ChangingColor = () => {
  return (
    <motion.div
      animate={{
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"],
      }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      className="w-40 h-40 bg-yellow-200"
    ></motion.div>
  );
};

export default ChangingColor;
