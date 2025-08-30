import { motion } from "motion/react";

const items = ["Item1", "Item 2", "Item 3", "Item 4", "Item 5"];

const viewVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const WhileInView = () => {
  return (
    <motion.ul
      variants={viewVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.6 }}
      className="flex flex-col mt-500"
    >
      {items.map((item, index) => (
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-yellow-500 p-4 my-2 w-30 h-30"
          key={index}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default WhileInView;
