import { motion } from "motion/react";
import { useState } from "react";

const SidebarComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-pink-400 px-5 py-2 rounded-md text-md font-semibold"
        onClick={() => setIsActive(!isActive)}
      >
        Sidebar
      </button>

      <motion.div
        animate={{ x: isActive ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 h-full bg-pink-300 w-40 p-5 ${
          isActive ? "" : "-translate-x-full"
        }`}
      >
        <h2 className="text-lg font-bold">Sidebar</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SidebarComponent;
