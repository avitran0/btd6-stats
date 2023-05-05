export interface Attack {
	name: string;
	damage: number;
	damageMOAB: number;
	damageCeramic: number;
	damageBoss: number;
	pierce: number;
	projectiles: number;
	range: number;
	reloadSpeed: number;
	damageType: string;
	camo: boolean;
	crosspath:
		| {
				path: string;
				damage: number;
				damageMOAB: number;
				damageCeramic: number;
				damageBoss: number;
				pierce: number;
				projectiles: number;
				range: number;
				reloadSpeed: number;
				damageType: string;
				camo: boolean;
		  }[]
		| [];
}

export interface Tower {
	name: string;
	id: string;
	category: string;
}

export interface Stats {
	attacks: Attack[];
	ability:
		| Record<string, never>
		| {
				name: string;
				damage: number;
				damageMOAB: number;
				damageCeramic: number;
				damageBoss: number;
				pierce: number;
				projectiles: number;
				range: number;
				reloadSpeed: number;
				damageType: string;
				camo: boolean;
				duration: number;
				cooldown: number;
		  };
}

interface Upgrade {
	name: string;
	description: string;
	costs: {
		easy: number;
		medium: number;
		hard: number;
		impoppable: number;
	};
}

export interface Upgrades {
	'000': {
		size: number;
		costs: {
			easy: number;
			medium: number;
			hard: number;
			impoppable: number;
		};
	};
	'100': Upgrade;
	'200': Upgrade;
	'300': Upgrade;
	'400': Upgrade;
	'500': Upgrade;
	'010': Upgrade;
	'020': Upgrade;
	'030': Upgrade;
	'040': Upgrade;
	'050': Upgrade;
	'001': Upgrade;
	'002': Upgrade;
	'003': Upgrade;
	'004': Upgrade;
	'005': Upgrade;
	'600'?: Upgrade;
}

export interface StatsAll {
	'000': Stats;
	'100': Stats;
	'200': Stats;
	'300': Stats;
	'400': Stats;
	'500': Stats;
	'010': Stats;
	'020': Stats;
	'030': Stats;
	'040': Stats;
	'050': Stats;
	'001': Stats;
	'002': Stats;
	'003': Stats;
	'004': Stats;
	'005': Stats;
	'600'?: Stats;
}

export type RoundBloons = {
	name: string;
	id: string;
	hp: number;
	cashTotal: number;
	cashTotalLate?: number;
	children: {
		id: string;
		amount: number;
	}[];
	speed: number;
	rbe: number;
	immunities: string;
}[];
