export default function(arr, update) {
	const arrayData = {
		arrayNumRows: arr.length,
		arrayNumCols: arr[0].length,
	};
	const updateData = {
		updateNumRows: update.length,
		updateNumCols: update[0].length,
	};
	for (let i = 0; i < arrayData.arrayNumRows; i++) {
		for (let j = 0; j < arrayData.arrayNumCols; j++) {
			if (i == 0 && j == 0) {
				for (let k = 0; k < updateData.updateNumRows; k++) {
					arr[i][j].value = 1;
				}
			}
		}
	}
}
