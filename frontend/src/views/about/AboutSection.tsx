import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tile from "../../components/Tile/Tile";

import TwirlyArrow from "../../assets/twirly_arrow.png";
import Profile from "../../assets/profile.jpeg";
import Bloxd from "../../assets/bloxd.jpeg";
import CambridgeConsultants from "../../assets/cambridge-consultants.png";
import Cognisess from "../../assets/cognisess.webp";
import BathUni from "../../assets/bathUni.png";

interface Experience {
  name: string;
  image: string;
  accentColor: string;
  accentBg: string;
  accentBgHover: string;
  dates: string;
  description: string;
}

const experiences: Experience[] = [
  {
    name: "Bloxd",
    image: Bloxd,
    accentColor: "bg-blue-500",
    accentBg: "bg-blue-500/10 dark:bg-blue-400/10",
    accentBgHover: "hover:bg-blue-500/20 dark:hover:bg-blue-400/20",
    dates: "2024 - Present",
    description:
      "Early engineer (4th hire) at a high-growth multiplayer sandbox game, helping scale to 8.5M+ monthly active users " +
      "and 16k+ concurrent players. Principal engineer for production backend infrastructure including DNS, Cloudflare, " +
      "Nginx, and large-scale server automation for a 550+ server fleet. Designed custom analytics infrastructure using " +
      "HyperLogLog for DAU/WAU/MAU tracking, architected distributed real-time social systems (friends, parties), and " +
      "owned frontend UI architecture. Shipped releases across Android, iOS, Microsoft Store, and web platforms, while " +
      "also owning the ads and monetisation system (adding £30k+ monthly revenue).",
  },
  {
    name: "Cambridge Consultants",
    image: CambridgeConsultants,
    accentColor: "bg-indigo-500",
    accentBg: "bg-indigo-500/10 dark:bg-indigo-400/10",
    accentBgHover: "hover:bg-indigo-500/20 dark:hover:bg-indigo-400/20",
    dates: "2022 - 2024",
    description:
      "Developed embedded firmware for production devices and led development of internal backend and web tools " +
      "to improve engineering productivity. Worked in agile, cross-disciplinary teams delivering reliable software " +
      "to external clients across a range of industries.",
  },
  {
    name: "Cognisess",
    image: Cognisess,
    accentColor: "bg-purple-500",
    accentBg: "bg-purple-500/10 dark:bg-purple-400/10",
    accentBgHover: "hover:bg-purple-500/20 dark:hover:bg-purple-400/20",
    dates: "2020 - 2021",
    description:
      "Developed and maintained a commercial recruitment and employee management platform. Built backend and " +
      "frontend features using .NET, SQL, AngularJS, and Azure. Contributed across the full lifecycle: features, " +
      "bug fixes, code reviews, and production releases.",
  },
  {
    name: "University of Bath",
    image: BathUni,
    accentColor: "bg-amber-500",
    accentBg: "bg-amber-500/10 dark:bg-amber-400/10",
    accentBgHover: "hover:bg-amber-500/20 dark:hover:bg-amber-400/20",
    dates: "2018 - 2022",
    description:
      "BSc (Hons) Computer Science — First-class honours. Studied a broad curriculum including algorithms, " +
      "systems programming, machine learning, and software engineering. Completed a placement year at Cognisess.",
  },
  {
    name: "Born",
    image: Bloxd,
    accentColor: "bg-rose-500",
    accentBg: "bg-rose-500/10 dark:bg-rose-400/10",
    accentBgHover: "hover:bg-rose-500/20 dark:hover:bg-rose-400/20",
    dates: "2000",
    description: "Waaaa 👶",
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

      {/* Experience Section */}
      <div className="flex flex-grow w-full">
        <motion.div className="flex flex-col gap-6 md:flex-row flex-grow w-full">
          {/* Timeline */}
          <Tile
            outerClassName="w-full h-full md:w-auto md:flex-shrink-0"
            className="h-full rounded-3xl p-5 md:p-6"
          >
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400 mb-4 tracking-wide uppercase">
              Experience
            </h3>
            <div className="flex flex-col gap-2 relative">
              {/* Vertical timeline line - centered on icons (p-3 + half of w-10 - half of line width = 12px + 20px - 1px = 31px) */}
              <div className="absolute left-8 translate-x-[-50%] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 opacity-30" />

              {experiences.map((experience, index) => {
                const isSelected = selectedExperience.name === experience.name;
                return (
                  <motion.div
                    key={experience.name}
                    className={`relative flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 ${experience.accentBgHover} ${isSelected ? experience.accentBg : ""}`}
                    onClick={() => setSelectedExperience(experience)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className={`w-10 h-10 rounded-full overflow-hidden border-2 ${isSelected ? "border-amber-400 dark:border-amber-300" : "border-slate-300 dark:border-slate-600"} transition-colors duration-200`}
                        animate={{ scale: isSelected ? 1.1 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={experience.image}
                          alt={experience.name}
                          className="w-full h-full object-cover bg-slate-50"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col min-w-0 flex-grow">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-semibold text-lg truncate ${isSelected ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}
                        >
                          {experience.name}
                        </span>
                        {index === 0 && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
                            Current
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {experience.dates}
                      </span>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="text-slate-400 dark:text-slate-500"
                      animate={{ opacity: isSelected ? 1 : 0, x: isSelected ? 0 : -10 }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </Tile>

          {/* Description Card */}
          <div className="flex-grow">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={selectedExperience.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
                className="h-full"
              >
                <Tile
                  outerClassName="h-full"
                  className="h-full rounded-3xl p-6 md:p-8 flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-700 ${selectedExperience.accentColor.replace("bg-", "ring-")}`}
                    >
                      <img
                        src={selectedExperience.image}
                        alt={selectedExperience.name}
                        className="w-full h-full object-cover bg-slate-50"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {selectedExperience.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <div
                          className={`w-2 h-2 rounded-full ${selectedExperience.accentColor}`}
                        />
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                          {selectedExperience.dates}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                    {selectedExperience.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-600">
                    <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
                      <span className={`w-3 h-3 rounded-full ${selectedExperience.accentColor}`} />
                      <span>
                        {experiences.indexOf(selectedExperience) + 1} of{" "}
                        {experiences.length} experiences
                      </span>
                    </div>
                  </div>
                </Tile>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
