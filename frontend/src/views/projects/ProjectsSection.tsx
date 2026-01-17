import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tile from "../../components/Tile/Tile";
import { useLoading } from "../../context/LoadingContext";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import BloxdBg from "../../assets/bloxd_bg.webp";
import PocheLogo from "../../assets/poche_logo.png";
import CreativeBook from "../../assets/creativebook.png";
import Picky from "../../assets/picky.png";
import CognisessBg from "../../assets/cognisess_bg.png";

interface Project {
  name: string;
  image: string;
  description: string;
  link: string;
  accentColor: string;
  accentBg: string;
  accentBgHover: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    name: "Poche",
    image: PocheLogo,
    description:
      "A modern read-it-later app designed to help you save and organize articles, videos, and web content for later consumption with a clean, distraction-free reading experience.",
    link: "https://poche.to",
    accentColor: "bg-orange-500",
    accentBg: "bg-orange-500/10 dark:bg-orange-400/10",
    accentBgHover: "hover:bg-orange-500/20 dark:hover:bg-orange-400/20",
    tags: ["Productivity", "Reading"],
  },
  {
    name: "Bloxd",
    image: BloxdBg,
    description:
      "A multiplayer voxel sandbox game with 8.5 million monthly active users. Build, explore, and play with friends in a blocky world.",
    link: "https://bloxd.io",
    accentColor: "bg-sky-500",
    accentBg: "bg-sky-500/10 dark:bg-sky-400/10",
    accentBgHover: "hover:bg-sky-500/20 dark:hover:bg-sky-400/20",
    tags: ["Game", "Multiplayer", "Web"],
  },
  {
    name: "Picky",
    image: Picky,
    description:
      "A platform to discover what others think about their careers and make informed decisions about your own path.",
    link: "https://picky.careers",
    accentColor: "bg-emerald-500",
    accentBg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    accentBgHover: "hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20",
    tags: ["Careers", "Community"],
  },
  {
    name: "Creative Book",
    image: CreativeBook,
    description:
      "Connects freelance creatives across Northumberland with businesses looking to hire specific skill sets.",
    link: "https://www.creativebooknorthumberland.com",
    accentColor: "bg-violet-500",
    accentBg: "bg-violet-500/10 dark:bg-violet-400/10",
    accentBgHover: "hover:bg-violet-500/20 dark:hover:bg-violet-400/20",
    tags: ["Freelance", "Marketplace"],
  },
  {
    name: "Cognisess",
    image: CognisessBg,
    description:
      "An AI-powered recruitment and employee management platform helping companies make better hiring decisions.",
    link: "https://cognisess.com",
    accentColor: "bg-fuchsia-500",
    accentBg: "bg-fuchsia-500/10 dark:bg-fuchsia-400/10",
    accentBgHover: "hover:bg-fuchsia-500/20 dark:hover:bg-fuchsia-400/20",
    tags: ["HR Tech", "AI"],
  },
];

function ProjectsSection() {
  const { isReady } = useLoading();
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div className="flex flex-col items-start content-start gap-6 w-full">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-96 h-80" />

        {/* Project List */}
        <Tile
            outerClassName="flex-grow h-fit md:h-80"
            className="h-full rounded-3xl p-5 md:p-6"
            animationDelay={0.1}
          >
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400 mb-4 tracking-wide uppercase">
              Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {projects.map((project, index) => {
                const isSelected = selectedProject.name === project.name;
                return (
                  <motion.div
                    key={project.name}
                    className={`relative flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 ${project.accentBgHover} ${isSelected ? project.accentBg : ""}`}
                    onClick={() => setSelectedProject(project)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Project thumbnail */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className={`w-12 h-12 rounded-xl overflow-hidden ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-700 transition-all duration-200 ${isSelected ? project.accentColor.replace("bg-", "ring-") : "ring-slate-300 dark:ring-slate-500"}`}
                        animate={{ scale: isSelected ? 1.05 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col min-w-0 flex-grow">
                      <span
                        className={`font-semibold text-lg truncate ${isSelected ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}
                      >
                        {project.name}
                      </span>
                      {project.tags && (
                        <div className="flex gap-1 mt-0.5">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-slate-500 dark:text-slate-400"
                            >
                              {tag}
                              {project.tags!.indexOf(tag) < Math.min(project.tags!.length, 2) - 1 && " •"}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="text-slate-400 dark:text-slate-500"
                      animate={{
                        opacity: isSelected ? 1 : 0,
                        x: isSelected ? 0 : -10,
                      }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </Tile>
      </div>

      {/* Projects Section */}
      <div className="flex flex-grow w-full min-h-[30rem] max-h-[40rem]">
        <motion.div className="flex flex-col gap-6 md:flex-row flex-grow w-full">
          {/* Project Detail Card */}
          <div className="flex-grow">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={selectedProject.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <Tile
                  outerClassName="h-full"
                  className="h-full rounded-3xl overflow-hidden flex flex-col"
                  animationDelay={0.13}
                >
                  {/* Project Image */}
                  <div
                    className="flex-grow bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${selectedProject.image})` }}
                  >
                    <div className="absolute bottom-[-2px] left-0 right-0 h-80 bg-gradient-to-t from-slate-50 dark:from-slate-700 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {selectedProject.name}
                        </h2>
                        {selectedProject.tags && (
                          <div className="flex gap-2 mt-2">
                            {selectedProject.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`px-2 py-0.5 text-xs font-medium rounded-full ${selectedProject.accentBg} ${selectedProject.accentColor.replace("bg-", "text-")}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                      {selectedProject.description}
                    </p>

                    {/* Link Button */}
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-white ${selectedProject.accentColor} self-start`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Visit Project
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </motion.a>
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

export default ProjectsSection;
