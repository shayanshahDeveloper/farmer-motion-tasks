import { AnimatePresence, motion } from "motion/react";

const imageArrays = [
  "https://images.unsplash.com/photo-1646295433021-926281ff0d6f?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1756289308425-a34b1291b9d3?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1756302555654-5e413da2d1b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1749372533354-c8d8f30721d5?q=80&w=910&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const staggerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const StaggerImageGalllery = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.9,
            },
          },
        }}
        className="flex gap-2"
      >
        {imageArrays.map((url, index) => (
          <motion.img
            variants={staggerVariants}
            className="w-90 h-auto flex object-cover rounded-lg"
            src={url}
            key={index}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default StaggerImageGalllery;
