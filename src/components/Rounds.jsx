import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
import CeramicCamo from "../bloons/CeramicCamo.png";
import LeadCamo from "../bloons/LeadCamo.png";
import CeramicRegrow from "../bloons/CeramicRegrow.png";
import BFB from "../bloons/BFB.png";
import RainbowRegrowCamo from "../bloons/RainbowRegrowCamo.png";
import MOABFortified from "../bloons/MOABFortified.png";
import CeramicRegrowFortifiedCamo from "../bloons/CeramicRegrowFortifiedCamo.png";
import BlackRegrow from "../bloons/BlackRegrow.png";
import WhiteRegrowCamo from "../bloons/WhiteRegrowCamo.png";
import BFBFortified from "../bloons/BFBFortified.png";
import ZOMG from "../bloons/ZOMG.png";

export default function Rounds() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: "easeInOut", duration: 0.2 }}
			className="rounds"
		>
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
							<th rowSpan="2">Round</th>
							<th rowSpan="2">
								RBE
								<img src={Red} alt="Red" id="tableheaderimg" />
							</th>
							<th colSpan="3">
								Cash
								<img src={Coin} alt="Coin" id="tableheaderimg" />
							</th>
							<th rowSpan="2">Bloons</th>
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
							<td>771</td>
							<td>771</td>
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
							<td>908</td>
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
							<td>1046</td>
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
							<td>1221</td>
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
							<td>1385</td>
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
							<td>1548</td>
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
							<td>1730</td>
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
							<td>1930</td>
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
							<td>2129</td>
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
							<td>2443</td>
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
							<td>2632</td>
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
							<td>2824</td>
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
							<td>3106</td>
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
							<td>3365</td>
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
							<td>3631</td>
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
							<td>3899</td>
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
							<td>4064</td>
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
							<td>4422</td>
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
							<td>4682</td>
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
							<td>4868</td>
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
							<td>5219</td>
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
							<td>5517</td>
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
							<td>5794</td>
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
							<td>6296</td>
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
							<td>6629</td>
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
							<td>7291</td>
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
							<td>7557</td>
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
							<td>7946</td>
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
							<td>8283</td>
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
							<td>8820</td>
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
							<td>9447</td>
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
							<td>9652</td>
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
							<td>10564</td>
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
							<td>11714</td>
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
							<td>12610</td>
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
							<td>13949</td>
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
							<td>15226</td>
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
							<td>16985</td>
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
							<td>17506</td>
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
							<td>19687</td>
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
							<td>20346</td>
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
							<td>21624</td>
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
							<td>22918</td>
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
							<td>25340</td>
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
							<td>26056</td>
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
							<td>27693</td>
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
							<td>30536</td>
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
							<td>35294</td>
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
							<td>38310</td>
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
						<tr>
							<td>51</td>
							<td>2030</td>
							<td>948</td>
							<td>1023</td>
							<td>39333</td>
							<td>
								10x
								<img src={RainbowRegrow} alt="Rainbow Regrow" />
								&ensp;15x
								<img src={CeramicCamo} alt="Ceramic Camo" />
							</td>
						</tr>
						<tr>
							<td>52</td>
							<td>3447</td>
							<td>1444</td>
							<td>1520</td>
							<td>40853</td>
							<td>
								25x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;10x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;2x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>53</td>
							<td>2248</td>
							<td>772</td>
							<td>848</td>
							<td>41701</td>
							<td>
								80x
								<img src={PinkCamo} alt="Pink Camo" />
								&ensp;3x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>54</td>
							<td>4872</td>
							<td>2044</td>
							<td>2121</td>
							<td>43821</td>
							<td>
								35x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;2x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>55</td>
							<td>5296</td>
							<td>2328</td>
							<td>2406</td>
							<td>46227</td>
							<td>
								45x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;1x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>56</td>
							<td>2496</td>
							<td>1130</td>
							<td>1209</td>
							<td>47435</td>
							<td>
								40x
								<img src={RainbowCamo} alt="Rainbow Camo" />
								&ensp;1x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>57</td>
							<td>4344</td>
							<td>1702</td>
							<td>1781</td>
							<td>49216</td>
							<td>
								40x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;4x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>58</td>
							<td>5780</td>
							<td>2140</td>
							<td>2219</td>
							<td>51435</td>
							<td>
								15x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;10x
								<img src={CeramicFortified} alt="Ceramic Fortified" />
								&ensp;5x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>59</td>
							<td>4270</td>
							<td>2000</td>
							<td>2080</td>
							<td>53514</td>
							<td>
								50x
								<img src={LeadCamo} alt="Lead Camo" />
								&ensp;20x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;10x
								<img src={CeramicRegrow} alt="Ceramic Regrow" />
							</td>
						</tr>
						<tr>
							<td>60</td>
							<td>3164</td>
							<td>763</td>
							<td>943</td>
							<td>54357</td>
							<td>
								1x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>61</td>
							<td>6530</td>
							<td>1071</td>
							<td>1103</td>
							<td>55460</td>
							<td>
								150x
								<img src={ZebraRegrow} alt="Zebra Regrow" />
								&ensp;5x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>62</td>
							<td>8247</td>
							<td>1225</td>
							<td>1257</td>
							<td>56717</td>
							<td>
								250x
								<img src={Purple} alt="Purple" />
								&ensp;15x
								<img src={RainbowRegrowCamo} alt="Rainbow Regrow Camo" />
								&ensp;5x&nbsp;
								<img src={MOAB} alt="MOAB" />
								&ensp;2x&nbsp;
								<img src={MOABFortified} alt="MOAB Fortified" />
							</td>
						</tr>
						<tr>
							<td>63</td>
							<td>14413</td>
							<td>2663</td>
							<td>2696</td>
							<td>59412</td>
							<td>
								75x
								<img src={Lead} alt="Lead" />
								&ensp;122x
								<img src={Ceramic} alt="Ceramic" />
							</td>
						</tr>
						<tr>
							<td>64</td>
							<td>6264</td>
							<td>686</td>
							<td>719</td>
							<td>60131</td>
							<td>
								6x&nbsp;
								<img src={MOAB} alt="MOAB" />
								&ensp;3x&nbsp;
								<img src={MOABFortified} alt="MOAB Fortified" />
							</td>
						</tr>
						<tr>
							<td>65</td>
							<td>18966</td>
							<td>2906</td>
							<td>2940</td>
							<td>63070</td>
							<td>
								100x
								<img src={Zebra} alt="Zebra" />
								&ensp;70x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;50x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;3x&nbsp;
								<img src={MOAB} alt="MOAB" />
								&ensp;2x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>66</td>
							<td>7496</td>
							<td>838</td>
							<td>871</td>
							<td>63952</td>
							<td>
								8x&nbsp;
								<img src={MOAB} alt="MOAB" />
								&ensp;3x&nbsp;
								<img src={MOABFortified} alt="MOAB Fortified" />
							</td>
						</tr>
						<tr>
							<td>67</td>
							<td>6410</td>
							<td>856</td>
							<td>890</td>
							<td>64832</td>
							<td>
								13x
								<img src={CeramicRegrowFortifiedCamo} alt="Ceramic Regrow Fortified Camo" />
								&ensp;8x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>68</td>
							<td>5628</td>
							<td>609</td>
							<td>643</td>
							<td>65475</td>
							<td>
								4x&nbsp;
								<img src={MOAB} alt="MOAB" />
								&ensp;1x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>69</td>
							<td>6680</td>
							<td>1222</td>
							<td>1256</td>
							<td>66731</td>
							<td>
								40x
								<img src={BlackRegrow} alt="Black Regrow" />
								&ensp;40x
								<img src={LeadFortified} alt="Lead Fortified" />
								&ensp;50x
								<img src={Ceramic} alt="Ceramic" />
							</td>
						</tr>
						<tr>
							<td>70</td>
							<td>13184</td>
							<td>2449</td>
							<td>2483</td>
							<td>69214</td>
							<td>
								120x
								<img src={WhiteRegrowCamo} alt="White Regrow Camo" />
								&ensp;200x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;4x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>71</td>
							<td>9280</td>
							<td>1332</td>
							<td>1366</td>
							<td>70580</td>
							<td>
								30x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;10x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
						<tr>
							<td>72</td>
							<td>10280</td>
							<td>1332</td>
							<td>1366</td>
							<td>71946</td>
							<td>
								38x
								<img src={CeramicRegrow} alt="Ceramic Regrow" />
								&ensp;2x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>73</td>
							<td>11256</td>
							<td>1220</td>
							<td>1254</td>
							<td>73201</td>
							<td>
								8x&nbsp;
								<img src={MOAB} alt="MOAB" />
								&ensp;2x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>74</td>
							<td>18054</td>
							<td>2870</td>
							<td>2905</td>
							<td>76105</td>
							<td>
								50x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;60x
								<img src={CeramicFortified} alt="Ceramic Fortified" />
								&ensp;25x
								<img src={CeramicRegrowFortifiedCamo} alt="Ceramic Regrow Fortified Camo" />
								&ensp;1x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>75</td>
							<td>25402</td>
							<td>2493</td>
							<td>2527</td>
							<td>78633</td>
							<td>
								14x
								<img src={Lead} alt="Lead" />
								&ensp;14x
								<img src={LeadFortified} alt="Lead Fortified" />
								&ensp;3x&nbsp;
								<img src={MOABFortified} alt="MOAB Fortified" />
								&ensp;7x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>76</td>
							<td>6240</td>
							<td>1140</td>
							<td>1175</td>
							<td>79808</td>
							<td>
								60x
								<img src={CeramicRegrow} alt="Ceramic Regrow" />
							</td>
						</tr>
						<tr>
							<td>77</td>
							<td>22596</td>
							<td>2363</td>
							<td>2399</td>
							<td>82207</td>
							<td>
								11x&nbsp;
								<img src={MOAB} alt="MOAB" />
								&ensp;5x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>78</td>
							<td>26382</td>
							<td>4684</td>
							<td>4720</td>
							<td>89494</td>
							<td>
								80x
								<img src={Purple} alt="Purple" />
								&ensp;150x
								<img src={Rainbow} alt="Rainbow" />
								&ensp;75x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;72x
								<img src={CeramicCamo} alt="Ceramic Camo" />
								&ensp;1x&nbsp;
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>79</td>
							<td>45804</td>
							<td>6530</td>
							<td>6566</td>
							<td>93492</td>
							<td>
								500x
								<img src={RainbowRegrow} alt="Rainbow Regrow" />
								&ensp;4x&nbsp;
								<img src={BFB} alt="BFB" />
								&ensp;2x&nbsp;
								<img src={BFBFortified} alt="BFB Fortified" />
							</td>
						</tr>
						<tr>
							<td>80</td>
							<td>16656</td>
							<td>1220</td>
							<td>1256</td>
							<td>94748</td>
							<td>
								1x&nbsp;
								<img src={ZOMG} alt="ZOMG" />
							</td>
						</tr>
						<tr>
							<td>81</td>
							<td>44506</td>
							<td>5185</td>
							<td>5221</td>
							<td>99969</td>
							<td>
								17x
								<img src={BFB} alt="BFB" />
							</td>
						</tr>
						<tr>
							<td>82</td>
							<td>52320</td>
							<td>4575</td>
							<td>4611</td>
							<td>104581</td>
							<td>
								10x&nbsp;
								<img src={BFB} alt="BFB" />
								&ensp;5x&nbsp;
								<img src={BFBFortified} alt="BFB Fortified" />
							</td>
						</tr>
						<tr>
							<td>82</td>
							<td>25080</td>
							<td>4566</td>
							<td>4603</td>
							<td>109183</td>
							<td>
								40x
								<img src={Ceramic} alt="Ceramic" />
								&ensp;40x
								<img src={CeramicRegrow} alt="Cermic Regrow" />
								&ensp;40x
								<img src={CeramicFortified} alt="Ceramic Fortified" />
								&ensp;30x&nbsp;
								<img src={MOAB} alt="MOAB" />
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th rowSpan="2">Round</th>
							<th rowSpan="2">
								RBE
								<img src={Red} alt="Red" id="tableheaderimg" />
							</th>
							<th>Pops</th>
							<th>Total</th>
							<th>Cumulative</th>
							<th rowSpan="2">Bloons</th>
						</tr>
						<tr>
							<th colSpan="3">
								Cash
								<img src={Coin} alt="Coin" id="tableheaderimg" />
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</motion.div>
	);
}
