import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const HoverBuutonSlide = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-pink-400 px-5 py-2 mb-2 rounded-r-md font-bold fixed top-50 left-50"
      >
        Hover ME
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="bg-pink-300 p-5 text-md font-bold rounded-md fixed top-64 left-50"
          >
            <p>This is a Hidden Content</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverBuutonSlide;
