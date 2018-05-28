import { O } from '../constants/tetrominoTypes.js';

export default function(arr, tetromino) {
	const tetrominoType = tetromino.tetrominoType;
	const tetrominoGlobalPos = tetromino.globalPosition;
	for (i = 0; i < tetrominoType.length; i++) {
		for (j = 0; j < tetrominoType[i].length; j++) {
			arr[tetrominoGlobalPos.row + i][tetrominoGlobalPos.col + j] =
				tetrominoType[i][j];
		}
	}
	return arr;
}
