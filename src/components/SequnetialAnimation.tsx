import { motion } from "motion/react";

const SequnetialAnimation = () => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-20 h-20  bg-yellow-400 mb-2 rounded-lg    "
          animate={{ x: 100 }}
          transition={{ duration: 0.8, delay: i * 0.5 }}
        />
      ))}
    </div>
  );
};

export default SequnetialAnimation;
