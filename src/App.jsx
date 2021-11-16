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
import { useState, useRef, useEffect } from "react";
import BTD6Logo from "./misc/BTD6Logo.png";

function App() {
	const location = useLocation();
	const [fontSize, setFontSize] = useState(16);
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
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
	function handleModal(type) {
		switch (type) {
			case "open":
				document.getElementById("modal").style.display = "flex";
				break;
			case "close":
				document.getElementById("modal").style.display = "none";
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
							<NavLink to="/" exact>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/towers" exact>
								Towers
							</NavLink>
						</li>
						<li>
							<NavLink to="/heroes" exact>
								Heroes
							</NavLink>
						</li>
						<li>
							<NavLink to="/bloons">Bloons</NavLink>
						</li>
						<li>
							<NavLink to="/rounds" exact>
								Rounds
							</NavLink>
						</li>
						<li>
							<button onClick={() => handleModal("open")} className="font-size">
								Size
							</button>
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
			<div id="modal">
				<div className="modal-box" ref={wrapperRef}>
					<h2>
						Font Size
						<button
							onClick={() => handleModal("close")}
							className="font-size"
							style={{ marginLeft: "1rem" }}
						>
							&#x2715;
						</button>
					</h2>
					<h2 style={{ marginBottom: 0 }}>{fontSize / 16}x</h2>
					<div>
						<button onClick={() => handleChange("+")} className="font-size-btn">
							+
						</button>
						<button onClick={() => handleChange("reset")} className="font-size-btn">
							&#8635;
						</button>
						<button onClick={() => handleChange("-")} className="font-size-btn">
							-
						</button>
					</div>
				</div>
			</div>
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

function useOutsideAlerter(ref) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (
				ref.current &&
				!ref.current.contains(event.target) &&
				document.getElementById("modal").style.display === "flex"
			) {
				document.getElementById("modal").style.display = "none";
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

export default App;
