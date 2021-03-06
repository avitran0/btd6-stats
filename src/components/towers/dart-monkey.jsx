import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import M000 from "../../dart-monkey/000-DartMonkey.png";
import M001 from "../../dart-monkey/001-Dartmonkey.png";
import M002 from "../../dart-monkey/002-Dartmonkey.png";
import M003 from "../../dart-monkey/003-Dartmonkey.png";
import M004 from "../../dart-monkey/004-Dartmonkey.png";
import M005 from "../../dart-monkey/005-Dartmonkey.png";
import M010 from "../../dart-monkey/010-Dartmonkey.png";
import M020 from "../../dart-monkey/020-Dartmonkey.png";
import M030 from "../../dart-monkey/030-Dartmonkey.png";
import M040 from "../../dart-monkey/040-Dartmonkey.png";
import M050 from "../../dart-monkey/050-Dartmonkey.png";
import M100 from "../../dart-monkey/100-Dartmonkey.png";
import M200 from "../../dart-monkey/200-Dartmonkey.png";
import M300 from "../../dart-monkey/300-Dartmonkey.png";
import M400 from "../../dart-monkey/400-Dartmonkey.png";
import M500 from "../../dart-monkey/500-Dartmonkey.png";
import Paragon from "../../dart-monkey/ApexPlasmaMaster.png";
import Reset from "../../misc/CloseIcon.png";
import p11 from "../../dart-monkey/SharpShotsUpgradeIcon.png";
import p12 from "../../dart-monkey/RazorSharpShotsUpgradeIcon.png";
import p13 from "../../dart-monkey/Spike-o-pultUpgradeIcon.png";
import p14 from "../../dart-monkey/JuggernautUpgradeIcon.png";
import p15 from "../../dart-monkey/UltraJuggernautUpgradeIcon.png";
import p21 from "../../dart-monkey/QuickShotsUpgradeIcon.png";
import p22 from "../../dart-monkey/VeryQuickShotsUpgradeIcon.png";
import p23 from "../../dart-monkey/TripleShotUpgradeIcon.png";
import p24 from "../../dart-monkey/SuperMonkeyFanClubUpgradeIcon.png";
import p25 from "../../dart-monkey/PlasmaMonkeyFanClubUpgradeIcon.png";
import p31 from "../../dart-monkey/LongRangeDartsUpgradeIcon.png";
import p32 from "../../dart-monkey/EnhancedEyesightUpgradeIcon.png";
import p33 from "../../dart-monkey/CrossBowUpgradeIcon.png";
import p34 from "../../dart-monkey/SharpShooterUpgradeIcon.png";
import p35 from "../../dart-monkey/CrossBowMasterUpgradeIcon.png";
import par from "../../dart-monkey/ApexPlasmaMasterUpgradeIcon.png";
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
import Frozen from "../../bloons/WhiteIce.png";
import Stats from "../../dart-monkey/DartMonkeyStats.json";

