import "./App.css";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import ProfilePic from "./assets/profile.JPG";
import Aerobatics from "./assets/aerobatics.png";

import Header from "./components/Header/Header";

import AboutView from "./views/about/AboutView";

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
    <div className={"h-screen w-screen bg-stone-100 font-sans " + theme}>
      <motion.div className="relative h-[100%] w-screen">
        <Header theme={theme} setTheme={setTheme} />
      </motion.div>

      {/* round about */}
      {/* <motion.div className="content-block absolute left-[20px] top-[20px] box-border aspect-square w-[20%] min-w-[300px] p-6">
        <RoundAbout
          options={sections}
          selectedOption={section}
          setSelectedOption={setSection}
          optionSpacing={5}
          selectedAngle={45}
          iconPosition={0}
          theme={theme}
        />
      </motion.div> */}
    </div>
  );
}

export default App;
