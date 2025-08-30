import { motion } from "motion/react";

const items = ["Item1", "Item2", "Item3", "Item4", "Item5"];

const staggerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const StaggerList = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 1,
          },
        },
      }}
      className="flex flex-col items-center justify-center  "
    >
      {items.map((item, index) => (
        <motion.li
          variants={staggerVariants}
          key={index}
          className="flex bg-yellow-400 p-4 mb-3 rounded-sm shadow"
        >
          {item}
        </motion.li>
      ))}
    </motion.div>
  );
};

export default StaggerList;
