import { AnimatePresence, easeInOut, motion } from "motion/react";

const BouncingBall = () => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ y: [0, -200, 0] }}
        transition={{ duration: 0.8, ease: easeInOut, repeat: Infinity }}
        className="box"
      ></motion.div>
    </AnimatePresence>
  );
};

export default BouncingBall;
