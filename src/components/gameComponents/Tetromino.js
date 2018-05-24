import { O } from '../constants/tetrominoTypes.js';

class Tetromino {
	constructor(tetrominoType, gridWidth) {
		this.tetrominoType = tetrominoType;
		this.gridWidth = gridWidth;
		this.globalPosition = {
			row: 0,
			col: gridWidth / 2 - 1,
		};
	}
	updatePosition(vertical, horizontal) {
		this.globalPosition.col += horizontal;
		this.globalPosition.row += vertical;
	}
	get tetrominoType() {
		return this._tetrominoType;
	}
	set tetrominoType(value) {
		switch (value) {
			case O:
				this._tetrominoType = [[1, 1], [1, 1]];
				break;
			default:
				this._tetrominoType = [[1, 1], [1, 1]];
		}
	}
}
export default Tetromino;
