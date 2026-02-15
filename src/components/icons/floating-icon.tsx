import { motion } from "framer-motion";

interface FloatingIconProps {
  src: string;
  alt?: string;
  className?: string;
  duration?: number;
  label?: string;
  autoShow?: boolean;
}

const FloatingIcon = ({
  src,
  alt = "",
  className = "",
  duration = 4,
  label,
  autoShow = false,
}: FloatingIconProps) => {
  return (
    <motion.div
      className={`absolute z-30 cursor-pointer ${className}`}
      initial="rest"
      animate={autoShow ? "hover" : "rest"}
      whileHover="hover"
    >
      {/* Tooltip */}
      <motion.div
        variants={{
          rest: { opacity: 0, y: 6, scale: 0.9 },
          hover: { opacity: 1, y: -6, scale: 1 },
        }}
        transition={{ duration: 0.2 }}
        className="-top-8 left-1/2 absolute bg-black/85 backdrop-blur-md px-2 py-1 rounded-md text-white text-xs whitespace-nowrap -translate-x-1/2 pointer-events-none"
      >
        {label}
      </motion.div>

      {/* Icon */}
      <motion.img
        src={src}
        alt={alt}
        animate={{
          y: [0, -12, 0],
          rotate: [-3, 12, -3],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        variants={{
          rest: { scale: 1, rotate: 0 },
          hover: { scale: 1.15, rotate: 10 },
        }}
        className="will-change-transform"
      />
    </motion.div>
  );
};

export default FloatingIcon;
