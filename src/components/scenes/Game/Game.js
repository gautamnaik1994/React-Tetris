import React, { Fragment } from 'react';
import Grid from '../../gameComponents/Grid';
import Controls from '../../gameComponents/Controls';

const Game = () => (
	<Fragment>
		<Grid gridWidth={300} gridHeight={600} />
		<Controls />
	</Fragment>
);

export default Game;
