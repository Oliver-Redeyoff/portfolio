import "./App.css";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import ProfilePic from "./assets/profile_2.png";
import RoundAbout from "./components/RoundAbout/RoundAbout";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  let sections = {
    About: {
      name: "About",
      path: "/about",
      icon: "👋",
      lightColor: "rgb(228,182,55)",
      darkColor: "rgb(228,182,55)",
    },
    Photography: {
      name: "Photography",
      path: "/photography",
      icon: "📷",
      lightColor: "rgb(145,152,229)",
      darkColor: "rgb(145,152,229)",
    },
    Projects: {
      name: "Projects",
      path: "/projects",
      icon: "🛠️", // 📓
      lightColor: "rgb(230,100,101)",
      darkColor: "rgb(230,100,101)",
    },
    Blog: {
      name: "Blog",
      path: "/blog",
      icon: "📝",
      lightColor: "rgb(81,164,138)",
      darkColor: "rgb(81,164,138)",
    },
  };

  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [section, setSection] = useState("About");

  useEffect(() => {
    navigate(sections[section].path);
  }, [section]);

  return (
    <div className={"font-mono " + theme}>
      <div className="flex h-screen flex-row gap-10 bg-white transition-all delay-300 dark:bg-slate-600">
        {/* header */}
        <div className="relative h-screen w-[360px]">
          {/* <div className="space flex h-52 items-start justify-between gap-20 pe-16 ps-16"> */}
          {/* profile pic */}
          {/* <div className="flex h-48 w-24 justify-center">
            <div className="flex h-[100%] w-16 translate-y-[-40%] transform items-end justify-center">
              <motion.img
                className="rounded-full"
                src={ProfilePic}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </div>
          </div> */}

          {/* round about */}
          <div className="box-border h-[600px] w-[600px] translate-x-[-40%] translate-y-[-40%] transform">
            <RoundAbout
              options={sections}
              selectedOption={section}
              setSelectedOption={setSection}
              selectedAngle={45}
              theme={theme}
            />
          </div>

          {/* theme toggle */}
          <div className="absolute bottom-0 left-10 flex h-48 w-24 justify-center">
            <div className="h-[100%] w-16 translate-y-[40%] transform">
              <ThemeToggle selectedTheme={theme} setSelectedTheme={setTheme} />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="flex-grow">
          <Routes>
            <Route path="/about" element={<>About</>} />
            <Route path="/photography" element={<>Photography</>} />
            <Route path="/projects" element={<>Projects</>} />
            <Route path="/blog" element={<>Blog</>} />
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
