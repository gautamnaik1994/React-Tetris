import { O } from '../../constants/tetrominoTypes.js';
import arrayUpdater from '../arrayUpdater.js';
import arrayBuilder from '../arrayBuilder.js';
import Tetromino from '../../gameComponents/Tetromino.js';

describe('ArrayUpdater', () => {
	it('should return properly updated array', () => {
		const tetromino = new Tetromino(O, 16);
		const originalArray = arrayBuilder();
		const updatedArray = arrayUpdater(originalArray, tetromino);
		expect(updatedArray[0][7]).toEqual(1);
		expect(updatedArray[0][8]).toEqual(1);
		expect(updatedArray[0][6]).toEqual(0);
		expect(updatedArray[0][9]).toEqual(0);
		expect(updatedArray[1][7]).toEqual(1);
	});
});
