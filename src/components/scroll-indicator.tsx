import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="bottom-10 left-1/2 absolute flex flex-col items-center gap-2 -translate-x-1/2 pointer-events-none"
    >
      {/* Scroll text */}
      <span className="relative font-accent text-zinc-500 text-lg">
        scroll
      </span>

      {/* Curved line */}
      <svg
        width="60"
        height="24"
        viewBox="0 0 60 24"
        fill="none"
        className="opacity-60"
      >
        <path
          d="M2 4 C20 20, 40 20, 58 4"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Down arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="text-zinc-500"
      >
        ↓
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
