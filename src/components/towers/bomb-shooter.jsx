import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import M000 from "../../bomb-shooter/000-BombShooter.png";
import M001 from "../../bomb-shooter/001-BombShooter.png";
import M002 from "../../bomb-shooter/002-BombShooter.png";
import M003 from "../../bomb-shooter/003-BombShooter.png";
import M004 from "../../bomb-shooter/004-BombShooter.png";
import M005 from "../../bomb-shooter/005-BombShooter.png";
import M010 from "../../bomb-shooter/010-BombShooter.png";
import M020 from "../../bomb-shooter/020-BombShooter.png";
import M030 from "../../bomb-shooter/030-BombShooter.png";
import M040 from "../../bomb-shooter/040-BombShooter.png";
import M050 from "../../bomb-shooter/050-BombShooter.png";
import M100 from "../../bomb-shooter/100-BombShooter.png";
import M200 from "../../bomb-shooter/200-BombShooter.png";
import M300 from "../../bomb-shooter/300-BombShooter.png";
import M400 from "../../bomb-shooter/400-BombShooter.png";
import M500 from "../../bomb-shooter/500-BombShooter.png";
import Reset from "../../misc/CloseIcon.png";
import p11 from "../../bomb-shooter/BiggerBombsUpgradeIcon.png";
import p12 from "../../bomb-shooter/HeavyBombsUpgradeIcon.png";
import p13 from "../../bomb-shooter/ReallyBigBombsUpgradeIcon.png";
import p14 from "../../bomb-shooter/BloonImpactUpgradeIcon.png";
import p15 from "../../bomb-shooter/BloonCrushUpgradeIcon.png";
import p21 from "../../bomb-shooter/FasterReloadUpgradeIcon.png";
import p22 from "../../bomb-shooter/MissileLauncherUpgradeIcon.png";
import p23 from "../../bomb-shooter/MoabMaulerUpgradeIcon.png";
import p24 from "../../bomb-shooter/MoabAssassinUpgradeIcon.png";
import p25 from "../../bomb-shooter/MoabEliminatorUpgradeIcon.png";
import p31 from "../../bomb-shooter/ExtraRangeUpgradeIcon.png";
import p32 from "../../bomb-shooter/FragBombsUpgradeIcon.png";
import p33 from "../../bomb-shooter/ClusterBombsUpgradeIcon.png";
import p34 from "../../bomb-shooter/RecursiveClusterUpgradeIcon.png";
import p35 from "../../bomb-shooter/BombBlitzUpgradeIcon.png";
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
import Stats from "../../bomb-shooter/BombShooterStats.json";

