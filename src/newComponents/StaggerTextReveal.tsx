import { motion } from "motion/react";

const text = "Shayan Shah";

const staggerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const StaggerTextReveal = () => {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.4,
          },
        },
      }}
      className="text-4xl font-bold bg-amber-500 p-3 rounded-lg shadow-lg"
    >
      {text.split("").map((name, index) => (
        <motion.span variants={staggerVariant} key={index}>
          {name}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default StaggerTextReveal;
