import { motion } from "motion/react";

const InteractiveCards = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1.1 }}
          whileHover={{ scale: 0.9, backgroundColor: "pink" }}
          transition={{ duration: 0.3 }}
          key={index}
          className="bg-yellow-500 p-5 text-center rounded-lg shadow-lg shadow-yellow-100/50"
        >
          <h1>Card {item}</h1>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveCards;
