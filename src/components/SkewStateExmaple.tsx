import { motion } from "motion/react";
import { useState } from "react";

const SkewStateExmaple = () => {
  const [isSkewed, setIsSkewed] = useState(false);

  return (
    <motion.div
      className="w-60 h-32 bg-yellow-400"
      animate={{ skewX: isSkewed ? 20 : 0 }}
      transition={{ duration: 0.8 }}
      onClick={() => setIsSkewed(!isSkewed)}
    />
  );
};

export default SkewStateExmaple;
