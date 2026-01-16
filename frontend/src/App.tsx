import "./App.css";

import { useNavigate } from "react-router-dom";
import RoundAbout from "./components/RoundAbout/RoundAbout";
import Tile from "./components/Tile/Tile";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  CodeBracketIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import AboutSection from "./views/about/AboutSection";
import PhotographySection from "./views/photography/PhotographySection";
import ProjectsSection from "./views/projects/ProjectsSection";
import BlogSection from "./views/blog/BlogSection";

const themes = ["light", "dark"] as const;

export interface Section {
  name: string;
  path: string;
  icon: string;
  lightColor: string;
  darkColor: string;
}

export type SectionKey = "About" | "Photography" | "Projects" | "Blog";

export const sections: Record<SectionKey, Section> = {
  About: {
    name: "About",
    path: "/about",
    icon: "👋",
    lightColor: "#E3A008",
    darkColor: "#FCE96A",
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
    icon: "🛠️",
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

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [section, setSection] = useState<SectionKey>("About");

  useEffect(() => {
    navigate(sections[section].path);
  }, [section, navigate]);

  return (
    <div className={`${theme} flex justify-center h-screen w-screen overflow-y-scroll overflow-x-hidden bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-mono`}>
      <div
        className={`relative flex flex-wrap flex-row gap-6 p-10 max-w-7xl`}
      >
        <motion.div className="absolute w-full left-4 md:w-96 h-80 px-6 md:px-0 md:mx-6 flex gap-3">
          {/* round about */}
          <Tile className="h-full aspect-square flex-shrink-0 p-6 rounded-3xl">
            <RoundAbout
              options={sections}
              selectedOption={section}
              setSelectedOption={setSection}
              optionSpacing={5}
              selectedAngle={45}
              iconPosition={0}
              theme={theme}
            />
          </Tile>

          {/* theme and quick links */}
          <motion.div className="flex flex-col items-stretch flex-grow gap-3 h-80">
            <Tile
              outerClassName="flex flex-col items-stretch flex-grow"
              className="flex items-center justify-center flex-grow rounded-xl cursor-pointer"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              {themes.map((themeOption) => {
                return (
                  themeOption === theme && (
                    <motion.div
                      key={themeOption}
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      {themeOption === "light" && (
                        <SunIcon className="w-6 h-6" />
                      )}
                      {themeOption === "dark" && (
                        <MoonIcon className="w-6 h-6" />
                      )}
                    </motion.div>
                  )
                );
              })}
            </Tile>

            <Tile
              outerClassName="flex flex-col items-stretch"
              className="flex items-center justify-center h-16 rounded-xl cursor-pointer"
            >
              <CodeBracketIcon className="w-6 h-6" />
            </Tile>

            <Tile
              outerClassName="flex flex-col items-stretch"
              className="flex items-center justify-center h-16 rounded-xl cursor-pointer"
            >
              <BriefcaseIcon className="w-6 h-6" />
            </Tile>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {section === "About" && <AboutSection />}
          {section === "Photography" && <PhotographySection />}
          {section === "Projects" && <ProjectsSection />}
          {section === "Blog" && <BlogSection />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
