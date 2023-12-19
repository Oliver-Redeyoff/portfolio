import "./ThemeToggle.css";

import { motion, AnimatePresence } from "framer-motion";

import Sun from "../../assets/sun.png";
import Moon from "../../assets/moon.png";

function ThemeToggle(props) {
  const themes = ["light", "dark"];

  return (
    <div
      className="relative h-[100%] w-[100%] cursor-pointer"
      onClick={() => {
        props.setSelectedTheme(
          props.selectedTheme == themes[0] ? themes[1] : themes[0],
        );
      }}
    >
      {themes.map((theme) => (
        <AnimatePresence>
          {props.selectedTheme == theme && (
            <motion.div
              className="absolute left-0 top-0 flex h-[100%] w-[100%] items-end justify-center"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
            >
              <img
                className="brightness-100"
                src={theme == "light" ? Sun : Moon}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}

export default ThemeToggle;
