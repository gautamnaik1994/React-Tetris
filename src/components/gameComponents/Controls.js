import React, { Fragment } from 'react';

const Controls = props => (
	<Fragment>
		<p>Game Controls</p>
		<button type="button" onClick={props.startGame}>
			Start Game
		</button>
	</Fragment>
);

export default Controls;
