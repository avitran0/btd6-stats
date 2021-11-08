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
import NinjaMonkey from "./components/towers/ninja-monkey";
import { Route, NavLink, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BTD6Logo from "./misc/BTD6Logo.png";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<header>
				<nav className="navbar">
					<div>
						<img src={BTD6Logo} alt="BTD6" />
					</div>
					<ul>
						<li>
							<NavLink to="/" exact activeClassName="active-link">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/towers" activeClassName="active-link">
								Towers
							</NavLink>
						</li>
						<li>
							<NavLink to="/heroes" activeClassName="active-link">
								Heroes
							</NavLink>
						</li>
						<li>
							<NavLink to="/bloons" activeClassName="active-link">
								Bloons
							</NavLink>
						</li>
						<li>
							<NavLink to="/rounds" activeClassName="active-link">
								Rounds
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<AnimatePresence exitBeforeEnter initial={false}>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/towers" exact>
						<Towers />
					</Route>
					<Route path="/towers/dart-monkey">
						<DartMonkey />
					</Route>
					<Route path="/towers/boomerang-monkey">
						<BoomerangMonkey />
					</Route>
					<Route path="/towers/bomb-shooter">
						<BombShooter />
					</Route>
					<Route path="/towers/ninja-monkey">
						<NinjaMonkey />
					</Route>
					<Route path="/heroes" exact>
						<Heroes />
					</Route>
					<Route path="/heroes/quincy">
						<HeroQuincy />
					</Route>
					<Route path="/bloons">
						<Bloons />
					</Route>
					<Route path="/rounds" exact>
						<Rounds />
					</Route>
					<Route path="/rounds/abr">
						<ABR />
					</Route>
				</Switch>
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
