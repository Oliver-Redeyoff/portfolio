import "./App.css";

import { useNavigate } from "react-router-dom";
import RoundAbout from "./components/RoundAbout/RoundAbout";
import Tile from "./components/Tile/Tile";
import Loader from "./components/Loader/Loader";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  CodeBracketIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { LoadingProvider, useLoading } from "./context/LoadingContext";

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

function AppContent() {
  const navigate = useNavigate();
  const { isLoading } = useLoading();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [section, setSection] = useState<SectionKey>("About");

  useEffect(() => {
    navigate(sections[section].path);
  }, [section, navigate]);

  return (
    <div className={theme}>
      <Loader isLoading={isLoading} />
      <div
        className={`${theme} flex align-middle justify-center h-screen w-screen p-10 overflow-y-scroll overflow-x-hidden bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono`}
      >
        <div className="relative flex flex-wrap flex-row gap-6 w-full max-w-7xl min-h-fit">
          <motion.div className="absolute w-full md:w-96 h-80 flex gap-3">
            {/* round about */}
            <Tile
              outerClassName="flex-shrink-0 h-full aspect-square"
              className="h-full aspect-square flex-shrink-0 p-6 rounded-3xl"
              animationDelay={0}
            >
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
                animationDelay={0.07}
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
                animationDelay={0.1}
              >
                <CodeBracketIcon className="w-6 h-6" />
              </Tile>

              <Tile
                outerClassName="flex flex-col items-stretch"
                className="flex items-center justify-center h-16 rounded-xl cursor-pointer"
                animationDelay={0.13}
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
    </div>
  );
}

function App() {
  return (
    <LoadingProvider loadingDuration={1400}>
      <AppContent />
    </LoadingProvider>
  );
}

export default App;
