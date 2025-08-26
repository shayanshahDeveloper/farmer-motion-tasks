import { motion } from "motion/react";

const SkewedRectangle = () => {
  return (
    <div>
      <motion.div
        whileTap={{ skewX: 50 }}
        className="w-60 h-32 bg-yellow-400"
      ></motion.div>
    </div>
  );
};

export default SkewedRectangle;