export default function BombShooter() {
	document.title = "Bomb Shooter - BTD6 Stats";
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
			damage: 1,
			damageMOAB: 1,
			damageCeramic: 1,
			damageSecondary: 0,
			damageMOABSecondary: 0,
			damageCeramicSecondary: 0,
			pierce: 14,
			pierceSecondary: 0,
			projectiles: 1,
			projectilesSecondary: 0,
			speed: 1.5,
			range: 40,
			abilityName: "",
			abilityDuration: 0,
			abilityCooldown: 0,
			abilityDamage: 0,
			abilityPierce: 0,
			abilitySpeed: 0.0,
			abilityRange: 0,
			camo: false,
			black: false,
			white: true,
			purple: true,
			lead: true,
			frozen: true,
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
			"buy-e": 445,
			"buy-m": 525,
			"buy-h": 565,
			"buy-i": 630,
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
			default:
				break;
		}
	}
	return (
		<motion.div initial="hidden" animate="show" exit="hidden" variants={transitionContainer} className="tower">
			<motion.h1 variants={transitionItem}>Bomb Shooter</motion.h1>
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
								data-tip="Bigger Bombs<br>Shoots larger bombs, they have a larger blast area and more popping power.<br>Cost: $300 / $350 / $380 / $420"
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
								<img src={p11} alt="Bigger Bombs"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-2")}
								id="p1-2"
								className={p1 === 2 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Heavy Bombs<br>Heavy duty bombs can smash through 2 layers of Bloon at once and pop more Bloons.<br>Cost: $555 / $650 / $700 / $780"
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
								<img src={p12} alt="Heavy Bombs"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-3")}
								id="p1-3"
								className={p1 === 3 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Really Big Bombs<br>Huge bombs deal greater damage in a large area and allow Frags to pop more Bloons.<br>Cost: $1.020 / $1.200 / $1.295 / $1.440"
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
								<img src={p13} alt="Really Big Bombs"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-4")}
								id="p1-4"
								className={p1 === 4 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Bloon Impact<br>Explosions become so violent Bloons are stunned for a short time when they are hit.<br>Range is increased and frags are even more effective.<br>Cost: $3.060 / $3.600 / $3.890 / $4.320"
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
								<img src={p14} alt="Bloon Impact"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p1-5")}
								id="p1-5"
								className={p1 === 5 ? "tower-active" : ""}
								disabled={(p2 > 0 && p3 > 0) || (p2 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="Bloon Impact<br>Bloon shattering explosions do massive damage and can stun MOAB-Class bloons.<br>Cost: $46.750 / $55.000 / $59.400 / $66.000"
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
								<img src={p15} alt="Bloon Impact"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["b"] }}>B</h1>
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
								data-tip="Faster Reload<br>Reloads 20% faster.<br>Cost: $150 / $175 / $190 / $210"
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
								<img src={p21} alt="Faster Reload"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-2")}
								id="p2-2"
								className={p2 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || p1 < 0 ? true : false}
								data-tip="Missile Launcher<br>Exchanges bombs for missiles, which fire faster, fly faster, and increase range.<br>Cost: $340 / $400 / $430 / $480"
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
								<img src={p22} alt="Missile Launcher"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-3")}
								id="p2-3"
								className={p2 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="MOAB Mauler<br>MOAB Maulers do much more damage to MOAB-Class Bloons and ceramics.<br>Cost: $935 / $1.100 / $1.190 / $1.320"
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
								<img src={p23} alt="MOAB Mauler"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-4")}
								id="p2-4"
								className={p2 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="MOAB Assassin<br>Assassinate MOAB ability: Special missile flies out and does massive damage to MOAB-Class Bloons.<br>Regular attack range and MOAB-class damage also increased.<br>Cost: $2.720 / $3.200 / $3.455 / $3.840"
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
								<img src={p24} alt="MOAB Assassin"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p2-5")}
								id="p2-5"
								className={p2 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p3 > 0) || (p1 || p3) > 2 || p1 < 0 ? true : false}
								data-tip="MOAB Eliminator<br>Massive damage to MOABs and Assassinate ability deals 6x damage with a short cooldown.<br>Cost: $21.250 / $25.000 / $27.000 / $30.000"
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
								<img src={p25} alt="MOAB Eliminator"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["s-"] }}>S-</h1>
						</div>
						<div></div>
						<div>
							<button
								onClick={() => handleChange("p3-1")}
								id="p3-1"
								className={p3 === 1 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Extra Range<br>Increases attack range.<br>Cost: $170 / $200 / $215 / $240"
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
								<img src={p31} alt="Extra Range"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-2")}
								id="p3-2"
								className={p3 === 2 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || p1 < 0 ? true : false}
								data-tip="Frag Bombs<br>Explosions throw sharp fragments that can pop more Bloons including Black Bloons.<br>Cost: $255 / $300 / $325 / $360"
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
								<img src={p32} alt="Frag Bombs"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-3")}
								id="p3-3"
								className={p3 === 3 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Cluster Bombs<br>Throws out secondary bombs instead of sharp fragments every shot.<br>Cost: $680 / $800 / $865 / $960"
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
								<img src={p33} alt="Cluster Bombs"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-4")}
								id="p3-4"
								className={p3 === 4 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Recursive Cluster<br>Every second shot the cluster bombs send out more cluster bombs for even more destruction.<br>Cost: $2.380 / $2.800 / $3.025 / $3.360"
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
								<img src={p34} alt="Recursive Cluster"></img>
							</button>
						</div>
						<div>
							<button
								onClick={() => handleChange("p3-5")}
								id="p3-5"
								className={p3 === 5 ? "tower-active" : ""}
								disabled={(p1 > 0 && p2 > 0) || (p1 || p2) > 2 || p1 < 0 ? true : false}
								data-tip="Bomb Blitz<br>Deals much more damage and gains the passive Bomb Storm Ability:<br>when lives are lost, the Bomb Storm automatically triggers, which destroys all but the biggest of Bloons.<br>Cost: $29.750 / $35.000 / $37.800 / $42.000"
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
								<img src={p35} alt="Bomb Blitz"></img>
							</button>
						</div>
						<div>
							<h1 style={{ color: colors["b"] }}>B</h1>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
