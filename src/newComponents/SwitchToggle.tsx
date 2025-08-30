import { motion } from "motion/react";
import { useState } from "react";

const switchVariant = {
  on: { x: 0 },
  off: { x: 68 },
};

const SwitchToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="w-32 h-16 relative inline-block ">
      <div
        onClick={() => setIsOn(!isOn)}
        className={`bg-yellow-400 rounded-full h-full w-full ${
          isOn ? "bg-green-400" : ""
        }`}
      >
        <motion.div
          variants={switchVariant}
          animate={isOn ? "on" : "off"}
          className="absolute top-1 left-1 w-14 h-14 bg-gray-300 rounded-full"
        />
      </div>
    </div>
  );
};

export default SwitchToggle;
