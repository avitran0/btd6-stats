import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Quincy from "../heroes/Quincy.png";
import Gwendolin from "../heroes/Gwendolin.png";
import StrikerJones from "../heroes/StrikerJones.png";
import ObynGreenfoot from "../heroes/ObynGreenfoot.png";
import CaptainChurchill from "../heroes/CaptainChurchill.png";
import Benjamin from "../heroes/Benjamin.png";
import Ezili from "../heroes/Ezili.png";
import PatFusty from "../heroes/PatFusty.png";
import Adora from "../heroes/Adora.png";
import AdmiralBrickell from "../heroes/AdmiralBrickell.png";
import Etienne from "../heroes/Etienne.png";
import Sauda from "../heroes/Sauda.png";

export default function Heroes() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: "easeInOut", duration: 0.2 }}
			className="heroes"
		>
			<h1>Heroes</h1>
			<div className="towers-grid">
				<div className="grid-container">
					<Link to="/heroes/quincy" id="quincy">
						<img src={Quincy} alt="Quincy" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="gwendolin">
						<img src={Gwendolin} alt="Gwendolin" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="striker-jones">
						<img src={StrikerJones} alt="Striker Jones" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="obyn-greenfoot">
						<img src={ObynGreenfoot} alt="Obyn Greenfoot" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="captain-churchill">
						<img src={CaptainChurchill} alt="Captain Churchill" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="benjamin">
						<img src={Benjamin} alt="Benjamin" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="ezili">
						<img src={Ezili} alt="Ezili" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="pat-fusty">
						<img src={PatFusty} alt="Pat Fusty" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="adora">
						<img src={Adora} alt="Adora" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="admiral-brickell">
						<img src={AdmiralBrickell} alt="Admiral Brickell" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="etienne">
						<img src={Etienne} alt="Etienne" />
					</Link>
				</div>
				<div className="grid-container">
					<Link to="/towers" id="sauda">
						<img src={Sauda} alt="Sauda" />
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
