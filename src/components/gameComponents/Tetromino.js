class Tetromino {
	constructor(tetrominoType, gridWidth) {
		this.tetrominoType = tetrominoType;
		this.gridWidth = gridWidth;
		let globalPosition = {
			row: 0,
			col: this.gridWidth / 2 - 1,
		};
	}
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
