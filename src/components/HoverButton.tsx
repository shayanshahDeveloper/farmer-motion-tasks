import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Button */}
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover Me
      </button>

      {/* Sliding Content */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-2 p-4 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <p>This is the hidden content that slides down on hover 🎉</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
