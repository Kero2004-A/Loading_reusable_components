import { motion } from "framer-motion";

/**
 * ProgressLoader
 * An indeterminate progress bar that sweeps back and forth.
 */
export default function ProgressLoader() {
  return (
    <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-slate-700/50">
      <motion.div
        className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
        animate={{ x: ["-100%", "220%"] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
