import { motion } from "motion/react";

const ResponsiveButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-pink-500 text-white rounded px-5 py-2 outline-none cursor-pointer"
    >
      Click me!
    </motion.div>
  );
};

export default ResponsiveButton;
