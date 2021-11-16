import { motion } from "framer-motion";

export default function Home() {
	document.title = "BTD6 Stats";
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
		transition: { ease: "easeInOut", duration: 0.2 },
	};
	const transitionItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<motion.div initial="hidden" animate="show" exit="hidden" variants={transitionContainer} className="home">
			<motion.h1 variants={transitionItem}>BTD6 Stats</motion.h1>
			<motion.p variants={transitionItem}>This is a collection of all kinds of stats for BTD6</motion.p>
			<motion.p variants={transitionItem}>work in progress</motion.p>
			<motion.p variants={transitionItem}>things to add: tower stats, hero stats, rounds</motion.p>
			<motion.p variants={transitionItem}>things finished: bloon stats, normal rounds</motion.p>
			<motion.p variants={transitionItem} className="footer">
				Made by <a href="https://www.github.com/HolyHades">HolyHades</a>
			</motion.p>
		</motion.div>
	);
}
