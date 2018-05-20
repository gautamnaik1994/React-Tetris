import Tetromino from '../Tetromino.js';

test('Tetromino Class should return correct tetromino type', () => {
	const tetromino = new Tetromino('SQAURE');
	expect(tetromino.tetrominoType).toEqual([[1, 1], [1, 1]]);
});
