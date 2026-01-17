import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";
import { useLoading } from "../../context/LoadingContext";

interface TileProps {
  className?: string;
  outerClassName?: string;
  style?: CSSProperties;
  onClick?: () => void;
  children?: ReactNode;
  /** Delay in seconds before this tile animates in */
  animationDelay?: number;
}

function Tile({
  className,
  outerClassName,
  style,
  onClick,
  children,
  animationDelay = 0,
}: TileProps) {
  const { isReady } = useLoading();

  return (
    <motion.div className={`${outerClassName ?? ""}`}>
      <motion.div
        className={`bg-slate-50 dark:bg-slate-700 shadow-md shadow-gray-200 dark:shadow-gray-900 ${className ?? ""}`}
        style={style}
        onClick={onClick}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={
          isReady
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.9, y: 20 }
        }
        whileHover={{ scale: 1.02 }}
        transition={{
          duration: 0.5,
          delay: isReady ? animationDelay : 0,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Tile;
