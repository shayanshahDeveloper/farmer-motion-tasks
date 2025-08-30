import { motion } from "motion/react";

const fadeInVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const FadeIn = () => {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
      className="bg-teal-500 p-4 rounded shadow  outline-none"
    >
      <h1 className="text-xl font-bold">I'm a Fade In Componnet</h1>
    </motion.div>
  );
};

export default FadeIn;
