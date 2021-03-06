import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import M000 from "../../ninja-monkey/000-NinjaMonkey.png";
import M001 from "../../ninja-monkey/001-NinjaMonkey.png";
import M002 from "../../ninja-monkey/002-NinjaMonkey.png";
import M003 from "../../ninja-monkey/003-NinjaMonkey.png";
import M004 from "../../ninja-monkey/004-NinjaMonkey.png";
import M005 from "../../ninja-monkey/005-NinjaMonkey.png";
import M010 from "../../ninja-monkey/010-NinjaMonkey.png";
import M020 from "../../ninja-monkey/020-NinjaMonkey.png";
import M030 from "../../ninja-monkey/030-NinjaMonkey.png";
import M040 from "../../ninja-monkey/040-NinjaMonkey.png";
import M050 from "../../ninja-monkey/050-NinjaMonkey.png";
import M100 from "../../ninja-monkey/100-NinjaMonkey.png";
import M200 from "../../ninja-monkey/200-NinjaMonkey.png";
import M300 from "../../ninja-monkey/300-NinjaMonkey.png";
import M400 from "../../ninja-monkey/400-NinjaMonkey.png";
import M500 from "../../ninja-monkey/500-NinjaMonkey.png";
import Paragon from "../../ninja-monkey/AscendedShadow.png";
import Reset from "../../misc/CloseIcon.png";
import p11 from "../../ninja-monkey/NinjaDisciplineUpgradeIcon.png";
import p12 from "../../ninja-monkey/SharpShurikensUpgradeIcon.png";
import p13 from "../../ninja-monkey/DoubleShotUpgradeIcon.png";
import p14 from "../../ninja-monkey/BloonjitsuUpgradeIcon.png";
import p15 from "../../ninja-monkey/GrandmasterNinjaUpgradeIcon.png";
import p21 from "../../ninja-monkey/DistractionUpgradeIcon.png";
import p22 from "../../ninja-monkey/CounterEspionageUpgradeIcon.png";
import p23 from "../../ninja-monkey/ShinobiTacticsUpgradeIcon.png";
import p24 from "../../ninja-monkey/BloonSabotageUpgradeIcon.png";
import p25 from "../../ninja-monkey/GrandSaboteurUpgradeIcon.png";
import p31 from "../../ninja-monkey/SeekingShurikenUpgradeIcon.png";
import p32 from "../../ninja-monkey/CaltropsUpgradeIcon.png";
import p33 from "../../ninja-monkey/FlashBombUpgradeIcon.png";
import p34 from "../../ninja-monkey/StickyBombUpgradeIcon.png";
import p35 from "../../ninja-monkey/MasterBomberUpgradeIcon.png";
import par from "../../ninja-monkey/AscendedShadowUpgradeIcon.png";
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

