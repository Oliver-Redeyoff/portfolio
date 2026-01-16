import Tile from "../../components/Tile/Tile";

import BloxdBg from "../../assets/bloxd_bg.webp";
import CreativeBook from "../../assets/creativebook.png";
import Picky from "../../assets/picky.png";
import CognisessBg from "../../assets/cognisess_bg.png";

interface Project {
  name: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Bloxd",
    image: BloxdBg,
    description: "6 million monthly player voxel multiplayer game",
    link: "https://bloxd.io",
  },
  {
    name: "Picky",
    image: Picky,
    description:
      "Check out what others think about their careers and then decide on yours",
    link: "https://picky.careers",
  },
  {
    name: "Creative Book",
    image: CreativeBook,
    description:
      "Connects freelance creatives across Northumberland, with businesses who are looking to hire a certain skill set",
    link: "https://www.creativebooknorthumberland.com",
  },
  {
    name: "Cognisess",
    image: CognisessBg,
    description: "Recruitment and employee management platform",
    link: "https://cognisess.com",
  },
];

function ProjectsSection() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap w-full items-stretch content-start gap-4">
      <div className="w-96 h-80" />

      {projects.map((project) => {
        return (
          <Tile
            key={project.name}
            outerClassName="h-80 w-96 flex-grow"
            className="relative flex flex-col items-start gap-3 h-80 py-4 px-6 rounded-3xl overflow-hidden cursor-pointer bg-center bg-cover"
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => {
              window.open(project.link);
            }}
          >
            <div className="absolute w-full h-full top-0 left-0 backdrop-brightness-75 z-0" />
            <div className="py-1 px-2 text-4xl rounded-md font-bold text-slate-50 bg-red-300 bg-opacity-80 backdrop-blur-sm z-10">
              {project.name}
            </div>
            <div className="py-1 px-2 text-xl rounded-md font-bold text-slate-50 bg-slate-400 bg-opacity-80 backdrop-blur-sm z-10">
              {project.description}
            </div>
            <div className="absolute bottom-4 right-6 text-2xl font-bold text-red-500 z-10">
              -&gt;
            </div>
          </Tile>
        );
      })}
    </div>
  );
}

export default ProjectsSection;
