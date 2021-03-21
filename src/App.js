import "./App.css";
import Home from "./Home.js";
import Towers from "./Towers.js";
import Heroes from "./Heroes.js";
import Bloons from "./Bloons.js";
import Rounds from "./Rounds.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import logo from "./logo.svg";

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
								<Link to="/heroes">Heroes</Link>
							</li>
							<li>
								<Link to="/bloons">Bloons</Link>
							</li>
							<li>
								<Link to="/towers">Maps</Link>
							</li>
							<li>
								<Link to="/rounds">Rounds</Link>
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
					<Route path="/towers" component={Towers} />
					<Route path="/heroes" component={Heroes} />
					<Route path="/bloons" component={Bloons} />
					<Route path="/rounds" component={Rounds} />
				</AnimatedSwitch>
			</div>
		</Router>
	);
}

export default App;
