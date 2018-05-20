export default function(
	numRows = 16,
	numCols = 10,
	initial = { value: 0, color: 'wheat' },
) {
	const arr = [];
	// let arr = new Array(numRows).fill().map(function() {
	// return new Array(numCols).fill(initial);
	// return new Array(numCols).fill().map(() => {
	// return { ...initial };
	// });
	// });
	for (let i = 0; i < numRows; ++i) {
		const columns = [];
		for (let j = 0; j < numCols; ++j) {
			// columns[j] = initial;
			columns.push({ ...initial });
		}
		arr.push(columns);
		// arr[i] = columns;
	}
	return arr;
}
