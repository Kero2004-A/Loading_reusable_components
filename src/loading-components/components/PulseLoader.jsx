import { motion } from "framer-motion";

/**
 * PulseLoader
 * A solid core with an expanding, fading pulse ring around it.
 */
export default function PulseLoader() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <motion.span
        className="absolute h-full w-full rounded-full bg-cyan-400/40"
        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
      />
      <span className="relative h-3 w-3 rounded-full bg-cyan-400" />
    </div>
  );
}