export default function DartMonkey() {
	document.title = "Dart Monkey - BTD6 Stats";
	const transitionContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.1,
				staggerChildren: 0.05,
			},
		},
	};
	const transitionItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	let images = {
		"000": M000,
		"001": M001,
		"002": M002,
		"003": M003,
		"004": M004,
		"005": M005,
		"010": M010,
		"020": M020,
		"030": M030,
		"040": M040,
		"050": M050,
		100: M100,
		200: M200,
		300: M300,
		400: M400,
		500: M500,
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
			damage: Stats["000"].damage,
			damageMOAB: Stats["000"].damageMOAB,
			damageCeramic: Stats["000"].damageCeramic,
			damageSecondary: Stats["000"].damageSecondary,
			damageMOABSecondary: Stats["000"].damageMOABSecondary,
			damageCeramicSecondary: Stats["000"].damageCeramicSecondary,
			pierce: Stats["000"].pierce,
			pierceSecondary: Stats["000"].pierceSecondary,
			projectiles: Stats["000"].projectiles,
			projectilesSecondary: Stats["000"].projectilesSecondary,
			speed: Stats["000"].speed,
			range: Stats["000"].range,
			abilityName: Stats["000"].abilityName,
			abilityDuration: Stats["000"].abilityDuration,
			abilityCooldown: Stats["000"].abilityCooldown,
			abilityDamage: Stats["000"].abilityDamage,
			abilityPierce: Stats["000"].abilityPierce,
			abilitySpeed: Stats["000"].abilitySpeed,
			abilityRange: Stats["000"].abilityRange,
			camo: Stats["000"].camo,
			black: Stats["000"].black,
			white: Stats["000"].white,
			purple: Stats["000"].purple,
			lead: Stats["000"].lead,
			frozen: Stats["000"].frozen,
		},
	]);
	const [cost, setCost] = useState([
		{
			easy: 445,
			medium: 525,
			hard: 565,
			impoppable: 630,
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
		setStats({
			damage: Stats[String(p1) + String(p2) + String(p3)].damage,
			damageMOAB: Stats[String(p1) + String(p2) + String(p3)].damageMOAB,
			damageCeramic: Stats[String(p1) + String(p2) + String(p3)].damageCeramic,
			damageSecondary: Stats[String(p1) + String(p2) + String(p3)].damageSecondary,
			damageMOABSecondary: Stats[String(p1) + String(p2) + String(p3)].damageMOABSecondary,
			damageCeramicSecondary: Stats[String(p1) + String(p2) + String(p3)].damageCeramicSecondary,
			pierce: Stats[String(p1) + String(p2) + String(p3)].pierce,
			pierceSecondary: Stats[String(p1) + String(p2) + String(p3)].pierceSecondary,
			projectiles: Stats[String(p1) + String(p2) + String(p3)].projectiles,
			projectilesSecondary: Stats[String(p1) + String(p2) + String(p3)].projectilesSecondary,
			speed: Stats[String(p1) + String(p2) + String(p3)].speed,
			range: Stats[String(p1) + String(p2) + String(p3)].range,
			abilityName: Stats[String(p1) + String(p2) + String(p3)].abilityName,
			abilityDuration: Stats[String(p1) + String(p2) + String(p3)].abilityDuration,
			abilityCooldown: Stats[String(p1) + String(p2) + String(p3)].abilityCooldown,
			abilityDamage: Stats[String(p1) + String(p2) + String(p3)].abilityDamage,
			abilityPierce: Stats[String(p1) + String(p2) + String(p3)].abilityPierce,
			abilitySpeed: Stats[String(p1) + String(p2) + String(p3)].abilitySpeed,
			abilityRange: Stats[String(p1) + String(p2) + String(p3)].abilityRange,
			camo: Stats[String(p1) + String(p2) + String(p3)].camo,
			black: Stats[String(p1) + String(p2) + String(p3)].black,
			white: Stats[String(p1) + String(p2) + String(p3)].white,
			purple: Stats[String(p1) + String(p2) + String(p3)].purple,
			lead: Stats[String(p1) + String(p2) + String(p3)].lead,
			frozen: Stats[String(p1) + String(p2) + String(p3)].frozen,
		});
		switch (String(p1) + String(p2) + String(p3)) {
			case "000":
				setCost({
					easy: costs["buy-e"],
					medium: costs["buy-m"],
					hard: costs["buy-h"],
					impoppable: costs["buy-i"],
				});
				setImage("000");
				break;
			case "100":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"],
					medium: costs["buy-m"] + costs["p1-1-m"],
					hard: costs["buy-h"] + costs["p1-1-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"],
				});
				setImage("100");
				break;
			case "200":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"],
				});
				setImage("200");
				break;
			case "300":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"],
				});
				setImage("300");
				break;
			case "400":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"] + costs["p1-4-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"] + costs["p1-4-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"] + costs["p1-4-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"] + costs["p1-4-i"],
				});
				setImage("400");
				break;
			case "500":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"],
					medium: costs["buy-m"] + costs["p2-1-m"],
					hard: costs["buy-h"] + costs["p2-1-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"],
				});
				setImage("010");
				break;
			case "020":
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"],
				});
				setImage("020");
				break;
			case "030":
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"],
				});
				setImage("030");
				break;
			case "040":
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"] + costs["p2-4-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"] + costs["p2-4-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"] + costs["p2-4-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"] + costs["p2-4-i"],
				});
				setImage("040");
				break;
			case "050":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p3-1-e"],
					medium: costs["buy-m"] + costs["p3-1-m"],
					hard: costs["buy-h"] + costs["p3-1-h"],
					impoppable: costs["buy-i"] + costs["p3-1-i"],
				});
				setImage("001");
				break;
			case "002":
				setCost({
					easy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					medium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					hard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					impoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "003":
				setCost({
					easy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"],
					medium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"],
					hard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"],
					impoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "004":
				setCost({
					easy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"] + costs["p3-4-e"],
					medium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"] + costs["p3-4-m"],
					hard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"] + costs["p3-4-h"],
					impoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"] + costs["p3-4-i"],
				});
				setImage("004");
				break;
			case "005":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					medium:
						costs["buy-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					hard:
						costs["buy-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p2-1-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p2-1-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p2-1-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p2-1-i"],
				});
				setImage("010");
				break;
			case "210":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p2-1-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p2-1-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p2-1-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p2-1-i"],
				});
				setImage("200");
				break;
			case "310":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"] + costs["p2-1-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"] + costs["p2-1-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"] + costs["p2-1-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"] + costs["p2-1-i"],
				});
				setImage("300");
				break;
			case "410":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p2-1-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p2-1-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p2-1-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p2-1-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p2-1-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p2-1-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p2-1-e"] + costs["p2-2-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p2-1-m"] + costs["p2-2-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p2-1-h"] + costs["p2-2-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p2-1-i"] + costs["p2-2-i"],
				});
				setImage("020");
				break;
			case "220":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p2-1-e"] + costs["p2-2-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p2-1-m"] + costs["p2-2-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p2-1-h"] + costs["p2-2-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p2-1-i"] + costs["p2-2-i"],
				});
				setImage("020");
				break;
			case "320":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p3-1-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p3-1-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p3-1-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p3-1-i"],
				});
				setImage("001");
				break;
			case "201":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p3-1-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p3-1-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p3-1-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p3-1-i"],
				});
				setImage("200");
				break;
			case "301":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"] + costs["p3-1-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"] + costs["p3-1-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"] + costs["p3-1-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"] + costs["p3-1-i"],
				});
				setImage("300");
				break;
			case "401":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p3-1-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p3-1-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p3-1-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p3-1-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p3-1-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p3-1-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "202":
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "302":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p1-3-e"] +
						costs["p1-4-e"] +
						costs["p1-5-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p1-3-m"] +
						costs["p1-4-m"] +
						costs["p1-5-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p1-3-h"] +
						costs["p1-4-h"] +
						costs["p1-5-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"],
				});
				setImage("030");
				break;
			case "140":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-false4-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p3-1-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p3-1-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p3-1-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p3-1-i"],
				});
				setImage("010");
				break;
			case "021":
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p3-1-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p3-1-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p3-1-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p3-1-i"],
				});
				setImage("020");
				break;
			case "031":
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"] + costs["p3-1-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"] + costs["p3-1-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"] + costs["p3-1-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"] + costs["p3-1-i"],
				});
				setImage("030");
				break;
			case "041":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p3-1-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p3-1-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p3-1-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"] +
						costs["p3-1-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"] +
						costs["p3-1-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"] +
						costs["p3-1-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-4-e"] +
						costs["p2-5-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p2-3-m"] +
						costs["p2-4-m"] +
						costs["p2-5-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p2-3-h"] +
						costs["p2-4-h"] +
						costs["p2-5-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p1-1-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"],
					medium: costs["buy-m"] + costs["p1-1-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"],
					hard: costs["buy-h"] + costs["p1-1-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"],
					impoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "104":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					medium:
						costs["buy-m"] +
						costs["p1-1-m"] +
						costs["p1-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					hard:
						costs["buy-h"] +
						costs["p1-1-h"] +
						costs["p1-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "013":
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "014":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					impoppable:
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
				setCost({
					easy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					medium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					hard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					impoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("020");
				break;
			case "023":
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"],
					impoppable:
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
				setCost({
					easy:
						costs["buy-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p3-1-e"] +
						costs["p3-2-e"] +
						costs["p3-3-e"] +
						costs["p3-4-e"] +
						costs["p3-5-e"],
					medium:
						costs["buy-m"] +
						costs["p2-1-m"] +
						costs["p2-2-m"] +
						costs["p3-1-m"] +
						costs["p3-2-m"] +
						costs["p3-3-m"] +
						costs["p3-4-m"] +
						costs["p3-5-m"],
					hard:
						costs["buy-h"] +
						costs["p2-1-h"] +
						costs["p2-2-h"] +
						costs["p3-1-h"] +
						costs["p3-2-h"] +
						costs["p3-3-h"] +
						costs["p3-4-h"] +
						costs["p3-5-h"],
					impoppable:
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
				setCost({
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
				setCost({
					easy: costs["buy-e"],
					medium: costs["buy-m"],
					hard: costs["buy-h"],
					impoppable: costs["buy-i"],
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
		<motion.div initial="hidden" animate="show" exit="hidden" variants={transitionContainer} className="tower">
			<motion.h1 variants={transitionItem}>Dart Monkey</motion.h1>
			<div className="tower-container">
				<div className="stats-container">
					<motion.div variants={transitionItem}>
						<table>
							<thead>
								<tr>
									<th colSpan="3">Main Projectile</th>
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
										<img src={Speed} alt="Speed"></img>&nbsp;
										{Math.round((1 / stats.speed) * 100) / 100}
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
					</motion.div>
					<motion.div variants={transitionItem}>
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
										<img src={Projectiles} alt="Projectiles"></img>&nbsp;
										{stats.projectilesSecondary}
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
					</motion.div>
					<motion.div variants={transitionItem}>
						<table>
							<thead>
								<tr>
									<th colSpan="3">
										{stats.abilityName ? "Ability: " : "Ability"}
										{stats.abilityName}
									</th>
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
										{stats.abilitySpeed > 0 ? Math.round((1 / stats.abilitySpeed) * 100) / 100 : 0}
										/s
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
					</motion.div>
					<motion.div variants={transitionItem}>
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
									<td data-tip="Can damage Purple Bloons?" data-for="purple">
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
									<td data-tip="Can damage Frozen Bloons?" data-for="frozen">
										<ReactTooltip
											effect="solid"
											textColor="#eceff4"
											backgroundColor="#4c566aff"
											arrowColor="transparent"
											multiline={true}
											id="frozen"
										/>
										<img src={Frozen} alt="frozen"></img>&nbsp;
										<img src={stats.frozen ? Yes : No} alt="Yes" className="yesno"></img>
									</td>
								</tr>
							</tbody>
						</table>
					</motion.div>
					<motion.div variants={transitionItem}>
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
									<td>${cost.easy}</td>
									<td>${cost.medium}</td>
								</tr>
								<tr>
									<td>${cost.hard}</td>
									<td>${cost.impoppable}</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th>Hard</th>
									<th>Impoppable</th>
								</tr>
							</tfoot>
						</table>
					</motion.div>
				</div>
				<div className="image-container">
					<motion.div variants={transitionItem} className="image-container-inner">
						<img src={images[image]} alt="Dart Monkey" className="tower-img"></img>
					</motion.div>
					<motion.div variants={transitionItem} className="tower-grid" id="tower-grid-par">
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p1-1")}
								id="p1-1"
								className={p1 === 1 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Sharp Shots<br>Can pop 1 extra Bloon per shot.<br>Cost: $120 / $140 / $150 / $170"
								data-for="p1-1"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p1-1"
								/>
								<img src={p11} alt="Sharp Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-2")}
								id="p1-2"
								className={p1 === 2 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Razor Sharp Shots<br>Can pop 2 more bloons per shot.<br>Cost: $185 / $220 / $235 / $265"
								data-for="p1-2"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p1-2"
								/>
								<img src={p12} alt="Razor Sharp Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-3")}
								id="p1-3"
								className={p1 === 3 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Spike-O-Pult<br>Converts the Dart Monkey into a Spike-o-pult that hurls a large spiked ball instead of darts.<br>Good range, but slower attack speed. Each ball can pop lots of Bloons and rebounds off obstacles.<br>Cost: $255 / $300 / $325 / $360"
								data-for="p1-3"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p1-3"
								/>
								<img src={p13} alt="Spike-O-Pult"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-4")}
								id="p1-4"
								className={p1 === 4 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Juggernaut<br>Hurls a giant spiked ball that pops lead and excels at crushing Ceramic Bloons.<br>Cost: $1.530 / $1.800 / $1.945 / $2.160"
								data-for="p1-4"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p1-4"
								/>
								<img src={p14} alt="Juggernaut"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-5")}
								id="p1-5"
								className={p1 === 5 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Ultra-Juggernaut<br>Gigantic spiked ball splits twice into 6 Juggernaut balls for even more destructive power.<br>Cost: $12.750 / $15.000 / $16.200 / $18.000"
								data-for="p1-5"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p1-5"
								/>
								<img src={p15} alt="Ultra-Juggernaut"></img>
							</button>
						</div>
						<div></div>
						<div>
							<h1 style={{ color: colors["c"] }}>C</h1>
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
								data-for="p2-1"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p2-1"
								/>
								<img src={p21} alt="Quick Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-2")}
								id="p2-2"
								className={p2 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Very Quick Shots<br>Shoots 33% faster!<br>Cost: $160 / $190 / $205 / $230"
								data-for="p2-2"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p2-2"
								/>
								<img src={p22} alt="Very Quick Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-3")}
								id="p2-3"
								className={p2 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Triple Shot<br>Throws 3 darts at a time instead of 1.<br>Cost: $340 / $400 / $430 / $480"
								data-for="p2-3"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p2-3"
								/>
								<img src={p23} alt="Triple Shot"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-4")}
								id="p2-4"
								className={p2 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Super Monkey Fan Club<br>Super Monkey Fan Club Ability: Converts up to 10 nearby Dart Monkeys including himself into Super Monkeys for 15 seconds.<br>Regular attack speed also increased.<br>Cost: $6.800 / $8.000 / $8.640 / $9.600"
								data-for="p2-4"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p2-4"
								/>
								<img src={p24} alt="Super Monkey Fan Club"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-5")}
								id="p2-5"
								className={p2 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Plasma Monkey Fan Club<br>Elite membership of this club grants the Dart Monkeys even more power.<br>Cost: $38.250 / $45.000 / $48.600 / $54.000"
								data-for="p2-5"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p2-5"
								/>
								<img src={p25} alt="Plasma Monkey Fan Club"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("par")}
								id="par"
								className={p1 === -1 ? "tower-active" : ""}
								data-tip="Apex Plasma Master<br>Fill the area with Bloon shredding plasma juggernaut balls, leaving nothing behind...<br>Cost: $297.500 / $350.000 / $378.600 / $420.000"
								data-for="par"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="par"
								/>
								<img src={par} alt="Apex Plasma Master"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["a-"] }}>A-</h1>
						</div>
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p3-1")}
								id="p3-1"
								className={p3 === 1 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Long Range Darts<br>Makes the Dart Monkey shoot further than normal.<br>Cost: $75 / $90 / $95 / $110"
								data-for="p3-1"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p3-1"
								/>
								<img src={p31} alt="Long Range Darts" title="Long Range Darts"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-2")}
								id="p3-2"
								className={p3 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Enhanced Eyesight<br>Shoots even further and can detect Camo bloons.<br>Cost: $170 / $200 / $215 / $240"
								data-for="p3-2"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p3-2"
								/>
								<img src={p32} alt="Enhanced Eyesight" title="Enhanced Eyesight"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-3")}
								id="p3-3"
								className={p3 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Crossbow<br>Uses a long range Crossbow that can pop 3 layers of Bloon for every hit.<br>Cost: $530 / $625 / $675 / $750"
								data-for="p3-3"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p3-3"
								/>
								<img src={p33} alt="Crossbow"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-4")}
								id="p3-4"
								className={p3 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Sharpshooter<br>Sharp Shooter attacks faster and does powerful Crit shots every few shots that do a lot more damage.<br>Cost: $1.700 / $2.000 / $2.160 / $2.400"
								data-for="p3-4"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p3-4"
								/>
								<img src={p34} alt="Sharpshooter"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-5")}
								id="p3-5"
								className={p3 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Crossbow Master<br>Crossbow Master shoots really fast and devastates most Bloon types with ease.<br>Cost: $21.250 / $25.000 / $27.000 / $30.000"
								data-for="p3-5"
							>
								<ReactTooltip
									effect="solid"
									textColor="#eceff4"
									backgroundColor="#4c566aff"
									arrowColor="transparent"
									multiline={true}
									id="p3-5"
								/>
								<img src={p35} alt="Crossbow Master"></img>
							</button>
						</div>
						<div></div>
						<div>
							<h1 style={{ color: colors["b-"] }}>B-</h1>
						</div>
					</motion.div>
				</div>
			</div>
			<motion.p variants={transitionItem} className="footer">
				Made by <a href="https://www.github.com/HolyHades">HolyHades</a>
			</motion.p>
		</motion.div>
	);
}
