import Lives from "../misc/Lives.png";
import Coin from "../misc/Coin.png";
import Red from "../bloons/Red.png";
import Blue from "../bloons/Blue.png";
import Green from "../bloons/Green.png";
import Yellow from "../bloons/Yellow.png";
import Pink from "../bloons/Pink.png";
import Black from "../bloons/Black.png";
import Purple from "../bloons/Purple.png";
import White from "../bloons/White.png";
import Lead from "../bloons/Lead.png";
import Zebra from "../bloons/Zebra.png";
import Rainbow from "../bloons/Rainbow.png";
import Ceramic from "../bloons/Ceramic.png";
import MOAB from "../bloons/MOAB.png";
import BFB from "../bloons/BFB.png";
import ZOMG from "../bloons/ZOMG.png";
import DDT from "../bloons/DDT.png";
import BAD from "../bloons/BAD.png";
import CeramicRegrowCamo from "../bloons/CeramicRegrowCamo.png";
import LeadFortified from "../bloons/LeadFortified.png";
import CeramicFortified from "../bloons/CeramicFortified.png";
import MOABFortified from "../bloons/MOABFortified.png";
import BFBFortified from "../bloons/BFBFortified.png";
import ZOMGFortified from "../bloons/ZOMGFortified.png";
import DDTFortified from "../bloons/DDTFortified.png";
import CeramicRegrowFortifiedCamo from "../bloons/CeramicRegrowFortifiedCamo.png";
import BADFortified from "../bloons/BADFortified.png";

