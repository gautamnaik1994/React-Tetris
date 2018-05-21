class Tetromino {
	constructor(tetrominoType) {
		this.tetrominoType = tetrominoType;
	}
	globalPosition = {
		row: 0,
		col: 5,
	};
	get tetrominoType() {
		return this._tetrominoType;
	}
	set tetrominoType(value) {
		switch (value) {
			case 'SQAURE':
				this._tetrominoType = [[1, 1], [1, 1]];
				break;
			default:
				this._tetrominoType = [[1, 1], [1, 1]];
		}
	}
}
export default Tetromino;
