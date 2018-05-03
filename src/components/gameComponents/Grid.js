import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell';
import GridRow from './GridRow';
import arrayBuilder from '../utils/arrayBuilder';

class Grid extends Component {
	constructor(props) {
		super(props);
		console.log('Propsss ', props);

	}

	generateGridCells() {
		const gridCellDimens = {
			gridCellWidth: this.props.gridWidth / 10,
			gridCellHeight: this.props.gridHeight / 16,
		};
		console.log('Dimness ', gridCellDimens);
		// const tempRow[],tempCell[];
		// for(row=0; row<this.state.gridArray.length;++row){
		//for(column=0;column[row].length< ++column ){

		// }
		// }
		return this.state.gridArray.map((row, i) => {
			//console.log('Row ', row, i);
			return (
				<GridRow key={i} gridCells={row} gridCellDimens={gridCellDimens} />
			);
		});
	}
	render() {
		return (
			<Fragment>
				<div
					className="Grid"
					style={{
						'--gridWidth': `${this.props.gridWidth}px`,
						'--gridHeight': `${this.props.gridHeight}px`,
					}}
				>
					{this.generateGridCells()}
				</div>
			</Fragment>
		);
	}
}

export default Grid;

Grid.propTypes = {
	gridWidth: PropTypes.number.isRequired,
	gridHeight: PropTypes.number.isRequired,
};
