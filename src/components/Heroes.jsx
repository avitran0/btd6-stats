import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Quincy from "../heroes/QuincyPortrait.png";
import Gwendolin from "../heroes/GwendolinPortrait.png";
import StrikerJones from "../heroes/StrikerJonesPortrait.png";
import ObynGreenfoot from "../heroes/ObynGreenFoot.png";
import CaptainChurchill from "../heroes/CaptainChurchillPortrait.png";
import Benjamin from "../heroes/BenjaminPortrait.png";
import Ezili from "../heroes/EziliPortrait.png";
import PatFusty from "../heroes/PatFustyPortrait.png";
import Adora from "../heroes/AdoraPortrait.png";
import AdmiralBrickell from "../heroes/AdmiralBrickellPortrait.png";
import Etienne from "../heroes/EtiennePortrait.png";
import Sauda from "../heroes/SaudaPortrait.png";
import Psi from "../heroes/PsiPortrait.png";

export default function Heroes() {
	document.title = "Heroes - BTD6 Stats";
	const transitionContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.2,
				staggerChildren: 0.05,
			},
		},
	};
	const transitionItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<motion.div initial="hidden" animate="show" variants={transitionContainer} className="heroes">
			<motion.h1 variants={transitionItem}>Heroes</motion.h1>
			<div className="towers-grid">
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/heroes/quincy" id="quincy">
						<img src={Quincy} alt="Quincy" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="gwendolin">
						<img src={Gwendolin} alt="Gwendolin" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="striker-jones">
						<img src={StrikerJones} alt="Striker Jones" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="obyn-greenfoot">
						<img src={ObynGreenfoot} alt="Obyn Greenfoot" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="captain-churchill">
						<img src={CaptainChurchill} alt="Captain Churchill" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="benjamin">
						<img src={Benjamin} alt="Benjamin" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="ezili">
						<img src={Ezili} alt="Ezili" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="pat-fusty">
						<img src={PatFusty} alt="Pat Fusty" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="adora">
						<img src={Adora} alt="Adora" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="admiral-brickell">
						<img src={AdmiralBrickell} alt="Admiral Brickell" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="etienne">
						<img src={Etienne} alt="Etienne" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="sauda">
						<img src={Sauda} alt="Sauda" />
					</Link>
				</motion.div>
				<motion.div variants={transitionItem} className="grid-container">
					<Link to="/towers" id="psi">
						<img src={Psi} alt="Psi" />
					</Link>
				</motion.div>
			</div>
			<motion.p variants={transitionItem} className="footer">
				Made by <a href="https://www.github.com/HolyHades">HolyHades</a>
			</motion.p>
		</motion.div>
	);
}
