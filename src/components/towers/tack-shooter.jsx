import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import M000 from "../../tack-shooter/000-TackShooter.png";
import M001 from "../../tack-shooter/001-TackShooter.png";
import M002 from "../../tack-shooter/002-TackShooter.png";
import M003 from "../../tack-shooter/003-TackShooter.png";
import M004 from "../../tack-shooter/004-TackShooter.png";
import M005 from "../../tack-shooter/005-TackShooter.png";
import M010 from "../../tack-shooter/010-TackShooter.png";
import M020 from "../../tack-shooter/020-TackShooter.png";
import M030 from "../../tack-shooter/030-TackShooter.png";
import M040 from "../../tack-shooter/040-TackShooter.png";
import M050 from "../../tack-shooter/050-TackShooter.png";
import M100 from "../../tack-shooter/100-TackShooter.png";
import M200 from "../../tack-shooter/200-TackShooter.png";
import M300 from "../../tack-shooter/300-TackShooter.png";
import M400 from "../../tack-shooter/400-TackShooter.png";
import M500 from "../../tack-shooter/500-TackShooter.png";
import Reset from "../../misc/CloseIcon.png";
import p11 from "../../tack-shooter/FasterShootingUpgradeIcon.png";
import p12 from "../../tack-shooter/EvenFasterShootingUpgradeIcon.png";
import p13 from "../../tack-shooter/HotShotsUpgradeIcon.png";
import p14 from "../../tack-shooter/RingOfFireUpgradeIcon.png";
import p15 from "../../tack-shooter/InfernoRingUpgradeIcon.png";
import p21 from "../../tack-shooter/LongRangeTacksUpgradeIcon.png";
import p22 from "../../tack-shooter/SuperRangeTacksUpgradeIcon.png";
import p23 from "../../tack-shooter/BladeShooterUpgradeIcon.png";
import p24 from "../../tack-shooter/BladeMaelstromUpgradeIcon.png";
import p25 from "../../tack-shooter/SuperMaelstromUpgradeIcon.png";
import p31 from "../../tack-shooter/MoreTacksUpgradeIcon.png";
import p32 from "../../tack-shooter/EvenMoreTacksUpgradeIcon.png";
import p33 from "../../tack-shooter/TackSprayerUpgradeIcon.png";
import p34 from "../../tack-shooter/OverdriveUpgradeIcon.png";
import p35 from "../../tack-shooter/TheTackZoneUpgradeIcon.png";
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

