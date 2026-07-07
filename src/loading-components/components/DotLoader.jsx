import { motion } from "framer-motion";

const dotVariants = {
  animate: (i) => ({
    y: [0, -8, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      delay: i * 0.15,
      ease: "easeInOut",
    },
  }),
};

/**
 * DotLoader
 * Three dots bouncing in a staggered sequence.
 */
export default function DotLoader() {
  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          custom={i}
          variants={dotVariants}
          animate="animate"
          className="h-2.5 w-2.5 rounded-full bg-cyan-400"
        />
      ))}
    </div>
  );
}
