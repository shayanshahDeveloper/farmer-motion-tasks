import { easeInOut, motion } from "motion/react";

const Live = () => {
  return (
    <div className="">
      <div className="bg-white flex  px-14 py-4 rounded relative  ">
        <h1 className="text-4xl font-bold text-left">Live</h1>
        <motion.div
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 0.5, ease: easeInOut, repeat: Infinity }}
          className="bg-red-500 w-5 h-5 rounded-full absolute top-1 right-1"
        ></motion.div>
      </div>
    </div>
  );
};

export default Live;
