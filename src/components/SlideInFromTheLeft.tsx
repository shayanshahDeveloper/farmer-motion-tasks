import { motion } from "motion/react";
import { useState } from "react";

const SlideInFromTheLeft = () => {
  const [isSlide, setIsSlide] = useState(false);

  return (
    <div className="flex flex-col items-start justify-center ml-5 relative">
      <button
        className="bg-pink-400 px-5 py-2 rounded-md text-white mb-5 font-semibold "
        onClick={() => setIsSlide(!isSlide)}
      >       
{isSlide ?"Slide Out":'Slide In'}
      </button>

      {isSlide && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ x: 50, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-amber-400 p-5 w-fit"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime sit
          illum minus quasi voluptatum qui voluptatem vel debitis corporis
          atque.
        </motion.p>
      )}
    </div>
  );
};

export default SlideInFromTheLeft;
