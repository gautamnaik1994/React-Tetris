import React, { Fragment } from 'react';

const Controls = props => (
	<Fragment>
		<p>Game Controls</p>
		<button type="button" onClick={props.startGame}>
			Start Game
		</button>
		<button type="button" onClick={props.moveLeft}>
			Left
		</button>
		<button type="button" onClick={props.moveRight}>
			Right
		</button>
	</Fragment>
);

export default Controls;
