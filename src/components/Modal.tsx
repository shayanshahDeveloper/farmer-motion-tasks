import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center overflow-hidden ">
      <button
        className={`bg-teal-500 px-5 py-2 rounded-md font-semibold`}
        onClick={() => setIsModalOpen(true)}
      >
        Open the Modal
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "-100vh" }}
            animate={{ y: "0vh" }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
            className="bg-gray-200 w-fit p-4 rounded-md"
          >
            <h1
              className="text-lg font-bold
          "
            >
              Title
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur!!</p>

            <motion.button
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
              className="bg-red-500 px-5 py-1 text-white rounded-md mt-3"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;
