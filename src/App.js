import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import logo from "./logo.svg";

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<nav className="navbar" id="navbar">
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
	return <div className="towers"></div>;
}

export default App;
