import { motion } from "motion/react";

const CardFlip = () => {
  return (
    <div className="perspective-100 w-64 h-64">
      <motion.div
        initial={{ rotateX: 0 }}
        whileInView={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded">
          Front
        </div>

        <motion.div
          style={{ transform: "rotateY(180)" }}
          className="absolute w-64 h-64 bg-blue-500 text-white flex items-center justify-center rounded"
        >
          Back
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
