import { motion, useMotionValue } from "motion/react";

const ScaleButtonMotionValue = () => {
  const scale = useMotionValue(1);

  return (
    <motion.div
      className="w-40 h-20 rounded flex justify-center items-center bg-yellow-500 shadow text-lg font-semibold cursor-pointer"
      style={{ scale }}
      onMouseEnter={() => scale.set(1.2)}
      onMouseLeave={() => scale.set(1)}
    >
      Hover me!!
    </motion.div>
  );
};

export default ScaleButtonMotionValue;
