import { motion } from "framer-motion";

export default function Home() {
	document.title = "BTD6 Stats";
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: "easeInOut", duration: 0.2 }}
			className="home"
		>
			<h1>BTD6 Stats</h1>
			<p>This is a collection of all kinds of stats for BTD6</p>
			<p>work in progress</p>
			<p>things to add: tower stats, hero stats, rounds</p>
			<p>things finished: bloon stats</p>
			<p className="footer">
				Made by <a href="https://www.github.com/HolyHades">HolyHades</a>
			</p>
		</motion.div>
	);
}
