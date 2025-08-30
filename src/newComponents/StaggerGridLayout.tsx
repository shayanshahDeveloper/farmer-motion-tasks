import { motion } from "motion/react";

const gridData = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

const staggerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const StaggerGridLayout = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.4,
          },
        },
      }}
      className=" grid grid-cols-3  gap-2
    "
    >
      {gridData.map((data, index) => (
        <motion.div
          variants={staggerVariant}
          key={index}
          className="bg-yellow-400 p-2 rounded gap-2"
        >
          {data}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerGridLayout;
