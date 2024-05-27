import type GameInfo from "./GameInfo";
import Fates from './games/Fates';

export type SupportedGameName = 'Fates'

export const games: Record<SupportedGameName, GameInfo> = {
	Fates,
} as const;
