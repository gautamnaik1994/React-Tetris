import Tetromino from '../Tetromino.js';

describe('Tetromino Class', () => {
	const tetromino = new Tetromino('SQAURE', 16);
	it('should return correct tetromino type', () => {
		expect(tetromino.tetrominoType).toEqual([[1, 1], [1, 1]]);
	});

	it('should return correct global position', () => {
		expect(tetromino.globalPosition.col).toEqual(7);
	});
	it('should update global position after updatePosition is called', () => {
		tetromino.updatePosition(1, 1);
		expect(tetromino.globalPosition.col).toEqual(8);
		expect(tetromino.globalPosition.row).toEqual(1);
		tetromino.updatePosition(1, 1);
		expect(tetromino.globalPosition.col).toEqual(9);
		expect(tetromino.globalPosition.row).toEqual(2);
	});
});
