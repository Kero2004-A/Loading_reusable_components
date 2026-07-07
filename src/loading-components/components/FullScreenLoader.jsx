import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

/**
 * FullScreenLoader
 * A full-viewport overlay for blocking, app-wide loading states
 * (route transitions, initial app boot, large async operations).
 */
export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-slate-950/85 backdrop-blur-sm">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="h-10 w-10 text-cyan-400" />
      </motion.div>
      <p className="text-sm tracking-wide text-slate-300">Loading, please wait…</p>
    </div>
  );
}
