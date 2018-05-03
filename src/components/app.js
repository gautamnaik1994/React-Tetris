import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../styles/app.scss';
import Home from './scenes/Home/Home';
import Game from './scenes/Game/Game';
import Header from './common/Header';

const App = () => (
	<Fragment>
		<Header />
		{process.env.NODE_ENV !== 'production' ? (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/game" component={Game} />
   	</Switch>
		) : <Game /> }
		)}
	</Fragment>
);

export default App;
