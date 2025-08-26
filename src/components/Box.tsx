import { motion, spring } from "motion/react";

const styleVariant = {
  initial: {
    scale: 1,
  },

  hover: {
    scale: 1.05,
    backgroundColor: "green",
    y: -50,
    transition: {
      duration: 0.8,
      type: spring,
      stiffness: 300,
    },
  },

  exit: {
    scale: 1,
    opacity: 0,
  },
};

const Box = () => {
  return (
    <motion.div
      variants={styleVariant}
      className="box"
      initial="scale"
      whileHover="hover"
      drag
      dragConstraints={{
        top: -100,
        bottom: 100,
        left: -100,
        right: 100,
      }}
    />
  );
};

export default Box;
