import { motion } from "motion/react";

const WaveEffect = () => {
  const box = Array.from({ length: 5 });

  return (
    <div className="flex space-x-2">
      {box.map((_, index) => (
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
          }}
          key={index}
          className="w-16 h-16 bg-amber-500"
        />
      ))}
    </div>
  );
};

export default WaveEffect;
