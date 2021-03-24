import { NavLink } from "react-router-dom";
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
import YellowRegrow from "../bloons/YellowRegrow.png";
import GreenCamo from "../bloons/GreenCamo.png";

export default function Rounds() {
	return (
		<div className="rounds">
			<h1>Rounds</h1>
			<ul>
				<li>
					<NavLink to="/rounds" exact activeClassName="active-link">
						Normal
					</NavLink>
				</li>
				<li>
					<NavLink to="/rounds/abr">ABR</NavLink>
				</li>
				<li>
					<NavLink to="/rounds/apopalypse">Apopalypse</NavLink>
				</li>
			</ul>
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th rowspan="2">Round</th>
							<th rowspan="2">
								RBE
								<img src={Red} alt="Red" id="tableheaderimg" />
							</th>
							<th colspan="3">
								Cash
								<img
									src={Coin}
									alt="Coin"
									id="tableheaderimg"
								/>
							</th>
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
						<tr>
							<td>22</td>
							<td>176</td>
							<td>176</td>
							<td>298</td>
							<td>4867</td>
							<td>
								16x
								<img src={White} alt="White" />
							</td>
						</tr>
						<tr>
							<td>23</td>
							<td>154</td>
							<td>154</td>
							<td>277</td>
							<td>5144</td>
							<td>
								7x
								<img src={Black} alt="Black" />
								&ensp;7x
								<img src={White} alt="White" />
							</td>
						</tr>
						<tr>
							<td>24</td>
							<td>43</td>
							<td>43</td>
							<td>167</td>
							<td>5311</td>
							<td>
								20x
								<img src={Blue} alt="Blue" />
								&ensp;1x
								<img src={GreenCamo} alt="GreenCamo" />
							</td>
						</tr>
						<tr>
							<td>25</td>
							<td>210</td>
							<td>210</td>
							<td>335</td>
							<td>5646</td>
							<td>
								25x
								<img src={YellowRegrow} alt="Yellow Regrow" />
								&ensp;10x
								<img src={Purple} alt="Purple" />
							</td>
						</tr>
						<tr>
							<td>26</td>
							<td>207</td>
							<td>207</td>
							<td>333</td>
							<td>5979</td>
							<td>
								23x
								<img src={Pink} alt="Pink" />
								&ensp;4x
								<img src={Zebra} alt="Zebra" />
							</td>
						</tr>
						<tr>
							<td>27</td>
							<td>535</td>
							<td>535</td>
							<td>662</td>
							<td>6641</td>
							<td>
								100x
								<img src={Red} alt="Red" />
								&ensp;60x
								<img src={Blue} alt="Blue" />
								&ensp;45x
								<img src={Green} alt="Green" />
								&ensp;45x
								<img src={Yellow} alt="Yellow" />
							</td>
						</tr>
						<tr>
							<td>28</td>
							<td>138</td>
							<td>138</td>
							<td>266</td>
							<td>6907</td>
							<td>
								6x
								<img src={Lead} alt="Lead" />
							</td>
						</tr>
						<tr>
							<td>29</td>
							<td>260</td>
							<td>260</td>
							<td>389</td>
							<td>7296</td>
							<td>
								50x
								<img src={Yellow} alt="Yellow" />
								&ensp;15x
								<img src={YellowRegrow} alt="Yellow Regrow" />
							</td>
						</tr>
						<tr>
							<td>30</td>
							<td>207</td>
							<td>207</td>
							<td>337</td>
							<td>7633</td>
							<td>
								9x
								<img src={Lead} alt="Lead" />
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th rowspan="2">Round</th>
							<th rowspan="2">
								RBE
								<img src={Red} alt="Red" id="tableheaderimg" />
							</th>
							<th>Pops</th>
							<th>Total</th>
							<th>Cumulative</th>
							<th rowspan="2">Bloons</th>
						</tr>
						<tr>
							<th colspan="3">
								Cash
								<img
									src={Coin}
									alt="Coin"
									id="tableheaderimg"
								/>
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
}
