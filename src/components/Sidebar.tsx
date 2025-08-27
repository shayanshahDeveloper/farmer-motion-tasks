import { motion } from "motion/react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button
        className="bg-blue-300 px-5 py-2 font-bold rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sidebar
      </button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? '0' : '-100%' }}
        transition={{duration:.5}}
        className={`fixed top-0 left-0 h-full w-40 bg-gray-400 p-4 ${
          isOpen ? "" : "-translate-x-full"
        }`}
      >
        <h2 className="font-bold text-lg">Sidebar</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
       </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
