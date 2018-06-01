export default function(_arr, tetromino) {
	const arr = _arr;
	const tetrominoType = [...tetromino.tetrominoType];
	const tetrominoGlobalPos = tetromino.globalPosition;
	for (let i = 0; i < tetrominoType.length; i += 1) {
		for (let j = 0; j < tetrominoType[i].length; j += 1) {
			arr[tetrominoGlobalPos.row + i][tetrominoGlobalPos.col + j].value =
				tetrominoType[i][j];
		}
	}
	// clean previous rows or columns
	if (tetrominoGlobalPos.row !== 0) {
		for (let i = 0; i < arr[tetrominoGlobalPos.row - 1].length; i += 1) {
			arr[tetrominoGlobalPos.row - 1][i].value = 0;
		}
		for (let i = 0; i < tetrominoType.length; i += 1) {
			console.log(tetrominoGlobalPos);
			arr[tetrominoGlobalPos.row + i][
				tetrominoGlobalPos.row + tetrominoType.length - 1
			].value =
				'X';
			// arr[tetrominoGlobalPos.row + i][tetrominoGlobalPos.row - 1].value = 'Z';
		}
	}
	return arr;
}
