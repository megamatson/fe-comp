export interface GlobalConfig {
	maxSupportsPerCharacter?: number;
	supportRanks?: (string|string[])[];
	mutexSupports?: string[];
}

export type Sex = 'M' | 'F';

export interface CharacterInfo {
	name: string;
	child?: string;
	sex: Sex;
}

export interface ClassInfo {
	name: string;
	maxLevel: number;
	sex?: SVGTextElement;
}

export interface SupportInfo {
	characters: [string, string];
	maxRank: string;
}

export default interface GameInfo {
	globalConfig?: GlobalConfig;
	characters: CharacterInfo[];
	classes: ClassInfo[];
	supports: SupportInfo[]
}