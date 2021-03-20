import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header>
				<nav className="navbar" id="navbar">
					<img src={logo} alt="cock"/>
					<ul>
						<li><a href="#navbar">Home</a></li>
						<li><a href="#navbar">Menu</a></li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default App;
