import "./App.scss";
import Home from "./components/Home";
import Towers from "./components/Towers";
import Heroes from "./components/Heroes";
import Bloons from "./components/Bloons";
import Rounds from "./components/Rounds";
import ABR from "./components/ABR";
import DartMonkey from "./components/towers/dart-monkey";
import BoomerangMonkey from "./components/towers/boomerang-monkey";
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
					<Route path="/" exact component={Home} />
					<Route path="/towers" exact component={Towers} />
					<Route path="/towers/dart-monkey" component={DartMonkey} />
					<Route path="/towers/boomerang-monkey" component={BoomerangMonkey} />
					<Route path="/towers/ninja-monkey" component={NinjaMonkey}/>
					<Route path="/heroes" exact component={Heroes} />
					<Route path="/heroes/quincy" component={HeroQuincy} />
					<Route path="/bloons" component={Bloons} />
					<Route path="/rounds" exact component={Rounds} />
					<Route path="/rounds/abr" component={ABR} />
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
