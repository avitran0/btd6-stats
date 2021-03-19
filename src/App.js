import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header>
				<nav className="navbar">
					<img src={logo} alt="cock"/>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Menu</a></li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default App;
