import "./App.css"

import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import RoundAbout from "./components/RoundAbout/RoundAbout"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon, CodeBracketIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

// About
import TwirlyArrow from './assets/twirly_arrow.png'
import Arrow from './assets/arrow.png'
import Profile from './assets/profile.png'
import Bloxd from './assets/bloxd.jpeg'
import CambridgeConsultants from './assets/cambridge-consultants.png'
import Cognisess from './assets/cognisess.webp'
import BathUni from './assets/bathUni.png'

// Photography
import Buda from './assets/photography/buda.jpg'
import Building from './assets/photography/building.jpg'
import CavalairePonton from './assets/photography/cavalaire_ponton.jpg'
import CavalaireSea from './assets/photography/cavalaire_sea.jpg'
import CavalaireBeach from './assets/photography/cavalaire_beach.jpg'
import DealLockdown from './assets/photography/deal_lockdown.jpg'
import HawaiiCar from './assets/photography/hawaii_car.jpg'
import HawaiiCliff from './assets/photography/hawaii_cliff.jpg'
import BluredTilly from './assets/photography/blured_tilly.jpg'
import Waves from './assets/photography/waves.jpg'
import Surfboard from './assets/photography/surfboard.jpg'
import SunRipple  from './assets/photography/sun_ripples.jpg'

// Projects
import BloxdBg from './assets/bloxd_bg.webp'
import CreativeBook from './assets/creativebook.png'
import Picky from './assets/picky.png'
import CognisessBg from './assets/cognisess_bg.png'

const themes = ["light", "dark"]

const sections = {
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
}

const experiences = [
	{
		name: "Bloxd",
		image: Bloxd,
		border: "border-r-blue-400",
		background: "hover:bg-blue-100",
		dates: "2024 - now",
		description: "Working on a multiple player voxel web game with 6+ million monthly player.",
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
		description: "I graduated with first-class honours, with an overall average of 70.54%.",
	},
	{
		name: "Born",
		image: Bloxd,
		border: "border-r-blue-400",
		background: "hover:bg-blue-100",
		dates: "2000",
		description: "Waaaa",
	},
]

const photos = [
	{
		name: "Buda",
		image: Buda,
	},
	{
		name: "Building",
		image: Building,
	},
	{
		name: "French Pier",
		image: CavalairePonton,
	},
	{
		name: "Cavalaire Sea",
		image: CavalaireSea,
	},
	{
		name: "Cavalaire Beach",
		image: CavalaireBeach,
	},
	{
		name: "Deal Lockdown",
		image: DealLockdown,
	},
	{
		name: "Hawaii Car",
		image: HawaiiCar,
	},
	{
		name: "Hawaii Cliff",
		image: HawaiiCliff,
	},
	{
		name: "Blured Tilly",
		image: BluredTilly,
	},
	{
		name: "Waves",
		image: Waves,
	},
	{
		name: "Surfboard",
		image: Surfboard,
	},
	{
		name: "Sun Ripple",
		image: SunRipple,
	},
]

const projects = [
	{
		name: "Bloxd",
		image: BloxdBg,
		description: "6 million monthly player voxel multiplayer game",
		link: "https://bloxd.io",
	},
	{
		name: "Picky",
		image: Picky,
		description: "Check out what others think about their careers and then decide on yours",
		link: "https://picky.careers",
	},
	{
		name: "Creative Book",
		image: CreativeBook,
		description: "Connects freelance creatives across Northumberland, with businesses who are looking to hire a certain skill set",
		link: "https://www.creativebooknorthumberland.com",
	},
	{
		name: "Cognisess",
		image: CognisessBg,
		description: "Recruitment and employee management platform",
		link: "https://cognisess.com",
	},
]

