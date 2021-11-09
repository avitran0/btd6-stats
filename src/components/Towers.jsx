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
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: "easeInOut", duration: 0.2 }}
			className="towers"
		>
			<h1>Towers</h1>
			<h2>Primary</h2>
			<div className="towers-grid">
				<div className="grid-container">
					<Link to="/towers/dart-monkey" id="dart-monkey">
						<img src={DartMonkey} alt="Dart Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers/boomerang-monkey" id="boomerang-monkey">
						<img src={BoomerangMonkey} alt="Boomerang Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers/bomb-shooter" id="bomb-shooter">
						<img src={BombShooter} alt="Bomb Shooter" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers/tack-shooter" id="tack-shooter">
						<img src={TackShooter} alt="Tack Shooter" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="ice-monkey">
						<img src={IceMonkey} alt="Ice Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="glue-gunner">
						<img src={GlueGunner} alt="Glue Gunner" />
					</Link>
				</div>
			</div>
			<h2>Military</h2>
			<div className="towers-grid">
				<div className="grid-container">
					<Link to="/" id="sniper-monkey">
						<img src={SniperMonkey} alt="Sniper Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-sub">
						<img src={MonkeySub} alt="Monkey Sub" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-buccaneer">
						<img src={MonkeyBuccaneer} alt="Monkey Buccaneer" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-ace">
						<img src={MonkeyAce} alt="Monkey Ace" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="heli-pilot">
						<img src={HeliPilot} alt="Heli Pilot" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="mortar-monkey">
						<img src={MortarMonkey} alt="Mortar Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="dartling-gunner">
						<img src={DartlingGunner} alt="Dartling Gunner" />
					</Link>
				</div>
			</div>
			<h2>Magic</h2>
			<div className="towers-grid">
				<div className="grid-container">
					<Link to="/" id="wizard-monkey">
						<img src={WizardMonkey} alt="Wizard Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="super-monkey">
						<img src={SuperMonkey} alt="Super Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers/ninja-monkey" id="ninja-monkey">
						<img src={NinjaMonkey} alt="Ninja Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="alchemist">
						<img src={Alchemist} alt="Alchemist" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="druid">
						<img src={Druid} alt="Druid" />
					</Link>
				</div>
			</div>
			<h2>Support</h2>
			<div className="towers-grid">
				<div className="grid-container">
					<Link to="/" id="banana-farm">
						<img src={BananaFarm} alt="Banana Farm" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="spike-factory">
						<img src={SpikeFactory} alt="Spike Factory" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-village">
						<img src={MonkeyVillage} alt="Monkey Village" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-engineer">
						<img src={MonkeyEngineer} alt="Monkey Engineer" />
					</Link>
				</div>
			</div>
			<p className="footer">
				Made by <a href="https://www.github.com/HolyHades">HolyHades</a>
			</p>
		</motion.div>
	);
}
