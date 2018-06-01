import React, { Fragment, Component } from 'react';
import Grid from '../../gameComponents/Grid';
import Controls from '../../gameComponents/Controls';
import arrayBuilder from '../../utils/arrayBuilder';
import arrayUpdater from '../../utils/arrayUpdater.js';
import Tetromino from '../../gameComponents/Tetromino.js';
import { O } from '../../constants/tetrominoTypes.js';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gridArray: arrayBuilder(),
			tetromino: new Tetromino(O, 16),
		};
	}
	runIterations = () => {
		console.log('Runiing Iterations');
		let _gridArray = [...this.state.gridArray];
		const updatedArray = arrayUpdater(_gridArray, this.state.tetromino);
		this.setState({ gridArray: updatedArray });
		this.state.tetromino.updatePosition(1, 0);
	};
	startGame = () => {
		console.log('start Game');
		let iteration = window.setInterval(this.runIterations, 2000);
	};
	moveRight = () => {
		this.state.tetromino.updatePosition(0, 1);
		let _gridArray = [...this.state.gridArray];
		const updatedArray = arrayUpdater(_gridArray, this.state.tetromino);
		this.setState({ gridArray: updatedArray });
	};
	moveLeft = () => {
		this.state.tetromino.updatePosition(0, -1);
		let _gridArray = [...this.state.gridArray];
		const updatedArray = arrayUpdater(_gridArray, this.state.tetromino);
		this.setState({ gridArray: updatedArray });
	};
	render() {
		return (
			<Fragment>
				<Grid
					gridArray={this.state.gridArray}
					gridWidth={300}
					gridHeight={600}
				/>
				<Controls
					startGame={this.startGame}
					moveRight={this.moveRight}
					moveLeft={this.moveLeft}
				/>
			</Fragment>
		);
	}
}

export default Game;
