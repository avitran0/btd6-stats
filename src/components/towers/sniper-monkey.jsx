import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import M000 from "../../sniper-monkey/000-SniperMonkey.png";
import M001 from "../../sniper-monkey/001-SniperMonkey.png";
import M002 from "../../sniper-monkey/002-SniperMonkey.png";
import M003 from "../../sniper-monkey/003-SniperMonkey.png";
import M004 from "../../sniper-monkey/004-SniperMonkey.png";
import M005 from "../../sniper-monkey/005-SniperMonkey.png";
import M010 from "../../sniper-monkey/010-SniperMonkey.png";
import M020 from "../../sniper-monkey/020-SniperMonkey.png";
import M030 from "../../sniper-monkey/030-SniperMonkey.png";
import M040 from "../../sniper-monkey/040-SniperMonkey.png";
import M050 from "../../sniper-monkey/050-SniperMonkey.png";
import M100 from "../../sniper-monkey/100-SniperMonkey.png";
import M200 from "../../sniper-monkey/200-SniperMonkey.png";
import M300 from "../../sniper-monkey/300-SniperMonkey.png";
import M400 from "../../sniper-monkey/400-SniperMonkey.png";
import M500 from "../../sniper-monkey/500-SniperMonkey.png";
import Reset from "../../misc/CloseIcon.png";
import p11 from "../../sniper-monkey/FullMetalJacketUpgradeIcon.png";
import p12 from "../../sniper-monkey/LongCalibreUpgradeIcon.png";
import p13 from "../../sniper-monkey/DeadlyPrecisionUpgradeIcon.png";
import p14 from "../../sniper-monkey/MaimMoabUpgradeIcon.png";
import p15 from "../../sniper-monkey/CrippleMoabUpgradeIcon.png";
import p21 from "../../sniper-monkey/NightVisionGogglesUpgradeIcon.png";
import p22 from "../../sniper-monkey/ShrapnelShotUpgradeIcon.png";
import p23 from "../../sniper-monkey/BouncingBulletUpgradeIcon.png";
import p24 from "../../sniper-monkey/CashDropUpgradeIcon.png";
import p25 from "../../sniper-monkey/EliteSniperUpgradeIcon.png";
import p31 from "../../sniper-monkey/FastFiringUpgradeIcon.png";
import p32 from "../../sniper-monkey/EvenFasterFiringUpgradeIcon.png";
import p33 from "../../sniper-monkey/SemiAutomaticUpgradeIcon.png";
import p34 from "../../sniper-monkey/FullAutoRifleUpgradeIcon.png";
import p35 from "../../sniper-monkey/EliteDefenderUpgradeIcon.png";
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

