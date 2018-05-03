import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const GridCell = props => (
	<div
		className="GridCell"
		style={{
			'--gridCellWidth': `${props.gridCellWidth}px`,
			'--gridCellHeight': `${props.gridCellHeight}px`,
		}}
	>
		{props.value}
	</div>
);

export default GridCell;

GridCell.propTypes = {
	gridCellWidth: PropTypes.number.isRequired,
	gridCellHeight: PropTypes.number.isRequired,
	value: PropTypes.number,
};
