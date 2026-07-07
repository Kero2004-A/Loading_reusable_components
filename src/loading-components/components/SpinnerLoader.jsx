import { motion } from "framer-motion";

/**
 * SpinnerLoader
 * A classic rotating ring — ideal for inline or small-area loading states.
 */
export default function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="h-10 w-10 rounded-full border-2 border-slate-700 border-t-cyan-400 border-r-cyan-400"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
