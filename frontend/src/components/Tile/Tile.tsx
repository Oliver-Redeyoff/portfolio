import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface TileProps {
  className?: string;
  outerClassName?: string;
  style?: CSSProperties;
  onClick?: () => void;
  children?: ReactNode;
}

function Tile({
  className,
  outerClassName,
  style,
  onClick,
  children,
}: TileProps) {
  return (
    <motion.div className={`${outerClassName ?? ""}`}>
      <motion.div
        key={className}
        className={`bg-slate-50 dark:bg-slate-700 shadow-md shadow-gray-200 dark:shadow-gray-900 ${className ?? ""}`}
        style={style}
        onClick={onClick}
        initial={{ opacity: 0.5, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Tile;
