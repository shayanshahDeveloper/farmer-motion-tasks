import { motion } from "motion/react";

const SpinningIcon = () => {
  return (
    <div>
      <motion.img
        //motion animation

        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        //   animation end here
        src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2019/10/70574400-9e6a-11e9-8708-22d4bf4c3322.png?fit=1280%2C640&ssl=1"
        alt="Spinning Image"
        className="w-40 h-40 object-cover rounded-sm"
      />
    </div>
  );
};

export default SpinningIcon;