export default function NinjaMonkey() {
	document.title = "Ninja Monkey - BTD6 Stats";
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
			speed: 0.7,
			range: 40,
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
			frozen: true,
			costEasy: 425,
			costMedium: 500,
			costHard: 540,
			costImpoppable: 600,
		},
	]);
	const [image, setImage] = useState("000");
	useEffect(() => {
		let costs = {
			"buy-e": 425,
			"buy-m": 500,
			"buy-h": 540,
			"buy-i": 600,
			"p1-1-e": 255,
			"p1-1-m": 300,
			"p1-1-h": 325,
			"p1-1-i": 360,
			"p1-2-e": 295,
			"p1-2-m": 350,
			"p1-2-h": 380,
			"p1-2-i": 420,
			"p1-3-e": 720,
			"p1-3-m": 850,
			"p1-3-h": 920,
			"p1-3-i": 1020,
			"p1-4-e": 2335,
			"p1-4-m": 2750,
			"p1-4-h": 2970,
			"p1-4-i": 3300,
			"p1-5-e": 29750,
			"p1-5-m": 35000,
			"p1-5-h": 37800,
			"p1-5-i": 42000,
			"p2-1-e": 295,
			"p2-1-m": 350,
			"p2-1-h": 380,
			"p2-1-i": 420,
			"p2-2-e": 425,
			"p2-2-m": 500,
			"p2-2-h": 540,
			"p2-2-i": 600,
			"p2-3-e": 765,
			"p2-3-m": 900,
			"p2-3-h": 970,
			"p2-3-i": 1080,
			"p2-4-e": 4420,
			"p2-4-m": 5200,
			"p2-4-h": 5615,
			"p2-4-i": 6240,
			"p2-5-e": 18700,
			"p2-5-m": 22000,
			"p2-5-h": 23760,
			"p2-5-i": 26400,
			"p3-1-e": 210,
			"p3-1-m": 250,
			"p3-1-h": 270,
			"p3-1-i": 300,
			"p3-2-e": 340,
			"p3-2-m": 400,
			"p3-2-h": 430,
			"p3-2-i": 480,
			"p3-3-e": 2335,
			"p3-3-m": 2750,
			"p3-3-h": 2970,
			"p3-3-i": 3300,
			"p3-4-e": 3825,
			"p3-4-m": 4500,
			"p3-4-h": 4860,
			"p3-4-i": 5400,
			"p3-5-e": 34000,
			"p3-5-m": 40000,
			"p3-5-h": 43200,
			"p3-5-i": 48000,
			"par-e": 510000,
			"par-m": 600000,
			"par-h": 648000,
			"par-i": 720000,
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
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 2,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p1-3-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p1-3-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p1-3-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p1-3-i"],
				});
				setImage("300");
				break;
			case "400":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 5,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.217,
					range: 57,
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
					frozen: true,
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
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					speed: 0.7,
					range: 40,
					abilityName: "Bloon Sabotage",
					abilityDuration: 15,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					speed: 0.7,
					range: 40,
					abilityName: "Grand Sabotage",
					abilityDuration: 30,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 6,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
					costEasy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					costImpoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "003":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 60,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
					costEasy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"],
					costImpoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "004":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 500,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 1000,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 2,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 5,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.217,
					range: 57,
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
					frozen: true,
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
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 2,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 5,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.217,
					range: 57,
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
					frozen: true,
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
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 2,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 5,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.217,
					range: 57,
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
					frozen: true,
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
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 6,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 4,
					pierceSecondary: 6,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damageCeramic: 1,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 4,
					pierceSecondary: 6,
					projectiles: 2,
					projectilesSecondary: 1,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 4,
					pierceSecondary: 6,
					projectiles: 5,
					projectilesSecondary: 1,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 4,
					pierceSecondary: 6,
					projectiles: 8,
					projectilesSecondary: 1,
					speed: 0.217,
					range: 57,
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
					frozen: true,
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
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
					abilityName: "Bloon Sabotage",
					abilityDuration: 15,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
					abilityName: "Grand Sabotage",
					abilityDuration: 30,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
					abilityName: "Bloon Sabotage",
					abilityDuration: 15,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
					costEasy:
						costs["buy-e"] +
						costs["p1-1-e"] +
						costs["p1-2-e"] +
						costs["p2-1-e"] +
						costs["p2-2-e"] +
						costs["p2-3-e"] +
						costs["p2-false4-e"],
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
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.42,
					range: 47,
					abilityName: "Grand Sabotage",
					abilityDuration: 30,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					speed: 0.7,
					range: 40,
					abilityName: "Bloon Sabotage",
					abilityDuration: 15,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					speed: 0.7,
					range: 40,
					abilityName: "Grand Sabotage",
					abilityDuration: 30,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 6,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 6,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
					abilityName: "Bloon Sabotage",
					abilityDuration: 15,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 6,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
					abilityName: "Grand Sabotage",
					abilityDuration: 30,
					abilityCooldown: 60,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 60,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 500,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 1000,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 4,
					pierceSecondary: 60,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 500,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.42,
					range: 47,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 1000,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 6,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "013":
				setStats({
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 60,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 500,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 1000,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 6,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 2,
					pierceSecondary: 60,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 500,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 1000,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 1,
					speed: 0.7,
					range: 40,
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
					frozen: true,
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
					damage: 32,
					damageMOAB: 32,
					damageCeramic: 32,
					damageSecondary: 96,
					damageMOABSecondary: 96,
					damageCeramicSecondary: 96,
					pierce: 4,
					pierceSecondary: 50,
					projectiles: 8,
					projectilesSecondary: 5,
					speed: 0.217,
					range: 70,
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
					frozen: true,
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
					speed: 0.7,
					range: 40,
					abilityName: "",
					abilityDuration: 0,
					abilityCooldown: 0,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: true,
					costEasy: costs["buy-e"],
					costMedium: costs["buy-m"],
					costHard: costs["buy-h"],
					costImpoppable: costs["buy-i"],
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
			<motion.h1 variants={transitionItem}>Ninja Monkey</motion.h1>
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
					</motion.div>
				</div>
				<div className="image-container">
					<motion.div variants={transitionItem} className="image-container-inner">
						<img src={images[image]} alt="Ninja Monkey" className="tower-img"></img>
					</motion.div>
					<motion.div variants={transitionItem} className="tower-grid" id="tower-grid-par">
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p1-1")}
								id="p1-1"
								className={p1 === 1 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Ninja Discipline<br>Increases attack range and attack speed.<br>Cost: $255 / $300 / $325 / $360"
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
								<img src={p11} alt="Ninja Discipline"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-2")}
								id="p1-2"
								className={p1 === 2 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Sharp Shurikens<br>Shurikens can pop 4 Bloons each.<br>Cost: $295 / $350 / $380 / $420"
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
								<img src={p12} alt="Sharp Shurikens"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-3")}
								id="p1-3"
								className={p1 === 3 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Double Shot<br>Throws 2 shurikens at once.<br>Cost: $720 / $850 / $920 / $1.020"
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
								<img src={p13} alt="Double Shot"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-4")}
								id="p1-4"
								className={p1 === 4 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Bloonjitsu<br>Throws 5 shurikens at once!<br>Cost: $2.335 / $2.750 / $2.970 / $3.300"
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
								<img src={p14} alt="Bloonjitsu"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-5")}
								id="p1-5"
								className={p1 === 5 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Grandmaster Ninja<br>Throws incredibly fast, 8 shurikens per shot!<br>Cost: $29.750 / $35.000 / $37.800 / $42.000"
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
								<img src={p15} alt="Grandmaster Ninja"></img>
							</button>
						</div>
						<div></div>
						<div>
							<h1 style={{ color: colors["a"] }}>A</h1>
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
								data-tip="Distraction<br>Some Bloons will become distracted and move backwards.<br>Cost: $295 / $350 / $380 / $420"
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
								<img src={p21} alt="Distraction"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-2")}
								id="p2-2"
								className={p2 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Counter-Espionage<br>Ninja attacks can strip camo from Bloons they damage.<br>Cost: $425 / $500 / $540 / $600"
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
								<img src={p22} alt="Counter-Espionage"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-3")}
								id="p2-3"
								className={p2 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Shinobi Tactics<br>Increases attack speed and pierce of nearby Ninjas. Stacks 20 times.<br>(0.92x Attack Speed and +8% Pierce per level)<br>Cost: $765 / $900 / $970 / $1.080"
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
								<img src={p23} alt="Shinobi Tactics"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-4")}
								id="p2-4"
								className={p2 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Bloon Sabotage<br>Sabotage ability: Lasts 15 seconds. During the sabotage, all Bloons move at half speed.<br>Cost: $4.420 / $5.200 / $5.615 / $6.240"
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
								<img src={p24} alt="Bloon Sabotage"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-5")}
								id="p2-5"
								className={p2 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Grand Saboteur<br>Ability duration is longer, and MOAB-Class Bloons spawn with less health during the sabotage.<br>Cost: $18.700 / $22.000 / $23.760 / $26.400"
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
								<img src={p25} alt="Grand Saboteur"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("par")}
								id="par"
								className={p1 === -1 ? "tower-active" : ""}
								data-tip="Ascended Shadow<br>The complete assassin package for dealing with any Bloon threat.<br>Cost: $510.000 / $600.000 / $648.000 / $720.000"
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
								<img src={par} alt="Ascended Shadow"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["s"] }}>S</h1>
						</div>
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p3-1")}
								id="p3-1"
								className={p3 === 1 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Seeking Shuriken<br>Shurikens will seek out and pop Bloons automatically.<br>Cost: $210 / $250 / $270 / $300"
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
								<img src={p31} alt="Seeking Shuriken"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-2")}
								id="p3-2"
								className={p3 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Caltrops<br>Throws out spiked caltrops onto the track nearby.<br>Cost: $340 / $400 / $430 / $480"
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
								<img src={p32} alt="Caltrops"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-3")}
								id="p3-3"
								className={p3 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Flash Bomb<br>Throws a flash bomb that stuns multiple Bloons.<br>Cost: $2.335 / $2.750 / $2.970 / $3.300"
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
								<img src={p33} alt="Flash Bomb"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-4")}
								id="p3-4"
								className={p3 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Sticky Bomb<br>Throws powerful timed charges at MOAB-Class Bloons.<br>Cost: $3.825 / $4.500 / $4.860 / $5.400"
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
								<img src={p34} alt="Sticky Bomb"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-5")}
								id="p3-5"
								className={p3 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Master Bomber<br>One Monkey MOAB demolition machine.<br>Cost: $34.000 / $40.000 / $43.200 / $48.000"
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
								<img src={p35} alt="Master Bomber"></img>
							</button>
						</div>
						<div></div>
						<div>
							<h1 style={{ color: colors["b"] }}>B</h1>
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
