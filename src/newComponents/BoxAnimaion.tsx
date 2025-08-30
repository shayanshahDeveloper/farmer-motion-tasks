import { motion, useMotionValue } from "motion/react";

const BoxAnimaion = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const momentCaputre = () => {
    x.set(Math.random() * 300);
    y.set(Math.random() * 300);
  };

  return (
    <motion.div
      style={{ x, y }}
      onClick={momentCaputre}
      className="w-30 h-30 bg-pink-500 rounded"
    ></motion.div>
  );
};

export default BoxAnimaion;
