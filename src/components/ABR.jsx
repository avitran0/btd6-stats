import NavLink from "react-router-dom";

export default function ABR() {
	return (
		<div className="rounds">
			<h1>Rounds</h1>
			<ul>
				<li><NavLink to="/rounds">Normal</NavLink></li>
				<li><NavLink to="/rounds/abr" activeClassName="active-link">ABR</NavLink></li>
				<li><NavLink to="/rounds/apopalypse">Apopalypse</NavLink></li>
			</ul>
		</div>
	);
}