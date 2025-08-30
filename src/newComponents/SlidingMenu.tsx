import { motion } from "motion/react";
import { useState } from "react";

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
    },

    close: {
      x: "-100%",
    },
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 text-white p-4 rounded shadow"
      >
        Toggle Menu
      </button>

      <motion.div
        variants={menuVariants}
        initial="close"
        animate={isOpen ? "open" : "close"}
        className="fixed top-0 left-0 p-5 h-full w-39 bg-yellow-400"
      >
        <h1 className="text-lg font-bold">SideBar</h1>
        <ul className="cursor-pointer">
          <li className="hover:underline decoration-2 underline-offset-4">
            Home
          </li>
          <li className="hover:underline decoration-2 underline-offset-4">
            About Us
          </li>
          <li className="hover:underline decoration-2 underline-offset-4">
            Contact
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SlidingMenu;
