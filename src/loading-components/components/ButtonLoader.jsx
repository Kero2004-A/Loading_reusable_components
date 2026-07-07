import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

/**
 * ButtonLoader
 * A disabled button showing an inline spinner during submission.
 */
export default function ButtonLoader() {
  return (
    <button
      type="button"
      disabled
      className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-cyan-500/90 px-4 py-2 text-sm font-medium text-slate-950 opacity-90"
    >
      <motion.span
        className="flex"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="h-4 w-4" />
      </motion.span>
      Processing…
    </button>
  );
}
