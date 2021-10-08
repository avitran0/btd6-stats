import { useState, useEffect } from "react";
import DartMonkey000 from "../../towers/DartMonkey.png";

export default function DartMonkey() {
	const [p1, setP1] = useState(0)
	const [p2, setP2] = useState(0)
	const [p3, setP3] = useState(0)
	const [stats, setStats] = useState([
		{
			damage: 1,
			damageMOAB: 1,
			damageCeramic: 1,
			pierce: 2,
			projectiles: 1,
			speed: 0.95,
			range: 32,
			camo: false,
			lead: false,
		},
	]);
	useEffect(() => {
		switch (String(p1) + String(p2) + String(p3)) {
			case "000":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					pierce: 2,
					projectiles: 1,
					speed: 0.95,
					range: 32,
					camo: false,
					lead: false,
				});
				document.getElementById("p2+").removeAttribute("disabled");
				document.getElementById("p2-").removeAttribute("disabled");
				document.getElementById("p3+").removeAttribute("disabled");
				document.getElementById("p3-").removeAttribute("disabled");
				break;
			case "100":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					pierce: 3,
					projectiles: 1,
					speed: 0.95,
					range: 32,
					camo: false,
					lead: false,
				});
				document.getElementById("p2+").setAttribute("disabled", "disabled");
				document.getElementById("p2-").removeAttribute("disabled");
				document.getElementById("p3+").removeAttribute("disabled");
				document.getElementById("p3-").removeAttribute("disabled");
				break;
			case "200":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					pierce: 5,
					projectiles: 1,
					speed: 0.95,
					range: 32,
					camo: false,
					lead: false,
				});
				document.getElementById("p2+").removeAttribute("disabled");
				document.getElementById("p2-").removeAttribute("disabled");
				document.getElementById("p3+").removeAttribute("disabled");
				document.getElementById("p3-").removeAttribute("disabled");
				break;
			default:
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					pierce: 2,
					projectiles: 1,
					speed: 0.95,
					range: 32,
					camo: false,
					lead: false,
				});
				document.getElementById("p1+").removeAttribute("disabled");
				document.getElementById("p1-").removeAttribute("disabled");
				document.getElementById("p2+").removeAttribute("disabled");
				document.getElementById("p2-").removeAttribute("disabled");
				document.getElementById("p3+").removeAttribute("disabled");
				document.getElementById("p3-").removeAttribute("disabled");
				break;
		}
	}, [p1, p2, p3]);
	function handleChange(button) {
		switch (button) {
			case "p1+":
				p1 >= 5 ? setP1(5) : setP1(p1 + 1);
				break;
			case "p1-":
				p1 <= 0 ? setP1(0) : setP1(p1 - 1);
				break;
			case "p2+":
				p2 >= 5 ? setP2(5) : setP2(p2 + 1);
				break;
			case "p2-":
				p2 <= 0 ? setP2(0) : setP2(p2 - 1);
				break;
			case "p3+":
				p3 >= 5 ? setP3(5) : setP3(p3 + 1);
				break;
			case "p3-":
				p3 <= 0 ? setP3(0) : setP3(p3 - 1);
				break;
			default:
				break;
		}
	}
	return (
		<div className="tower">
			<h1>Dart Monkey</h1>
			<img src={DartMonkey000} alt="Dart Monkey 000"></img>
			<h2>Stats</h2>
			<p>
				Damage: {stats.damage} Pierce: {stats.pierce} Speed: {stats.speed} Range: {stats.range}
			</p>
			<p>
				p1: {p1} p2: {p2} p3: {p3}
			</p>
			<button id="p1+"
				onClick={() => {
					handleChange("p1+");
				}}
			>
				+
			</button>
			<button id="p1-"
				onClick={() => {
					handleChange("p1-");
				}}
			>
				-
			</button>
			<button id="p2+"
				onClick={() => {
					handleChange("p2+");
				}}
			>
				+
			</button>
			<button id="p2-"
				onClick={() => {
					handleChange("p2-");
				}}
			>
				-
			</button>
			<button id="p3+"
				onClick={() => {
					handleChange("p3+");
				}}
			>
				+
			</button>
			<button id="p3-"
				onClick={() => {
					handleChange("p3-");
				}}
			>
				-
			</button>
		</div>
	);
}
