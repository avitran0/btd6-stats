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
import ZebraRegrow from "../bloons/ZebraRegrow.png";
import RedCamo from "../bloons/RedCamo.png";
import YellowCamo from "../bloons/YellowCamo.png";
import Rainbow from "../bloons/Rainbow.png";
import GreenRegrowCamo from "../bloons/GreenRegrowCamo.png";
import WhiteCamo from "../bloons/WhiteCamo.png";
import Ceramic from "../bloons/Ceramic.png";
import RainbowRegrow from "../bloons/RainbowRegrow.png";
import MOAB from "../bloons/MOAB.png";
import RainbowCamo from "../bloons/RainbowCamo.png";
import PurpleCamo from "../bloons/PurpleCamo.png";
import LeadFortified from "../bloons/LeadFortified.png";
import CeramicFortified from "../bloons/CeramicFortified.png";
import PinkCamo from "../bloons/PinkCamo.png";
import PinkRegrow from "../bloons/PinkRegrow.png";
import PurpleRegrowCamo from "../bloons/PurpleRegrowCamo.png";

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
						<tr>
							<td>31</td>
							<td>406</td>
							<td>406</td>
							<td>537</td>
							<td>8170</td>
							<td>
								8x
								<img src={Black} alt="Black" />
								&ensp;8x
								<img src={White} alt="White" />
								&ensp;8x
								<img src={Zebra} alt="Zebra" />
								&ensp;2x
								<img src={ZebraRegrow} alt="Zebra Regrow" />
							</td>
						</tr>
						<tr>
							<td>32</td>
							<td>545</td>
							<td>545</td>
							<td>627</td>
							<td>8797</td>
							<td>
								15x
								<img src={Black} alt="Black" />
								&ensp;20x
								<img src={White} alt="White" />
								&ensp;10x
								<img src={Purple} alt="Purple" />
							</td>
						</tr>
						<tr>
							<td>33</td>
							<td>72</td>
							<td>72</td>
							<td>205</td>
							<td>9002</td>
							<td>
								20x
								<img src={RedCamo} alt="Red Camo" />
								&ensp;13x
								<img src={YellowCamo} alt="Yellow Camo" />
							</td>
						</tr>
						<tr>
							<td>34</td>
							<td>778</td>
							<td>778</td>
							<td>912</td>
							<td>9914</td>
							<td>
								160x
								<img src={Yellow} alt="Yellow" />
								&ensp;6x
								<img src={Zebra} alt="Zebra" />
							</td>
						</tr>
						<tr>
							<td>35</td>
							<td>1015</td>
							<td>1015</td>
							<td>1150</td>
							<td>11064</td>
							<td>
								35x
								<img src={Pink} alt="Pink" />
								&ensp;30x
								<img src={Black} alt="Black" />
								&ensp;25x
								<img src={White} alt="White" />
								&ensp;5x
								<img src={Rainbow} alt="Rainbow" />
							</td>
						</tr>
						<tr>
							<td>36</td>
							<td>760</td>
							<td>760</td>
							<td>896</td>
							<td>11960</td>
							<td>
								140x
								<img src={Pink} alt="Pink" />
								&ensp;20x
								<img src={GreenRegrowCamo} alt="Green Regrow Camo" />
							</td>
						</tr>
						<tr>
							<td>37</td>
							<td>1202</td>
							<td>1202</td>
							<td>1339</td>
							<td>13299</td>
							<td>
								25x
								<img src={Black} alt="Black" />
								&ensp;25x
								<img src={White} alt="White" />
								&ensp;7x
								<img src={WhiteCamo} alt="White Camo" />
								&ensp;10x
								<img src={Zebra} alt="Zebra" />
								&ensp;15x
								<img src={Lead} alt="Lead" />
							</td>
						</tr>
						<tr>
							<td>38</td>
							<td>1157</td>
							<td>1139</td>
							<td>1277</td>
							<td>14576</td>
							<td>
								42x
								<img src={Pink} alt="Pink" />
								&ensp;17x
								<img src={White} alt="White" />
								&ensp;10x
								<img src={Zebra} alt="Zebra" />
								&ensp;14x
								<img src={Lead} alt="Lead" />
								&ensp;2x
								<img src={Ceramic} alt="Ceramic" />
							</td>
						</tr>
						<tr>
							<td>39</td>
							<td>1620</td>
							<td>1620</td>
							<td>1759</td>
							<td>16335</td>
							<td>
								10x
								<img src={Black} alt="Black" />
								&ensp;10x
								<img src={White} alt="White" />
								&ensp;20x
								<img src={Zebra} alt="Zebra" />
								&ensp;18x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;2x
								<img src={RainbowRegrow} alt="Rainbow Regrow" />
							</td>
						</tr>
						<tr>
							<td>40</td>
							<td>616</td>
							<td>381</td>
							<td>521</td>
							<td>16856</td>
							<td>
								1x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>41</td>
							<td>2040</td>
							<td>2040</td>
							<td>2181</td>
							<td>19037</td>
							<td>
								60x
								<img src={Black} alt="Black" />
								&ensp;60x
								<img src={Zebra} alt="Zebra" />
							</td>
						</tr>
						<tr>
							<td>42</td>
							<td>517</td>
							<td>517</td>
							<td>659</td>
							<td>19696</td>
							<td>
								6x
								<img src={RainbowRegrow} alt="Rainbow Regrow" />
								&ensp;5x
								<img src={RainbowCamo} alt="Rainbow Camo" />
							</td>
						</tr>
						<tr>
							<td>43</td>
							<td>1198</td>
							<td>1135</td>
							<td>1278</td>
							<td>20974</td>
							<td>
								10x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;7x
								<img src={Ceramic} alt="Ceramic" />
							</td>
						</tr>
						<tr>
							<td>44</td>
							<td>1150</td>
							<td>1150</td>
							<td>1294</td>
							<td>22268</td>
							<td>
								50x
								<img src={Zebra} alt="Zebra" />
							</td>
						</tr>
						<tr>
							<td>45</td>
							<td>2289</td>
							<td>2289</td>
							<td>2422</td>
							<td>24690</td>
							<td>
								180x
								<img src={Pink} alt="Pink" />
								&ensp;10x
								<img src={PurpleCamo} alt="Purple Camo" />
								&ensp;4x
								<img src={LeadFortified} alt="Lead Fortified" />
								&ensp;25x
								<img src={Rainbow} alt="Rainbow" />
							</td>
						</tr>
						<tr>
							<td>46</td>
							<td>684</td>
							<td>570</td>
							<td>716</td>
							<td>25406</td>
							<td>
								6x
								<img src={CeramicFortified} alt="Ceramic Fortified" />
							</td>
						</tr>
						<tr>
							<td>47</td>
							<td>1598</td>
							<td>1490</td>
							<td>1637</td>
							<td>27043</td>
							<td>
								70x
								<img src={PinkCamo} alt="Pink Camo" />
								&ensp;12x
								<img src={Ceramic} alt="Ceramic" />
							</td>
						</tr>
						<tr>
							<td>48</td>
							<td>2752</td>
							<td>2695</td>
							<td>2843</td>
							<td>29886</td>
							<td>
								40x
								<img src={PinkRegrow} alt="Pink Regrow" />
								&ensp;30x
								<img src={PurpleRegrowCamo} alt="Purple Regrow Camo" />
								&ensp;40x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;3x
								<img src={CeramicFortified} alt="Ceramic Fortified" />
							</td>
						</tr>
						<tr>
							<td>49</td>
							<td>4771</td>
							<td>4609</td>
							<td>4758</td>
							<td>34644</td>
							<td>
								343x
								<img src={Green} alt="Green" />
								&ensp;20x
								<img src={Zebra} alt="Zebra" />
								&ensp;20x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;10x
								<img src={RainbowRegrow} alt="Rainbow Regrow" />
								&ensp;18x
								<img src={Ceramic} alt="Ceramic" />
							</td>
						</tr>
						<tr>
							<td>50</td>
							<td>3540</td>
							<td>2866</td>
							<td>3016</td>
							<td>37660</td>
							<td>
								20x
								<img src={Red} alt="Red" />
								&ensp;8x
								<img src={LeadFortified} alt="Lead Fortified" />
								&ensp;20x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;2x&nbsp;
								<img src={MOAB} alt="MOAB" />
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
