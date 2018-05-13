export default function(
	numrows = 16,
	numcols = 10,
	initial = { value: 0, color: 'wheat' },
) {
	let arr = [];
	//let arr = new Array(numrows).fill().map(function() {
	//return new Array(numcols).fill(initial);
	//return new Array(numcols).fill().map(() => {
	//return { ...initial };
	//});
	//});
	for (let i = 0; i < numrows; ++i) {
		let columns = [];
		for (let j = 0; j < numcols; ++j) {
			//columns[j] = initial;
			columns.push({ ...initial });
		}
		arr.push(columns);
		//arr[i] = columns;
	}
	return arr;
}
