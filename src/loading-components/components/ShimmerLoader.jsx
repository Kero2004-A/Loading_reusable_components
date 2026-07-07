import { motion } from "framer-motion";

/**
 * ShimmerLoader
 * A soft light sweep travelling across a placeholder block.
 */
export default function ShimmerLoader() {
  return (
    <div className="relative h-16 w-full max-w-xs overflow-hidden rounded-lg bg-slate-800">
      <motion.div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-120%", "320%"] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