export default function Bloons() {
	return (
		<div className="bloons">
			<h1>Bloons</h1>
			<h2>Normal</h2>
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>
								Health
								<img
									src={Lives}
									alt="Lives"
									id="tableheaderimg"
								/>
							</th>
							<th>
								Total Cash
								<img
									src={Coin}
									alt="Coin"
									id="tableheaderimg"
								/>
							</th>
							<th>Children</th>
							<th>Speed</th>
							<th>
								RBE
								<img src={Red} alt="Red" id="tableheaderimg" />
							</th>
							<th>Abilities</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<img src={Red} alt="Red" />
							</td>
							<td>1</td>
							<td>1</td>
							<td>none</td>
							<td>1</td>
							<td>1</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={Blue} alt="Blue" />
							</td>
							<td>1</td>
							<td>2</td>
							<td>
								<img src={Red} alt="Red" />
							</td>
							<td>1.4</td>
							<td>2</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={Green} alt="Green" />
							</td>
							<td>1</td>
							<td>3</td>
							<td>
								<img src={Blue} alt="Blue" />
							</td>
							<td>1.8</td>
							<td>3</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={Yellow} alt="Yellow" />
							</td>
							<td>1</td>
							<td>4</td>
							<td>
								<img src={Green} alt="Green" />
							</td>
							<td>3.2</td>
							<td>4</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={Pink} alt="Pink" />
							</td>
							<td>1</td>
							<td>5</td>
							<td>
								<img src={Yellow} alt="Yellow" />
							</td>
							<td>3.5</td>
							<td>5</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={Black} alt="Black" />
							</td>
							<td>1</td>
							<td>11</td>
							<td>
								2x
								<img src={Pink} alt="Pink" />
							</td>
							<td>1.8</td>
							<td>11</td>
							<td>- Immune to explosions</td>
						</tr>
						<tr>
							<td>
								<img src={Purple} alt="Purple" />
							</td>
							<td>1</td>
							<td>11</td>
							<td>
								2x
								<img src={Pink} alt="Pink" />
							</td>
							<td>3.0</td>
							<td>11</td>
							<td>- Immune to fire, energy and plasma</td>
						</tr>
						<tr>
							<td>
								<img src={White} alt="White" />
							</td>
							<td>1</td>
							<td>11</td>
							<td>
								2x
								<img src={Pink} alt="Pink" />
							</td>
							<td>2.0</td>
							<td>11</td>
							<td>- Immune to freezing</td>
						</tr>
						<tr>
							<td>
								<img src={Lead} alt="Lead" />
							</td>
							<td>1</td>
							<td>23</td>
							<td>
								2x
								<img src={Black} alt="Black" />
							</td>
							<td>1</td>
							<td>23</td>
							<td>- Immune to sharpness (Darts)</td>
						</tr>
						<tr>
							<td>
								<img src={Zebra} alt="Zebra" />
							</td>
							<td>1</td>
							<td>23</td>
							<td>
								<img src={Black} alt="Black" />
								&ensp;
								<img src={White} alt="White" />
							</td>
							<td>1.8</td>
							<td>23</td>
							<td>- Immune to explosions and freezing</td>
						</tr>
						<tr>
							<td>
								<img src={Rainbow} alt="Rainbow" />
							</td>
							<td>1</td>
							<td>47</td>
							<td>
								2x
								<img src={Zebra} alt="Zebra" />
							</td>
							<td>3.5</td>
							<td>47</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={Ceramic} alt="Ceramic" />
							</td>
							<td>10</td>
							<td>95</td>
							<td>
								2x
								<img src={Rainbow} alt="Rainbow" />
							</td>
							<td>2.5</td>
							<td>104</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={MOAB} alt="MOAB" />
							</td>
							<td>200</td>
							<td>381</td>
							<td>
								4x
								<img src={Ceramic} alt="Ceramic" />
							</td>
							<td>1</td>
							<td>616</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={BFB} alt="BFB" />
							</td>
							<td>700</td>
							<td>1525</td>
							<td>
								4x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
							<td>0.25</td>
							<td>3164</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={ZOMG} alt="ZOMG" />
							</td>
							<td>4000</td>
							<td>6101</td>
							<td>
								4x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
							<td>0.18</td>
							<td>16656</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={DDT} alt="DDT" />
							</td>
							<td>400</td>
							<td>381</td>
							<td>
								4x
								<img
									src={CeramicRegrowCamo}
									alt="Ceramic Regrow Camo"
								/>
							</td>
							<td>2.75</td>
							<td>816</td>
							<td>
								- Immune to explosions and sharpness
								<br />- Camo
							</td>
						</tr>
						<tr>
							<td>
								<img src={BAD} alt="BAD" />
							</td>
							<td>20000</td>
							<td>13346</td>
							<td>
								2x&nbsp;
								<img src={ZOMG} alt="ZOMG" />
								&ensp; 3x&nbsp;
								<img src={DDT} alt="DDT" />
							</td>
							<td>0.18</td>
							<td>55760</td>
							<td>
								- Immune to explosions and sharpness
								<br />- Camo
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th>Type</th>
							<th>
								Health
								<img
									src={Lives}
									alt="Lives"
									id="tableheaderimg"
								/>
							</th>
							<th>
								Total Cash
								<img
									src={Coin}
									alt="Coin"
									id="tableheaderimg"
								/>
							</th>
							<th>Children</th>
							<th>Speed</th>
							<th>
								RBE
								<img src={Red} alt="Red" id="tableheaderimg" />
							</th>
							<th>Abilities</th>
						</tr>
					</tfoot>
				</table>
			</div>
			<h2>Fortified</h2>
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Type</th>
							<th>
								Health
								<img
									src={Lives}
									alt="Lives"
									id="tableheaderimg"
								/>
							</th>
							<th>
								Total Cash
								<img
									src={Coin}
									alt="Coin"
									id="tableheaderimg"
								/>
							</th>
							<th>Children</th>
							<th>Speed</th>
							<th>
								RBE
								<img src={Red} alt="Red" id="tableheaderimg" />
							</th>
							<th>Abilities</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<img src={LeadFortified} alt="Lead Fortified" />
							</td>
							<td>4</td>
							<td>23</td>
							<td>
								2x
								<img src={Black} alt="Black" />
							</td>
							<td>1</td>
							<td>26</td>
							<td>- Immune to sharpness (Darts)</td>
						</tr>
						<tr>
							<td>
								<img
									src={CeramicFortified}
									alt="Ceramic Fortified"
								/>
							</td>
							<td>20</td>
							<td>95</td>
							<td>
								2x
								<img src={Rainbow} alt="Rainbow" />
							</td>
							<td>2.5</td>
							<td>114</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={MOABFortified} alt="MOAB Fortified" />
							</td>
							<td>400</td>
							<td>381</td>
							<td>
								4x
								<img
									src={CeramicFortified}
									alt="Ceramic Fortified"
								/>
							</td>
							<td>1</td>
							<td>856</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={BFBFortified} alt="BFB Fortified" />
							</td>
							<td>1400</td>
							<td>1525</td>
							<td>
								4x&nbsp;
								<img src={MOABFortified} alt="MOAB Fortified" />
							</td>
							<td>0.25</td>
							<td>4824</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={ZOMGFortified} alt="ZOMG Fortified" />
							</td>
							<td>8000</td>
							<td>6101</td>
							<td>
								4x&nbsp;
								<img src={BFBFortified} alt="BFB Fortified" />
							</td>
							<td>0.18</td>
							<td>27296</td>
							<td>none</td>
						</tr>
						<tr>
							<td>
								<img src={DDTFortified} alt="DDT Fortified" />
							</td>
							<td>800</td>
							<td>381</td>
							<td>
								4x
								<img
									src={CeramicRegrowFortifiedCamo}
									alt="Ceramic Regrow Fortified Camo"
								/>
							</td>
							<td>2.75</td>
							<td>1256</td>
							<td>
								- Immune to explosions and sharpness
								<br />- Camo
							</td>
						</tr>
						<tr>
							<td>
								<img src={BADFortified} alt="BAD Fortified" />
							</td>
							<td>40000</td>
							<td>13346</td>
							<td>
								2x&nbsp;
								<img src={ZOMGFortified} alt="ZOMG Fortified" />
								&ensp;3x&nbsp;
								<img src={DDTFortified} alt="DDT Fortified" />
							</td>
							<td>0.18</td>
							<td>98360</td>
							<td>
								- Immune to explosions and sharpness
								<br />- Camo
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th>Type</th>
							<th>
								Health
								<img
									src={Lives}
									alt="Lives"
									id="tableheaderimg"
								/>
							</th>
							<th>
								Total Cash
								<img
									src={Coin}
									alt="Coin"
									id="tableheaderimg"
								/>
							</th>
							<th>Children</th>
							<th>Speed</th>
							<th>
								RBE
								<img src={Red} alt="Red" id="tableheaderimg" />
							</th>
							<th>Abilities</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}
