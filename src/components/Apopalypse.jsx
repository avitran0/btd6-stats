import NavLink from "react-router-dom";

export default function Apopalypse() {
	return (
		<div className="rounds">
			<h1>Rounds</h1>
			<ul>
				<li><NavLink to="/rounds">Normal</NavLink></li>
				<li><NavLink to="/rounds/abr">ABR</NavLink></li>
				<li><NavLink to="/rounds/apopalypse" activeClassName="active-link">Apopalypse</NavLink></li>
			</ul>
		</div>
	);
}