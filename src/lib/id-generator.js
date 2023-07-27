// Nanoid collision probability calculator: https://zelark.github.io/nano-id-cc/
// will tell you how likely it is there will be duplicates
import { customAlphabet } from 'nanoid';

function createGameId() {
	const alphabet = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return customAlphabet(alphabet, 10);
}

function createPlayerId() {
	const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~';
	return customAlphabet(alphabet, 21);
}

export { createGameId };
export { createPlayerId };
