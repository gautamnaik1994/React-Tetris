export default function(
	numrows = 16,
	numcols = 10,
	initial = { value: 0, color: 'wheat' },
) {
	let arr = [];
	for (let i = 0; i < numrows; ++i) {
		let columns = [];
		for (let j = 0; j < numcols; ++j) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	console.log('Arrray ', arr);
	return arr;
}
