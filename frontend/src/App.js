import "./App.css"

import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import RoundAbout from "./components/RoundAbout/RoundAbout"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon, CodeBracketIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Aerobatics from './assets/aerobatics.png'
import Iceland from './assets/iceland_2.0.png'
import Pilgramage from './assets/pilgrimage.png'
import CountryRoad from './assets/country_road.png'
import TwirlyArrow from './assets/twirly_arrow.png'
import Profile from './assets/profile.png'

const themes = ["light", "dark"]
const tileClasses = 'bg-slate-50 dark:bg-slate-700 shadow-md shadow-gray-200 dark:shadow-gray-900 p-6'


function App() {
	let sections = {
		About: {
			name: "About",
			path: "/about",
			icon: "👋",
			lightColor: "rgb(228,182,55)",
			darkColor: "rgb(228,182,55)",
			backgroundImage: CountryRoad,
		},
		Photography: {
			name: "Photography",
			path: "/photography",
			icon: "📷",
			lightColor: "rgb(145,152,229)",
			darkColor: "rgb(145,152,229)",
			backgroundImage: Iceland,
		},
		Projects: {
			name: "Projects",
			path: "/projects",
			icon: "🛠️", // 📓
			lightColor: "rgb(230,100,101)",
			darkColor: "rgb(230,100,101)",
			backgroundImage: Pilgramage,
		},
		Blog: {
			name: "Blog",
			path: "/blog",
			icon: "📝",
			lightColor: "rgb(81,164,138)",
			darkColor: "rgb(81,164,138)",
			backgroundImage: Aerobatics,
		},
	};

	const navigate = useNavigate()
	const [theme, setTheme] = useState("light")
	const [section, setSection] = useState("About")

	useEffect(() => {
		navigate(sections[section].path)
	}, [section])

	return (
		<AnimatePresence>
			<div className={theme}>
				<div
					className={`${theme} flex flex-wrap flex-col gap-6 h-screen w-screen p-6 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-mono`}
				>
					<motion.div className='flex gap-8 w-full'>
						{/* round about, theme and quick links */}
						<motion.div className='flex gap-3 h-80 flex-shrink-0'>
							<Tile className='w-80 h-80 flex-shrink-0 p-6 rounded-3xl'>
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

							<motion.div className='flex flex-col flex-shrink-0 gap-3 h-80'>
								<Tile
									className='flex items-center justify-center w-14 rounded-xl flex-grow'
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

								<Tile className='flex items-center justify-center w-14 h-16 rounded-xl'><CodeBracketIcon
									className='w-6 h-6'/></Tile>

								<Tile className='flex items-center justify-center w-14 h-16 rounded-xl'><BriefcaseIcon
									className='w-6 h-6'/></Tile>
							</motion.div>
						</motion.div>

						{/* picture */}
						<motion.div className='relative flex flex-col gap-3 justify-between items-center h-80'>
							<Tile
								className='w-60 h-60 rounded-full bg-center bg-cover'
								style={{ backgroundImage: `url(${Profile})` }}
							/>

							<motion.div className='relative text-xl'>
								That's me!
								<img src={TwirlyArrow} className='absolute h-28 bottom-0 right-[-2rem] translate-x-[50%] rotate-[28deg]'/>
							</motion.div>
						</motion.div>

						{/* bio */}
						<Tile className='flex content-center items-start flex-grow h-80 bg-amber-50 dark:bg-amber-50 text-slate-800 text-3xl rounded-3xl p-10'>
							Hey! My name is Oliver Redeyoff, I am a software developer, passionate about the web! I also love photography, coffee and music!
						</Tile>

						{/*<Tile*/}
						{/*	className='flex items-center justify-center w-80 h-80 rounded-3xl flex-grow bg-cover bg-center transition-[background-image] duration-300'*/}
						{/*	style={{backgroundImage: `url(${sections[section].backgroundImage})`}}*/}
						{/*>*/}
						{/*	<motion.div*/}
						{/*		className='text-slate-50 text-6xl p-3 backdrop-blur-sm rounded-xl'>{section}</motion.div>*/}
						{/*</Tile>*/}
					</motion.div>

					<motion.div className='flex gap-3 flex-grow w-full'>
						<Tile className='w-96 bg-indigo-100 rounded-3xl'>

						</Tile>
						<Tile></Tile>
					</motion.div>
				</div>
			</div>
		</AnimatePresence>
)
}

function Tile(props) {
	return <motion.div
		className={`bg-slate-50 dark:bg-slate-700 shadow-md shadow-gray-200 dark:shadow-gray-900 ${props.className}`}
		style={props.style}
		onClick={props.onClick}
		initial={{ opacity: 0.5, scale: 0 }}
		animate={{ opacity: 1, scale: 1 }}
		whileHover={{ scale: 1.02 }}
		transition={{ duration: 0.5, type: 'spring' }}
	>
		{props.children}
	</motion.div>
}

export default App
