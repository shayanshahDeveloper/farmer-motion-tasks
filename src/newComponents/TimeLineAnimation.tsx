import { motion } from "motion/react";

const timeLineVariant = {
  hidden: { opacity: 0, scale: 0.5, rotate: 180 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const TimeLineAnimation = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.5 }}
      className="flex items-center justify-center gap-3"
    >
      {[1, 2, 3, 4, 5].map((item, index) => (
        <motion.div
          variants={timeLineVariant}
          key={index}
          className="bg-pink-500 px-2 py-2 w-34 h-34 rounded"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TimeLineAnimation;
