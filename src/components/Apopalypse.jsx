import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Apopalypse() {
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
					<NavLink to="/rounds">Normal</NavLink>
				</li>
				<li>
					<NavLink to="/rounds/abr">ABR</NavLink>
				</li>
				<li>
					<NavLink to="/rounds/apopalypse" activeClassName="active-link">
						Apopalypse
					</NavLink>
				</li>
			</ul>
		</motion.div>
	);
}
