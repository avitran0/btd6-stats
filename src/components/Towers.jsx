import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DartMonkey from "../towers/DartMonkey.png";
import BoomerangMonkey from "../towers/BoomerangMonkey.png";
import BombShooter from "../towers/BombShooter.png";
import TackShooter from "../towers/TackShooter.png";
import IceMonkey from "../towers/IceMonkey.png";
import GlueGunner from "../towers/GlueGunner.png";
import SniperMonkey from "../towers/SniperMonkey.png";
import MonkeySub from "../towers/MonkeySub.png";
import MonkeyBuccaneer from "../towers/MonkeyBuccaneer.png";
import MonkeyAce from "../towers/MonkeyAce.png";
import HeliPilot from "../towers/HeliPilot.png";
import MortarMonkey from "../towers/MortarMonkey.png";
import DartlingGunner from "../towers/DartlingGunner.png";
import WizardMonkey from "../towers/WizardMonkey.png";
import SuperMonkey from "../towers/SuperMonkey.png";
import NinjaMonkey from "../towers/NinjaMonkey.png";
import Alchemist from "../towers/Alchemist.png";
import Druid from "../towers/Druid.png";
import BananaFarm from "../towers/BananaFarm.png";
import SpikeFactory from "../towers/SpikeFactory.png";
import MonkeyVillage from "../towers/MonkeyVillage.png";
import MonkeyEngineer from "../towers/MonkeyEngineer.png";

export default function Towers() {
	document.title = "Towers - BTD6 Stats";
	const transitionContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.1,
				staggerChildren: 0.05,
			},
		},
	};
	const transitionItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<motion.div initial="hidden" animate="show" exit="hidden" variants={transitionContainer} className="towers">
			<motion.h1 variants={transitionItem}>Towers</motion.h1>
			<motion.h2 variants={transitionItem}>Primary</motion.h2>
			<div className="towers-grid">
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers/dart-monkey" id="dart-monkey">
						<img src={DartMonkey} alt="Dart Monkey" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers/boomerang-monkey" id="boomerang-monkey">
						<img src={BoomerangMonkey} alt="Boomerang Monkey" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers/bomb-shooter" id="bomb-shooter">
						<img src={BombShooter} alt="Bomb Shooter" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers/tack-shooter" id="tack-shooter">
						<img src={TackShooter} alt="Tack Shooter" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers/ice-monkey" id="ice-monkey">
						<img src={IceMonkey} alt="Ice Monkey" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers/glue-gunner" id="glue-gunner">
						<img src={GlueGunner} alt="Glue Gunner" />
					</Link>
				</motion.div>
			</div>
			<motion.h2 variants={transitionItem}>Military</motion.h2>
			<div className="towers-grid">
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers/sniper-monkey" id="sniper-monkey">
						<img src={SniperMonkey} alt="Sniper Monkey" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="monkey-sub">
						<img src={MonkeySub} alt="Monkey Sub" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="monkey-buccaneer">
						<img src={MonkeyBuccaneer} alt="Monkey Buccaneer" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="monkey-ace">
						<img src={MonkeyAce} alt="Monkey Ace" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="heli-pilot">
						<img src={HeliPilot} alt="Heli Pilot" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="mortar-monkey">
						<img src={MortarMonkey} alt="Mortar Monkey" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="dartling-gunner">
						<img src={DartlingGunner} alt="Dartling Gunner" />
					</Link>
				</motion.div>
			</div>
			<motion.h2 variants={transitionItem}>Magic</motion.h2>
			<div className="towers-grid">
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/" id="wizard-monkey">
						<img src={WizardMonkey} alt="Wizard Monkey" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="super-monkey">
						<img src={SuperMonkey} alt="Super Monkey" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers/ninja-monkey" id="ninja-monkey">
						<img src={NinjaMonkey} alt="Ninja Monkey" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="alchemist">
						<img src={Alchemist} alt="Alchemist" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="druid">
						<img src={Druid} alt="Druid" />
					</Link>
				</motion.div>
			</div>
			<motion.h2 variants={transitionItem}>Support</motion.h2>
			<div className="towers-grid">
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/" id="banana-farm">
						<img src={BananaFarm} alt="Banana Farm" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="spike-factory">
						<img src={SpikeFactory} alt="Spike Factory" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="monkey-village">
						<img src={MonkeyVillage} alt="Monkey Village" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="monkey-engineer">
						<img src={MonkeyEngineer} alt="Monkey Engineer" />
					</Link>
				</motion.div>
			</div>
			<motion.p variants={transitionItem} className="footer">
				Made by <a href="https://www.github.com/HolyHades">HolyHades</a>
			</motion.p>
		</motion.div>
	);
}
