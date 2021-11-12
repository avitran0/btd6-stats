import "./App.scss";
import Home from "./components/Home";
import Towers from "./components/Towers";
import Heroes from "./components/Heroes";
import Bloons from "./components/Bloons";
import Rounds from "./components/Rounds";
import ABR from "./components/ABR";
import DartMonkey from "./components/towers/dart-monkey";
import BoomerangMonkey from "./components/towers/boomerang-monkey";
import BombShooter from "./components/towers/bomb-shooter";
import TackShooter from "./components/towers/tack-shooter";
import IceMonkey from "./components/towers/ice-monkey";
import NinjaMonkey from "./components/towers/ninja-monkey";
import { Route, NavLink, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import BTD6Logo from "./misc/BTD6Logo.png";

function App() {
	const location = useLocation();
	const [fontSize, setFontSize] = useState(16);
	function handleChange(type) {
		switch (type) {
			case "+":
				document.documentElement.style.fontSize = fontSize + 1 + "px";
				setFontSize(fontSize + 1);
				break;
			case "-":
				document.documentElement.style.fontSize = fontSize - 1 + "px";
				setFontSize(fontSize - 1);
				break;
			case "reset":
				document.documentElement.style.fontSize = "16px";
				setFontSize(16);
				break;
			default:
				break;
		}
	}
	return (
		<div className="App">
			<header>
				<nav className="navbar">
					<div>
						<img src={BTD6Logo} alt="BTD6" />
					</div>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/towers">Towers</NavLink>
						</li>
						<li>
							<NavLink to="/heroes">Heroes</NavLink>
						</li>
						<li>
							<NavLink to="/bloons">Bloons</NavLink>
						</li>
						<li>
							<NavLink to="/rounds">Rounds</NavLink>
						</li>
						<li>
							<button onClick={() => handleChange("+")}>+</button>
							<button onClick={() => handleChange("reset")}>Reset</button>
							<button onClick={() => handleChange("-")}>-</button>
							<p></p>
						</li>
					</ul>
				</nav>
			</header>
			<AnimatePresence exitBeforeEnter initial={false}>
				<Routes location={location} key={location.pathname}>
					<Route path="/" exact element={<Home />} />
					<Route path="/towers" exact element={<Towers />} />
					<Route path="/towers/dart-monkey" element={<DartMonkey />} />
					<Route path="/towers/boomerang-monkey" element={<BoomerangMonkey />} />
					<Route path="/towers/bomb-shooter" element={<BombShooter />} />
					<Route path="/towers/tack-shooter" element={<TackShooter />} />
					<Route path="/towers/ice-monkey" element={<IceMonkey />} />
					<Route path="/towers/ninja-monkey" element={<NinjaMonkey />} />
					<Route path="/heroes" exact element={<Heroes />} />
					<Route path="/heroes/quincy" element={<HeroQuincy />} />
					<Route path="/bloons" element={<Bloons />} />
					<Route path="/rounds" exact element={<Rounds />} />
					<Route path="/rounds/abr" element={<ABR />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

function HeroQuincy() {
	return (
		<div className="hero-quincy">
			<h1>Quincy</h1>
		</div>
	);
}

export default App;
