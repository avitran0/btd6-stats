import "./App.css";
import Home from "./components/Home.jsx";
import Towers from "./components/Towers.jsx";
import Heroes from "./components/Heroes.jsx";
import Bloons from "./components/Bloons.jsx";
import Rounds from "./components/Rounds.jsx";
import ABR from "./components/ABR.jsx";
import Apopalypse from "./components/Apopalypse.jsx";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import BTD6Logo from "./misc/BTD6Logo.png";

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<nav className="navbar">
						<div>
							<img src={BTD6Logo} alt="cock" />
						</div>
						<ul>
							<li>
								<NavLink to="/" exact activeClassName="active-link">Home</NavLink>
							</li>
							<li>
								<NavLink to="/towers" activeClassName="active-link">Towers</NavLink>
							</li>
							<li>
								<NavLink to="/heroes" activeClassName="active-link">Heroes</NavLink>
							</li>
							<li>
								<NavLink to="/bloons" activeClassName="active-link">Bloons</NavLink>
							</li>
							<li>
								<NavLink to="/rounds" activeClassName="active-link">Rounds</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<AnimatedSwitch
					atEnter={{ offset: -100 }}
					atLeave={{ offset: 100 }}
					atActive={{ offset: 0 }}
					mapStyles={(styles) => ({
						transform: `translateX(${styles.offset}%)`,
					})}
					className="switch-wrapper"
				>
					<Route path="/" exact component={Home} />
					<Route path="/towers" exact component={Towers} />
					<Route path="/towers/dart-monkey" component={DartMonkeySelect} />
					<Route path="/heroes" exact component={Heroes} />
					<Route path="/heroes/quincy" component={HeroQuincy} />
					<Route path="/bloons" component={Bloons} />
					<Route path="/rounds" exact component={Rounds} />
					<Route path="/rounds/abr" component={ABR} />
					<Route path="/rounds/apopalypse" component={Apopalypse} />
				</AnimatedSwitch>
			</div>
		</Router>
	);
}

function DartMonkeySelect() {
	return (
		<div className="dart-monkey-select">
			<h1>Dart Monkey</h1>
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
