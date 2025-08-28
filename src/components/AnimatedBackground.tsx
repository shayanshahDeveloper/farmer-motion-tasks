import { motion } from "motion/react";

const AnimatedBackground = () => {
  return (
    <motion.div
      animate={{
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"],
      }}
      transition={{ duration: 0.9, ease: "linear", repeat: Infinity }}
      className="w-screen h-screen bg-green-300"
    ></motion.div>
  );
};

export default AnimatedBackground;
