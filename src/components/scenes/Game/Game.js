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

	startGame = () => {
		console.log('start Game');
		let _gridArray = [...this.state.gridArray];
		let square = [[1, 1], [1, 1]];
		_gridArray[0][2].value = 3;
		_gridArray[1][2].value = 4;
		this.setState({ gridArray: _gridArray });
		console.log(' temp array ', _gridArray[0][8]);
	};
	render() {
		return (
			<Fragment>
				<Grid
					gridArray={this.state.gridArray}
					gridWidth={300}
					gridHeight={600}
				/>
				<Controls startGame={this.startGame} />
			</Fragment>
		);
	}
}

export default Game;
