import { AnimatePresence, motion } from "motion/react";

const PulsingEffect = () => {
  return (
    <AnimatePresence>
      <motion.button
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="bg-teal-500 px-6 outline-none py-2 rounded-md font-semibold"
      >
        Pulse
      </motion.button>
    </AnimatePresence>
  );
};

export default PulsingEffect;
