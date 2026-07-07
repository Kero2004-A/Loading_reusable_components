import { motion } from "framer-motion";

/**
 * BounceLoader
 * A ball bouncing with a squash-and-stretch shadow beneath it.
 */
export default function BounceLoader() {
  return (
    <div className="flex h-14 w-14 flex-col items-center justify-center gap-1.5">
      <motion.span
        className="h-4 w-4 rounded-full bg-amber-400"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="h-1.5 w-6 rounded-full bg-slate-700"
        animate={{ scaleX: [1, 0.55, 1], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
