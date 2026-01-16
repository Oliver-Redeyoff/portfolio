import { useState } from "react";
import { motion } from "framer-motion";
import Tile from "../../components/Tile/Tile";

import TwirlyArrow from "../../assets/twirly_arrow.png";
import Profile from "../../assets/profile.png";
import Bloxd from "../../assets/bloxd.jpeg";
import CambridgeConsultants from "../../assets/cambridge-consultants.png";
import Cognisess from "../../assets/cognisess.webp";
import BathUni from "../../assets/bathUni.png";

interface Experience {
  name: string;
  image: string;
  border: string;
  background: string;
  dates: string;
  description: string;
}

const experiences: Experience[] = [
  {
    name: "Bloxd",
    image: Bloxd,
    border: "border-r-blue-400",
    background: "hover:bg-blue-100",
    dates: "2024 - now",
    description:
      "Working on a multiple player voxel web game with 6+ million monthly player.",
  },
  {
    name: "Cambridge Consultants",
    image: CambridgeConsultants,
    border: "border-r-indigo-400",
    background: "hover:bg-indigo-100",
    dates: "2022 - 2024",
    description:
      "I joined Cambridge Consultants as a graduate, and have worked on many projects ranging from " +
      "writing firmware for embedded devices, to leading the development of web based tools used to " +
      "accelerate the productivity of internal teams.",
  },
  {
    name: "Cognisess",
    image: Cognisess,
    border: "border-r-purple-800",
    background: "hover:bg-purple-100",
    dates: "2021 - 2022",
    description:
      "I was recruited by Cognisess for my placement year as part of my degree. Here, I worked in a team " +
      "to maintain and develop a web-app used by many companies for recruitment and employee " +
      "management. I used technologies such as Angular, DotNet, Git, SQL and Azure cloud on a daily " +
      "basis, and had a range responsibilities — developing new features, fixing bugs, reviewing pull " +
      "requests, and managing releases to test and production environments.",
  },
  {
    name: "University of Bath",
    image: BathUni,
    border: "border-r-amber-400",
    background: "hover:bg-amber-100",
    dates: "2018 - 2022",
    description:
      "I graduated with first-class honours, with an overall average of 70.54%.",
  },
  {
    name: "Born",
    image: Bloxd,
    border: "border-r-blue-400",
    background: "hover:bg-blue-100",
    dates: "2000",
    description: "Waaaa",
  },
];

function AboutSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  );

  return (
    <div className="flex flex-col items-start content-start gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-96 h-80" />

        {/* Picture */}
        <motion.div className="relative flex flex-col gap-3 justify-between items-center h-80">
          <Tile
            className="w-60 h-60 rounded-full bg-center bg-cover"
            style={{ backgroundImage: `url(${Profile})` }}
          />

          <motion.div
            className="relative text-xl mr-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            That's me!
            <img
              src={TwirlyArrow}
              alt=""
              className="absolute h-28 bottom-0 right-[-2rem] translate-x-[50%] rotate-[28deg] dark:invert"
            />
          </motion.div>
        </motion.div>

        {/* bio */}
        <Tile
          outerClassName="h-80 basis-0 flex-grow"
          className="h-80 border-2 border-amber-400 dark:border-amber-200 text-2xl rounded-3xl p-10"
        >
          Hey! My name is Oliver Redeyoff, I am a software developer, passionate
          about the web! I also love photography, coffee and music!
        </Tile>
      </div>

      <div className="flex flex-grow">
        {/* experiences */}
        <motion.div className="flex flex-col gap-6 md:flex-row flex-grow w-full">
          <Tile
            outerClassName="h-full w-96 flex-shrink-0"
            className="flex gap-2 flex-col h-full border-2 border-amber-400 dark:border-amber-200 rounded-3xl p-6"
          >
            {experiences.map((experience) => (
              <div key={experience.name}>
                <motion.div
                  className={`relative flex items-stretch cursor-pointer ${experience.background}`}
                  onClick={() => {
                    setSelectedExperience(experience);
                  }}
                >
                  <motion.div
                    className={`flex items-center w-9 pr-2 border-r-2 ${experience.border}`}
                  >
                    <img
                      src={experience.image}
                      alt={experience.name}
                      className="rounded-md"
                    />
                  </motion.div>

                  <motion.div className="flex flex-col pl-2">
                    <motion.div className="text-2xl">{experience.name}</motion.div>

                    <motion.div className="text-md text-slate-600 dark:text-slate-400">
                      {experience.dates}
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div className="flex-grow w-9 border-r-2 border-l-gray-300" />
              </div>
            ))}
          </Tile>

          <Tile
            outerClassName=""
            className="rounded-3xl p-6 mb-10 bg-amber-200 dark:bg-amber-600"
          >
            {selectedExperience.description}
          </Tile>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
