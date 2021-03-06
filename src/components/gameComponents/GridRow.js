import React from 'react';
import GridCell from './GridCell';

const GridRow = ({ gridCells, gridCellDimens }) => (
	<div className="GridRow ">
		{gridCells.map((gridCell, i) => (
			<GridCell
				key={i}
				value={gridCell.value}
				gridCellHeight={gridCellDimens.gridCellHeight}
				gridCellWidth={gridCellDimens.gridCellWidth}
			/>
		))}
	</div>
);

export default GridRow;
