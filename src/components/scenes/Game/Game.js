import React, { Fragment, Component } from 'react';
import Grid from '../../gameComponents/Grid';
import Controls from '../../gameComponents/Controls';
import arrayBuilder from '../../utils/arrayBuilder';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gridArray: arrayBuilder(),
		};
	}

	startGame = () => {};
	render() {
		return (
			<Fragment>
				<Grid
					gridArray={this.state.gridArray}
					gridWidth={300}
					gridHeight={600}
				/>
				<Controls />
			</Fragment>
		);
	}
}

export default Game;
