import { easeInOut, motion } from "motion/react";

const BouncingCircle = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{ y: [0, -200, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: easeInOut }}
      />
    </div>
  );
};

export default BouncingCircle;
