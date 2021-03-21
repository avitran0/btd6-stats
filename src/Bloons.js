import Red from "./bloons/Red.png";
import Blue from "./bloons/Blue.png";
import Green from "./bloons/Green.png";
import Yellow from "./bloons/Yellow.png";
import Pink from "./bloons/Pink.png";

export default function Bloons() {
	return (
		<div className="bloons">
			<h1>Bloons</h1>
			<h2>Normal</h2>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>Health</th>
						<th>Total Cash</th>
						<th>Children</th>
						<th>Speed</th>
						<th>RBE</th>
						<th>Abilities</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><img src={Red} alt="Red" /></td>
						<td>1</td>
						<td>1</td>
						<td>none</td>
						<td>1</td>
						<td>1</td>
						<td>none</td>
					</tr>
					<tr>
						<td><img src={Blue} alt="Blue" /></td>
						<td>1</td>
						<td>2</td>
						<td><img src={Red} alt="Red" /></td>
						<td>1.4</td>
						<td>2</td>
						<td>none</td>
					</tr>
					<tr>
						<td><img src={Green} alt="Green" /></td>
						<td>1</td>
						<td>3</td>
						<td><img src={Blue} alt="Blue" /></td>
						<td>1.8</td>
						<td>3</td>
						<td>none</td>
					</tr>
					<tr>
						<td><img src={Yellow} alt="Yellow" /></td>
						<td>1</td>
						<td>4</td>
						<td><img src={Green} alt="Green" /></td>
						<td>3.2</td>
						<td>4</td>
						<td>none</td>
					</tr>
					<tr>
						<td><img src={Pink} alt="Pink" /></td>
						<td>1</td>
						<td>5</td>
						<td><img src={Yellow} alt="Yellow" /></td>
						<td>3.5</td>
						<td>5</td>
						<td>none</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th>Type</th>
						<th>Health</th>
						<th>Cash</th>
						<th>Children</th>
						<th>Speed</th>
						<th>RBE</th>
						<th>Abilities</th>
					</tr>
				</tfoot>
			</table>
			<h2>Fortified</h2>
		</div>
	);
}