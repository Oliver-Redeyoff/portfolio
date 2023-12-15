import "./App.css";
import ProfilePic from "./assets/profile.JPG";

import RoundAbout from "./components/RoundAbout/RoundAbout";

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
      icon: "📓",
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

  const [section, setSection] = useState("About");

  return (
    <div className="font-mono">
      <div className="h-screen bg-white dark:bg-slate-600">
        {/* header */}
        <div className="flex ps-8 pe-8 gap-20 h-52">
          <div className="box-border h-96 w-96 transform translate-y-[-50%]">
            {/* absolute left-20 top-[-33%] */}
            <RoundAbout options={sections} selectedOption={section} setSelectedOption={setSection} />
          </div>

          <div className="flex items-center justify-center">
            <h1 className={"text-7xl border-b-4 dark:text-white " + sections[section].border}>{section}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
