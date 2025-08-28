import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleNotification = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <div>
      <button
        onClick={handleNotification}
        className="bg-yellow-500 text-white px-5 py-2 rounded font-semibold"
      >
        Show Notification
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 bg-green-500 text-white font-semibold p-3 rounded outline-none"
          >
            This is a Notification
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