export default function TackShooter() {
	document.title = "Tack Shooter - BTD6 Stats";
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
			damage: 1,
			damageMOAB: 1,
			damageCeramic: 1,
			damageSecondary: 0,
			damageMOABSecondary: 0,
			damageCeramicSecondary: 0,
			pierce: 1,
			pierceSecondary: 0,
			projectiles: 8,
			projectilesSecondary: 0,
			speed: 1.4,
			range: 23,
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
			frozen: true,
			costEasy: 240,
			costMedium: 280,
			costHard: 300,
			costImpoppable: 335,
		},
	]);
	const [image, setImage] = useState("000");
	useEffect(() => {
		let costs = {
			"buy-e": 240,
			"buy-m": 280,
			"buy-h": 300,
			"buy-i": 335,
			"p1-1-e": 300,
			"p1-1-m": 350,
			"p1-1-h": 380,
			"p1-1-i": 420,
			"p1-2-e": 555,
			"p1-2-m": 650,
			"p1-2-h": 700,
			"p1-2-i": 780,
			"p1-3-e": 1020,
			"p1-3-m": 1200,
			"p1-3-h": 1295,
			"p1-3-i": 1440,
			"p1-4-e": 3060,
			"p1-4-m": 3600,
			"p1-4-h": 3890,
			"p1-4-i": 4320,
			"p1-5-e": 46750,
			"p1-5-m": 55000,
			"p1-5-h": 59400,
			"p1-5-i": 66000,
			"p2-1-e": 210,
			"p2-1-m": 250,
			"p2-1-h": 270,
			"p2-1-i": 300,
			"p2-2-e": 340,
			"p2-2-m": 400,
			"p2-2-h": 430,
			"p2-2-i": 480,
			"p2-3-e": 935,
			"p2-3-m": 1100,
			"p2-3-h": 1190,
			"p2-3-i": 1320,
			"p2-4-e": 2720,
			"p2-4-m": 3200,
			"p2-4-h": 3455,
			"p2-4-i": 3840,
			"p2-5-e": 21250,
			"p2-5-m": 25000,
			"p2-5-h": 27000,
			"p2-5-i": 30000,
			"p3-1-e": 170,
			"p3-1-m": 200,
			"p3-1-h": 215,
			"p3-1-i": 240,
			"p3-2-e": 255,
			"p3-2-m": 300,
			"p3-2-h": 325,
			"p3-2-i": 360,
			"p3-3-e": 680,
			"p3-3-m": 800,
			"p3-3-h": 865,
			"p3-3-i": 960,
			"p3-4-e": 2380,
			"p3-4-m": 2800,
			"p3-4-h": 3025,
			"p3-4-i": 3360,
			"p3-5-e": 29750,
			"p3-5-m": 35000,
			"p3-5-h": 37800,
			"p3-5-i": 42000,
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
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 23,
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
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.05,
					range: 23,
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
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 23,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 23,
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
					damage: 3,
					damageMOAB: 3,
					damageCeramic: 3,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 60,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.5355,
					range: 23,
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
					purple: false,
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
					damage: 4,
					damageMOAB: 10,
					damageCeramic: 4,
					damageSecondary: 700,
					damageMOABSecondary: 700,
					damageCeramicSecondary: 700,
					pierce: 60,
					pierceSecondary: 1,
					projectiles: 8,
					projectilesSecondary: 1,
					speed: 0.1,
					range: 34.5,
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
					purple: false,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 27,
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
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 31,
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
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
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
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
					abilityName: "Maelstrom",
					abilityDuration: 3,
					abilityCooldown: 20,
					abilityDamage: 1,
					abilityPierce: 200,
					abilitySpeed: 0.0333,
					abilityRange: Infinity,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: false,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
					abilityName: "Super Maelstrom",
					abilityDuration: 9,
					abilityCooldown: 20,
					abilityDamage: 2,
					abilityPierce: 500,
					abilitySpeed: 0.0333,
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
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 23,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 23,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 1.05,
					range: 23,
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
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 0.35,
					range: 23,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 32,
					projectilesSecondary: 0,
					speed: 0.2625,
					range: 30,
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
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.05,
					range: 27,
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
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 27,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 27,
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
					damage: 3,
					damageMOAB: 3,
					damageCeramic: 3,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 70,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.5355,
					range: 27,
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
					purple: false,
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
					damage: 4,
					damageMOAB: 10,
					damageCeramic: 4,
					damageSecondary: 700,
					damageMOABSecondary: 700,
					damageCeramicSecondary: 700,
					pierce: 70,
					pierceSecondary: 1,
					projectiles: 8,
					projectilesSecondary: 1,
					speed: 0.1,
					range: 38.5,
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
					purple: false,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.05,
					range: 31,
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
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 31,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 31,
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
					damage: 3,
					damageMOAB: 3,
					damageCeramic: 3,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 80,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.5355,
					range: 31,
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
					purple: false,
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
					damage: 4,
					damageMOAB: 10,
					damageCeramic: 4,
					damageSecondary: 700,
					damageMOABSecondary: 700,
					damageCeramicSecondary: 700,
					pierce: 80,
					pierceSecondary: 1,
					projectiles: 8,
					projectilesSecondary: 1,
					speed: 0.1,
					range: 42.5,
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
					purple: false,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 1.05,
					range: 23,
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
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 23,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 23,
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
					damage: 4,
					damageMOAB: 4,
					damageCeramic: 4,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 60,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 0.5355,
					range: 23,
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
					purple: false,
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
					damage: 5,
					damageMOAB: 10,
					damageCeramic: 5,
					damageSecondary: 700,
					damageMOABSecondary: 700,
					damageCeramicSecondary: 700,
					pierce: 60,
					pierceSecondary: 1,
					projectiles: 10,
					projectilesSecondary: 1,
					speed: 0.1,
					range: 34.5,
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
					purple: false,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 1.05,
					range: 23,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 23,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 0.63,
					range: 23,
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
					damage: 5,
					damageMOAB: 5,
					damageCeramic: 5,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 60,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 0.5355,
					range: 23,
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
					purple: false,
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
					damage: 6,
					damageMOAB: 11,
					damageCeramic: 6,
					damageSecondary: 700,
					damageMOABSecondary: 700,
					damageCeramicSecondary: 700,
					pierce: 60,
					pierceSecondary: 1,
					projectiles: 12,
					projectilesSecondary: 1,
					speed: 0.1,
					range: 34.5,
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
					purple: false,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.8925,
					range: 31,
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
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.8925,
					range: 31,
					abilityName: "Maelstrom",
					abilityDuration: 3,
					abilityCooldown: 20,
					abilityDamage: 1,
					abilityPierce: 200,
					abilitySpeed: 0.0333,
					abilityRange: Infinity,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: false,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.8925,
					range: 31,
					abilityName: "Super Maelstrom",
					abilityDuration: 9,
					abilityCooldown: 20,
					abilityDamage: 2,
					abilityPierce: 500,
					abilitySpeed: 0.0333,
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
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.5355,
					range: 31,
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
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.5355,
					range: 31,
					abilityName: "Maelstrom",
					abilityDuration: 3,
					abilityCooldown: 20,
					abilityDamage: 1,
					abilityPierce: 200,
					abilitySpeed: 0.0333,
					abilityRange: Infinity,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: false,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 0.5355,
					range: 31,
					abilityName: "Super Maelstrom",
					abilityDuration: 9,
					abilityCooldown: 20,
					abilityDamage: 2,
					abilityPierce: 500,
					abilitySpeed: 0.0333,
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
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 27,
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
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 31,
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
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
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
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
					abilityName: "Maelstrom",
					abilityDuration: 3,
					abilityCooldown: 20,
					abilityDamage: 1,
					abilityPierce: 200,
					abilitySpeed: 0.0333,
					abilityRange: Infinity,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: false,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 10,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
					abilityName: "Super Maelstrom",
					abilityDuration: 9,
					abilityCooldown: 20,
					abilityDamage: 2,
					abilityPierce: 500,
					abilitySpeed: 0.0333,
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
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
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
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
					abilityName: "Maelstrom",
					abilityDuration: 3,
					abilityCooldown: 20,
					abilityDamage: 1,
					abilityPierce: 200,
					abilitySpeed: 0.0333,
					abilityRange: Infinity,
					camo: false,
					black: true,
					white: true,
					purple: true,
					lead: false,
					frozen: false,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 6,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 1.19,
					range: 31,
					abilityName: "Super Maelstrom",
					abilityDuration: 9,
					abilityCooldown: 20,
					abilityDamage: 2,
					abilityPierce: 500,
					abilitySpeed: 0.0333,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 0.7875,
					range: 23,
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
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 0.2625,
					range: 23,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 32,
					projectilesSecondary: 0,
					speed: 0.196875,
					range: 30,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 0.4725,
					range: 23,
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
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 0.1575,
					range: 23,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 32,
					projectilesSecondary: 0,
					speed: 0.118125,
					range: 30,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 27,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 1.05,
					range: 27,
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
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 0.35,
					range: 27,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 32,
					projectilesSecondary: 0,
					speed: 0.2625,
					range: 34,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 12,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 31,
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
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 1.05,
					range: 31,
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
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 2,
					pierceSecondary: 0,
					projectiles: 16,
					projectilesSecondary: 0,
					speed: 0.35,
					range: 31,
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
					damage: 2,
					damageMOAB: 2,
					damageCeramic: 2,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 4,
					pierceSecondary: 0,
					projectiles: 32,
					projectilesSecondary: 0,
					speed: 0.2625,
					range: 38,
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
					damage: 1,
					damageMOAB: 1,
					damageCeramic: 1,
					damageSecondary: 0,
					damageMOABSecondary: 0,
					damageCeramicSecondary: 0,
					pierce: 1,
					pierceSecondary: 0,
					projectiles: 8,
					projectilesSecondary: 0,
					speed: 1.4,
					range: 23,
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
			<h1>Tack Shooter</h1>
			<div className="tower-container">
				<div className="stats-container">
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
				</div>
				<div className="image-container">
					<div className="image-container-inner">
						<img src={images[image]} alt="Tack Shooter" className="tower-img"></img>
					</div>
					<div className="tower-grid">
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p1-1")}
								id="p1-1"
								className={p1 === 1 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Faster Shooting<br>Shoots tacks faster.<br>Cost: $125 / $150 / $160 / $180"
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
								<img src={p11} alt="Faster Shooting"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-2")}
								id="p1-2"
								className={p1 === 2 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Even Faster Shooting<br>Shoots tacks even faster.<br>Cost: $255 / $300 / $325 / $360"
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
								<img src={p12} alt="Even Faster Shooting"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-3")}
								id="p1-3"
								className={p1 === 3 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Hot Shots<br>Shoots superhot tacks that do extra damage and can pop Lead Bloons.<br>Cost: $510 / $600 / $650 / $720"
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
								<img src={p13} alt="Hot Shots"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-4")}
								id="p1-4"
								className={p1 === 4 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Ring of Fire<br>Shoots a deadly ring of flames instead of tacks.<br>Cost: $2.975 / $3.500 / $3.780 / $4.200"
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
								<img src={p14} alt="Ring of Fire"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-5")}
								id="p1-5"
								className={p1 === 5 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Inferno Ring<br>Deadly inferno of flame roasts Bloons into oblivion.<br>Cost: $38.675 / $45.500 / $49.140 / $54.600"
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
								<img src={p15} alt="Inferno Ring"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["b-"] }}>B-</h1>
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
								data-tip="Long Range Tacks<br>Tacks fly out further than normal.<br>Cost: $85 / $100 / $110 / $120"
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
								<img src={p21} alt="Long Range Tacks"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-2")}
								id="p2-2"
								className={p2 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Super Range Tacks<br>Even longer range tacksthat can pop more Bloons.<br>Cost: $190 / $225 / $245 / $270"
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
								<img src={p22} alt="Super Range Tacks"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-3")}
								id="p2-3"
								className={p2 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Blade Shooter<br>Switches tacks for sharp blades that can pop up to 5 additional Bloons.<br>Cost: $465 / $550 / $595 / $660"
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
								<img src={p23} alt="Blade Shooter"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-4")}
								id="p2-4"
								className={p2 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Blade Maelstrom<br>Blade Maelstrom ability: Covers the area in a storm of blades.<br>Cost: $2.295 / $2.700 / $2.915 / $3.240"
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
								<img src={p24} alt="Blade Maelstrom"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-5")}
								id="p2-5"
								className={p2 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Super Maelstrom<br>Even more powerful Maelstrom ability and lasts longer.<br>Cost: $12.750 / $15.000 / $16.200 / $18.000"
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
								<img src={p25} alt="Super Maelstrom"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["b"] }}>B</h1>
						</div>
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p3-1")}
								id="p3-1"
								className={p3 === 1 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="More Tacks<br>Shoots 10 tacks instead of 8, plus increases Ring of Fire damage.<br>Cost: $85 / $100 / $110 / $120"
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
								<img src={p31} alt="More Tacks"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-2")}
								id="p3-2"
								className={p3 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Even More Tacks<br>Shoots out 12 tacks per shot and increases Ring of Fire damage further.<br>Cost: $85 / $100 / $110 / $120"
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
								<img src={p32} alt="Even More Tacks"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-3")}
								id="p3-3"
								className={p3 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Tack Sprayer<br>Sprays out 16 tacks per volley.<br>Cost: $350 / $450 / $485 / $540"
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
								<img src={p33} alt="Tack Sprayer"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-4")}
								id="p3-4"
								className={p3 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Overdrive<br>Shoots incredibly fast.<br>Cost: $2.720 / $3.200 / $3.455 / $3.840"
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
								<img src={p34} alt="Overdrive"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-5")}
								id="p3-5"
								className={p3 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="The Tack Zone<br>Many, many tacks.<br>Cost: $17.000 / $20.000 / $21.600 / $24.000"
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
								<img src={p35} alt="The Tack Zone"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["b"] }}>B</h1>
						</div>
					</div>
				</div>
			</div>
			<p className="footer">
				Made by <a href="https://www.github.com/HolyHades">HolyHades</a>
			</p>
		</motion.div>
	);
}
