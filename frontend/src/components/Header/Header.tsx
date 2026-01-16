import "./Header.css";

import { motion } from "framer-motion";

import Aerobatics from "../../assets/aerobatics.png";
import Cabin from "../../assets/cabin.png";
import CarOnRoad from "../../assets/car_on_road.png";
import CountryRoad from "../../assets/country_road.png";
import Damn from "../../assets/damn.png";
import Dawn from "../../assets/dawn.png";
import Iceland2 from "../../assets/iceland_2.0.png";
import Iceland3 from "../../assets/iceland_3.0.png";
import Pilgrimage from "../../assets/pilgrimage.png";
import UnderTheMountain from "../../assets/under_the_mountain.png";

import {
  UserIcon,
  CameraIcon,
  FolderIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useEffect, useState } from "react";
import { ReactNode } from "react";

const backgroundImageUrls = [
  Aerobatics,
  Cabin,
  CarOnRoad,
  CountryRoad,
  Damn,
  Dawn,
  Iceland2,
  Iceland3,
  Pilgrimage,
  UnderTheMountain,
];

const animateStates = {
  hidden: {
    opacity: 0,
  },
  hiddenOffset: {
    opacity: 0,
    marginLeft: 10,
  },
  visible: {
    opacity: 1,
    marginLeft: 0,
    transition: {
      when: "beforeChildren" as const,
      staggerChildren: 0.1,
    },
  },
  hover: {
    scale: 1.06,
  },
};

interface SectionProps {
  icon: ReactNode;
  name: string;
}

function Section(props: SectionProps) {
  return (
    <motion.div className="section" variants={animateStates}>
      <div className="icon">{props.icon}</div>
      <div className="name">{props.name}</div>
    </motion.div>
  );
}

interface HeaderProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

function Header(props: HeaderProps) {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [backgroundImages, setBackgroundImages] = useState<HTMLImageElement[]>(
    []
  );

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (const url of backgroundImageUrls) {
      const img = new Image();
      img.src = url;
      images.push(img);
    }
    console.log(images);
    setBackgroundImages(images);

    const backgroundChangeInterval = setInterval(() => {
      console.log(Math.random());
      setBackgroundImageIndex(
        Math.floor(Math.random() * backgroundImageUrls.length)
      );
    }, 5000);

    return () => {
      clearInterval(backgroundChangeInterval);
    };
  }, []);

  return (
    <motion.div>
      <motion.div
        className="header-background"
        style={{
          backgroundImage: `url(${
            backgroundImages[backgroundImageIndex]?.src ?? ""
          })`,
        }}
        variants={animateStates}
        initial="hidden"
        animate="visible"
      />

      <motion.div
        className="section-list"
        variants={animateStates}
        initial="hiddenOffset"
        animate="visible"
      >
        <Section icon={<UserIcon />} name={"About me"} />
        <Section icon={<CameraIcon />} name={"Photography"} />
        <Section icon={<FolderIcon />} name={"Projects"} />
        <Section icon={<ChatBubbleBottomCenterTextIcon />} name={"Blog"} />

        <div className="filler" />

        <motion.div className="section" variants={animateStates}>
          <div className="icon">
            <ThemeToggle
              selectedTheme={props.theme}
              setSelectedTheme={props.setTheme}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
