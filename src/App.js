import "./App.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import BTD6Logo from "./misc/BTD6Logo.png";

//Towers
import DartMonkey from "./towers/DartMonkey.png";
import BoomerangMonkey from "./towers/BoomerangMonkey.png";
import BombShooter from "./towers/BombShooter.png";
import TackShooter from "./towers/TackShooter.png";
import IceMonkey from "./towers/IceMonkey.png";
import GlueGunner from "./towers/GlueGunner.png";
import SniperMonkey from "./towers/SniperMonkey.png";
import MonkeySub from "./towers/MonkeySub.png";
import MonkeyBuccaneer from "./towers/MonkeyBuccaneer.png";
import MonkeyAce from "./towers/MonkeyAce.png";
import HeliPilot from "./towers/HeliPilot.png";
import MortarMonkey from "./towers/MortarMonkey.png";
import DartlingGunner from "./towers/DartlingGunner.png";
import WizardMonkey from "./towers/WizardMonkey.png";
import SuperMonkey from "./towers/SuperMonkey.png";
import NinjaMonkey from "./towers/NinjaMonkey.png";
import Alchemist from "./towers/Alchemist.png";
import Druid from "./towers/Druid.png";
import BananaFarm from "./towers/BananaFarm.png";
import SpikeFactory from "./towers/SpikeFactory.png";
import MonkeyVillage from "./towers/MonkeyVillage.png";
import MonkeyEngineer from "./towers/MonkeyEngineer.png";

//Heroes
import Quincy from "./heroes/Quincy.png";
import Gwendolin from "./heroes/Gwendolin.png";
import StrikerJones from "./heroes/StrikerJones.png";
import ObynGreenfoot from "./heroes/ObynGreenfoot.png";
import CaptainChurchill from "./heroes/CaptainChurchill.png";
import Benjamin from "./heroes/Benjamin.png";
import Ezili from "./heroes/Ezili.png";
import PatFusty from "./heroes/PatFusty.png";
import Adora from "./heroes/Adora.png";
import AdmiralBrickell from "./heroes/AdmiralBrickell.png";
import Etienne from "./heroes/Etienne.png";
import Sauda from "./heroes/Sauda.png";

//Bloons
import Lives from "./misc/Lives.png";
import Coin from "./misc/Coin.png";
import Red from "./bloons/Red.png";
import Blue from "./bloons/Blue.png";
import Green from "./bloons/Green.png";
import Yellow from "./bloons/Yellow.png";
import Pink from "./bloons/Pink.png";
import Black from "./bloons/Black.png";
import Purple from "./bloons/Purple.png";
import White from "./bloons/White.png";
import Lead from "./bloons/Lead.png";
import Zebra from "./bloons/Zebra.png";
import Rainbow from "./bloons/Rainbow.png";
import Ceramic from "./bloons/Ceramic.png";
import MOAB from "./bloons/MOAB.png";
import BFB from "./bloons/BFB.png";
import ZOMG from "./bloons/ZOMG.png";
import DDT from "./bloons/DDT.png";
import BAD from "./bloons/BAD.png";
import CeramicRegrowCamo from "./bloons/CeramicRegrowCamo.png";
import LeadFortified from "./bloons/LeadFortified.png";
import CeramicFortified from "./bloons/CeramicFortified.png";
import MOABFortified from "./bloons/MOABFortified.png";
import BFBFortified from "./bloons/BFBFortified.png";
import ZOMGFortified from "./bloons/ZOMGFortified.png";
import DDTFortified from "./bloons/DDTFortified.png";
import CeramicRegrowFortifiedCamo from "./bloons/CeramicRegrowFortifiedCamo.png";
import BADFortified from "./bloons/BADFortified.png";
import YellowRegrow from "./bloons/YellowRegrow.png";

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<nav className="navbar">
						<div>
							<img src={BTD6Logo} alt="cock" />
						</div>
						<ul>
							<li>
								<NavLink to="/" exact activeClassName="active-link">Home</NavLink>
							</li>
							<li>
								<NavLink to="/towers" activeClassName="active-link">Towers</NavLink>
							</li>
							<li>
								<NavLink to="/heroes" activeClassName="active-link">Heroes</NavLink>
							</li>
							<li>
								<NavLink to="/bloons" activeClassName="active-link">Bloons</NavLink>
							</li>
							<li>
								<NavLink to="/rounds" activeClassName="active-link">Rounds</NavLink>
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
					<Route path="/rounds" exact component={Rounds} />
					<Route path="/rounds/abr" component={ABR} />
					<Route path="/rounds/apopalypse" component={Apopalypse} />
				</AnimatedSwitch>
			</div>
		</Router>
	);
}

