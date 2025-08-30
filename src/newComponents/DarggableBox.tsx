import { motion, useMotionValue } from "motion/react";

const DarggableBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="flex items-center justify-center flex-col">
      <motion.div
        drag
        className="w-32 h-32 rounded bg-teal-500"
        style={{ x, y }}
      />

      <p className="text-lg">
        Positon: ({x.get().toFixed(2)},{y.get().toFixed(2)})
      </p>
    </div>
  );
};

export default DarggableBox;
