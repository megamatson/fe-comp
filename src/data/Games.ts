import type GameInfo from "./GameInfo";
import Fates from './games/Fates';

const gameNames: SupportedGameName[] = [
	'Fates'
] as const;

export function asGameName(s: string): SupportedGameName {
	if (gameNames.includes(s as SupportedGameName))
		return s as SupportedGameName;

	throw new Error(`"${s}" not a game name`);
}

export type SupportedGameName = 'Fates';

export const games: Record<SupportedGameName, GameInfo> = {
	Fates,
} as const;