function Home() {
	return (
		<div className="home">
			<h1>BTD6 Stats</h1>
			<p>This is a collection of all kinds of stats for BTD6</p>
			<p>work in progress</p>
		</div>
	);
}

function Towers() {
	return (
		<div className="towers">
			<h1>Towers</h1>
			<h2>Primary</h2>
			<div className="tower-grid">
				<div className="grid-container">
					<Link to="/" id="dart-monkey">
						<img src={DartMonkey} alt="Dart Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="boomerang-monkey">
						<img src={BoomerangMonkey} alt="Boomerang Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="bomb-shooter">
						<img src={BombShooter} alt="Bomb Shooter" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="tack-shooter">
						<img src={TackShooter} alt="Tack Shooter" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="ice-monkey">
						<img src={IceMonkey} alt="Ice Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="glue-gunner">
						<img src={GlueGunner} alt="Glue Gunner" />
					</Link>
				</div>
			</div>
			<h2>Military</h2>
			<div className="tower-grid">
				<div className="grid-container">
					<Link to="/" id="sniper-monkey">
						<img src={SniperMonkey} alt="Sniper Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-sub">
						<img src={MonkeySub} alt="Monkey Sub" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-buccaneer">
						<img src={MonkeyBuccaneer} alt="Monkey Buccaneer" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-ace">
						<img src={MonkeyAce} alt="Monkey Ace" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="heli-pilot">
						<img src={HeliPilot} alt="Heli Pilot" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="mortar-monkey">
						<img src={MortarMonkey} alt="Mortar Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="dartling-gunner">
						<img src={DartlingGunner} alt="Dartling Gunner" />
					</Link>
				</div>
			</div>
			<h2>Magic</h2>
			<div className="tower-grid">
				<div className="grid-container">
					<Link to="/" id="wizard-monkey">
						<img src={WizardMonkey} alt="Wizard Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="super-monkey">
						<img src={SuperMonkey} alt="Super Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="ninja-monkey">
						<img src={NinjaMonkey} alt="Ninja Monkey" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="alchemist">
						<img src={Alchemist} alt="Alchemist" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="druid">
						<img src={Druid} alt="Druid" />
					</Link>
				</div>
			</div>
			<h2>Support</h2>
			<div className="tower-grid">
				<div className="grid-container">
					<Link to="/" id="banana-farm">
						<img src={BananaFarm} alt="Banana Farm" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="spike-factory">
						<img src={SpikeFactory} alt="Spike Factory" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-village">
						<img src={MonkeyVillage} alt="Monkey Village" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="monkey-engineer">
						<img src={MonkeyEngineer} alt="Monkey Engineer" />
					</Link>
				</div>
			</div>
		</div>
	);
}

function Heroes() {
	return (
		<div className="heroes">
			<h1>Heroes</h1>
			<div className="tower-grid">
				<div className="grid-container">
					<Link to="/" id="quincy">
						<img src={Quincy} alt="Quincy" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="gwendolin">
						<img src={Gwendolin} alt="Gwendolin" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="striker-jones">
						<img src={StrikerJones} alt="Striker Jones" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="obyn-greenfoot">
						<img src={ObynGreenfoot} alt="Obyn Greenfoot" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="captain-churchill">
						<img src={CaptainChurchill} alt="Captain Churchill" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="benjamin">
						<img src={Benjamin} alt="Benjamin" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="ezili">
						<img src={Ezili} alt="Ezili" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="pat-fusty">
						<img src={PatFusty} alt="Pat Fusty" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="adora">
						<img src={Adora} alt="Adora" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="admiral-brickell">
						<img src={AdmiralBrickell} alt="Admiral Brickell" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="etienne">
						<img src={Etienne} alt="Etienne" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="sauda">
						<img src={Sauda} alt="Sauda" />
					</Link>
				</div>
			</div>
		</div>
	);
}

