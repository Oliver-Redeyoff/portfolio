import "./App.css";
import ProfilePic from "./assets/profile_2.png";

import RoundAbout from "./components/RoundAbout/RoundAbout";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  let sections = {
    About: {
      name: "About",
      icon: "👋",
      color: "rose-500",
      border: "border-rose-300",
    },
    Photography: {
      name: "Photography",
      icon: "📷",
      color: "purple-500",
      border: "border-purple-300",
    },
    Projects: {
      name: "Projects",
      icon: "🛠️", // 📓
      color: "green-500",
      border: "border-green-400",
    },
    Blog: {
      name: "Blog",
      icon: "📝",
      color: "yellow-500",
      border: "border-yellow-300",
    },
  };

  const [theme, setTheme] = useState("light");
  const [section, setSection] = useState("About");

  return (
    <div className={"font-mono " + theme}>
      <div className="h-screen bg-white transition-all dark:bg-slate-600">
        {/* header */}
        <div className="space flex h-52 items-start justify-between gap-20 pe-16 ps-16">
          {/* profile pic */}
          <div className="flex h-48 w-24 justify-center">
            <div className="flex h-[100%] w-16 translate-y-[-40%] transform items-end justify-center">
              <motion.img
                className="rounded-full"
                src={ProfilePic}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </div>
          </div>

          {/* round about */}
          <div className="box-border h-[600px] w-[600px] translate-y-[-50%] transform">
            <RoundAbout
              options={sections}
              selectedOption={section}
              setSelectedOption={setSection}
              selectedAngle={0}
              theme={theme}
            />
          </div>

          {/* theme toggle */}
          <div className="flex h-48 w-24 justify-center">
            <div className="h-[100%] w-16 translate-y-[-40%] transform">
              <ThemeToggle selectedTheme={theme} setSelectedTheme={setTheme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
