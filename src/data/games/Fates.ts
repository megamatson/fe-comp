import GameInfo from "../GameInfo";

export const Fates: GameInfo = {
	globalConfig: {
		supportRanks: ['C', 'B', 'A', ['S', 'A+']],
		mutexSupports: ['S', 'A+']
	},
	characters: [
		{
			name: 'Corrin',
			child: 'Kana (F)',
			sex: 'M',
		}
	],
	classes: [],
	supports: [
		{
			characters: ['Azama', 'Corrin (M)'],
			maxRank: 'A',
		},
		{
			characters: ['Corrin (M)', 'Kaden'],
			maxRank: 'A',
		},
		{
			characters: ['Corrin (M)', 'Ryoma'],
			maxRank: 'A',
		},
		{
			characters: ['Corrin (M)', 'Saizo'],
			maxRank: 'A',
		},
		{
			characters: ['Corrin (M)', 'Takumi'],
			maxRank: 'A',
		},
	]
} as const;

export default Fates;