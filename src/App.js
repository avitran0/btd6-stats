import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import logo from "./logo.svg";
import DartMonkey from "./towers/DartMonkey.png";
import BoomerangMonkey from "./towers/BoomerangMonkey.png";
import BombShooter from "./towers/BombShooter.png";
import TackShooter from "./towers/TackShooter.png";
import IceMonkey from "./towers/IceMonkey.png";
import GlueGunner from "./towers/GlueGunner.png";

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<nav className="navbar">
						<img src={logo} alt="cock" />
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/towers">Towers</Link>
							</li>
							<li>
								<Link to="/towers">Heroes</Link>
							</li>
							<li>
								<Link to="/towers">Bloons</Link>
							</li>
							<li>
								<Link to="/towers">Maps</Link>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<AnimatedSwitch
						atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0 }}
						atActive={{ opacity: 1 }}
						className="switch-wrapper"
					>
						<Route path="/" exact component={Home} />
						<Route path="/towers" component={Towers} />
					</AnimatedSwitch>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return <div className="home"></div>;
}

function Towers() {
	return (
		<div className="towers">
			<h2>Primary</h2>
			<div className="tower-grid">
				<Link to="/" id="dart-monkey"><img src={DartMonkey} alt="Dart Monkey"/></Link>
				<Link to="/towers" id="boomerang-monkey"><img src={BoomerangMonkey} alt="Boomerang Monkey"/></Link>
				<Link to="/towers" id="bomb-shooter"><img src={BombShooter} alt="Bomb Shooter"/></Link>
				<Link to="/towers" id="tack-shooter"><img src={TackShooter} alt="Tack Shooter"/></Link>
				<Link to="/towers" id="ice-monkey"><img src={IceMonkey} alt="Ice Monkey"/></Link>
				<Link to="/towers" id="glue-gunner"><img src={GlueGunner} alt="Glue Gunner"/></Link>
			</div>
		</div>
	);
}

export default App;
