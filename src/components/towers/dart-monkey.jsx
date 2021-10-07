import { useState } from "react";
import DartMonkey000 from "../../towers/DartMonkey.png";

export default function DartMonkey() {
	const [p1, setP1] = useState(0);
	const [p2, setP2] = useState(0);
	const [p3, setP3] = useState(0);
	const [damage, setDamage] = useState(0);
	const [pierce, setPierce] = useState(0);
	const [speed, setSpeed] = useState(0.0);
	const [range, setRange] = useState(0);
	async function handleChange() {
		switch (String(p1) + String(p2) + String(p3)) {
			case "000":
				setDamage(1);
				setPierce(2);
				setSpeed(0.95);
				setRange(32);
				break;
			case "100":
				setDamage(1);
				setPierce(3);
				setSpeed(0.95);
				setRange(32);
				break;
			case "200":
				setDamage(1);
				setPierce(5);
				setSpeed(0.95);
				setRange(32);
				break;
			default:
				setDamage(0);
				setPierce(0);
				setSpeed(0);
				setRange(0);
				break;
		}
	}
	return (
		<div className="tower">
			<h1>Dart Monkey</h1>
			<img src={DartMonkey000} alt="Dart Monkey 000"></img>
			<h2>Stats</h2>
			<p>
				Damage: {damage} Pierce: {pierce} Speed: {speed} Range: {range}
			</p>
			<p>
				p1: {p1} p2: {p2} p3: {p3}
			</p>
			<button
				onClick={() => {
					p1 >= 5 ? setP1(5) : setP1(p1 + 1);
					handleChange()
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					p1 <= 0 ? setP1(0) : setP1(p1 - 1);
					handleChange()
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					p2 >= 5 ? setP2(5) : setP2(p2 + 1);
					handleChange()
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					p3 >= 5 ? setP3(5) : setP3(p3 + 1);
					handleChange()
				}}
			>
				+
			</button>
		</div>
	);
}
