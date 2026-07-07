import { motion } from "framer-motion";

/**
 * PageLoader
 * A slim, top-of-page indeterminate progress bar (à la NProgress),
 * for route or full-page navigation loading.
 */
export default function PageLoader() {
  return (
    <div className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-slate-800">
      <motion.div
        className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400"
        initial={{ width: "0%" }}
        animate={{ width: ["0%", "70%", "92%"] }}
        transition={{ duration: 1.5, times: [0, 0.7, 1], repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}
