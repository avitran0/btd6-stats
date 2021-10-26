import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import DartMonkey000 from "../../dart-monkey/000-DartMonkey.png";
import DartMonkey001 from "../../dart-monkey/001-Dartmonkey.png";
import DartMonkey002 from "../../dart-monkey/002-Dartmonkey.png";
import DartMonkey003 from "../../dart-monkey/003-Dartmonkey.png";
import DartMonkey004 from "../../dart-monkey/004-Dartmonkey.png";
import DartMonkey005 from "../../dart-monkey/005-Dartmonkey.png";
import DartMonkey010 from "../../dart-monkey/010-Dartmonkey.png";
import DartMonkey020 from "../../dart-monkey/020-Dartmonkey.png";
import DartMonkey030 from "../../dart-monkey/030-Dartmonkey.png";
import DartMonkey040 from "../../dart-monkey/040-Dartmonkey.png";
import DartMonkey050 from "../../dart-monkey/050-Dartmonkey.png";
import DartMonkey100 from "../../dart-monkey/100-Dartmonkey.png";
import DartMonkey200 from "../../dart-monkey/200-Dartmonkey.png";
import DartMonkey300 from "../../dart-monkey/300-Dartmonkey.png";
import DartMonkey400 from "../../dart-monkey/400-Dartmonkey.png";
import DartMonkey500 from "../../dart-monkey/500-Dartmonkey.png";
import Paragon from "../../dart-monkey/ApexPlasmaMaster.png";
import Reset from "../../misc/CloseIcon.png";
import SharpShots from "../../dart-monkey/SharpShotsUpgradeIcon.png";
import RazorSharpShots from "../../dart-monkey/RazorSharpShotsUpgradeIcon.png";
import SpikeOPult from "../../dart-monkey/Spike-o-pultUpgradeIcon.png";
import Juggernaut from "../../dart-monkey/JuggernautUpgradeIcon.png";
import UltraJuggernaut from "../../dart-monkey/UltraJuggernautUpgradeIcon.png";
import QuickShots from "../../dart-monkey/QuickShotsUpgradeIcon.png";
import VeryQuickShots from "../../dart-monkey/VeryQuickShotsUpgradeIcon.png";
import TripleShot from "../../dart-monkey/TripleShotUpgradeIcon.png";
import SuperMonkeyFanClub from "../../dart-monkey/SuperMonkeyFanClubUpgradeIcon.png";
import PlasmaMonkeyFanClub from "../../dart-monkey/PlasmaMonkeyFanClubUpgradeIcon.png";
import LongRangeDarts from "../../dart-monkey/LongRangeDartsUpgradeIcon.png";
import EnhancedEyesight from "../../dart-monkey/EnhancedEyesightUpgradeIcon.png";
import Crossbow from "../../dart-monkey/CrossBowUpgradeIcon.png";
import Sharpshooter from "../../dart-monkey/SharpShooterUpgradeIcon.png";
import CrossbowMaster from "../../dart-monkey/CrossBowMasterUpgradeIcon.png";
import ApexPlasmaMaster from "../../dart-monkey/ApexPlasmaMasterUpgradeIcon.png";
import Red from "../../bloons/Red.png";
import Ceramic from "../../bloons/Ceramic.png";
import MOAB from "../../bloons/MOAB.png";
import Range from "../../misc/Range.png";
import Pierce from "../../misc/Pierce.png";
import Speed from "../../misc/Speed.png";
import Cooldown from "../../misc/RetryIcon.png";
import Projectiles from "../../misc/Projectiles.png";
import Yes from "../../misc/TickGreenIcon.png";
import No from "../../misc/CloseIcon.png";
import Camo from "../../bloons/GreenCamo.png";
import Black from "../../bloons/Black.png";
import White from "../../bloons/White.png";
import Purple from "../../bloons/Purple.png";
import Lead from "../../bloons/Lead.png";
import Zebra from "../../bloons/Zebra.png";
import Plus from "../../misc/AddMoreBtn.png";
import Minus from "../../misc/AddRemoveBtn.png";