function Bloons() {
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
								4x
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
								4x
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
								2x
								<img src={ZOMG} alt="ZOMG" />
								&ensp; 3x
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
								4x
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
								4x
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
								2x
								<img src={ZOMGFortified} alt="ZOMG Fortified" />
								&ensp;3x
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

function Rounds() {
	return (
		<div className="rounds">
			<h1>Rounds</h1>
			<ul>
				<li><NavLink to="/rounds" exact activeClassName="active-link">Normal</NavLink></li>
				<li><NavLink to="/rounds/abr">ABR</NavLink></li>
				<li><NavLink to="/rounds/apopalypse">Apopalypse</NavLink></li>
			</ul>
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th rowspan="2">Round</th>
							<th rowspan="2">RBE<img src={Red} alt="Red" id="tableheaderimg" /></th>
							<th colspan="3">Cash<img src={Coin} alt="Coin" id="tableheaderimg" /></th>
							<th rowspan="2">Bloons</th>
						</tr>
						<tr>
							<th>Pops</th>
							<th>Total</th>
							<th>Cumulative</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>20</td>
							<td>20</td>
							<td>121</td>
							<td>121</td>
							<td>
								20x
								<img src={Red} alt="Red" />
							</td>
						</tr>
						<tr>
							<td>2</td>
							<td>35</td>
							<td>35</td>
							<td>137</td>
							<td>258</td>
							<td>
								35x
								<img src={Red} alt="Red" />
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>35</td>
							<td>35</td>
							<td>138</td>
							<td>396</td>
							<td>
								25x
								<img src={Red} alt="Red" />
								&ensp;5x
								<img src={Blue} alt="Blue" />
							</td>
						</tr>
						<tr>
							<td>4</td>
							<td>71</td>
							<td>71</td>
							<td>175</td>
							<td>571</td>
							<td>
								35x
								<img src={Red} alt="Red" />
								&ensp;18x
								<img src={Blue} alt="Blue" />
							</td>
						</tr>
						<tr>
							<td>5</td>
							<td>59</td>
							<td>59</td>
							<td>164</td>
							<td>735</td>
							<td>
								5x
								<img src={Red} alt="Red" />
								&ensp;27x
								<img src={Blue} alt="Blue" />
							</td>
						</tr>
						<tr>
							<td>6</td>
							<td>57</td>
							<td>57</td>
							<td>163</td>
							<td>898</td>
							<td>
								15x
								<img src={Red} alt="Red" />
								&ensp;15x
								<img src={Blue} alt="Blue" />
								&ensp;4x
								<img src={Green} alt="Green" />
							</td>
						</tr>
						<tr>
							<td>7</td>
							<td>75</td>
							<td>75</td>
							<td>182</td>
							<td>1080</td>
							<td>
								20x
								<img src={Red} alt="Red" />
								&ensp;20x
								<img src={Blue} alt="Blue" />
								&ensp;5x
								<img src={Green} alt="Green" />
							</td>
						</tr>
						<tr>
							<td>8</td>
							<td>92</td>
							<td>92</td>
							<td>200</td>
							<td>1280</td>
							<td>
								10x
								<img src={Red} alt="Red" />
								&ensp;20x
								<img src={Blue} alt="Blue" />
								&ensp;14x
								<img src={Green} alt="Green" />
							</td>
						</tr>
						<tr>
							<td>9</td>
							<td>90</td>
							<td>90</td>
							<td>199</td>
							<td>1479</td>
							<td>
								30x
								<img src={Green} alt="Green" />
							</td>
						</tr>
						<tr>
							<td>10</td>
							<td>204</td>
							<td>204</td>
							<td>314</td>
							<td>1793</td>
							<td>
								102x
								<img src={Blue} alt="Blue" />
							</td>
						</tr>
						<tr>
							<td>11</td>
							<td>78</td>
							<td>78</td>
							<td>189</td>
							<td>1982</td>
							<td>
								6x
								<img src={Red} alt="Red" />
								&ensp;12x
								<img src={Blue} alt="Blue" />
								&ensp;12x
								<img src={Green} alt="Green" />
								&ensp;3x
								<img src={Yellow} alt="Yellow" />
							</td>
						</tr>
						<tr>
							<td>12</td>
							<td>80</td>
							<td>80</td>
							<td>192</td>
							<td>2174</td>
							<td>
								15x
								<img src={Blue} alt="Blue" />
								&ensp;10x
								<img src={Green} alt="Green" />
								&ensp;5x
								<img src={Yellow} alt="Yellow" />
							</td>
						</tr>
						<tr>
							<td>13</td>
							<td>169</td>
							<td>169</td>
							<td>282</td>
							<td>2456</td>
							<td>
								50x
								<img src={Blue} alt="Blue" />
								&ensp;23x
								<img src={Green} alt="Green" />
							</td>
						</tr>
						<tr>
							<td>14</td>
							<td>145</td>
							<td>145</td>
							<td>259</td>
							<td>2715</td>
							<td>
								49x
								<img src={Red} alt="Red" />
								&ensp;15x
								<img src={Blue} alt="Blue" />
								&ensp;10x
								<img src={Green} alt="Green" />
								&ensp;9x
								<img src={Yellow} alt="Yellow" />
							</td>
						</tr>
						<tr>
							<td>15</td>
							<td>151</td>
							<td>151</td>
							<td>266</td>
							<td>2981</td>
							<td>
								20x
								<img src={Red} alt="Red" />
								&ensp;15x
								<img src={Blue} alt="Blue" />
								&ensp;12x
								<img src={Green} alt="Green" />
								&ensp;10x
								<img src={Yellow} alt="Yellow" />
								&ensp;5x
								<img src={Pink} alt="Pink" />
							</td>
						</tr>
						<tr>
							<td>16</td>
							<td>152</td>
							<td>152</td>
							<td>268</td>
							<td>3249</td>
							<td>
								40x
								<img src={Green} alt="Green" />
								&ensp;8x
								<img src={Yellow} alt="Yellow" />
							</td>
						</tr>
						<tr>
							<td>17</td>
							<td>48</td>
							<td>48</td>
							<td>165</td>
							<td>3414</td>
							<td>
								12x
								<img src={YellowRegrow} alt="Yellow Regrow" />
							</td>
						</tr>
						<tr>
							<td>18</td>
							<td>240</td>
							<td>240</td>
							<td>358</td>
							<td>3772</td>
							<td>
								80x
								<img src={Green} alt="Green" />
							</td>
						</tr>
						<tr>
							<td>19</td>
							<td>141</td>
							<td>141</td>
							<td>260</td>
							<td>4032</td>
							<td>
								10x
								<img src={Green} alt="Green" />
								&ensp;4x
								<img src={Yellow} alt="Yellow" />
								&ensp;5x
								<img src={YellowRegrow} alt="Yellow Regrow" />
								&ensp;15x
								<img src={Pink} alt="Pink" />
							</td>
						</tr>
						<tr>
							<td>20</td>
							<td>66</td>
							<td>66</td>
							<td>186</td>
							<td>4218</td>
							<td>
								6x
								<img src={Black} alt="Black" />
							</td>
						</tr>
						<tr>
							<td>21</td>
							<td>230</td>
							<td>230</td>
							<td>351</td>
							<td>4569</td>
							<td>
								40x
								<img src={Yellow} alt="Yellow" />
								&ensp;14x
								<img src={Pink} alt="Pink" />
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th rowspan="2">Round</th>
							<th rowspan="2">RBE<img src={Red} alt="Red" id="tableheaderimg" /></th>
							<th>Pops</th>
							<th>Total</th>
							<th>Cumulative</th>
							<th rowspan="2">Bloons</th>
						</tr>
						<tr>
							<th colspan="3">Cash<img src={Coin} alt="Coin" id="tableheaderimg" /></th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}

function ABR() {
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

function Apopalypse() {
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

export default App;