export default function SniperMonkey() {
	document.title = "Sniper Monkey - BTD6 Stats";
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
			damage: 2,
			damageMOAB: 2,
			damageCeramic: 2,
			damageSecondary: 0,
			damageMOABSecondary: 0,
			damageCeramicSecondary: 0,
			pierce: 1,
			pierceSecondary: 0,
			projectiles: 1,
			projectilesSecondary: 0,
			speed: 1.59,
			range: Infinity,
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
			frozen: false,
			costEasy: 295,
			costMedium: 350,
			costHard: 380,
			costImpoppable: 420,
		},
	]);
	const [image, setImage] = useState("000");
	useEffect(() => {
		let costs = {
			"buy-e": 295,
			"buy-m": 350,
			"buy-h": 380,
			"buy-i": 420,
			"p1-1-e": 295,
			"p1-1-m": 350,
			"p1-1-h": 380,
			"p1-1-i": 420,
			"p1-2-e": 1275,
			"p1-2-m": 1500,
			"p1-2-h": 1620,
			"p1-2-i": 1800,
			"p1-3-e": 2550,
			"p1-3-m": 3000,
			"p1-3-h": 3240,
			"p1-3-i": 3600,
			"p1-4-e": 4250,
			"p1-4-m": 5000,
			"p1-4-h": 5400,
			"p1-4-i": 6000,
			"p1-5-e": 28900,
			"p1-5-m": 34000,
			"p1-5-h": 36720,
			"p1-5-i": 40800,
			"p2-1-e": 255,
			"p2-1-m": 300,
			"p2-1-h": 325,
			"p2-1-i": 360,
			"p2-2-e": 380,
			"p2-2-m": 450,
			"p2-2-h": 485,
			"p2-2-i": 540,
			"p2-3-e": 2720,
			"p2-3-m": 3200,
			"p2-3-h": 3455,
			"p2-3-i": 3840,
			"p2-4-e": 6120,
			"p2-4-m": 7200,
			"p2-4-h": 7775,
			"p2-4-i": 8640,
			"p2-5-e": 11050,
			"p2-5-m": 13000,
			"p2-5-h": 14040,
			"p2-5-i": 15600,
			"p3-1-e": 340,
			"p3-1-m": 400,
			"p3-1-h": 430,
			"p3-1-i": 480,
			"p3-2-e": 340,
			"p3-2-m": 400,
			"p3-2-h": 430,
			"p3-2-i": 480,
			"p3-3-e": 2975,
			"p3-3-m": 3500,
			"p3-3-h": 3780,
			"p3-3-i": 4200,
			"p3-4-e": 3610,
			"p3-4-m": 4250,
			"p3-4-h": 4590,
			"p3-4-i": 5100,
			"p3-5-e": 11900,
			"p3-5-m": 14000,
			"p3-5-h": 15120,
			"p3-5-i": 16800,
		};
		switch (String(p1) + String(p2) + String(p3)) {
			case "000":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"],
					costMedium: costs["buy-m"],
					costHard: costs["buy-h"],
					costImpoppable: costs["buy-i"],
				});
				setImage("000");
				break;
			case "100":
				setStats({
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					damage: 7,
					damageMOAB: 7,
					damageCeramic: 7,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					damage: 20,
					damageMOAB: 20,
					damageCeramic: 35,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					damage: 30,
					damageMOAB: 30,
					damageCeramic: 45,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					damage: 80,
					damageMOAB: 80,
					damageCeramic: 95,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"] + costs["p2-1-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"],
				});
				setImage("010");
				break;
			case "020":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 1,
					pierceSecondary: 2,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"],
				});
				setImage("020");
				break;
			case "030":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p2-3-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p2-3-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p2-3-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p2-3-i"],
				});
				setImage("030");
				break;
			case "040":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
					abilityName: "Supply Drop",
					abilityDuration: 0,
					abilityCooldown: 90,
					abilityDamage: "1200$",
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: 0,
					camo: true,
					black: true,
					white: true,
					purple: true,
					lead: true,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 0.636,
					range: Infinity,
					abilityName: "Elite Supply Drop",
					abilityDuration: 0,
					abilityCooldown: 90,
					abilityDamage: "3000$",
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.113,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"],
					costImpoppable: costs["buy-i"] + costs["p3-1-i"],
				});
				setImage("001");
				break;
			case "002":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7791,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"],
					costImpoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"],
				});
				setImage("002");
				break;
			case "003":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.2597,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"] + costs["p3-1-e"] + costs["p3-2-e"] + costs["p3-3-e"],
					costMedium: costs["buy-m"] + costs["p3-1-m"] + costs["p3-2-m"] + costs["p3-3-m"],
					costHard: costs["buy-h"] + costs["p3-1-h"] + costs["p3-2-h"] + costs["p3-3-h"],
					costImpoppable: costs["buy-i"] + costs["p3-1-i"] + costs["p3-2-i"] + costs["p3-3-i"],
				});
				setImage("003");
				break;
			case "004":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.12985,
					range: Infinity,
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
					frozen: false,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.064925,
					range: Infinity,
					abilityName: "Retaliation",
					abilityDuration: 7,
					abilityCooldown: 10,
					abilityDamage: 0,
					abilityPierce: 0,
					abilitySpeed: 0.01623125,
					abilityRange: 0,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: false,
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
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p2-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p2-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p2-1-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p2-1-i"],
				});
				setImage("010");
				break;
			case "210":
				setStats({
					damage: 7,
					damageMOAB: 7,
					damageCeramic: 7,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p1-2-e"] + costs["p2-1-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p1-2-m"] + costs["p2-1-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p1-2-h"] + costs["p2-1-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p1-2-i"] + costs["p2-1-i"],
				});
				setImage("200");
				break;
			case "310":
				setStats({
					damage: 20,
					damageMOAB: 20,
					damageCeramic: 35,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					damage: 30,
					damageMOAB: 30,
					damageCeramic: 45,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					damage: 80,
					damageMOAB: 80,
					damageCeramic: 95,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 1,
					pierceSecondary: 2,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					costEasy: costs["buy-e"] + costs["p1-1-e"] + costs["p2-1-e"] + costs["p2-2-e"],
					costMedium: costs["buy-m"] + costs["p1-1-m"] + costs["p2-1-m"] + costs["p2-2-m"],
					costHard: costs["buy-h"] + costs["p1-1-h"] + costs["p2-1-h"] + costs["p2-2-h"],
					costImpoppable: costs["buy-i"] + costs["p1-1-i"] + costs["p2-1-i"] + costs["p2-2-i"],
				});
				setImage("020");
				break;
			case "220":
				setStats({
					damage: 7,
					damageMOAB: 7,
					damageCeramic: 7,
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 1,
					pierceSecondary: 2,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					damage: 20,
					damageMOAB: 20,
					damageCeramic: 35,
					damageSecondary: 4,
					damageMOABSecondary: 4,
					damageCeramicSecondary: 4,
					pierce: 1,
					pierceSecondary: 2,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					damage: 30,
					damageMOAB: 30,
					damageCeramic: 45,
					damageSecondary: 6,
					damageMOABSecondary: 6,
					damageCeramicSecondary: 6,
					pierce: 1,
					pierceSecondary: 2,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					damage: 80,
					damageMOAB: 80,
					damageCeramic: 95,
					damageSecondary: 12,
					damageMOABSecondary: 12,
					damageCeramicSecondary: 12,
					pierce: 1,
					pierceSecondary: 2,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.113,
					range: Infinity,
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
					damage: 7,
					damageMOAB: 7,
					damageCeramic: 7,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.113,
					range: Infinity,
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
					damage: 20,
					damageMOAB: 20,
					damageCeramic: 35,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.113,
					range: Infinity,
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
					damage: 30,
					damageMOAB: 30,
					damageCeramic: 45,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.113,
					range: Infinity,
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
					damage: 80,
					damageMOAB: 80,
					damageCeramic: 95,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.113,
					range: Infinity,
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
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7791,
					range: Infinity,
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
					damage: 7,
					damageMOAB: 7,
					damageCeramic: 7,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7791,
					range: Infinity,
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
					damage: 20,
					damageMOAB: 20,
					damageCeramic: 35,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7791,
					range: Infinity,
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
					damage: 30,
					damageMOAB: 30,
					damageCeramic: 45,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7791,
					range: Infinity,
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
					damage: 80,
					damageMOAB: 80,
					damageCeramic: 95,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.7791,
					range: Infinity,
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
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
					abilityName: "Supply Drop",
					abilityDuration: 0,
					abilityCooldown: 90,
					abilityDamage: "1200$",
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
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 0.636,
					range: Infinity,
					abilityName: "Elite Supply Drop",
					abilityDuration: 0,
					abilityCooldown: 90,
					abilityDamage: "3000$",
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
					damage: 7,
					damageMOAB: 7,
					damageCeramic: 7,
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
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
					damage: 7,
					damageMOAB: 7,
					damageCeramic: 7,
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.59,
					range: Infinity,
					abilityName: "Supply Drop",
					abilityDuration: 0,
					abilityCooldown: 90,
					abilityDamage: "1200$",
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
					damage: 7,
					damageMOAB: 7,
					damageCeramic: 7,
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 0.636,
					range: Infinity,
					abilityName: "Elite Supply Drop",
					abilityDuration: 0,
					abilityCooldown: 90,
					abilityDamage: "3000$",
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.113,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p3-1-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p3-1-i"],
				});
				setImage("010");
				break;
			case "021":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 1,
					pierceSecondary: 2,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.113,
					range: Infinity,
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
					frozen: false,
					costEasy: costs["buy-e"] + costs["p2-1-e"] + costs["p2-2-e"] + costs["p3-1-e"],
					costMedium: costs["buy-m"] + costs["p2-1-m"] + costs["p2-2-m"] + costs["p3-1-m"],
					costHard: costs["buy-h"] + costs["p2-1-h"] + costs["p2-2-h"] + costs["p3-1-h"],
					costImpoppable: costs["buy-i"] + costs["p2-1-i"] + costs["p2-2-i"] + costs["p3-1-i"],
				});
				setImage("020");
				break;
			case "031":
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.113,
					range: Infinity,
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
					frozen: false,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 5,
					pierceSecondary: 3,
					projectiles: 1,
					projectilesSecondary: 5,
					speed: 1.113,
					range: Infinity,
					abilityName: "Supply Drop",
					abilityDuration: 0,
					abilityCooldown: 90,
					abilityDamage: "1200$",
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
					damageMOAB: 130,
					damageCeramic: 5,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 14,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 0.825,
					range: 56,
					abilityName: "Eliminate MOAB",
					abilityDuration: 0,
					abilityCooldown: 10,
					abilityDamage: 4500,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
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
					damageMOAB: 19,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 14,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 0.825,
					range: 58,
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
					damageMOAB: 31,
					damageCeramic: 5,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 14,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 0.825,
					range: 58,
					abilityName: "Assassinate MOAB",
					abilityDuration: 0,
					abilityCooldown: 30,
					abilityDamage: 750,
					abilityPierce: 1,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
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
					damageMOAB: 130,
					damageCeramic: 5,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 14,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 0.825,
					range: 58,
					abilityName: "Eliminate MOAB",
					abilityDuration: 0,
					abilityCooldown: 10,
					abilityDamage: 4500,
					abilityPierce: 0,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: true,
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
					pierce: 20,
					pierceSecondary: 10,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.5,
					range: 49,
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
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 20,
					pierceSecondary: 106,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.5,
					range: 49,
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
					damage: 5,
					damageMOAB: 5,
					damageCeramic: 5,
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 20,
					pierceSecondary: 70,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.5,
					range: 49,
					abilityName: "Bomb Blitz",
					abilityDuration: 0,
					abilityCooldown: 40,
					abilityDamage: 2000,
					abilityPierce: Infinity,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: false,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 1,
					damageMOABSecondary: 1,
					damageCeramicSecondary: 1,
					pierce: 30,
					pierceSecondary: 10,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.5,
					range: 49,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 3,
					damageMOABSecondary: 3,
					damageCeramicSecondary: 3,
					pierce: 30,
					pierceSecondary: 166,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.5,
					range: 49,
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
					damage: 6,
					damageMOAB: 6,
					damageCeramic: 6,
					damageSecondary: 3,
					damageMOABSecondary: 3,
					damageCeramicSecondary: 3,
					pierce: 30,
					pierceSecondary: 166,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.5,
					range: 49,
					abilityName: "Bomb Blitz",
					abilityDuration: 0,
					abilityCooldown: 40,
					abilityDamage: 2000,
					abilityPierce: Infinity,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: false,
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
					pierce: 14,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.125,
					range: 49,
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
					pierce: 14,
					pierceSecondary: 10,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.125,
					range: 49,
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
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 14,
					pierceSecondary: 70,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.125,
					range: 49,
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
					damage: 5,
					damageMOAB: 5,
					damageCeramic: 5,
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 14,
					pierceSecondary: 70,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 1.125,
					range: 49,
					abilityName: "Bomb Blitz",
					abilityDuration: 0,
					abilityCooldown: 40,
					abilityDamage: 2000,
					abilityPierce: Infinity,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: false,
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
					pierce: 14,
					pierceSecondary: 1,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 0.825,
					range: 53,
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
					pierce: 14,
					pierceSecondary: 10,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 0.825,
					range: 53,
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
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 14,
					pierceSecondary: 70,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 0.825,
					range: 53,
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
					damage: 5,
					damageMOAB: 5,
					damageCeramic: 5,
					damageSecondary: 2,
					damageMOABSecondary: 2,
					damageCeramicSecondary: 2,
					pierce: 14,
					pierceSecondary: 70,
					projectiles: 1,
					projectilesSecondary: 8,
					speed: 0.825,
					range: 53,
					abilityName: "Bomb Blitz",
					abilityDuration: 0,
					abilityCooldown: 40,
					abilityDamage: 2000,
					abilityPierce: Infinity,
					abilitySpeed: 0.0,
					abilityRange: Infinity,
					camo: false,
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
			default:
				setStats({
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 1,
					projectilesSecondary: 0,
					speed: 1.59,
					range: Infinity,
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
					frozen: false,
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
			default:
				break;
		}
	}
	return (
		<motion.div initial="hidden" animate="show" exit="hidden" variants={transitionContainer} className="tower">
			<motion.h1 variants={transitionItem}>Sniper Monkey</motion.h1>
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
						<img src={images[image]} alt="Bomb Shooter" className="tower-img"></img>
					</motion.div>
					<motion.div variants={transitionItem} className="tower-grid">
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p1-1")}
								id="p1-1"
								className={p1 === 1 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Full Metal Jacket<br>Shots pop through 4 layers of bloon,<br>and both bullets and shrapnel can pop Lead and Frozen Bloons.<br>Cost: $295 / $350 / $380 / $420"
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
								<img src={p11} alt="Full Metal Jacket"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-2")}
								id="p1-2"
								className={p1 === 2 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Large Calibre<br>Shots can pop through 7 layers of Bloon.<br>Cost: $1.275 / $1.500 / $1.620 / $1.800"
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
								<img src={p12} alt="Large Calibre"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-3")}
								id="p1-3"
								className={p1 === 3 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Deadly Precision<br>20 damage per shot, plus bonus damage to Ceramics.<br>Cost: $2.550 / $3.000 / $3.240 / $3.600"
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
								<img src={p13} alt="Deadly Precision"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-4")}
								id="p1-4"
								className={p1 === 4 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Maim MOAB<br>Deals much more damage and immobilizes MOAB class bloons for a short time.<br>Cost: $4.250 / $5.000 / $5.400 / $6.000"
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
								<img src={p14} alt="Maim MOAB"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-5")}
								id="p1-5"
								className={p1 === 5 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Cripple MOAB<br>Crippled MOABs are immobilized for longer and take extra damage from all other attacks.<br>Cost: $28.900 / $34.000 / $36.720 / $40.800"
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
								<img src={p15} alt="Cripple MOAB"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["s-"] }}>S-</h1>
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
								data-tip="Night Vision Goggles<br>Allows Sniper to detect and do an additional 2 damage to Camo bloons.<br>Cost: $255 / $300 / $325 / $360"
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
								<img src={p21} alt="Night Vision Goggles"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-2")}
								id="p2-2"
								className={p2 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Shrapnel Shot<br>Damaged bloons spray out a cone of sharp shrapnel.<br>Cost: $380 / $450 / $485 / $540"
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
								<img src={p22} alt="Shrapnel Shot"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-3")}
								id="p2-3"
								className={p2 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Bouncing Bullet<br>Shots bounce to new targets up to 3 times.<br>Cost: $2.720 / $3.200 / $3.455 / $3.840"
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
								<img src={p23} alt="Bouncing Bullet"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-4")}
								id="p2-4"
								className={p2 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Supply Drop<br>Supply Drop ability: Drops a crate full of cash.<br>Regular attack also damages Lead Bloons and increases Shrapnel popping power.<br>Cost: $6.120 / $7.200 / $7.775 / $8.640"
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
								<img src={p24} alt="Supply Drop"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-5")}
								id="p2-5"
								className={p2 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Elite Sniper<br>Supply Drop gives much more cash.<br>Grants Elite targeting prio and faster reload to all snipers.<br>Cost: $11.050 / $13.000 / $14.040 / $15.600"
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
								<img src={p25} alt="Elite Sniper"></img>
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
								data-tip="Fast Firing<br>Shoots faster than normal.<br>Cost: $340 / $400 / $430 / $480"
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
								<img src={p31} alt="Fast Firing"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-2")}
								id="p3-2"
								className={p3 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Even Faster Firing<br>Shoots even faster!<br>Cost: $340 / $400 / $430 / $480"
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
								<img src={p32} alt="Even Faster Firing"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-3")}
								id="p3-3"
								className={p3 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Semi-Automatic<br>Attacks 3x as fast!<br>Cost: $2.975 / $3.500 / $3.780 / $4.200"
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
								<img src={p33} alt="Semi-Automatic"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-4")}
								id="p3-4"
								className={p3 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Full Auto Rifle<br>Fully automatic weapon with incredible popping power.<br>Cost: $3.610 / $4.250 / $4.590 / $5.100"
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
								<img src={p34} alt="Full Auto Rifle"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-5")}
								id="p3-5"
								className={p3 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Elite Defender<br>A lost life gives this Sniper 4x attack speed for a short time in retaliation.<br>Also attacks faster the further the Bloons are along the track.<br>Cost: $11.900 / $14.000 / $15.120 / $16.800"
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
								<img src={p35} alt="Elite Defender"></img>
							</button>
						</div>
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