export default function DartMonkey() {
	let images = {
		"000": DartMonkey000,
		"001": DartMonkey001,
		"002": DartMonkey002,
		"003": DartMonkey003,
		"004": DartMonkey004,
		"005": DartMonkey005,
		"010": DartMonkey010,
		"020": DartMonkey020,
		"030": DartMonkey030,
		"040": DartMonkey040,
		"050": DartMonkey050,
		100: DartMonkey100,
		200: DartMonkey200,
		300: DartMonkey300,
		400: DartMonkey400,
		500: DartMonkey500,
		par: Paragon,
	};
	let colors = {
		ss: "#98c379",
		s: "#9fba79",
		"s-": "#a6b278",
		a: "#aea978",
		"a-": "#b5a077",
		b: "#bc9877",
		"b-": "#c38f77",
		c: "#ca8676",
		"c-": "#d27d76",
		d: "#d97575",
		f: "#e06c75",
	};
	const [p1, setP1] = useState(0);
	const [p2, setP2] = useState(0);
	const [p3, setP3] = useState(0);
	const [stats, setStats] = useState([
		{
			damage: 1,
			damageMOAB: 1,
			damageCeramic: 1,
			damageSecondary: 0,
			damageMOABSecondary: 0,
			damageCeramicSecondary: 0,
			pierce: 2,
			pierceSecondary: 0,
			projectiles: 1,
			projectilesSecondary: 0,
			speed: 0.95,
			range: 32,
			abilityName: "",
			abilityDuration: 0,
			abilityCooldown: 0,
			abilityDamage: 0,
			abilityPierce: 0,
			abilitySpeed: 0.0,
			abilityRange: 0,
			camo: false,
			black: true,
			white: true,
			purple: true,
			lead: false,
			zebra: true,
			costEasy: 170,
			costMedium: 200,
			costHard: 215,
			costImpoppable: 240,
		},
	]);
	const [image, setImage] = useState("000");
	useEffect(() => {
		let costs = {
			"buy-e": 170,
			"buy-m": 200,
			"buy-h": 215,
			"buy-i": 240,
			"p1-1-e": 120,
			"p1-1-m": 140,
			"p1-1-h": 150,
			"p1-1-i": 170,
			"p1-2-e": 185,
			"p1-2-m": 220,
			"p1-2-h": 235,
			"p1-2-i": 265,
			"p1-3-e": 255,
			"p1-3-m": 300,
			"p1-3-h": 325,
			"p1-3-i": 360,
			"p1-4-e": 1530,
			"p1-4-m": 1800,
			"p1-4-h": 1945,
			"p1-4-i": 2160,
			"p1-5-e": 12750,
			"p1-5-m": 15000,
			"p1-5-h": 16200,
			"p1-5-i": 18000,
			"p2-1-e": 85,
			"p2-1-m": 100,
			"p2-1-h": 110,
			"p2-1-i": 120,
			"p2-2-e": 160,
			"p2-2-m": 190,
			"p2-2-h": 205,
			"p2-2-i": 230,
			"p2-3-e": 340,
			"p2-3-m": 400,
			"p2-3-h": 430,
			"p2-3-i": 480,
			"p2-4-e": 6800,
			"p2-4-m": 8000,
			"p2-4-h": 8640,
			"p2-4-i": 9600,
			"p2-5-e": 38250,
			"p2-5-m": 45000,
			"p2-5-h": 48600,
			"p2-5-i": 54000,
			"p3-1-e": 75,
			"p3-1-m": 90,
			"p3-1-h": 95,
			"p3-1-i": 110,
			"p3-2-e": 170,
			"p3-2-m": 200,
			"p3-2-h": 215,
			"p3-2-i": 240,
			"p3-3-e": 530,
			"p3-3-m": 625,
			"p3-3-h": 675,
			"p3-3-i": 750,
			"p3-4-e": 1700,
			"p3-4-m": 2000,
			"p3-4-h": 2160,
			"p3-4-i": 2400,
			"p3-5-e": 21250,
			"p3-5-m": 25000,
			"p3-5-h": 27000,
			"p3-5-i": 30000,
			"par-e": 297500,
			"par-m": 350000,
			"par-h": 378000,
			"par-i": 420000,
		};
		switch (String(p1) + String(p2) + String(p3)) {
			case "000":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"],
					costMedium: costs["buy-m"],
					costHard: costs["buy-h"],
					costImpoppable: costs["buy-i"],
				});
				setImage("000");
				break;
			case "100":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"],
				});
				setImage("100");
				break;
			case "200":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 5,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"],
				});
				setImage("200");
				break;
			case "300":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 22,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.15,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"],
				});
				setImage("300");
				break;
			case "400":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 50,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.0,
					range: 36.8,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"] + costs["p1-4-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"] + costs["p1-4-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"] + costs["p1-4-h"],
					costImpoppable:
						costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"] + costs["p1-4-i"],
				});
				setImage("400");
				break;
			case "500":
				setStats({
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 12,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 3,
					pierce: 200,
					pierceSecondary: 100,
					projectiles: 1,
					projectilesSecondary: 6,
					speed: 1.0,
					range: 36.8,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p1-5-i"],
				});
				setImage("500");
				break;
			case "010":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.8075,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"],
				});
				setImage("010");
				break;
			case "020":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"],
				});
				setImage("020");
				break;
			case "030":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 3,
					projectilesSecondary: 0,
					speed: 0.61,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"],
				});
				setImage("030");
				break;
			case "040":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 32,
					abilityName: "Super Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 1,
					abilityPierce: 2,
					abilitySpeed: 0.06,
					abilityRange: 40,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"] + costs["p2-4-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"] + costs["p2-4-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"] + costs["p2-4-h"],
					costImpoppable:
						costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"] + costs["p2-4-i"],
				});
				setImage("040");
				break;
			case "050":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 32,
					abilityName: "Plasma Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 2,
					abilityPierce: 5,
					abilitySpeed: 0.03,
					abilityRange: 40,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"] +
						costs["p2-5-i"],
				});
				setImage("050");
				break;
			case "001":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 40,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"],
					costImpoppable: costs["buy-i"] + costs["p3-1-i"],
				});
				setImage("001");
				break;
			case "002":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 48,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					costImpoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "003":
				setStats({
					damage: 3,
					damageMOAB: 3,
					damageCeramic: 3,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"],
					costImpoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "004":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.75,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"] + costs["p3-4-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"] + costs["p3-4-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"] + costs["p3-4-h"],
					costImpoppable:
						costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"] + costs["p3-4-i"],
				});
				setImage("004");
				break;
			case "005":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 10,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.16,
					range: 76,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"] +
						costs["p3-5-i"],
				});
				setImage("005");
				break;
			case "110":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.8075,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p2-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p2-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p2-1-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p2-1-i"],
				});
				setImage("010");
				break;
			case "210":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 5,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.8075,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p2-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p2-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p2-1-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p2-1-i"],
				});
				setImage("200");
				break;
			case "310":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 22,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.9775,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"] + costs["p2-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"] + costs["p2-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"] + costs["p2-1-h"],
					costImpoppable:
						costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"] + costs["p2-1-i"],
				});
				setImage("300");
				break;
			case "410":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 50,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.85,
					range: 36.5,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p2-1-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p2-1-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p2-1-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p2-1-i"],
				});
				setImage("400");
				break;
			case "510":
				setStats({
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 12,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 3,
					pierce: 200,
					pierceSecondary: 100,
					projectiles: 1,
					projectilesSecondary: 6,
					speed: 0.85,
					range: 36.5,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p2-1-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p2-1-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p2-1-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p1-5-i"] +
						costs["p2-1-i"],
				});
				setImage("500");
				break;
			case "120":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p2-1-e"] + costs["p2-2-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p2-1-m"] + costs["p2-2-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p2-1-h"] + costs["p2-2-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p2-1-i"] + costs["p2-2-i"],
				});
				setImage("020");
				break;
			case "220":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 5,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p2-1-e"] + costs["p2-2-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p2-1-m"] + costs["p2-2-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p2-1-h"] + costs["p2-2-h"],
					costImpoppable:
						costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p2-1-i"] + costs["p2-2-i"],
				});
				setImage("020");
				break;
			case "320":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 22,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7666,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"],
				});
				setImage("300");
				break;
			case "420":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 50,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.666,
					range: 36.5,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"],
				});
				setImage("400");
				break;
			case "520":
				setStats({
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 12,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 3,
					pierce: 200,
					pierceSecondary: 100,
					projectiles: 1,
					projectilesSecondary: 6,
					speed: 0.666,
					range: 36.5,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p1-5-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"],
				});
				setImage("500");
				break;
			case "101":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 40,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p3-1-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p3-1-i"],
				});
				setImage("001");
				break;
			case "201":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 5,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 40,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p3-1-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p3-1-i"],
				});
				setImage("200");
				break;
			case "301":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 22,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.15,
					range: 40,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"] + costs["p3-1-h"],
					costImpoppable:
						costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"] + costs["p3-1-i"],
				});
				setImage("300");
				break;
			case "401":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 50,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.0,
					range: 44.8,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p3-1-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p3-1-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p3-1-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p3-1-i"],
				});
				setImage("400");
				break;
			case "501":
				setStats({
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 12,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 3,
					pierce: 200,
					pierceSecondary: 100,
					projectiles: 1,
					projectilesSecondary: 6,
					speed: 1.0,
					range: 44.8,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p3-1-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p3-1-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p3-1-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p1-5-i"] +
						costs["p3-1-i"],
				});
				setImage("500");
				break;
			case "102":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 48,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "202":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 5,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 48,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					costImpoppable:
						costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "302":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 22,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.15,
					range: 48,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"],
				});
				setImage("300");
				break;
			case "402":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 50,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.0,
					range: 52.8,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"],
				});
				setImage("400");
				break;
			case "502":
				setStats({
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 12,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 3,
					pierce: 200,
					pierceSecondary: 100,
					projectiles: 1,
					projectilesSecondary: 6,
					speed: 1.0,
					range: 52.8,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p1-5-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"],
				});
				setImage("500");
				break;
			case "130":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 3,
					projectilesSecondary: 0,
					speed: 0.61,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"],
					costImpoppable:
						costs["buy-i"] + costs["p1-1-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"],
				});
				setImage("030");
				break;
			case "140":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 32,
					abilityName: "Super Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 1,
					abilityPierce: 3,
					abilitySpeed: 0.06,
					abilityRange: 40,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"],
				});
				setImage("040");
				break;
			case "150":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 32,
					abilityName: "Plasma Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 2,
					abilityPierce: 6,
					abilitySpeed: 0.03,
					abilityRange: 40,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"] +
						costs["p2-5-i"],
				});
				setImage("050");
				break;
			case "230":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 5,
					pierceSecondary: 0,
					projectiles: 3,
					projectilesSecondary: 0,
					speed: 0.61,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"],
				});
				setImage("030");
				break;
			case "240":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 5,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 32,
					abilityName: "Super Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 1,
					abilityPierce: 5,
					abilitySpeed: 0.06,
					abilityRange: 40,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"],
				});
				setImage("040");
				break;
			case "250":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 5,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 32,
					abilityName: "Plasma Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 2,
					abilityPierce: 8,
					abilitySpeed: 0.03,
					abilityRange: 40,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"] +
						costs["p2-5-i"],
				});
				setImage("050");
				break;
			case "011":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.8075,
					range: 40,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p3-1-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p3-1-i"],
				});
				setImage("010");
				break;
			case "021":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 40,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p3-1-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p3-1-i"],
				});
				setImage("020");
				break;
			case "031":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 3,
					projectilesSecondary: 0,
					speed: 0.61,
					range: 40,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"] + costs["p3-1-h"],
					costImpoppable:
						costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"] + costs["p3-1-i"],
				});
				setImage("030");
				break;
			case "041":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 40,
					abilityName: "Super Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 1,
					abilityPierce: 2,
					abilitySpeed: 0.06,
					abilityRange: 40,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p3-1-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p3-1-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p3-1-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"] +
						costs["p3-1-i"],
				});
				setImage("040");
				break;
			case "051":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 40,
					abilityName: "Plasma Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 2,
					abilityPierce: 5,
					abilitySpeed: 0.03,
					abilityRange: 40,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"] +
						costs["p3-1-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"] +
						costs["p3-1-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"] +
						costs["p3-1-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"] +
						costs["p2-5-i"] +
						costs["p3-1-i"],
				});
				setImage("050");
				break;
			case "032":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 3,
					projectilesSecondary: 0,
					speed: 0.61,
					range: 48,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"],
				});
				setImage("030");
				break;
			case "042":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 48,
					abilityName: "Super Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 1,
					abilityPierce: 2,
					abilitySpeed: 0.06,
					abilityRange: 48,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"],
				});
				setImage("040");
				break;
			case "052":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.425,
					range: 48,
					abilityName: "Plasma Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 2,
					abilityPierce: 5,
					abilitySpeed: 0.03,
					abilityRange: 48,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"] +
						costs["p2-5-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"],
				});
				setImage("050");
				break;
			case "103":
				setStats({
					damage: 3,
					damageMOAB: 3,
					damageCeramic: 3,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"],
					costImpoppable:
						costs["buy-i"] + costs["p1-1-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "104":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.75,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"],
				});
				setImage("004");
				break;
			case "105":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 16,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.16,
					range: 76,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"] +
						costs["p3-5-i"],
				});
				setImage("005");
				break;
			case "203":
				setStats({
					damage: 3,
					damageMOAB: 3,
					damageCeramic: 3,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "204":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.75,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"],
				});
				setImage("004");
				break;
			case "205":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 23,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.16,
					range: 76,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"] +
						costs["p3-5-i"],
				});
				setImage("005");
				break;
			case "012":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.8075,
					range: 48,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "013":
				setStats({
					damage: 3,
					damageMOAB: 3,
					damageCeramic: 3,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.8075,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"],
					costImpoppable:
						costs["buy-i"] + costs["p2-1-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "014":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.6375,
					range: 76,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"],
				});
				setImage("004");
				break;
			case "015":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 10,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.136,
					range: 76,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"] +
						costs["p3-5-i"],
				});
				setImage("005");
				break;
			case "022":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 48,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					costImpoppable:
						costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("020");
				break;
			case "023":
				setStats({
					damage: 3,
					damageMOAB: 3,
					damageCeramic: 3,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "024":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 3,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.5,
					range: 56,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"],
				});
				setImage("004");
				break;
			case "025":
				setStats({
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 10,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.107,
					range: 76,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					costMedium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					costHard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					costImpoppable:
						costs["buy-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"] +
						costs["p3-5-i"],
				});
				setImage("005");
				break;
			case "-100":
				setStats({
					damage: 20,
					damageMOAB: 20,
					damageCeramic: 50,
					damageSecondary: 20,
					damageMOABSecondary: 20,
					damageCeramicSecondary: 50,
					pierce: 200,
					pierceSecondary: 200,
					projectiles: 3,
					projectilesSecondary: 2,
					speed: 0.3,
					range: 85,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
					zebra: true,
					costEasy:
						costs["buy-e"] * 3 +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"] +
						costs["par-e"],
					costMedium:
						costs["buy-m"] * 3 +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"] +
						costs["par-m"],
					costHard:
						costs["buy-h"] * 3 +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"] +
						costs["par-h"],
					costImpoppable:
						costs["buy-i"] * 3 +
						costs["p1-1-i"] +
						costs["p1-2-i"] +
						costs["p1-3-i"] +
						costs["p1-4-i"] +
						costs["p1-5-i"] +
						costs["p2-1-i"] +
						costs["p2-2-i"] +
						costs["p2-3-i"] +
						costs["p2-4-i"] +
						costs["p2-5-i"] +
						costs["p3-1-i"] +
						costs["p3-2-i"] +
						costs["p3-3-i"] +
						costs["p3-4-i"] +
						costs["p3-5-i"] +
						costs["par-i"],
				});
				setImage("par");
				break;
			default:
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.95,
					range: 32,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					zebra: true,
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				break;
		}
	}, [p1, p2, p3]);
	function handleChange(button) {
		switch (button) {
			case "p0":
				setP1(0);
				setP2(0);
				setP3(0);
				break;
			case "p1-1":
				setP1(1);
				break;
			case "p1-2":
				setP1(2);
				break;
			case "p1-3":
				setP1(3);
				break;
			case "p1-4":
				setP1(4);
				break;
			case "p1-5":
				setP1(5);
				break;
			case "p2-1":
				setP2(1);
				break;
			case "p2-2":
				setP2(2);
				break;
			case "p2-3":
				setP2(3);
				break;
			case "p2-4":
				setP2(4);
				break;
			case "p2-5":
				setP2(5);
				break;
			case "p3-1":
				setP3(1);
				break;
			case "p3-2":
				setP3(2);
				break;
			case "p3-3":
				setP3(3);
				break;
			case "p3-4":
				setP3(4);
				break;
			case "p3-5":
				setP3(5);
				break;
			case "par":
				setP1(-1);
				setP2(0);
				setP3(0);
				break;
			default:
				break;
		}
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: "easeInOut", duration: 0.2 }}
			className="tower"
		>
			<h1>Dart Monkey</h1>
			<div className="tower-container">
				<div className="stats-container">
					<table className="stats">
						<thead>
							<tr>
								<th colSpan="3">Main</th>
							</tr>
							<tr>
								<th data-tip="How many layers each projectile can pop" data-for="damage">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage"
									/>
									Damage
								</th>
								<th data-tip="How many Bloons a single projectile can affect" data-for="pierce">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="pierce"
									/>
									Pierce
								</th>
								<th data-tip="The rate of attacks per second" data-for="speed">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="speed"
									/>
									Speed
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td data-tip="Damage against normal Bloons" data-for="damage-normal">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage-normal"
									/>
									<img src={Red} alt="Red"></img>&nbsp;{stats.damage}
								</td>
								<td>
									<img src={Pierce} alt="Pierce"></img>&nbsp;{stats.pierce}
								</td>
								<td>
									<img src={Speed} alt="Speed"></img>&nbsp;{Math.round((1 / stats.speed) * 100) / 100}
									/s
								</td>
							</tr>
							<tr>
								<td data-tip="Damage against MOABs" data-for="damage-moab">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage-moab"
									/>
									<img src={MOAB} alt="MOAB"></img>&nbsp;{stats.damageMOAB}
								</td>
							</tr>
							<tr>
								<td data-tip="Damage against Ceramics" data-for="damage-ceramic">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage-ceramic"
									/>
									<img src={Ceramic} alt="Ceramic"></img>&nbsp;{stats.damageCeramic}
								</td>
								<td>
									<img src={Projectiles} alt="Projectiles"></img>&nbsp;{stats.projectiles}
								</td>
								<td>
									<img src={Range} alt="Range"></img>&nbsp;{stats.range}
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th data-tip="How many layers each projectile can pop" data-for="damage2">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage2"
									/>
									Damage
								</th>
								<th data-tip="How many projectiles are shot per attack" data-for="projectiles">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="projectiles"
									/>
									Projectiles
								</th>
								<th data-tip="The range where the tower can detect Bloons" data-for="range">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="range"
									/>
									Range
								</th>
							</tr>
						</tfoot>
					</table>
					<table>
						<thead>
							<tr>
								<th
									colSpan="2"
									data-tip="The cumulative cost of the<br>tower and all selected upgrades"
									data-for="cost"
								>
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="cost"
									/>
									Cost
								</th>
							</tr>
							<tr>
								<th>Easy</th>
								<th>Medium</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>${stats.costEasy}</td>
								<td>${stats.costMedium}</td>
							</tr>
							<tr>
								<td>${stats.costHard}</td>
								<td>${stats.costImpoppable}</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th>Hard</th>
								<th>Impoppable</th>
							</tr>
						</tfoot>
					</table>
					<table>
						<thead>
							<tr>
								<th colSpan="2">Secondary Projectile</th>
							</tr>
							<tr>
								<th data-tip="How many layers each projectile can pop" data-for="damage3">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage3"
									/>
									Damage
								</th>
								<th data-tip="How many Bloons a single projectile can affect" data-for="pierce2">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="pierce2"
									/>
									Pierce
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td data-tip="Damage against normal Bloons" data-for="damage-normal2">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage-normal2"
									/>
									<img src={Red} alt="Red"></img>&nbsp;{stats.damageSecondary}
								</td>
								<td>
									<img src={Pierce} alt="Pierce"></img>&nbsp;{stats.pierceSecondary}
								</td>
							</tr>
							<tr>
								<td data-tip="Damage against MOABs" data-for="damage-moab2">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage-moab2"
									/>
									<img src={MOAB} alt="MOAB"></img>&nbsp;{stats.damageMOABSecondary}
								</td>
							</tr>
							<tr>
								<td data-tip="Damage against Ceramics" data-for="damage-ceramic2">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage-ceramic2"
									/>
									<img src={Ceramic} alt="Ceramic"></img>&nbsp;{stats.damageCeramicSecondary}
								</td>
								<td>
									<img src={Projectiles} alt="Projectiles"></img>&nbsp;{stats.projectilesSecondary}
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th data-tip="How many layers each projectile can pop" data-for="damage4">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage4"
									/>
									Damage
								</th>
								<th data-tip="How many projectiles are shot per attack" data-for="projectiles2">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="projectiles2"
									/>
									Projectiles
								</th>
							</tr>
						</tfoot>
					</table>
					<table>
						<thead>
							<tr>
								<th colSpan="3">Ability: {stats.abilityName}</th>
							</tr>
							<tr>
								<th data-tip="How many layers each projectile can pop" data-for="damage5">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="damage5"
									/>
									Damage
								</th>
								<th data-tip="How many Bloons a single projectile can affect" data-for="pierce3">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="pierce3"
									/>
									Pierce
								</th>
								<th data-tip="The rate of attacks per second" data-for="speed2">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="speed2"
									/>
									Speed
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src={Red} alt="Red"></img>&nbsp;{stats.abilityDamage}
								</td>
								<td>
									<img src={Pierce} alt="Pierce"></img>&nbsp;{stats.abilityPierce}
								</td>
								<td>
									<img src={Speed} alt="Speed"></img>&nbsp;
									{stats.abilitySpeed > 0 ? Math.round((1 / stats.abilitySpeed) * 100) / 100 : 0}/s
								</td>
							</tr>
							<tr>
								<td>
									<img src={Range} alt="Range"></img>&nbsp;{stats.abilityRange}
								</td>
								<td>
									<img src={Cooldown} alt="Duration"></img>&nbsp;{stats.abilityDuration}s
								</td>
								<td>
									<img src={Cooldown} alt="Cooldown"></img>&nbsp;{stats.abilityCooldown}s
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th data-tip="The range where the tower can detect Bloons" data-for="range">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="range"
									/>
									Range
								</th>
								<th data-tip="How long the ability lasts" data-for="duration">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="duration"
									/>
									Duration
								</th>
								<th
									data-tip="How long the ability needs to<br>cool down before using it again"
									data-for="cooldown"
								>
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="cooldown"
									/>
									Cooldown
								</th>
							</tr>
						</tfoot>
					</table>
					<table>
						<thead>
							<tr>
								<th
									colSpan="2"
									data-tip="Which Bloons the tower can detect and damage"
									data-for="bloons"
								>
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="bloons"
									/>
									Bloons
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td data-tip="Can detect camo Bloons?" data-for="camo">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="camo"
									/>
									<img src={Camo} alt="Camo"></img>&nbsp;
									<img src={stats.camo ? Yes : No} alt="Yes" className="yesno"></img>
								</td>
								<td data-tip="Can damage purple bloons?" data-for="purple">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="purple"
									/>
									<img src={Purple} alt="Purple"></img>&nbsp;
									<img src={stats.purple ? Yes : No} alt="Yes" className="yesno"></img>
								</td>
							</tr>
							<tr>
								<td data-tip="Can damage Black Bloons?" data-for="black">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="black"
									/>
									<img src={Black} alt="Black"></img>&nbsp;
									<img src={stats.black ? Yes : No} alt="Yes" className="yesno"></img>
								</td>
								<td data-tip="Can damage Lead Bloons?" data-for="lead">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="lead"
									/>
									<img src={Lead} alt="Lead"></img>&nbsp;
									<img src={stats.lead ? Yes : No} alt="Yes" className="yesno"></img>
								</td>
							</tr>
							<tr>
								<td data-tip="Can damage White Bloons?" data-for="white">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="white"
									/>
									<img src={White} alt="White"></img>&nbsp;
									<img src={stats.white ? Yes : No} alt="Yes" className="yesno"></img>
								</td>
								<td data-tip="Can damage Zebra Bloons?" data-for="zebra">
									<ReactTooltip
										effect="solid"
										textColor="#eceff4"
										backgroundColor="#4c566aff"
										arrowColor="transparent"
										multiline={true}
										id="zebra"
									/>
									<img src={Zebra} alt="Zebra"></img>&nbsp;
									<img src={stats.zebra ? Yes : No} alt="Yes" className="yesno"></img>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="image-container">
					<div className="image-container-inner">
						<img src={images[image]} alt="Dart Monkey 000" className="tower-img" id="tower-img"></img>
					</div>
					<div className="tower-grid">
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p1-1")}
								id="p1-1"
								className={p1 === 1 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Sharp Shots<br>Can pop 1 extra Bloon per shot.<br>Cost: $120 / $140 / $150 / $170"
								data-for="sharp-shots"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="sharp-shots"
								/>
								<img src={SharpShots} alt="Sharp Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-2")}
								id="p1-2"
								className={p1 === 2 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Razor Sharp Shots<br>Can pop 2 more bloons per shot.<br>Cost: $185 / $220 / $235 / $265"
								data-for="razor-sharp-shots"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="razor-sharp-shots"
								/>
								<img src={RazorSharpShots} alt="Razor Sharp Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-3")}
								id="p1-3"
								className={p1 === 3 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Spike-O-Pult<br>Converts the Dart Monkey into a Spike-o-pult that hurls a large spiked ball instead of darts.<br>Good range, but slower attack speed. Each ball can pop lots of Bloons and rebounds off obstacles.<br>Cost: $255 / $300 / $325 / $360"
								data-for="spike-o-pult"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="spike-o-pult"
								/>
								<img src={SpikeOPult} alt="Spike-O-Pult"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-4")}
								id="p1-4"
								className={p1 === 4 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Juggernaut<br>Hurls a giant spiked ball that pops lead and excels at crushing Ceramic Bloons.<br>Cost: $1.530 / $1.800 / $1.945 / $2.160"
								data-for="juggernaut"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="juggernaut"
								/>
								<img src={Juggernaut} alt="Juggernaut"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-5")}
								id="p1-5"
								className={p1 === 5 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Ultra-Juggernaut<br>Gigantic spiked ball splits twice into 6 Juggernaut balls for even more destructive power.<br>Cost: $12.750 / $15.000 / $16.200 / $18.000"
								data-for="ultra-juggernaut"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="ultra-juggernaut"
								/>
								<img src={UltraJuggernaut} alt="Ultra-Juggernaut"></img>
							</button>
						</div>
						<div></div>
						<div>
							<h1 style={{ color: colors["c-"] }}>C-</h1>
						</div>
						<div>
							<button
								onClick={() => handleChange("p0")}
								id="p0"
								data-tip="Resets all upgrades."
								data-for="reset"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="reset"
								/>
								<img src={Reset} alt="Reset" className="reset"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-1")}
								id="p2-1"
								className={p2 === 1 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Quick Shots<br>Shoots 15% faster.<br>Cost: $85 / $100 / $110 / $120"
								data-for="quick-shots"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="quick-shots"
								/>
								<img src={QuickShots} alt="Quick Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-2")}
								id="p2-2"
								className={p2 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Quick Shots<br>Shoots 33% faster!<br>Cost: $160 / $190 / $205 / $230"
								data-for="very-quick-shots"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="very-quick-shots"
								/>
								<img src={VeryQuickShots} alt="Very Quick Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-3")}
								id="p2-3"
								className={p2 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Triple Shot<br>Throws 3 darts at a time instead of 1.<br>Cost: $340 / $400 / $430 / $480"
								data-for="triple-shot"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="triple-shot"
								/>
								<img src={TripleShot} alt="Triple Shot"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-4")}
								id="p2-4"
								className={p2 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Super Monkey Fan Club<br>Super Monkey Fan Club Ability: Converts up to 10 nearby Dart Monkeys including himself into Super Monkeys for 15 seconds.<br>Regular attack speed also increased.<br>Cost: $6.800 / $8.000 / $8.640 / $9.600"
								data-for="super-monkey-fan-club"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="super-monkey-fan-club"
								/>
								<img src={SuperMonkeyFanClub} alt="Super Monkey Fan Club"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-5")}
								id="p2-5"
								className={p2 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Plasma Monkey Fan Club<br>Elite membership of this club grants the Dart Monkeys even more power.<br>Cost: $38.250 / $45.000 / $48.600 / $54.000"
								data-for="plasma-monkey-fan-club"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="plasma-monkey-fan-club"
								/>
								<img src={PlasmaMonkeyFanClub} alt="Plasma Monkey Fan Club"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("par")}
								id="par"
								className={p1 === -1 ? "tower-active" : ""}
								data-tip="Apex Plasma Master<br>Fill the area with Bloon shredding plasma juggernaut balls, leaving nothing behind...<br>Cost: $297.500 / $350.000 / $378.600 / $420.000"
								data-for="apex-plasma-master"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="apex-plasma-master"
								/>
								<img src={ApexPlasmaMaster} alt="Apex Plasma Master"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["b-"] }}>B-</h1>
						</div>
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p3-1")}
								id="p3-1"
								className={p3 === 1 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Long Range Darts<br>Makes the Dart Monkey shoot further than normal.<br>Cost: $75 / $90 / $95 / $110"
								data-for="long-range-darts"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="long-range-darts"
								/>
								<img src={LongRangeDarts} alt="Long Range Darts" title="Long Range Darts"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-2")}
								id="p3-2"
								className={p3 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Enhanced Eyesight<br>Shoots even further and can detect Camo bloons.<br>Cost: $170 / $200 / $215 / $240"
								data-for="enhanced-eyesight"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="enhanced-eyesight"
								/>
								<img src={EnhancedEyesight} alt="Enhanced Eyesight" title="Enhanced Eyesight"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-3")}
								id="p3-3"
								className={p3 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Crossbow<br>Uses a long range Crossbow that can pop 3 layers of Bloon for every hit.<br>Cost: $530 / $625 / $675 / $750"
								data-for="crossbow"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="crossbow"
								/>
								<img src={Crossbow} alt="Crossbow"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-4")}
								id="p3-4"
								className={p3 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Sharpshooter<br>Sharp Shooter attacks faster and does powerful Crit shots every few shots that do a lot more damage.<br>Cost: $1.700 / $2.000 / $2.160 / $2.400"
								data-for="sharpshooter"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="sharpshooter"
								/>
								<img src={Sharpshooter} alt="Sharpshooter"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-5")}
								id="p3-5"
								className={p3 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Crossbow Master<br>Crossbow Master shoots really fast and devastates most Bloon types with ease.<br>Cost: $21.250 / $25.000 / $27.000 / $30.000"
								data-for="crossbow-master"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="crossbow-master"
								/>
								<img src={CrossbowMaster} alt="Crossbow Master"></img>
							</button>
						</div>
						<div></div>
						<div>
							<h1 style={{ color: colors["b-"] }}>B-</h1>
						</div>
					</div>
					<div className="tower-input">
						<div className="tower-input-flex">
							<h2>Top Path</h2>
							<div>
								<button onClick={() => (p1 <= 0 ? setP1(0) : setP1(p1 - 1))}>
									<img src={Minus} alt="minus"></img>
								</button>
								<input
									type="number"
									min="0"
									max="5"
									value={p1}
									onChange={(e) => setP1(e.target.value)}
									disabled={p2 > 0 && p3 > 0 ? true : false}
								></input>
								<button
									onClick={() => (p1 >= 5 ? setP1(5) : setP1(p1 + 1))}
									disabled={(p2 > 0 && p3 > 0) || ((p2 || p3) > 2 && p1 === 2) ? true : false}
								>
									<img src={Plus} alt="plus"></img>
								</button>
							</div>
						</div>
						<div className="tower-input-flex">
							<h2>Middle Path</h2>
							<div>
								<button onClick={() => (p2 <= 0 ? setP2(0) : setP2(p2 - 1))}>
									<img src={Minus} alt="minus"></img>
								</button>
								<input
									type="number"
									min="0"
									max="5"
									value={p2}
									onChange={(e) => setP2(e.target.value)}
									disabled={p1 > 0 && p3 > 0 ? true : false}
								></input>
								<button
									onClick={() => (p2 >= 5 ? setP2(5) : setP2(p2 + 1))}
									disabled={(p1 > 0 && p3 > 0) || ((p1 || p3) > 2 && p2 === 2) ? true : false}
								>
									<img src={Plus} alt="plus"></img>
								</button>
							</div>
						</div>
						<div className="tower-input-flex">
							<h2>Bottom Path</h2>
							<div>
								<button onClick={() => (p3 <= 0 ? setP3(0) : setP3(p3 - 1))}>
									<img src={Minus} alt="minus"></img>
								</button>
								<input
									type="number"
									min="0"
									max="5"
									value={p3}
									onChange={(e) => setP3(e.target.value)}
									disabled={p1 > 0 && p2 > 0 ? true : false}
								></input>
								<button
									onClick={() => (p3 >= 5 ? setP3(5) : setP3(p3 + 1))}
									disabled={(p1 > 0 && p2 > 0) || ((p1 || p2) > 2 && p3 === 2) ? true : false}
								>
									<img src={Plus} alt="plus"></img>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
