import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DartMonkey000 from "../../dart-monkey/000-DartMonkey.png";
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

export default function DartMonkey() {
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
			projectile: "Dart",
			projectileSecondary: "",
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
			notes: "",
			size: 6,
			hotkey: "Q",
		},
	]);
	useEffect(() => {
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
					projectile: "Dart",
					projectileSecondary: "",
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
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 290,
					costMedium: 340,
					costHard: 365,
					costImpoppable: 410,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Ball",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Juggernaut",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Ultra-Juggernaut",
					projectileSecondary: "Juggernaut",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "Crits every 8-12 shots, deals 50 damage",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.16,
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
					lead: true,
					zebra: true,
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.removeAttribute("disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.setAttribute("disabled", "disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.setAttribute("disabled", "disabled");
				});
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
					projectile: "Ball",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.setAttribute("disabled", "disabled");
				});
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
					projectile: "Juggernaut",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.setAttribute("disabled", "disabled");
				});
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
					projectile: "Ultra-Juggernaut",
					projectileSecondary: "Juggernaut",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
				document.querySelectorAll("button.p1").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p2").forEach(function (element) {
					element.removeAttribute("disabled");
				});
				document.querySelectorAll("button.p3").forEach(function (element) {
					element.setAttribute("disabled", "disabled");
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 290,
					costMedium: 340,
					costHard: 365,
					costImpoppable: 410,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Ball",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Juggernaut",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Ultra-Juggernaut",
					projectileSecondary: "Juggernaut",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Ball",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Juggernaut",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Ultra-Juggernaut",
					projectileSecondary: "Juggernaut",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 290,
					costMedium: 340,
					costHard: 365,
					costImpoppable: 410,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Ball",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Juggernaut",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Ultra-Juggernaut",
					projectileSecondary: "Juggernaut",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.61,
					range: 48,
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
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.425,
					range: 48,
					abilityName: "Super Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 1,
					abilityPierce: 2,
					abilitySpeed: 0.06,
					abilityRange: 48,
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.425,
					range: 48,
					abilityName: "Plasma Monkey Fan Club",
					abilityDuration: 20,
					abilityCooldown: 50,
					abilityDamage: 2,
					abilityPierce: 5,
					abilitySpeed: 0.03,
					abilityRange: 48,
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "Crits every 8-12 shots, deals 50 damage",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.16,
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
					lead: true,
					zebra: true,
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "Crits every 8-12 shots, deals 50 damage",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.16,
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
					lead: true,
					zebra: true,
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.6375,
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "Crits every 8-12 shots, deals 50 damage",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.136,
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
					lead: true,
					zebra: true,
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "Crits every 8-12 shots, deals 50 damage",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
					speed: 0.107,
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
					lead: true,
					zebra: true,
					costEasy: 170,
					costMedium: 200,
					costHard: 215,
					costImpoppable: 240,
					notes: "",
				});
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
					projectile: "Dart",
					projectileSecondary: "",
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
			case "p1-0":
				setP1(0);
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
			case "p2-0":
				setP2(0);
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
			case "p3-0":
				setP3(0);
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
			<h1>Dart Monkey</h1>
			<div className="tower-container">
				<img src={DartMonkey000} alt="Dart Monkey 000" className="tower-img"></img>
				<div>
					<h2>Stats</h2>
					<p>
						Damage: {stats.damage} Pierce: {stats.pierce} Speed: {stats.speed} Range: {stats.range}
					</p>
					<p>
						p1: {p1} p2: {p2} p3: {p3}
					</p>
					<table>
						<tr>
							<td>
								<button onClick={() => handleChange("p1-1")} id="p1-1" class="p1">
									<img src={SharpShots} alt="Sharp Shots" title="Sharp Shots"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p1-2")} id="p1-2" class="p1">
									<img src={RazorSharpShots} alt="Razor Sharp Shots" title="Razor Sharp Shots"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p1-3")} id="p1-3" class="p1">
									<img src={SpikeOPult} alt="Spike-O-Pult" title="Spike-O-Pult"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p1-4")} id="p1-4" class="p1">
									<img src={Juggernaut} alt="Juggernaut" title="Juggernaut"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p1-5")} id="p1-5" class="p1">
									<img src={UltraJuggernaut} alt="Ultra-Juggernaut" title="Ultra-Juggernaut"></img>
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<button onClick={() => handleChange("p2-1")} id="p2-1" class="p1">
									<img src={QuickShots} alt="Quick Shots" title="Quick Shots"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p2-2")} id="p2-2" class="p1">
									<img src={VeryQuickShots} alt="Very Quick Shots" title="Very Quick Shots"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p2-3")} id="p2-3" class="p1">
									<img src={TripleShot} alt="Triple Shot" title="Triple Shot"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p2-4")} id="p2-4" class="p1">
									<img
										src={SuperMonkeyFanClub}
										alt="Super Monkey Fan Club"
										title="Super Monkey Fan Club"
									></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p2-5")} id="p2-5" class="p1">
									<img
										src={PlasmaMonkeyFanClub}
										alt="Plasma Monkey Fan Club"
										title="Plasma Monkey Fan Club"
									></img>
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<button onClick={() => handleChange("p3-1")} id="p3-1" class="p1">
									<img src={LongRangeDarts} alt="Long Range Darts" title="Long Range Darts"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p3-2")} id="p3-2" class="p1">
									<img src={EnhancedEyesight} alt="Enhanced Eyesight" title="Enhanced Eyesight"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p3-3")} id="p3-3" class="p1">
									<img src={Crossbow} alt="Crossbow" title="Crossbow"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p3-4")} id="p3-4" class="p1">
									<img src={Sharpshooter} alt="Sharpshooter" title="Sharpshooter"></img>
								</button>
							</td>
							<td>
								<button onClick={() => handleChange("p3-5")} id="p3-5" class="p1">
									<img src={CrossbowMaster} alt="Crossbow Master" title="Crossbow Master"></img>
								</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</motion.div>
	);
}
