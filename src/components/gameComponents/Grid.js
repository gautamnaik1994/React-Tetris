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
	state={
		gridArray:arrayBuilder(),
	}

	generateGridCells() {
		const gridCellDimens = {
			gridCellWidth: this.props.gridWidth / 10,
			gridCellHeight: this.props.gridHeight / 16,
		};
		return this.state.gridArray.map((row, i) => (
			<GridRow key={i} gridCells={row} gridCellDimens={gridCellDimens} />
		));
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
