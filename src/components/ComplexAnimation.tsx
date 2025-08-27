import { motion } from "motion/react";

const ComplexAnimation = () => {
  return (
    <motion.div
      className="w-60 h-32 bg-yellow-400"
      animate={{ x: 200, rotate: 360, scale: 1.9 }}
      transition={{ duration: 0.8 }}
    />
  );
};

export default ComplexAnimation;
