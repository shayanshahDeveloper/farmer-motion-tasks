import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FadingComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="px-5 py-2 mb-5 bg-blue-400 font-semibold outline-none rounded-md "
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-500 text-white p-5 rounded-lg"
          >
            Hey ! I'm a Fading Component...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FadingComponent;
