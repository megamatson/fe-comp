import {describe, expect, it} from 'vitest';
import { SupportedGameName, asGameName, games } from './Games';

function expectOrdered(tuple: [string, string], index: number) {
	expect(tuple[0] < tuple[1], `[${index}] ${tuple[0]} >= ${tuple[1]}`).toBe(true);
}

function expectOrdered2(first: string[], second: string[], index: number) {
	expect(first < second, `[${index}] ${first} >= ${second}`).toBe(true);
}

describe('Verify games structure', () => {
	for (const keyEntry in games) {
		const key: SupportedGameName = asGameName(keyEntry);
		const game = games[key];

		describe.concurrent(`${key}`, () => {
			it('truthy', () => {
				expect(game).toBeTruthy();
			});

			it('Supports ordered', () => {
				const {supports} = game;

				expect(supports).toBeTruthy();

				let previous = supports[0].characters;

				expectOrdered(previous, 0);

				for (let i = 1; i < supports.length; i++) {
					const curr = supports[i].characters;
					expectOrdered(curr, i);
					expectOrdered2(previous, curr, i);
					previous = curr;
				}
			});
		});
	}
});