function App() {
	const navigate = useNavigate()
	const [theme, setTheme] = useState("light")
	const [section, setSection] = useState("About")
	const [selectedExperience, setSelectedExperience] = useState(experiences[0])

	useEffect(() => {
		navigate(sections[section].path)
	}, [section])

	return (
		<div className={theme}>
			<div
				className={`${theme} relative flex flex-wrap flex-row gap-6 h-screen w-screen overflow-y-scroll overflow-x-hidden p-6 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-mono`}
			>
				<motion.div className='absolute w-full left-0 md:w-96 h-80 px-6 md:px-0 md:mx-6 flex gap-3'>
					{/* round about */}
					<Tile className='h-full aspect-square flex-shrink-0 p-6 rounded-3xl'>
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
					<motion.div className='flex flex-col items-stretch flex-grow gap-3 h-80'>
						<Tile
							outerClassName='flex flex-col items-stretch flex-grow'
							className='flex items-center justify-center flex-grow rounded-xl cursor-pointer'
							onClick={() => {
								setTheme(theme === "light" ? "dark" : "light")
							}}
						>
							{themes.map((themeOption) => {
								return themeOption === theme && (
									<motion.div
										initial={{rotate: 180, opacity: 0}}
										animate={{rotate: 0, opacity: 1}}
										exit={{rotate: -180, opacity: 0}}
										transition={{type: "spring", bounce: 0.5}}
									>
										{themeOption === "light" && <SunIcon className='w-6 h-6'/>}
										{themeOption === "dark" && <MoonIcon className='w-6 h-6'/>}
									</motion.div>
								)
							})}
						</Tile>

						<Tile
							outerClassName='flex flex-col items-stretch'
							className='flex items-center justify-center h-16 rounded-xl cursor-pointer'
						>
							<CodeBracketIcon className='w-6 h-6'/>
						</Tile>

						<Tile
							outerClassName='flex flex-col items-stretch'
							className='flex items-center justify-center h-16 rounded-xl cursor-pointer'
						>
							<BriefcaseIcon className='w-6 h-6'/>
						</Tile>
					</motion.div>
				</motion.div>

				<AnimatePresence>
					{/********************
					  *** About Section **
					  ********************/}
					{section === "About" && (
						<div className="flex flex-col items-start content-start gap-6">
							<div className='flex flex-col md:flex-row gap-6'>
								<div className='w-96 h-80'/>

								{/* Picture */}
								<motion.div className='relative flex flex-col gap-3 justify-between items-center h-80'>
									<Tile
										className='w-60 h-60 rounded-full bg-center bg-cover'
										style={{backgroundImage: `url(${Profile})`}}
									/>

									<motion.div
										className='relative text-xl mr-2'
										initial={{opacity: 0, scale: 0}}
										animate={{opacity: 1, scale: 1}}
										exit={{opacity: 0, scale: 0}}
									>
										That's me!
										<img src={TwirlyArrow}
											 className='absolute h-28 bottom-0 right-[-2rem] translate-x-[50%] rotate-[28deg] dark:invert'/>
									</motion.div>
								</motion.div>

								{/* bio */}
								<Tile
									outerClassName='h-80 basis-0 flex-grow'
									className='h-80 border-2 border-amber-400 dark:border-amber-200 text-2xl rounded-3xl p-10'
								>
									Hey! My name is Oliver Redeyoff, I am a software developer, passionate about the
									web! I also love photography, coffee and music!
								</Tile>
							</div>

							<div className='flex flex-grow'>
								{/* experiences */}
								<motion.div className='flex flex-col gap-6 md:flex-row flex-grow w-full'>
									<Tile
										outerClassName='h-full w-96 flex-shrink-0'
										className='flex gap-2 flex-col h-full border-2 border-amber-400 dark:border-amber-200 rounded-3xl p-6'
									>
										{experiences.map((experience) => (<>
											<motion.div
												className={`relative flex items-stretch cursor-pointer ${experience.background}`}
												onClick={() => {
													setSelectedExperience(experience)
												}}
											>
												<motion.div
													className={`flex items-center w-9 pr-2 border-r-2 ${experience.border}`}>
													<img src={experience.image} className='rounded-md'/>
												</motion.div>

												<motion.div className='flex flex-col pl-2'>
													<motion.div className='text-2xl'>
														{experience.name}
													</motion.div>

													<motion.div
														className='text-md text-slate-600 dark:text-slate-400'>{experience.dates}</motion.div>
												</motion.div>
											</motion.div>

											<motion.div className='flex-grow w-9 border-r-2 border-l-gray-300'/>
										</>))}
									</Tile>

									{/*<img*/}
									{/*	src={Arrow}*/}
									{/*	className='absolute w-24 rotate-[-90deg] top-[50%] right-0 translate-y-[-50%] translate-x-[115%] z-10 dark:invert'*/}
									{/*/>*/}
									<Tile
										outerClassName=''
										className='rounded-3xl p-6 mb-10 bg-amber-200 dark:bg-amber-600'
									>
										{selectedExperience.description}
									</Tile>
								</motion.div>
							</div>
						</div>
					)}

					{/*************************
					 *** Photography Section **
					 **************************/}
					{section === "Photography" && (
						<div className="flex flex-col md:flex-row flex-wrap w-full items-stretch content-start gap-4">
							<div className='w-96 h-80'/>

							{photos.map((photo) => {
								return <Tile
									outerClassName='h-80 flex-grow'
									className='relative h-80 rounded-3xl overflow-hidden bg-center bg-cover'
									style={{backgroundImage: `url(${photo.image})`}}
								>
									<img className='h-80 opacity-0' src={photo.image}/>
									<div className='absolute bottom-0.5 left-0.5 px-3 py-1 backdrop-blur-md rounded-md rounded-bl-3xl bg-slate-400 bg-opacity-30 text-slate-50'>{photo.name}</div>
								</Tile>
							})}
						</div>
					)}

					{/**********************
					 *** Projects Section **
					 ***********************/}
					{section === "Projects" && (
						<div className="flex flex-col md:flex-row flex-wrap w-full items-stretch content-start gap-4">
							<div className='w-96 h-80'/>

							{projects.map((project) => {
								return <Tile
									outerClassName='h-80 w-96 flex-grow'
									className='relative flex flex-col items-start gap-3 h-80 py-4 px-6 rounded-3xl overflow-hidden cursor-pointer bg-center bg-cover'
									style={{backgroundImage: `url(${project.image})`}}
									onClick={() => {
										window.open(project.link)
									}}
								>
									<div className='absolute w-full h-full top-0 left-0 backdrop-brightness-75 z-0' />
									<div
										className='py-1 px-2 text-4xl rounded-md font-bold text-slate-50 bg-red-300 bg-opacity-80 backdrop-blur-sm z-10'>
										{project.name}
									</div>
									<div
										className='py-1 px-2 text-xl rounded-md font-bold text-slate-50 bg-slate-400 bg-opacity-80 backdrop-blur-sm z-10'>
										{project.description}
									</div>
									<div className='absolute bottom-4 right-6 text-2xl font-bold text-red-500 z-10'>-></div>
								</Tile>
							})}
						</div>
					)}

					{/**********************
					 *** Projects Section **
					 ***********************/}
					{section === "Blog" && (
						<div className="flex flex-col md:flex-row flex-wrap w-full items-stretch content-start gap-4">
							<div className='w-96 h-80'/>

							<Tile
								className='py-3 px-4 rounded-xl'
							>Nothing here yet!</Tile>
						</div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

function Tile(props) {
	return <motion.div
		className={`${props.outerClassName ?? ""}`}
		>
			<motion.div
				key={props.className}
				className={`bg-slate-50 dark:bg-slate-700 shadow-md shadow-gray-200 dark:shadow-gray-900 ${props.className ?? ""}`}
				style={props.style}
				onClick={props.onClick}
				initial={{ opacity: 0.5, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0 }}
				whileHover={{ scale: 1.02 }}
				transition={{ duration: 0.5, type: 'spring' }}
			>
				{props.children}
			</motion.div>
		</motion.div>
}

export default App
