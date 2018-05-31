import { O } from '../constants/tetrominoTypes.js';

export default function(arr, tetromino) {
	const tetrominoType = tetromino.tetrominoType;
	const tetrominoGlobalPos = tetromino.globalPosition;
	// clean previous rows or columns
	if (tetrominoGlobalPos.row != 0) {
		for (let i = 0; i < arr[tetrominoGlobalPos.row - 1].length; i++) {
			arr[tetrominoGlobalPos.row - 1][i].value = 0;
		}

		for (let i = 0; i < tetrominoType.length; i++) {
			arr[tetrominoGlobalPos.row - 1][i].value = 0;
		}
	}
	for (let i = 0; i < tetrominoType.length; i++) {
		for (let j = 0; j < tetrominoType[i].length; j++) {
			arr[tetrominoGlobalPos.row + i][tetrominoGlobalPos.col + j].value =
				tetrominoType[i][j];
		}
	}
	return arr;
}
